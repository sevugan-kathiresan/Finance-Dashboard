import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    price: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    expense: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    transactions: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Transaction"
    }],
}, {timestamps: true, toJSON: {getters: true}});

const Product = mongoose.model("Product", ProductSchema)

export default Product