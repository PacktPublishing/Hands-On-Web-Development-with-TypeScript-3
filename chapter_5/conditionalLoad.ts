declare const System: any;
var needIdValidation: boolean = false;

import {AddValidator} from "./AddValidator";

if (needIdValidation) {
    System.import("./AddValidator").then((Validator: typeof AddValidator) => {
        const x = new Validator();
        if (x.isValidId("id-of-ad")) {
            console.log("this is a correct id, we can proceed")
        }
    });
}
