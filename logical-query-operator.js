

// select * from products where category in ('laptop', 'handphone') and price > 20000000
db.products.find({
   $and: [
         {
            category: {
               $in: ["laptop", "handphone"]
            }
         },
         {
            price: {
               $gte: 10000000
            }
         }
   ]
});

// select * from products where category not in ('laptop', 'handphone')
// mencari products yang didalamnya tidak ada categori laptop dan handphone
db.products.find({
   category: {
      $not: {
         $in: ["laptop", "handphone"]
      }
   }
});

// select * from products where price between 1000000 and 9000000 and category != 'food'
db.products.find({
   $and: [
         {
            price: {
               $gte: 1000000,
               $lte: 9000000
            }
         },
         {
            category: {
               $ne: 'food'
            }
         }
   ]
});