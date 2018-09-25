const log = <T>(originalConstructor: new(...args: any[]) => T) => {
    function newConstructor(... args) {
        console.log("Arguments: ", args.join(", "));
        new originalConstructor(args);
    }
    newConstructor.prototype = originalConstructor.prototype;
    return newConstructor;
};

@log
class AuditableAdvertisement {
    constructor(text: string, cost: number) {}
}

new AuditableAdvertisement("this is a unique ad of a www.page.com", 0.12);