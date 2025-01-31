const express = require('express')
const app = express()
require("dotenv").config()
const port = process.env.PORT || 3000;
const { Posts } = require("./conn");
const cors = require('cors')
app.use(cors())
app.get('/all_posts', async (req, res) => {
    let data = await Posts.find();  
    res.json({ data: data, message: "data get successfully " })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})