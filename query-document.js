
// select * from customers where _id = 'ridho' and name 'ridho'
db.customers.find(
   {
      _id: "ridho",
      name: "Ridho Surya"
   }
);

// select * from products where price = 2000
db.products.find({
   price: 2000
});

// select * from orders where items.product_id = 1
db.orders.find({
   "items.product_id": 1
});