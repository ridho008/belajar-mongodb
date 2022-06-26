// insert document customers
db.customers.insertOne({
   _id: "ridho",
   name: "Ridho Surya"
});

// insert document products
db.products.insertMany([
   {
      _id: 1,
      name: "Indomie Kriyuk Pedas",
      price: new NumberLong(2000)
   },
   {
      _id: 2,
      name: "Indomie Kari Ayam",
      price: new NumberLong(2000)
   },
]);

// insert document orders
db.orders.insertOne({
   _id: new ObjectId(),
   total: new NumberLong(8000),
   items: [
         {
            product_id: 1,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
         },
         {
            product_id: 2,
            price: new NumberLong(2000),
            quantity: new NumberInt(2)
         },
   ]
});