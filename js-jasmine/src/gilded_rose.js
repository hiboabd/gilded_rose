class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
    this.UPPER_QUALITY_LIMIT = 50;
    this.LOWER_QUALITY_LIMIT = 0;
  }

  decreaseSellIn(item){
    item.sellIn = item.sellIn - 1;
  }

  isqualityLimitExceeded(item){
    if(item.quality <= this.LOWER_QUALITY_LIMIT || item.quality >= this.UPPER_QUALITY_LIMIT){
      return true
    } else {
      return false
    }
  }

  updateAgedBrieQuality(item){
    item.quality = item.quality + 1;
  }

  updateQuality() {
    // looping over the list of shop items starting from beginning to end
    for (var i = 0; i < this.items.length; i++) {
      // if the items name is not sulfuras hand of ragnaros
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        // decrease the number of days left to sell the item by 1
        this.decreaseSellIn(this.items[i])
      }

      // if the items quality is between the limits

      if(this.isqualityLimitExceeded(this.items[i]) === false){
        // if the item is not Aged brie and Backstage pass (should be or)
        if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          // if the items name is Sulfuras, hand of ragnaros
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            // decrease the quality of the item by itself minus 1
            this.items[i].quality = this.items[i].quality - 1;
          }
        } else {
          // increase the quality by itself + 1
          this.items[i].quality = this.items[i].quality + 1;
          // if the items name is backstage pass
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            // if the number of days left to sell the item is less than 11
            if (this.items[i].sellIn < 11) {
              // increase the quality of the item by itself + 1
              this.items[i].quality = this.items[i].quality + 1;
            }
            // if the number of days left to sell the item is less than 6
            if (this.items[i].sellIn < 6) {
              // increase the quality of the item by itself + 1
              this.items[i].quality = this.items[i].quality + 1;
            }
          }
        }
        // if the number of days left to sell the item is less than 0
        if (this.items[i].sellIn < 0) {
          // and the items name is not aged brie
          if (this.items[i].name != 'Aged Brie') {
            // and the items name is not backstage pass
            if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
              // and the items name is not equal to sulfuras, hand of ragnaros
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                // decrease the items quality by itself - 1
                this.items[i].quality = this.items[i].quality - 1;
              }
            } else {
              // decrease the items quality by itself
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
            }
          } else {
            // increase the items quality by itself + 1
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    // return the array of items
    return this.items;
  }
}
module.exports = {
  Item,
  Shop
}
