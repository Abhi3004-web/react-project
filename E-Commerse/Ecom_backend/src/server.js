const app = require(".");
const { connectDb } = require("./db")

const PORT = 3000;
app.listen(PORT, async () => {
    await connectDb();
    console.log("ecommerce api listing on PORT : ", PORT);
})