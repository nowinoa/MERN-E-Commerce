import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Order from "./models/orderModel.js";
import Product from "./models/productModel.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);

    const adminUser = createdUsers[0]._id; //because we know that
    // the first user will be the admin, but this search should be done by attr admin

    // with this we will create an array that returns the
    // product fields, and sets the user to admin id (this is to set up ownership)
    const sampleProducts = products.map((p) => {
      return {
        ...p,
        user: adminUser,
      };
    });

    // then we insert all the products in the collection
    // user: admin, name: p.name, image: p.image ...
    await Product.insertMany(sampleProducts);

    console.log("Data imported!".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};


// we will run this as node backend/seeder -d to delete and
// node backend/seeder to add data
// process.argv[2] retrieves the second argument of the comand, 
// in this case [1] is backend/seeder
// we did this set up on the package.json scripts
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
