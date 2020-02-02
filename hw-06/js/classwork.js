"use strict";

import country from "./country.js"; // export default  в начале файла country.js

function getCountryByLang(find, allArray) {
  return allArray
    .map(countr => {
      return {
        lan: countr.languages.map(countr => countr.name),
        name: countr.name
      };
    })
    .filter(key => key.lan.includes(find))
    .map(countr => countr.name);
}
function getAverageOfPopulation(allArray) {
  return allArray.reduce(
    (sum, value) => ((sum += value.population), 0) / allArray.length
  );
}
console.log(getCountryByLang("Russian", country));
console.log(getAverageOfPopulation(country));
///////////////////////////////////////////////////////////////////

const storage = {
  _items: [{ label: "item-1" }, { label: "item-2" }],
  get items() {
    return this._items;
  },
  add(item) {
    this._items = [...this._items, item];
  }
};

console.log(storage.items);
storage.add({ label: "item-3" });
console.log(storage.items);
//////////////map/////////////
const numbers = [1, 2, 3, 4, 5];
const dobuled = numbers.map(number => {
  return number * 2;
});
console.log(numbers);
console.log(dobuled);

const products = [
  { id: "id-1", name: "Apples", price: 100, quantity: 50 },
  { id: "id-2", name: "Lemons", price: 130, quantity: 100 },
  { id: "id-3", name: "Oranges", price: 80, quantity: 75 }
];

//const labels = products.map(product => {
//return product.name;
//});
//console.log(labels); // ["Apples", "Lemons", "Oranges"]

const getLabels = products => products.map(product => product.name);
const labels = getLabels(products);
console.log(labels);

const updatedProducts = products.map(product => {
  return {
    ...product, // не изменяя оригинальный массив
    price: (product.price += product.price * 0.1)
  }; // увеличение цены на 10%
});
console.log(updatedProducts); // [110, 143, 88]

const updatedProductsPrice = (products, value) => {
  return products.map(product => {
    return {
      ...product,
      price: (product.price += product.price * value)
    };
  });
};

const updatedProductsPrice = (products, value) =>
  products.map(product => ({
    ...product,
    price: (product.price += product.price * value)
  }));

const updatedProducts = updatedProductsPrice(products, 0.3);
console.log(updatedProducts);

//////////map по условию//////////////
const products = [
  { id: "id-1", name: "Apples", price: 100, quantity: 50 },
  { id: "id-2", name: "Lemons", price: 130, quantity: 100 },
  { id: "id-3", name: "Oranges", price: 80, quantity: 75 }
];
const updateProductQuantity = (products, productId, amount) => {
  return products.map(product => {
    return product.id === productId
      ? { ...product, quantity: product.quantity + amount }
      : product;
  });
};
const updated = updateProductQuantity(products, "id-3", 100);
console.log(updated);

///////////////////filter////////////

const numbers = [1, 2, 3, 4, 5];
const filtered = numbers.filter(number => {
  return number >= 3;
});
console.log(filtered); // [3, 4, 5]

const products = [
  { id: "id-1", name: "Apples", price: 100, quantity: 50 },
  { id: "id-2", name: "Lemons", price: 130, quantity: 100 },
  { id: "id-3", name: "Oranges", price: 80, quantity: 75 }
];

const cheapProducts = products.filter(product => {
  return product.price < 100;
});
console.log(cheapProducts); //[{id: "id-3", name: "Oranges", price: 80, quantity: 75}]

const getProductWithPrice = (product, price) => {
  return products.filter(product => {
    return product.price < price;
  });
};

const cheapProducts = getProductWithPrice(products, 100);
console.log(cheapProducts); //[{id: "id-3", name: "Oranges", price: 80, quantity: 75}]

/////////////////////find///////////////
const products = [
  { id: "id-1", name: "Apples", price: 100, quantity: 50 },
  { id: "id-2", name: "Lemons", price: 130, quantity: 100 },
  { id: "id-3", name: "Oranges", price: 80, quantity: 75 }
];

const product = products.find(product => {
  return product.id === "id-2";
});

console.log(product); //{id: "id-2", name: "Lemons", price: 130, quantity: 100}

const findUserById = (products, id) => {
  return products.find(product => {
    return product.id === id;
  });
};

const product = findUserById(products, "id-2");
console.log(product); //{id: "id-2", name: "Lemons", price: 130, quantity: 100}

///////every//and//some/////////////////////////////
const users = [
  { id: "id-1", name: "Mango", isActive: true },
  { id: "id-2", name: "Jack", isActive: false },
  { id: "id-3", name: "Frank", isActive: false },
  { id: "id-4", name: "Polly", isActive: true }
];

const isAllUserActive = users.every(user => {
  return user.isActive;
});
console.log(isAllUserActive); //false

const isSomeUserActive = users.some(user => {
  return user.isActive;
});
console.log(isSomeUserActive); //true
/////////////////////reduce//////////////////////

const products = [
  { id: "id-1", name: "Apples", price: 100, quantity: 50 },
  { id: "id-2", name: "Lemons", price: 130, quantity: 100 },
  { id: "id-3", name: "Oranges", price: 80, quantity: 75 }
];

const totalQuantity = products.reduce((total, product) => {
  return total + product.quantity;
}, 0);
console.log(totalQuantity);

const tweets = [
  { id: "000", likes: 5, tags: ["js", "nodejs"] },
  { id: "001", likes: 2, tags: ["html", "css"] },
  { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
  { id: "003", likes: 8, tags: ["css", "react"] },
  { id: "004", likes: 0, tags: ["js", "nodejs", "react"] }
];

const tags = tweets.reduce((acc, tweet) => {
  acc.push(...tweet.tags);
  return acc;
}, []);

console.log(tags); //["js".."react"]

//////////////////forEach////////////////////////////
const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 900 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 200 },
  { id: "id-4", tag: "Kiwi", isOnline: true, rank: 100 }
];

players.forEach(player => {
  console.log(player);
});
////////////sort///////////////////////////
const numbers = [5, 2, 1, 4, 3];
const copy = [...numbers];
copy.sort();
console.log(numbers);
console.log(copy);

const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 900 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 200 },
  { id: "id-4", tag: "Kiwi", isOnline: true, rank: 100 }
];
const sortedPlayers = [...players].sort((PlayerA, PlayerB) => {
  return PlayerA.rank - PlayerB.rank; // в порядке возростания
  //return PlayerB.rank - PlayerA.rank; // в порядке убывания
});
console.log(sortedPlayers);
////////////Цепочки методов массива///////////////
const players = [
  { id: "id-1", tag: "Mango", isOnline: true, rank: 800 },
  { id: "id-2", tag: "Poly", isOnline: false, rank: 900 },
  { id: "id-3", tag: "Ajax", isOnline: true, rank: 200 },
  { id: "id-4", tag: "Kiwi", isOnline: true, rank: 100 }
];

const onlinePlayersSorted = players
  .filter(player => player.isOnline)
  .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);
  console.log(onlinePlayersSorted);