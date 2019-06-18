
//-------------------------------------------------------------------------------------------------- Plain JavaScript

function ShoppingList(){
    this.groceries = [];
}

ShoppingList.prototype.addItem = function(item){
    this.groceries =  this.groceries.concat([item]);
};

ShoppingList.prototype.removeItem = function(item){
    this.groceries =  this.groceries.filter(function (grocery){
        return item !== grocery;
    });
};

var myList = new ShoppingList();

var myList = new ShoppingList();
myList.addItem("Banana");
myList.addItem("apple");
myList.addItem("milk");



console.log(myList.groceries);
myList.removeItem("apple");
console.log(myList.groceries);


//-------------------------------------------------------------------------------------------------- Using Class ES2015


class ShoppingList2 {

    groceries: string[];
    
    constructor() {
        this.groceries = [];
    }

    addItem(item) {
        this.groceries = [...this.groceries, item];
    }

/*
    removeItem(item) {
        this.groceries = this.groceries.filter(function (grocery) {
            return grocery !== item;
        })
    }
*/

// Better Remove function

    removeitem(item) {
            this.groceries = this.groceries.filter((grocery) => grocery !== item)
    }

}

const myShoppingList2 = new ShoppingList2();
myShoppingList2.addItem("Milk");
myShoppingList2.addItem("Banana");
console.log(myShoppingList2.groceries);
myShoppingList2.removeitem("Banana");
console.log(myShoppingList2.groceries);


//-------------------------------------------------------------------------------------------------- Export & Import

// put it in another file named: formatter.ts
export function toUpperCase(str: string){
        return str.toUpperCase();
}

// when yu put it to another file.
// import toUpperCase from './formatter.ts';

let myName:string = "Sagir";
console.log(toUpperCase(myName));
