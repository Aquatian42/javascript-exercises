const reverseString = function(stringInput) {
    let output = "";
    for (let i = stringInput.length -1; i >= 0;i--){
        output += stringInput[i]
    }
    return output
};

// Do not edit below this line
module.exports = reverseString;
