import burger1 from "./images/burger1.jpg";
import burger2 from "./images/burger2.jpg";
import burger3 from "./images/burger3.jpg";
import burger4 from "./images/burger4.jpg";

import burger5 from "./images/burger5.jpg";
import burger6 from "./images/burger6.jpg";
import burger7 from "./images/burger17.jpg";

import shawram1 from "./images/shawrma1.jpg";
import shawram2 from "./images/shawrma2.jpg";
import shawram3 from "./images/shawrma3.jpg";
import shawram4 from "./images/shawrma4.jpg";
import shawram5 from "./images/shawrma5.jpg";

import shawram7 from "./images/shawrma7.jpg";
import shawram8 from "./images/shawrma8.jpg";
import shawram9 from "./images/shawrma9.jpg";

import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";
import pizza5 from "./images/pizza5.jpg";


import finger1 from "./images/finger1.jpg";
import finger2 from "./images/finger2.jpg";
import finger3 from "./images/finger3.jpg";
import finger4 from "./images/finger5.jpg";
import finger7 from "./images/finger7.jpg";



import salad1 from "./images/salad1.jpg";
import salad2 from "./images/salad2.jpg";
import salad3 from "./images/salad3.jpg";
import salad4 from "./images/salad4.jpg";

import salad5 from "./images/salad5.jpg";
import salad6 from "./images/salad6.jpg";
import salad7 from "./images/salad7.jpg";
import salad8 from "./images/salad8.jpg";
import salad9 from "./images/salad1.jpg";






const MenuItems = [
  {
    id: 1,
    itemId: "buger01",
    name: "Burger",
    imgSrc:burger1,
    },
  {
    id: 2,
    itemId: "shawram01",
    name: "Shawerma",
    imgSrc:shawram1 
   },
  {
    id: 3,
    itemId: "burger03",
    name: "Burger",
    imgSrc:burger3
  
  },
  {
    id: 4,
    itemId: "pizza01",
    name: "Pizza",
    imgSrc:pizza1
  },
  {
    id: 5,
    itemId: "salad01",
    name: "Salad",
    imgSrc:salad1
  },
  {
    id: 6,
    itemId: "pizza03",
    name: "Pizza",
    imgSrc:pizza3
  },
  {
    id: 7,
    itemId: "shawram08",
    name: "Shawerma",
    imgSrc:shawram8
  },
  ,
  {
    id: 8,
    itemId: "finger07",
    name: "Finger",
    imgSrc:finger7
  },
];

