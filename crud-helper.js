// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Item = require('./models/item');
const Category = require('./models/category');
const Order = require('./models/order');

// Local variables will come in handy for holding retrieved documents
let user, item, category, order;
let users, items, categories, orders;

async function main() {
    const user = await User.findOne({ name: 'Curtis' });
    const item = await Item.findOne();
    const cart = Order.getCart(user._id);

    // const order = await Order.create({
    //     user,
    //     lineItems: [{ qty: 2, item }],
    // });
    // console.log(order);
    // // console.log(user);
}

main().then(console.log).catch(console.error);
