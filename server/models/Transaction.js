import mongoose from "mongoose";

const Schema = mongoose.Schema;

const TransactionSchema = new Schema({
    buyer: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    productIds: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
}, {timestamps: true, toJSON: {getters: true}});

const Transaction = mongoose.model("Transaction", TransactionSchema)

export default Transaction 