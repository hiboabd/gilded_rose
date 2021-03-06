## The Brief

Hi and welcome to team Gilded Rose. As you know, we are a small inn with a prime location in a
prominent city ran by a friendly innkeeper named Allison. We also buy and sell only the finest goods.
Unfortunately, our goods are constantly degrading in quality as they approach their sell by date. We
have a system in place that updates our inventory for us. It was developed by a no-nonsense type named
Leeroy, who has moved on to new adventures. Your task is to add the new feature to our system so that
we can begin selling a new category of items. First an introduction to our system:

	- All items have a SellIn value which denotes the number of days we have to sell the item
	- All items have a Quality value which denotes how valuable the item is
	- At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

	- Once the sell by date has passed, Quality degrades twice as fast
	- The Quality of an item is never negative
	- "Aged Brie" actually increases in Quality the older it gets
	- The Quality of an item is never more than 50
	- "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
	- "Backstage passes", like aged brie, increases in Quality as its SellIn value approaches;
	Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but
	Quality drops to 0 after the concert

We have recently signed a supplier of conjured items. This requires an update to our system:

	- "Conjured" items degrade in Quality twice as fast as normal items

Feel free to make any changes to the UpdateQuality method and add any new code as long as everything
still works correctly. However, do not alter the Item class or Items property as those belong to the
goblin in the corner who will insta-rage and one-shot you as he doesn't believe in shared code
ownership (you can make the UpdateQuality method and Items property static if you like, we'll cover
for you).

Just for clarification, an item can never have its Quality increase above 50, however "Sulfuras" is a
legendary item and as such its Quality is 80 and it never alters.


## Plan

This following section details how I approached this challenge.

I began by ensuring my tests were running by modifying the example spec test and making it pass. I then annotated the original code and tried to gauge once was happening line by line. I realised after this that I still wasn't understanding the rules of the modifying the quality of the items and so I wrote spec tests to help test my understanding.

After I understood the code, I re-read the brief against the code to how the functions could be encapsulated to separate methods/classes as the current code keeps a lot of functionality in one method (updateQuality).

The first section below (List of methods and explanation of their functions) is a reflection of this process and the methods I came up with. I then grouped the methods together and used that to form the basis of my classes. The Class Responsibility Collaborator table is the result of that grouping and my final approach.

## List of methods and explanation of their functions

- LOWER_QUALITY_LIMIT
  * This will be a constant in the Shop class that the quality of an item will be checked against
  * This constant will be set to 0
  * Fulfils the requirement - the Quality of an item is never negative

- UPPER_QUALITY_LIMIT
  * This will be a constant in the Shop class that the quality of an item will be checked against
  * This constant will be set to 50
  * Fulfils the requirement - the Quality of an item is never more than 50

- isqualityLimitExceeded()
  * Returns boolean true if either limit is not met

- updateQuality()
  * Calls the changeQuality method of the QualityUpdater class
  * Always calls the decreaseSellIn() method (below) on the item
  * Returns the items array

- changeQuality()
  * Method of the QualityUpdater class
  * Calls other methods that will update the quality of the item accordingly

- decreaseSellIn()
  * Reduces the sellIn value of the item by 1  

- updateBackstagePassQuality()
  * If sellIn is greater than 10, decrease by 1
  * If sellIn is less than 10 but greater than 5, decrease by 2
  * Else if sellIn is less than 5, decrease by 3
  * Once sell by date passed, reduce quality to 0 (decrease by itself)

- updateAgedBrieQuality()
  * Increases quality by 1

- updateConjuredQuality()
  * Reduces the quality by 2

- updateOtherItemsQuality()
  * Reduces the quality by 1


## Class Responsibility Collaborator

Class        | Methods                  | Instance variables
------------ | -----------------------  | -------------
| Item       |                          | this.name |
|            |                          | this.sellIn |
|            |                          |  this.quality |
| Shop       | updateQuality()          |  this.items |
|            | isqualityLimitExceeded() | this.QualityUpdater |
|            | decreaseSellIn()         |   LOWER_QUALITY_LIMIT|
|            |                          |   UPPER_QUALITY_LIMIT|
| QualityUpdater | changeQuality()      |   |
|                | updateBackstagePassQuality()   | |
|                | updateSulfurasQuality()  | |
|                | updateAgedBrieQuality()  | |
|                | updateConjuredQuality()  | |
|                | updateNormalItemsQuality() | |
