const mongoose = require("mongoose");

const TransactionSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    details:{
        stockName: String,
        quantity: Number,
        totalAmount: Number,
        date: { type: Date, default: Date.now }
    },
  });
  
module.exports = mongoose.model("Transaction", TransactionSchema);