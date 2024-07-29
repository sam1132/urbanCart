import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema(
  {
    main: {
      name: { type: String, required: true },
      subCategory: [subCategorySchema],
    },
    men: {
      name: { type: String, required: true },
      subCategory: [subCategorySchema],
    },
    women: {
      name: { type: String, required: true },
      subCategory: [subCategorySchema],
    },
    kids: {
      name: { type: String, required: true },
      subCategory: [subCategorySchema],
    },
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
