const mongoCollections = require('../config/mongoCollections'); //This needs to be changed to whatever path we are holding the mongoDB
let { ObjectId } = require('mongodb');
const users = mongoCollections.users;
const workouts = mongoCollections.workouts;

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
 * First of all, not positive this code works because 
 * I forget how to get object parameter boys so I literally
 * Just wrote code.
 * @param {array of exercise objects} array 
 */
function checkExercises(array) {
    let tf = true;
    array.forEach((element) => {
        if (!array.name || !array.muscleGroup) tf = false; //check to make sure it has both fields
    })
    return tf;
}
/**
 * 
 * @param {array of objects} exercises 
 * @param {boolean} isFavorited 
 * @param {date} onComplete 
 * @param {ObjectID} userId 
 */
async function create(exercises, isFavorited, onComplete, userId) {
    //need to do error checking, lazy at the moment
    if (!checkExercises(exercises)) throw "exercises is not in the correct format";
    checkString(array.name);
    checkString(array.muscleGroup);
    if (typeof isFavorited !== 'boolean') throw "isFavorited is not of type boolean";
    //date check
    //will also need to check for userID being real

    /** Creation of the new workout in database */
    const workoutCollection = await workouts();
    const newWorkout = {
        exercises,
        isFavorited,
        onComplete,
        userId
    }
    const insertInfo = await workoutCollection.insertOne(newWorkout);
    if (insertInfo.insertedCount === 0) throw "The workout could not be added";
    const newID = insertInfo.insertedId+""; //string format of ObjectID
    return newID;
}

module.exports = {
    create
}