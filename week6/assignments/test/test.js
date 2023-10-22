const Array = require ("../lib/class");
const expect = require('chai').expect;

    it('expect passing test', function(){
        expect(true).to.equal(false)
    })
describe("Testing JS Class Array", () => {
    // it('expect passing test', function(){
    //     expect(true).to.equal(true)
    // })

// 1. Add an item of any data type to the array.
    it('should add data to the array', () => {
        // array = new Array();
        // array.add("apple")
        // array.add("banana")
        expect(array.add("pizza")).to.deep.equal(["apple", "banana", "pizza"]);
    });

// 2. Call the array.
    it('can call array', () => {
        // array = new Array();
        // array.add("apple")
        // array.add("banana")
        expect(array.call()).to.deep.equal(["apple", "banana"]);
    });

// 3. Remove specific items from the array.
    it("Can remove specific item from array", () => {
        // array = new Array();
        // array.add("pizza")
        // array.add("apple")
        // array.add("banana")
        expect(array.remove(0, 1)).to.deep.equal(["banana"])
    })

// 4. Search the array for a specific item. 
//    If the item exists, return true(boolean). 
//    If not, provide an error message
    it("can search for a specific item", () => {
        // array = new Array();
        // array.add("pizza")
        // array.add("apple")
        // array.add("banana")
        expect(array.search("chocolate")).to.equal("That item is not on the list!!")
        expect(array.search("apple")).to.equal(true)
    });

    beforeEach(function(){
        array = new Array()
        array.add("apple")
        array.add("banana")
    })

    before(function(){
        console.log("--Starting the test!!--")
    })

    after(function(){
        console.log("--Testing has finished!!--")
    })

    afterEach(function(){
        console.log("Test has passed!!")
    })
})
