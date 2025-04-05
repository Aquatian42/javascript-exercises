const sumAll = function(start,end) {
    output = 0
    if (start >= 0 && end >= 0 && Math.round(start) == start && Math.round(end) == end  && typeof(start) == 'number' && typeof(end) == 'number'){
        if (start <= end){
            for (let i = start; i<=end; i++){
                output += i
            }
        }
        else{
            for (let i = end; i <= start; i++){
                output += i
            }
        }
        return output
    }

    else{
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = sumAll;
