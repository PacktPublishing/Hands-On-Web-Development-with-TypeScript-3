class Set<T> {
    private data = [];
    add = (item: T) => {
        if (this.data.indexOf(item) < 0) {
            this.data.push(item);
        }
    }
    all = this.data

}

const addsSeenByUser = new Set<number>();
addsSeenByUser.add(0);
addsSeenByUser.add(1);
addsSeenByUser.add(1);

// addsSeenByUser.add("1"); // ERROR : cannot push a string. Only numbers allowed
console.log(addsSeenByUser.all)


const addsTextsSeenByUser = new Set<string>();
addsTextsSeenByUser.add("super ad 1");
addsTextsSeenByUser.add("super ad 2");
addsTextsSeenByUser.add("super ad 2");

console.log(addsTextsSeenByUser.all);