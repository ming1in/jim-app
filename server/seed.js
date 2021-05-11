/**
 * This file intends to populate the Mongo database with 
 * fake users that we can use.
 */

//find out database name

try {
    //note: weight is in KG
    db.inventory.insertMany([
        {firstName: "John", lastName: "Smith", email: "johnsmith@gmail.com", gender: "Male", city: "Hoboken", age: 25, weight: 72, height: 173, goals: "To get toned!"},
        {firstName: "Connie", lastName: "Xu", email: "conunu@gmail.com", gender: "Female", city: "Princeton", age: 21, weight: 56, height: 153, goals: "To get strong!"},
        {firstName: "Megha", lastName: "Mansuria", email: "megzmegz@yahoo.com", gender: "Female", city: "Hoboken", age: 20, weight: 56, height: 143, goals: "To run a marathon!"},
        {firstName: "Aparajita", lastName: "Rana", email: "apuapuapu@hotmail.com", gender: "Female", city: "West Windsor", age: 21, weight: 56, height: 143, goals: "To get strong!"},
        {firstName: "Ming", lastName: "Lin", email: "mingming@yahoo.com", gender: "Male", city: "Jersey City", age: 21, weight: 70, height: 183, goals: "To run a mile!"}

    ])
} catch(e) {
    console.log(e);
}