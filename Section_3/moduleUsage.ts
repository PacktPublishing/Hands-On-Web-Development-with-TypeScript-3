import {localValueFromModule} from "./moduleValue";//import for module v

var gV = globalValue; //works
gV.valueOf();
var importedFromModule = localValueFromModule;
importedFromModule.valueOf();
