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
    if(item.sellIn < 0){
      item.quality = item.quality - item.quality;
    } else if(item.sellIn < 5){
      item.quality = item.quality + 3;
    } else if(item.sellIn < 10){
      item.quality = item.quality + 2;
    } else {
      item.quality = item.quality + 1;
    }
  }

  updateQuality() {
    this.items.forEach((item, i) => {
      if (item.name !== this.specialItems[0]) {
        this.decreaseSellIn(item)
      }

      if(this.isqualityLimitExceeded(item) === false){
        if (this.specialItems.includes(item.name) === false) {
          this.updateOtherItemsQuality(item)
          if (item.sellIn < 0) {
            this.updateOtherItemsQuality(item)
          }
        }

        if(item.name === this.specialItems[2]){
            this.updateAgedBrieQuality(item);
        }

        if(item.name === this.specialItems[1]){
          this.updateBackstagePassQuality(item);
        }
      }
    });
    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
