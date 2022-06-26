

// select * from products where price > 10000000
db.products.find({
   $expr: {
      $gt: ["price", 10000000]
   }
});

// select * from customers where toUpper(_id) = 'RIDHO'
db.customers.find({
   $expr: {
      $eq: [
            {$toUpper: "$_id"},
            "RIDHO"
      ]
   }
});

// select * from products where name is not null and category is not null
db.products.find({
   $jsonSchema: {
      required: ["name", "category"]
   }
});

db.products.find({
   $jsonSchema: {
      required: ["name"],
      properties: {
         name: {
            bsonType: "string"
         },
         price: {
            bsonType: "long"
         }
      }
   }
});

// syntax mod
// select * from products where price % 5 = 0
db.products.find({
   price: {
      $mod: [5, 0]
   }
});

// syntax regex
// select * from products where name like "%mie%"
db.products.find({
   name: {
      $regex: /mie/,
      $options: "i"
   }
});

// select * from products where name like "%Mie%"
db.products.find({
   name: {
      $regex: /^Mie/,
   }
});