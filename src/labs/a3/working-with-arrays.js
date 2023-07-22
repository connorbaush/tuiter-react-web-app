import ArrayIndexAndLength from "./array-index-and-length";
import AddingAndRemoving from "./adding-and-removing-data-to-from-arrays";
import ForLoops from "./for-loops";
import MapFunctions from "./map-functions.js";
import JSONStringify from "./json-stringify";
import FindFunction from "./find-function";
import FindIndex from "./find-index";
import FilterFunction from "./filter-function";
var functionScoped = 2;
let blockScoped = 5;
const constant1 = functionScoped - blockScoped;
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ['string1', 'string2'];

let variableArray1 = [
    functionScoped, blockScoped,
    constant1, numberArray1, stringArray1
];

function WorkingWithArrays() {
    return (
        <div>
            <h2>Working With Arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexAndLength />
            <AddingAndRemoving />
            <ForLoops />
            <MapFunctions />
            <JSONStringify />
            <FindFunction />
            <FindIndex />
            <FilterFunction />
        </div>
        );
}
export default WorkingWithArrays