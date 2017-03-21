(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListController1', ShoppingListController1)
.controller('ShoppingListController2', ShoppingListController2)
.factory('ShoppingListFactory', ShoppingListFactory);

ShoppingListController1.$inject = ['ShoppingListFactory'];
function ShoppingListController1(ShoppingListFactory) {
  var list1 = this;

  var serviceList = ShoppingListFactory();

  list1.items = serviceList.getItems();

  list1.itemName = "";
  list1.itemQuantity = "";

  list1.addItem = function () {
    serviceList.addItem(list1.itemName, list1.itemQuantity);
  }

  list1.removeItem = function (indexItem) {
    serviceList.removeItem(indexItem);
  }
}

ShoppingListController2.$inject = ['ShoppingListFactory'];
function ShoppingListController2(ShoppingListFactory) {
  var list2 = this;

  var serviceList = ShoppingListFactory(2);

  list2.items = serviceList.getItems();

  list2.itemName = "";
  list2.itemQuantity = "";

  list2.addItem = function () {
    try {
      serviceList.addItem(list2.itemName, list2.itemQuantity);
    } catch (e) {
      list2.errorMessage = e.message;
    }

  }

  list2.removeItem = function (indexItem) {
    serviceList.removeItem(indexItem);
  }
}

function ShoppingListService(maxItems) {
  var service = this;
  // List of shopping items
  var items = [];
  service.addItem = function (itemName, quantity) {
    if (  (maxItems === undefined) ||
          (maxItems !== undefined && items.length < maxItems)){

        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
  } else {
    throw new Error("Max items = "+ maxItems + " reached") ;
  }
  };
  service.removeItem = function (indexItem) {
    items.splice(indexItem,1);
  };
  service.getItems = function () {
    return items;
  };
}

function ShoppingListFactory( ){
  var factory = function (maxItems) {
    return new ShoppingListService(maxItems);
  };
  return factory;
}




})();
