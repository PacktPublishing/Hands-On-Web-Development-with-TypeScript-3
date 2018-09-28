//intersection types
function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U> {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}

var userWithAdText = extend({ userId: 1 }, { adText: "this is a super ad" });

// x now has both `a` and `b`
var userId = userWithAdText.userId;
var adText = userWithAdText.adText;