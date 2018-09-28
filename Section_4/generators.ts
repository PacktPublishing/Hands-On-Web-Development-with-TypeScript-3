function* generator(){
    console.log('before generated first ad');
    yield 0;
    console.log('generating first ad');
    yield 1;
    console.log('generating second ad');
}

var iterator = generator();
console.log('Starting iteration'); // This will execute before anything in the generator function body executes
console.log(iterator.next()); // { value: 0, done: false }
console.log(iterator.next()); // { value: 1, done: false }
console.log(iterator.next()); // { value: undefined, done: true }