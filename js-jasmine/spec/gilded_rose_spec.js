var {Shop, Item} = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {
  var gildedRose
  var agedBrie
  var sulfuras
  var backstagePass
  var backstagePass2
  var backstagePass3
  var testItem
  var rottenItem
  var poorQualityItem
  var highQualityItem

  beforeEach(() => {
    agedBrie = new Item("Aged Brie", 30, 10);
    sulfuras = new Item("Sulfuras, Hand of Ragnaros", 30, 10);
    backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
    backstagePass2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
    backstagePass3 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10);
    rottenItem = new Item("rottenItem", 0, 10);
    poorQualityItem  = new Item("poorQualityItem", 30, -10);
    highQualityItem = new Item("highQualityItem", 30, 60);
    testItem = new Item("Test item", 30, 10);
    gildedRose = new Shop([testItem, agedBrie, sulfuras, backstagePass, backstagePass2, backstagePass3, rottenItem, poorQualityItem, highQualityItem]);
  });

  it('Shop has list of special items', () => {
    expect(gildedRose.specialItems).toEqual(['Sulfuras, Hand of Ragnaros', 'Aged Brie', 'Backstage passes to a TAFKAL80ETC concert'])
  });

  describe('decreaseSellIn', () => {
    it('decreases sell in of non sulfuras item by 1', () => {
      gildedRose.decreaseSellIn(testItem)
      gildedRose.decreaseSellIn(agedBrie)
      gildedRose.decreaseSellIn(backstagePass)
      expect(testItem.sellIn).toEqual(29)

    })

    it('does not change sell in of sulfuras item', () => {
      gildedRose.decreaseSellIn(sulfuras)
      expect(testItem.sellIn).toEqual(30)
    })
  });

  describe('isqualityLimitExceeded', () => {
    it('returns true if lower limit has been exceeded', () => {
      expect(gildedRose.isqualityLimitExceeded(poorQualityItem)).toEqual(true)
    });
    it('returns true if lower limit has been exceeded', () => {
      expect(gildedRose.isqualityLimitExceeded(highQualityItem)).toEqual(true)
    })
    it('returns false if neither limit has been exceeded', () => {
      expect(gildedRose.isqualityLimitExceeded(testItem)).toEqual(false)
    })
  });

  describe('updateAgedBrieQuality', () => {
    it('increases quality by 1', () => {
      gildedRose.updateAgedBrieQuality(agedBrie)
      expect(agedBrie.quality).toEqual(11)
    });
  });

  describe('updateOtherItemsQuality', () => {
    it('decreases quality by 1', () => {
      gildedRose.updateOtherItemsQuality(testItem)
      expect(testItem.quality).toEqual(9)
    });
  });

  it("Test item quality decreases by 1 to 9 ", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[0].name).toEqual("Test item");
    expect(itemsBefore[0].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[0].name).toEqual("Test item");
    expect(itemsAfter[0].quality).toEqual(9);
  });

  it("Aged Brie quality increases by 1 to 11 ", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[1].name).toEqual("Aged Brie");
    expect(itemsBefore[1].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[1].name).toEqual("Aged Brie");
    expect(itemsAfter[1].quality).toEqual(11);
  });

  it("Sulfuras quality does not change", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[2].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(itemsBefore[2].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[2].name).toEqual("Sulfuras, Hand of Ragnaros");
    expect(itemsAfter[2].quality).toEqual(10);
  });

  it("Backstage pass quality increases by 1 to 11 ", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsBefore[3].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsAfter[3].quality).toEqual(11);
  });

  it("Backstage pass2 quality increases by 2 as sellIn is 10", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsBefore[4].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsAfter[4].quality).toEqual(12);
  });

  it("Backstage pass3 quality increases by 3 as sellIn is 5", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[5].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsBefore[5].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[5].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
    expect(itemsAfter[5].quality).toEqual(13);
  });

  it("Once the sell by date has passed, quality degrades twice as fast", function() {
    const itemsBefore = gildedRose.items
    expect(itemsBefore[6].name).toEqual("rottenItem");
    expect(itemsBefore[6].quality).toEqual(10);

    const itemsAfter = gildedRose.updateQuality();
    expect(itemsAfter[6].name).toEqual("rottenItem");
    expect(itemsAfter[6].quality).toEqual(8);
  });
});
