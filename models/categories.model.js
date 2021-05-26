const mongoose = require('mongoose');
const { categoriesDB } = require("./../data");
const { Schema } = mongoose;

const CategorySchema = new Schema({
  createdAt: Number,
  updatedAt: Number,
  name: {
    type: String,
    trim: true,
    required: [true, 'Category Name is required'],
    unique: 'Category Name should be unique'
  },
  noOfQuizzes: {
    type: Number,
    trim: true
  },
  thumbnail: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
}, {
    timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
  });

const Category = mongoose.model('Category', CategorySchema);

// const addCategoryData = async (categoriesDB) => {
//   // try {
//   //   await Category.insertMany(categoriesDB);
//   // }
//   // catch (error) {
//   //   console.log(error)
//   // }
//   OR
//   Category.insertMany(categoriesDB, function(error, docs) {
//     console.log(error);
//   });
// }

const addCategoryData = async () => {
  categoriesDB.forEach(async (category) => {
    const NewCategory = new Category(category);
    const savedCategory = await NewCategory.save();
    console.log(savedCategory);
  })
}

module.exports = { Category, addCategoryData };