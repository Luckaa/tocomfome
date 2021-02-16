import { model, Schema } from 'mongoose';

const schema = new Schema(
    {
        name: String,
        imgUrl: String,
    },
    {
        timestamps: true,
    },
);


const CategoryModel = model('Category', schema);
export default CategoryModel;