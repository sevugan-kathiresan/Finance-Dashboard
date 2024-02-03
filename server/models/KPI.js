import mongoose from "mongoose";

const Schema = mongoose.Schema;

const monthSchema = new Schema({
    month: String,
    revenue: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    expenses: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    operationalExpenses: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    nonOperationalExpenses: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
}, {toJSON: {getters: true}});

const daySchema = new Schema({
    date: String,
    revenue: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    expenses: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
}, {toJSON: {getters: true}});

const KPISchema = new Schema({
    totalProfit: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    totalRevenue: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    totalExpenses: {
        type: Number,
        get: (value) => value.toFixed(2),
        set: (value) => parseFloat(value.replace('$', ''))
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: Number,
            set: (value) => parseFloat(value.replace('$', ''))
        }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema]
}, {timestamps: true, toJSON: {getters: true}});

const KPI = mongoose.model("KPI", KPISchema)

export default KPI