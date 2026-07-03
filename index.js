const express = require("express");
require("dotenv").config();

const router = require("./routers/client/index.route");
const app = express();
const port = process.env.PORT;
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.static("public"));
router(app);


app.listen(port, ()=>{
    console.log(`app listen at prot ${port}`);
})

