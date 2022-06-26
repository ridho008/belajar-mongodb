

// select * from customers where _id = 'ridho'
db.customers.find({
   _id: {
      $eq: "ridho"
   }
});

// select * from products where price = 2000
db.products.find({
   price: {
      $gt: 1000
   }
});

// insert product documents
db.products.insertMany([
   {
      _id: 3,
      name: "Pop Mie Rasa Baso",
      price: new NumberLong(2500),
      category: "food"
   },
   {
      _id: 4,
      name: "Samsung Core 2",
      price: new NumberLong(1800000),
      category: "handphone"
   },
   {
      _id: 5,
      name: "Asus ROG",
      price: new NumberLong(10000000),
      category: "laptop"
   },
]);

// select * from products where category in ('handphone', 'laptop') and price > 5000000
db.products.find({
   category: {
      $in: ["handphone", "laptop"]
   },
   price: {
      $gt: 5000000 
   }
});