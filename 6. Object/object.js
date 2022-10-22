// object in action
// most important data type in js

const  car = {
    color: 'black',
    model: 500,
    start: function(){
        return this.color;
    }
};

console.log(car.start());
console.log(car['model']);
 