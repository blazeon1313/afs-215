const expect = require('chai').expect;
const cond = require('../lib/condition')


it('return "1" when passed a "1"', function(){
    expect(cond(1)).to.equal(1)
})

it('return "2" when passed a "2"', function(){
    expect(cond(2)).to.equal(2)
})

it('return "Good Morning" when passed a "3"', function(){
    expect(cond(3)).to.equal('Good Morning')
})

it('return "Good Afternoon" when passed a "7"', function(){
    expect(cond(7)).to.equal('Good Afternoon')
})

it('return "Good Morning" when passed a multiple of 3', function(){
    expect(cond(9)).to.equal('Good Morning')
})

it('return "Good Afternoon" when passed a multiple of 7', function(){
    expect(cond(14)).to.equal("Good Afternoon")
})

it('return "Good Evening" when passed a multiple of 3 and 7', function(){
    expect(cond(21)).to.equal("Good Evening")
})

it('return string for other numbers', function(){
    expect(cond(8)).to.equal('8')
})

it('return other data type error', function(){
    expect(cond('one')).to.equal('Not a valid number')
})