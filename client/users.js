/**
 * 
 * This file will create a new user and insert the user into our mongo database. 
 * The following functions are created here: create, get, remove, and update
 * 
 */

const mongoCollections = require('../config/mongoCollections'); //This needs to be changed to whatever path we are holding the mongoDB
let { ObjectId } = require('mongodb');
const users = mongoCollections.users;

/**
 * This error checks for undefined types
 * @param {array} array 
 * @returns 
 */
function checkForUndefined(array) {
    let tf = false; 
    array.forEach((element) => {
        if (element === undefined || element === null) tf = true;
    })
    return tf;
}

/**
 * This checks to make sure a string is not just whitespace 
 * @param {string} str 
 */
function checkString(str) {
    if (str.match(/^ *$/) !== null) throw 'The string is just whitespace';
    if (typeof str !== 'string') throw str + " is not of type string";
    if (str === undefined) throw str + " is undefined";
    if (str === null) throw str + " is null";
    if (str.length === 0) throw 'The string has length 0';
}

/**
 * This ensures that the number is above 0 and it is of type number 
 * @param {number} num 
 */
function checkNumber(num) {
    if (num < 0) throw 'The number is less than 0';
    if (typeof num !== 'number') throw "You must input a number";
}

/**
 * This will create the users for our MongoDB database
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} email 
 * @param {string} gender 
 * @param {string} city 
 * @param {number} age 
 * @param {number} weight 
 * @param {number} height 
 * @param {string} goals 
 */
async function create(firstName, lastName, email, gender, city, age, weight, height, goals) {
    /**********ERROR CHECKING*********/
    if (checkForUndefined([firstName, lastName, email, gender, city, age, weight, height, goals])) {
        throw "There is an undefined parameter passed in";
    }
    checkString(firstName);
    checkString(lastName);
    checkString(email);
    checkString(gender);
    checkString(city);
    checkString(goals);
    checkNumber(age);
    checkNumber(weight);
    checkNumber(height);    
    /***END OF ERROR CHECKING */

    /** Creation of the new user in database */
    const userCollection = await users();
    const newUser = {
        firstName,
        lastName,
        email,
        gender,
        city,
        age, 
        weight,
        height,
        goals,
        'workoutIds': []
    }

    const insertInfo = await userCollection.insertOne(newUser);
    if (insertInfo.insertedCount === 0) throw 'The user could not be added';
    const newID = insertInfo.insertedId+"";
    return newID; //returns the ID of the new user in database

}

/**
 * 
 * @param {string} id
 * returns the found user
 */
 async function get(id) {
    checkString(id);
    let val = ObjectId(id).valueOf();
    const userCollection = await users();
    const found = await booksCollection.findOne({_id:val});
    if (!found) throw 'The user with the given ID could not be found';
    found['_id'] = found['_id']+""; //changes from ObjectID to string
    return found;
}

/**
 * Removes the user at the given ID / deletes their account
 * @param {string} id 
 */
async function remove(id) {
    //TO-DO
}

/**
 * 
 * @param {string} id 
 * @param {object} obj 
 */
async function update(id, obj) {
    checkString(id);
    const userCollection = await users();
    const found = await get(id);
    
    //NEED TO ERROR CHECK FOR OBJ
    //check for isEmpty

    //This section will find what will be updated.
    if (obj.firstName) {
        checkString(obj.firstName);
        let firstName = obj.firstName;
    }
    if (obj.lastName) {
        checkString(obj.lastName);
        let lastName = obj.lastName;
    }
    if (obj.email) {
        checkString(obj.email);
        let email = obj.email;
    }
    if (obj.gender) {
        checkString(obj.gender);
        let gender = obj.gender;
    }
    if (obj.city) {
        checkString(obj.city);
        let city = obj.city;
    }
    if (obj.goals) {
        checkString(obj.goals);
        let goals = obj.goals;
    }
    if (obj.age) {
        checkNumber(obj.age);
        let age = obj.age;
    }
    if (obj.weight) {
        checkNumber(obj.weight);
        let weight = obj.weight;
    }
    if (obj.height) {
        checkNumber(obj.height);
        let height = obj.height;
    }

    let updatedUser = {
        "firstName": (!firstName) ? found.firstName : firstName,
        "lastName": (!lastName) ? found.lastName : lastName,
        "email": (!email) ? found.email : email,
        "gender": (!gender) ? found.gender : gender,
        "summary": (!city) ? found.city : city,
        "goals": (!goals) ? found.goals : goals,
        "age": (!age) ? found.age : age,
        "weight": (!weight) ? found.weight : weight,
        "height": (!height) ? found.height : height,
        "workoutIds": found.workoutIds
    }
    let val = ObjectId(id).valueOf();
    const updatedUser = await userCollection.updateOne(
        {_id:id},
        {$set: updatedUser}
    );
    if (!updatedUser.matchedCount && !updatedUser.modifiedCount) throw "Could not update user";
    val = val + "";
    let fin = await this.get(val);
    return fin; //this is returning the updated User

}
module.exports = {
    create,
    get,
    remove,
    update
}