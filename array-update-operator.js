


// update products set ratings = [90, 80, 100]
db.products.updateMany({}, {
   $set: {
      ratings: [90,80,100]
   }
})

// update first element of array, query must include array fields
db.products.updateMany({
   ratings: 90
}, {
   $set: {
      "ratings.$": 1000
   }
})

// update all element of array
// mengupdate semua array menjadi 100
db.products.updateMany({}, {
   $set: {
      "ratings.$[]": 100
   }
})

// update element of array based on arrayFilters
// mengubah array, nilai >80 ubah menjadi 100
db.products.updateMany({}, {
   $set: {
      "ratings.$[element]": 100
   }
}, {
   arrayFilters: [
      {
         element: {
            $gte: 80
         }
      }
   ]
})

// update element of array with given index
// mengubah berdasarkan index array
db.products.updateMany({}, {
   $set: {
      "ratings.0": 50,
      "ratings.1": 56
   }
})