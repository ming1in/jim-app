const fs = require('fs');
fs.readFile('exercises.txt',"utf-8",function(err, data){
    //console.log(data);
    const array = data.split("\n").map(function(entry) {
        const [name, category] = entry.split(","); 
        return { name : name.trim(), category : category.trim() };
    })
    //console.log(array);
    fs.writeFile('exercises.json',JSON.stringify(array),function(){});
});