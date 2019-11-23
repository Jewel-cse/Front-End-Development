function Person(name) {
    this.name = name;
    this.greating  = function () {
        alert('Hi! I\'m '+this.name+'.');
    };
}
let p1 = new Person('jewel');
let p2 = Object.create(p1);
//p2.__proto__
p2.greating()