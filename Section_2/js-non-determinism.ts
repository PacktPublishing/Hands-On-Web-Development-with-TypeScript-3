//weird comparison
console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error

console.log("" == "0"); // false
console.log(0 == ""); // true

console.log("" === "0"); // false
console.log(0 === ""); // false

console.log({a:123} == {a:123}); // False
console.log({a:123} === {a:123}); // False


//bad mutations
var foo = {};
var bar = foo; // bar is a reference to the same object

foo.baz = 123;
console.log(bar.baz); // 123

//need to hande null and undefined

/// Imagine you are doing `foo.bar == undefined` where bar can be one of:
console.log(undefined == undefined); // true
console.log(null == undefined); // true

// You don't have to worry about falsy values making through this check
console.log(0 == undefined); // false
console.log('' == undefined); // false
console.log(false == undefined); // false

