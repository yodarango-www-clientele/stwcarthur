const mongoose = require("mongoose");
import Event from "../../db/models/event"

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

export default async function getEvents(req: any, res: any) {

    try {
        const events = await Event.find({}).sort({date: -1}).exec();
        res.json(events)
    } catch (error) {

        console.log(error)
    }
}

