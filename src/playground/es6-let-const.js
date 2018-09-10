var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet)

const nameConst = 'Frank';
console.log('nam eConst', nameConst);

// Block Scoping

var fullName = 'Yash Kumar';

if(fullName){
    let firstName = fullName.split(' ')[0];
    console.log(firstName);
}
console.log(firstName);