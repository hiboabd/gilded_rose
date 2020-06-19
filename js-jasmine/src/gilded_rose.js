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
    this.specialItems = ["Sulfuras, Hand of Ragnaros", "Backstage passes to a TAFKAL80ETC concert", "Aged Brie"]
  }

  decreaseSellIn(item){
    item.sellIn --;
  }

  isqualityLimitExceeded(item){
    if(item.quality <= this.LOWER_QUALITY_LIMIT || item.quality >= this.UPPER_QUALITY_LIMIT){
      return true
    } else {
      return false
    }
  }

  updateAgedBrieQuality(item){
    item.quality ++;
  }

  updateOtherItemsQuality(item){
    item.quality --;
  }

  updateBackstagePassQuality(item){
    if(item.sellIn < 10 && item.sellIn > 5){
      item.quality = item.quality - 2;
    } else if(item.sellIn < 5 && item.sellIn > 0) {
      item.quality = item.quality - 3;
    } else if (item.sellIn < 0) {
      item.quality = item.quality - item.quality;
    } else {
      item.quality = item.quality - 1;
    }
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
        // if the item is not Aged brie or Backstage pass or sulfuras
        if (this.specialItems.includes(this.items[i].name) === false) {
          this.updateOtherItemsQuality(this.items[i])
        } else {
          if(this.items[i].name != 'Sulfuras, Hand of Ragnaros'){
            // increase the quality by itself + 1
            this.updateAgedBrieQuality(this.items[i]);
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
        }
        // if the number of days left to sell the item is less than 0
        if (this.items[i].sellIn < 0) {
          // and the items name is not aged brie, backstage pass or sulfuras
          if (this.specialItems.includes(this.items[i].name) === false) {
              this.items[i].quality = this.items[i].quality - 1;
            } else {
              // decrease the items quality by itself (backstage pass rule)
              this.items[i].quality = this.items[i].quality - this.items[i].quality;
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
