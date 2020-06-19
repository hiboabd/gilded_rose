// var {Shop} = require('../src/shop.js');
// var {Item} = require('../src/item.js');
//
// describe("Gilded Rose", function() {
//   var gildedRose
//   var agedBrie
//   var sulfuras
//   var backstagePass
//   var backstagePass2
//   var backstagePass3
//   var testItem
//   var rottenItem
//   var poorQualityItem
//   var highQualityItem
//
//   beforeEach(() => {
//     agedBrie = new Item("Aged Brie", 30, 10);
//     sulfuras = new Item("Sulfuras, Hand of Ragnaros", 30, 10);
//     backstagePass = new Item("Backstage passes to a TAFKAL80ETC concert", 30, 10);
//     backstagePass2 = new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10);
//     backstagePass3 = new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10);
//     rottenItem = new Item("rottenItem", 0, 10);
//     poorQualityItem  = new Item("poorQualityItem", 30, -10);
//     highQualityItem = new Item("highQualityItem", 30, 60);
//     testItem = new Item("Test item", 30, 10);
//     gildedRose = new Shop(50, 0, [testItem, agedBrie, sulfuras, backstagePass, backstagePass2, backstagePass3, rottenItem, poorQualityItem, highQualityItem]);
//   });
//
//   it("Shop has upper quality limit", function() {
//     expect(gildedRose.UPPER_QUALITY_LIMIT).toEqual(50)
//   });
//
//   it("Shop has lower quality limit", function() {
//     expect(gildedRose.LOWER_QUALITY_LIMIT).toEqual(0)
//   });
//
//   it("Test item quality decreases by 1 to 9 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[0].name).toEqual("Test item");
//     expect(itemsBefore[0].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[0].name).toEqual("Test item");
//     expect(itemsAfter[0].quality).toEqual(9);
//   });
//
//   it("Test item sellIn decreases by 1 to 29 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[0].name).toEqual("Test item");
//     expect(itemsBefore[0].sellIn).toEqual(30);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[0].name).toEqual("Test item");
//     expect(itemsAfter[0].sellIn).toEqual(29);
//   });
//
//   it("Aged Brie quality increases by 1 to 11 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[1].name).toEqual("Aged Brie");
//     expect(itemsBefore[1].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[1].name).toEqual("Aged Brie");
//     expect(itemsAfter[1].quality).toEqual(11);
//   });
//
//   it("Aged Brie sellIn decreases by 1 to 29 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[1].name).toEqual("Aged Brie");
//     expect(itemsBefore[1].sellIn).toEqual(30);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[1].name).toEqual("Aged Brie");
//     expect(itemsAfter[1].sellIn).toEqual(29);
//   });
//
//   it("Sulfuras quality does not change", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[2].name).toEqual("Sulfuras, Hand of Ragnaros");
//     expect(itemsBefore[2].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[2].name).toEqual("Sulfuras, Hand of Ragnaros");
//     expect(itemsAfter[2].quality).toEqual(10);
//   });
//
//   it("Sulfuras sellIn does not change ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[2].name).toEqual("Sulfuras, Hand of Ragnaros");
//     expect(itemsBefore[2].sellIn).toEqual(30);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[2].name).toEqual("Sulfuras, Hand of Ragnaros");
//     expect(itemsAfter[2].sellIn).toEqual(30);
//   });
//
//   it("Backstage pass quality increases by 1 to 11 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsBefore[3].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsAfter[3].quality).toEqual(11);
//   });
//
//   it("Backstage pass sellIn decreases by 1 to 29 ", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsBefore[3].sellIn).toEqual(30);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[3].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsAfter[3].sellIn).toEqual(29);
//   });
//
//   it("Backstage pass2 quality increases by 2 as sellIn is 10", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsBefore[4].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[4].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsAfter[4].quality).toEqual(12);
//   });
//
//   it("Backstage pass3 quality increases by 3 as sellIn is 5", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[5].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsBefore[5].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[5].name).toEqual("Backstage passes to a TAFKAL80ETC concert");
//     expect(itemsAfter[5].quality).toEqual(13);
//   });
//
//   it("Once the sell by date has passed, quality degrades twice as fast", function() {
//     const itemsBefore = gildedRose.items
//     expect(itemsBefore[6].name).toEqual("rottenItem");
//     expect(itemsBefore[6].quality).toEqual(10);
//
//     const itemsAfter = gildedRose.updateQuality();
//     expect(itemsAfter[6].name).toEqual("rottenItem");
//     expect(itemsAfter[6].quality).toEqual(8);
//   });
// });
