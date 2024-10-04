const mongoose = require("mongoose");
mongoose.connect(`mongodb://localhost:27017/userdetails`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    gender: String
})

module.exports = mongoose.model("user", userSchema);