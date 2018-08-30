const mongoose = require('mongoose')
const Customer = require('./models/customer')

//setting up database
mongoose.Promise = global.Promise
const db = mongoose.connect('mongodb://localhost:27017/commandline')

//add customer
const createCustomer = (customer) => {
    Customer.create(customer)
    .then( customer => {
        console.info('You have successfully added new customer')
        //db.close()
    })
}

//find customer
const findCustomer = (name) => {
    //making search case insensitive
    const search = new RegExp(name, 'i')
    Customer.find({$or: [{name:search}, {email:search}]})
    .then( customer => {
        console.info(customer)
        console.info(`${customer.length} matches`)
        //db.close()
    })
}
//update customer
const updateCustomer = (_id, customer) => {
    Customer.update({_id }, customer)
    .then( customer => {
        console.info('You successfully updated customer profile')
    })
}

//delete customer
const deleteCustomer = (_id) => {
    Customer.remove({_id })
    .then( customer => {
        console.info('You successfully delete customer')
    })
}
//list all customers
const allCustomers = () => {
    Customer.find()
    .then( customers => {
        console.info(customers)
        console.info(`${customers.length} customers`)
    })
}
module.exports = {
    findCustomer,
    createCustomer,
    updateCustomer,
    deleteCustomer,
    allCustomers
}