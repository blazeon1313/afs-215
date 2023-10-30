const Todo = require ("../lib/todo");
const expect = require('chai').expect;

it('expect passing test', function(){
    expect(true).to.equal(true)
})

describe("Testing JS Class ToDO", () => {
// Call the list
    it('can call list', () => {
        expect(list.callList()).to.deep.equal(["Wash Dishes", "Brush Teeth", "Finish Homework"]);
    });

// Add an item to the list
    it('should add item to the list', () => {
        expect(list.addToList("cook dinner")).to.deep.equal(["Wash Dishes", "Brush Teeth", "Finish Homework", "cook dinner"]);
    });
// Add multiple items to the list
    it('should add multiple items to the list', () => {
        expect(list.addMultiple("cook dinner", [9], true)).to.deep.equal(["Wash Dishes", "Brush Teeth", "Finish Homework", "cook dinner", [9], true]);
    });
// Remove the first item from the list
    it("Can remove first item from list", () => {
        expect(list.removeFirst()).to.deep.equal(["Brush Teeth", "Finish Homework"])
    })
// Remove the last item from the list
    it("Can remove last item from list", () => {
        expect(list.removeLast()).to.deep.equal(["Wash Dishes", "Brush Teeth"])
    })
// Remove a specific item from the list
    it("Can remove specific item from list", () => {
        expect(list.removeSecific(1, 1)).to.deep.equal(["Wash Dishes", "Finish Homework"])
    })

    before(function(){
        console.log("----- Test Started ------")
    })

    beforeEach(function(){
        list = new Todo();
        list.addMultiple("Wash Dishes", "Brush Teeth", "Finish Homework")
    })
    
    afterEach(function(){
        console.log("----- Passed -----")
    })

    after(function(){
        console.log("----- Test Completed -----")
    })
})

