// select _id, name, category from procuts
db.products.find({}, {
   name: 1,
   category: 1
})

// select _id, name, category, price from products
// pilih semua field, kecuali tags
db.products.find({}, {
   tags: 0
})

db.products.find({
   tags: {
      $elemMatch: {
         $in: ["samsung", "logitech"]
      }
   }
}, {
   name: 1,
   category: 1,
   price: 1,
   "tags.$": 1
})

// select _id, name, category, price, tags(in ("samsung", "logitech")) from products
db.products.find({}, {
   name: 1,
   category: 1,
   price: 1,
   tags: {
      $elemMatch: {
         $in: ["samsung", "logitech"]
      }
   }
})

// select * from products where $search like "monitor"
db.products.find({
   $text: {
      $search: "monitor"
   }
}, {
   score: {
      $meta: "textScore"
   }
})

// select _id, name, price, category, tags[0, 2] from products
// mengambil tags awalan
db.products.find({}, {
   tags: {
      $slice: 2
   }
})

// select _id, name, price, category, tags(last 2) from products
// mengambil tags akhiran
db.products.find({}, {
   tags: {
      $slice: -2
   }
})

// select _id, name, price, category, tags[from, limit] from products
// mengambil ditengah
db.products.find({}, {
   tags: {
      $slice: [1,1]
   }
})