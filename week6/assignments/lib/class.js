class Array{
    constructor() {
        this.array = [];
    }

    add(item) {
        this.array.push(item);
        return this.array
    }

    call() {
        return this.array;
    }

    remove(beg, end){
        this.array.splice(beg, end)
        return this.array
    }

    search(item){
        if (this.array.includes(item)){
            return true
        } 
        else {
            return "That item is not on the list!!"
        }
    }
}

module.exports = Array;