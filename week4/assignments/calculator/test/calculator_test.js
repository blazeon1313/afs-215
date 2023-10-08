const expect = require('chai').expect
const calculator = require('../lib/calculator')



function calculator(num1, num2, operator){
    if (typeof num1 != 'number' || typeof num2 != 'number'){
        return "Not a valid number"
    }

    if (operator === '+'){
        return num1 + num2
    }
    else if (operator === '-'){
        return num1 - num2
    }
    else if (operator === '/'){
        return num1 / num2
    }
    else if (operator === '*'){
        return num1 * num2
    }
}

it('call function', function(){
    expect(calculator()).to.equal('Not a valid number')
})

it('addition', function(){
    expect(calculator(5, 7, "+")).to.equal(12)
})

it('subtraction', function(){
    expect(calculator(48, 10, "-")).to.equal(38)
})

it('division', function(){
    expect(calculator(950, 2, "/")).to.equal(475)
})

it('multiplication', function(){
    expect(calculator(2, 25, "*")).to.equal(50)
})

it('error check', function(){
    expect(calculator('three', 7, "*")).to.equal("Not a valid number")
})