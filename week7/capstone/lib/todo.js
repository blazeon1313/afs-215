class Todo {
    constructor(){
        this.list = [];
    }

    callList() {
        return this.list;
    }

    addToList(item) {
        this.list.push(item);
        return this.list;
    }

    addMultiple(...args){
        this.list = this.list.concat(args);
        return this.list;
    }

    removeFirst(){
        this.list.shift();
        return this.list;
    }

    removeLast(){
        this.list.pop();
        return this.list;
    }

    removeSecific(beg, end){
        this.list.splice(beg, end);
        return this.list;
    }
}

module.exports = Todo