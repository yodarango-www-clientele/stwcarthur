const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema({
  title: String,
  description: String,
  details: String,
  date: Date,
  posted: String,
  url: String,
});

const Event = mongoose.model("event", EventSchema);
export default Event;
