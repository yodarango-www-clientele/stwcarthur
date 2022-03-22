const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  url: String,
});

const Notification = mongoose.model("notification", NotificationSchema);
export default Notification;
