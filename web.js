let express = require ("express");
const app = express();
app.use(express.static(path.join(__dirname, '/app')));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "app/page.js"));

})

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, "app/page.js"));

})

