const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);
mongoose.connection.on('connected', () => console.log('connected'));
const PostsSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    image1: { type: String, required: true },
    image2: { type: String, required: true },
    desc: { type: String, required: true },
    month: { type: String, required: true },
    status: { type: String, required: true },
    name: { type: String, required: true }
}, { timestamps: true });

const Posts = mongoose.model("posts", PostsSchema);

module.exports = {Posts};