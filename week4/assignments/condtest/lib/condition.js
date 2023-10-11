function cond(num){
    if (num % 3 == 0 && num % 7 == 0){
        return "Good Evening"
    }
    else if (typeof num != 'number'){
        return 'Not a valid number'
    }
    else if (num === 1){
        return "1"
    }
    else if (num === 2){
        return "2"
    }
    else if (num % 3 == 0){
        return "Good Morning"
    }
    else if (num % 7 == 0){
        return "Good Afternoon"
    }
    else if (num === 3){
        return "Good Morning"
    }
    else if (num === 7){
        return "Good Afternoon"
    }
    else if (num % 3 != 0 || num % 7 != 0){
        return num.toString()
    }
}

module.exports = cond 