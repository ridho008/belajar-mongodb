

// alter table customers change name fullname
db.customers.updateMany({}, {
   $rename: {
      name: "fullname"
   }
})

// update products set stock = stock + 10
db.products.updateMany({
   _id : 1
}, {
   $inc: {
      stock: -1
   }
})
      // stock: 10

// update products set lastModifierDate = current_date()
// jamnya berdasarkan UTC
db.products.updateMany({}, {
   $currentDate: {
      lastModifierDate: {
         $type: "date"
      }
   }
})