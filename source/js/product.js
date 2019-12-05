// let productHot = document.querySelector(".product__item:nth-child(2)");
// productHot.classList.add("product__item--hot");
// let productNew = document.querySelector(".product__item:nth-child(4)");
// productNew.classList.add("product__item--new");
// let productSale = document.querySelector(".product__item:nth-child(6)");
// productSale.classList.add("product--unavailable");

var catalogData = [
  {
    isHot: false,
    isNew: false,
    isSale: false
  },
  {
    isHot: true,
    isNew: false,
    isSale: false
  },
  {
    isHot: false,
    isNew: false,
    isSale: false,
    isUnavailable: true
  },
  {
    isHot: false,
    isNew: true,
    isSale: false
  },
  {
    isHot: false,
    isNew: false,
    isSale: true
  },
  {
    isHot: false,
    isNew: false,
    isSale: false,
    isUnavailable: true
  },
  {
    isHot: true,
    isNew: true,
    isSale: false
  },
  {
    isHot: false,
    isNew: false,
    isSale: false
  }
];

var updateCards = function(products) {
  var elements = document.querySelectorAll(".product__item");
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var product = products[i];

    if (product.isHot) {
      element.classList.add("product__item--hot");
    }

    if (product.isNew) {
      element.classList.add("product__item--new");
    }

    if (product.isSale) {
      element.classList.add("product__item--sale");
    }

    if (product.isUnavailable) {
      element.classList.add("product__item--unavailable");
    }
  }
};
updateCards(catalogData);