const cartItems = [
  {
    id: 1,
    itemId: "buger01",
    imgSrc:burger5, 
    name: "Burger Bistro",
    ratings: 5,
    price: "7.5",
  },
  {
    id: 2,
    itemId: "buger01",
    imgSrc:burger2,
    name: "Double Cheeseburger",
    ratings: 5,
    price: "22",
  },
  {
    id: 3,
    itemId: "buger01",
    imgSrc: burger4,
    name: "Euphoria Burger",
    ratings: 5,
    price: "16",
  },
  {
    id: 4,
    itemId: "buger01",
    imgSrc: burger6, 
    name: "Jack Daniels Burger",
    ratings: 5,
    price: "20",
  },
  {
    id: 5,
    itemId: "buger01",
    imgSrc:burger7,
    name: "Jazz Burger",
    ratings: 5,
    price: "20",
  },
  {
    id: 6,
    itemId: "shawram01",
    imgSrc:shawram2,
    name: "Birria Quesadillas",
    ratings: 5,
    price: "19",
  },
  {
    id: 7,
    itemId: "shawram01",
    imgSrc:shawram3,
    name: "Classic Quesadillas",
    ratings: 5,
    price: "16",
  },
  {
    id: 8,
    itemId: "shawram01",
    imgSrc:shawram4,
    name: "cheesy beef quesadillas",
    ratings: 5,
    price: "22",
  },
  {
    id: 9,
    itemId: "shawram01",
    imgSrc:shawram5,
    name: "Birria Quesadillas ",
    ratings: 5,
    price: "15",
  },
  {
    id: 10,
    itemId: "shawram01",
    imgSrc:shawram7,
    name: "Shawrma crispy chicken",
    ratings: 4,
    price: "18",
  },
  {
    id: 11,
    itemId: "shawram01",
    imgSrc:shawram8,
    name: "Chicken Shawarma",
    ratings: 4,
    price: "14",
  },
  {
    id: 12,
    itemId: "shawram01",
    imgSrc:shawram9,
    name: "Meat shawarma",
    ratings: 4,
    price: "14",
  },
  {
    id: 13,
    itemId: "pizza01",
    imgSrc:pizza1,
    name: "Meat pizza",
    ratings: 4,
    price: "25",
  },
  {
    id: 14,
    itemId: "pizza01",
    imgSrc:pizza2,
    name: "Vegetable pizza",
    ratings: 4,
    price: "20",
  },
  {
    id: 15,
    itemId: "pizza01",
    imgSrc:pizza3,
    name: "Cheese pizza",
    ratings: 4,
    price: "20",
  },
  {
    id: 16,
    itemId: "pizza01",
    imgSrc:pizza4,
    name: "Italian pizza",
    ratings: 4,
    price: "25",
  },
  {
    id: 17,
    itemId: "pizza01",
    imgSrc:pizza5,
    name: "Pepperoni pizza",
    ratings: 4,
    price: "25",
  },
  {
    id: 18,
    itemId: "finger01",
    imgSrc:finger1,
    name: "Crispy Potato Balls",
    ratings: 3,
    price: "10",
  },
  {
    id: 19,
    itemId: "finger01",
    imgSrc:finger2,
    name: "Fingers With Yogurt",
    ratings: 3,
    price: "7.5",
  },
  {
    id: 20,
    itemId: "finger01",
    imgSrc:finger3,
    name: "Crispy Cheese Fingers",
    ratings: 3,
    price: "11",
  },
  {
    id: 21,
    itemId: "finger01",
    imgSrc:finger4,
    name: "Fingers With Sauce",
    ratings: 3,
    price: "9",
  },
  {
    id: 22,
    itemId: "finger01",
    imgSrc:finger7,
    name: "French fries",
    ratings: 3,
    price: "10",
  },
  {
    id: 23,
    itemId: "salad01",
    imgSrc:salad1,
    name: "Salad",
    ratings: 3,
    price: "8",
  },
  {
    id: 24,
    itemId: "salad01",
    imgSrc:salad2,
    name: "Salad",
    ratings: 3,
    price: "9",
  },
  {
    id: 25,
    itemId: "salad01",
    imgSrc:salad3,
    name: "Salad",
    ratings: 4,
    price: "7",
  },
  {
    id: 26,
    itemId: "salad01",
    imgSrc:salad4,
    name: "Snack",
    ratings: 4,
    price: "12",
  },
  {
    id: 27,
    itemId: "salad01",
    imgSrc:salad5,
    name: "Snack",
    ratings: 4,
    price: "10",
  },
  {
    id: 28,
    itemId: "salad01",
    imgSrc:salad6,
    name: "Snack",
    ratings: 4,
    price: "9",
  },
  {
    id: 29,
    itemId: "salad01",
    imgSrc:salad6,
    name: "Snack",
    ratings: 4,
    price: "16",
  },
  {
    id: 30,
    itemId: "salad01",
    imgSrc:salad7,
    name: "Snack",
    ratings: 4,
    price: "14",
  },
  {
    id: 31,
    itemId: "salad01",
    imgSrc:salad8,
    name: "Snack",
    ratings: 4,
    price: "10",
  },
  {
    id: 32,
    itemId: "salad01",
    imgSrc:salad9,
    name: "Snack",
    ratings: 4,
    price: "10",
  },
];

export { MenuItems, cartItems };
