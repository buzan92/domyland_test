import mongoose from "mongoose";

const Schema = mongoose.Schema;

const feedSchema = new Schema({
  title: { type: String, required: true },
  createDate: { type: Date, default: Date.now },
  content: { type: String, required: true },
  image: { type: String, required: false },
  creator: { type: Schema.Types.ObjectId, required: true, ref: "user" }
});

const Feed = mongoose.model("feed", feedSchema, "feed");

export default Feed;
