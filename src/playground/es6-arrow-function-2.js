// arguments object - no longer bound with arrow functions
const add = (a,b) => a+b;

console.log(add(55,1));

const user ={
    name:'Andrew',
    cities:['Philly', 'New York', 'Dublin'],
    printPlaceLived() {
        const cityMessages = this.cities.map((city)=> {
            return city + '!';
        });
        return cityMessages;
    }
};
user.printPlaceLived();

const multiplier = {
    // numbers - array of numbers
    // multiplyBy - single number
    // multiply - return a new array where the number have been multiplied
    numbers: [1,2,3],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((n) => n*this.multiplyBy);
        }
};

console.log(multiplier.multiply());