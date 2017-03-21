(function () {
'use strict';

angular.module('ShoppingListApp', [])
.controller('ShoppingListBuyController', ShoppingListBuyController)
.controller('ShoppingListShowController', ShoppingListShowController)
.service('ShoppingListService', ShoppingListService);

ShoppingListBuyController.$inject = ['ShoppingListService'];
function ShoppingListBuyController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getItems();

  showList.boughtItem = function (indexItem) {
      ShoppingListService.boughtItem(indexItem);
  };
}

ShoppingListShowController.$inject = ['ShoppingListService'];
function ShoppingListShowController(ShoppingListService) {
  var showList = this;

  showList.items = ShoppingListService.getboughtItems();

  showList.removeItem = function (indexItem) {
      ShoppingListService.removeItem(indexItem);
  };
}

function ShoppingListService() {
  var service = this;

  // List of shopping items
  var items = [
    { name: "Donuts", quantity: "20" },
    { name: "Cookies", quantity: "24" },
    { name: "Chocolate", quantity: "5" },
    { name: "Milk", quantity: "2" },
    { name: "tea", quantity: 10 },
    { name: "coffee", quantity: 10 },
    { name: "sugar", quantity: 10 }
  ];

var boughtItems = [];

  service.removeItem = function (indexItem) {
    items.push(boughtItems[indexItem]);
    boughtItems.splice(indexItem,1);
  };

  service.boughtItem = function (indexItem) {
    boughtItems.push(items[indexItem]);
    items.splice(indexItem,1);
  };

  service.getItems = function () {
    return items;
  };

  service.getboughtItems = function () {
    return boughtItems;
  };
}

})();
