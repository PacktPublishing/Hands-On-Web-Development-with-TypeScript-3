namespace AdvertisementLogger {
    export function log(parameters: { msg: any }) {
        let msg = parameters.msg;
        console.log(msg);
    }
    export function error(parameters: { msg: any }) {
        let msg = parameters.msg;
        console.error(msg);
    }
}

// usage
AdvertisementLogger.log({msg: 'Clicked ad id = 1'});
AdvertisementLogger.error({msg: 'Problem when clicked ad id = 2'});