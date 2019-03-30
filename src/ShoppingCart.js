class ShoppingCart  {
    constructor() {
        this.items = []
    }

    getItems() {
        return this.items
    }

    addItem(itemName, quantity, price) {
        this.items.push({
            name: itemName,
            quantity: quantity,
            pricePerUnit: price
        })
    }

    clear() {
        this.items = []
    }

    total() {
        // sum of the cost of each cart item. The cost of each item is its
        //`pricePerUnit` multiplied by the `quantity`. **Use `reduce`!**
        return this.items
        //map goes through each item in the shopping cart and multiplies the
        // item's price per unit by the item's quantity. The result is an array
        // of price per item.
            .map(item => item.pricePerUnit * item.quantity)
        // reduce is being called on the result of map. It adds up individual
        // item prices and returns a total
            .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }
}

// module ShoppingCart exports a class:
module.exports = ShoppingCart