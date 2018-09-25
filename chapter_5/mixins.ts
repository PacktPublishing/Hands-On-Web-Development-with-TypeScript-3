class A{};
class B{};


class User extends A, B { //cannot extend two classes
}

// A mixin is a function that
// takes a constructor,
// creates a class that extends that constructor with new functionality
// returns the new class


// Needed for all mixins
type Constructor<T = {}> = new (...args: any[]) => T;

function PayPerClickAdvertisement<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        cost = 150
    };
}

// a mixin that adds a property and methods
function AdActivator<TBase extends Constructor>(Base: TBase) {
    return class extends Base {
        isActivated = false;

        activate() {
            this.isActivated = true;
        }

        deactivate() {
            this.isActivated = false;
        }
    };
}

////////////////////
// Usage to compose classes
////////////////////

// Simple class
class UserThatClicked {
    name = 'Johnny Wick';
}

// Ad that is PayPerClickAdvertisement
const PayPerClickAd = PayPerClickAdvertisement(UserThatClicked);

// User that is PayPerClickAdvertisement and AdActivator
const ActivatedPayPerClickAd = PayPerClickAdvertisement(AdActivator(UserThatClicked));

////////////////////
// Using the composed classes
////////////////////

const payPerClickAd = new PayPerClickAd();
console.log(payPerClickAd.name);
console.log(payPerClickAd.cost);

const adToActivate = new ActivatedPayPerClickAd();
console.log(adToActivate.cost);
console.log(adToActivate.isActivated);
adToActivate.activate();
console.log(adToActivate.isActivated);