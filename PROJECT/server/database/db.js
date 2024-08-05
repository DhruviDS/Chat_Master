import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = async () => {
  const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.yueext4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
  // const URL = `mongodb+srv://${USERNAME}:${PASSWORD}@chat-project.ofnnt6x.mongodb.net/?retryWrites=true&w=majority&appName=chat-project`;
  try {
    await mongoose.connect(URL);
    console.log("Database Connected Succesfully");
  } catch (error) {
    console.log("Error: ", error.message);
  }
};
export default Connection;
