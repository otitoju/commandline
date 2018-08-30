#!/usr/bin/env node
const program = require('commander')
const { findCustomer, createCustomer,updateCustomer,
    deleteCustomer,
    allCustomers } = require('./app')
const { prompt } = require('inquirer')

program
.version('1.0.0')
.description('Oluwapelumi database manage system')

//using inquirer to ask question from customer
const questions = [
    {
        type:'input',
        name:'name',
        message:'Please enter your full name'
    },
    {
        type:'input',
        name:'email',
        message:'Please enter your email address'
    },
    {
        type:'input',
        name:'phone',
        message:'Please enter your phone number'
    },
    {
        type:'input',
        name:'gender',
        message:'Please enter your gender'
    }
]

//adding customer command
program
    .command('add')
    .alias('a')
    .description('Add a new customer')
    .action( ()=>{
        prompt(questions)
        .then( answers => {
            createCustomer(answers)
        })
    })

//finding customer command
program
    .command('find <name>')
    .alias('f')
    .description('find a customer')
    .action( (name)=> {
        findCustomer(name)
    })

//update customer
program
    .command('update <_id>')
    .alias('u')
    .description('Update customer profile')
    .action( (_id) => {
        prompt(questions)
            .then(answers => {
                updateCustomer(_id, answers)
            })
    })
// delete customer
program
    .command('remove <_id>')
    .alias('r')
    .description('remove a customer ')
    .action( (_id) => {
        deleteCustomer(_id)
    })
//list all customers
program
    .command('list')
    .alias('l')
    .description('list of customers')
    .action( () => {
        allCustomers()
    })
program.parse(process.argv)