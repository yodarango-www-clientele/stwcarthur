const mongoose = require("mongoose");
import Notification from "../../db/models/notification"

const dbConnection = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGO_DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      });
      console.log(`Successfully connected to ${conn.connection.host}`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
dbConnection();

export async function getNotifications(req: any, res: any) {

    try {
        const notification = await Notification.findOne({})
        res.json(notification)
    } catch (error) {
  
        console.log(error)
    }
  }