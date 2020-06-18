var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  var gildedRose

  beforeEach(() => {
    gildedRose = new Shop([ new Item("Test item", 0, 0) ]);
  });

  it("should foo", function() {
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Test item");
  });

});
