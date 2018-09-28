
//function parameter types
var num: number = 123;
function identity(num: number): number {
    return num;
}

//primitve types
var num: number;
var str: string;
var bool: boolean;

num = 123;
num = 123.456;
num = '123'; // Error

str = '123';
str = 123; // Error

bool = true;
bool = false;
bool = 'false'; // Error

//typed arrays
var boolArray: boolean[];

boolArray = [true, false];
console.log(boolArray[0]); // true
console.log(boolArray.length); // 2
boolArray[1] = true;
boolArray = [false, false];

boolArray[0] = 'false'; // Error!
boolArray = 'false'; // Error!
boolArray = [true, 'false']; // Error!

//interfaces
interface Name {
    first: string;
    second: string;
}

var name1: Name;
name1 = {
    first: 'John',
    second: 'Doe'
};

name1 = {           // Error : `second` is missing
    first: 'John'
};
name1 = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};

//inline type annotation - aka type without a name
var nameT: {
    first: string;
    second: string;
};
nameT = {
    first: 'John',
    second: 'Doe'
};

nameT = {           // Error : `second` is missing
    first: 'John'
};
nameT = {           // Error : `second` is the wrong type
    first: 'John',
    second: 1337
};