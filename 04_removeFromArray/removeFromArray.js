const removeFromArray = function(list,...toRemove) {
    let output = []
    for (listItem of list){
      let addItem = true;
        for (item of toRemove){
            if (item === listItem){
                addItem = false
            }
        }
        if (addItem){
            output.push(listItem)
        }
        
    }
    return output
};

// Do not edit below this line
module.exports = removeFromArray;
