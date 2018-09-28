function* infiniteSequence() {
    var i = 0;
    while(true) {
        yield i++;
    }
}

var iterator = infiniteSequence();
while (true) {
    console.log(iterator.next()); //will yield { value: 0....N, done: false} forever
}


//iterator that ends
function* iterateUntil3rdElement(){
    let index = 0;
    while(index < 3)
        yield index++;
}

let gen = iterateUntil3rdElement();

console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { done: true }


