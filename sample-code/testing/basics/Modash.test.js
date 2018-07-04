// We write the tests for the Modash library in
// this file in the Unit Testing chapter


// to run the file execute the following command
/*

    .\node_modules\.bin\ babel - node.cmd.\Modash.test.js

*/


import Modash from './Modash';


function assertEqual(description, actual, expected) {
    if (actual === expected) {
        console.log(`[PASS] ${description}`);
    } else {
        console.log(`[FAIL] ${description}`);
        console.log(`\tactual: '${actual}'`);
        console.log(`\texpected: '${expected}'`);
    }
}



let inputString = 'there was one catch, and that was CATCH-22';
let acutalString = Modash.truncate(inputString, 19);
let expectedString = "there was one catch...";


/* testing Modash truncate function

    if (acutalString !== expectedString) {
        console.log(`[FAIL] Expected \'truncate()\' to return "${expectedString}", got "${acutalString}"`);
    } else {
        console.log(`[PASS] \'truncate()\'`);
    }

*/

assertEqual(`truncate(): no-ops if a string is >= lenght`, acutalString, expectedString);


acutalString = Modash.truncate(inputString, inputString.length);
expectedString = inputString;
assertEqual(`truncate(): truncates a string`, acutalString, expectedString);

acutalString = Modash.capitalize(inputString);
expectedString = "There was one catch, and that was catch-22";
assertEqual(`capitalize(): capitalize the string`, acutalString, expectedString);


let camelCaseData = "Data to the camel case function";
acutalString = Modash.camelCase(camelCaseData);
expectedString = "dataToTheCamelCaseFunction";
assertEqual(`camelCase(): string with spaces`, acutalString, expectedString);

camelCaseData = "Data_to_the_camel_case_function";
acutalString = Modash.camelCase(camelCaseData);
expectedString = "dataToTheCamelCaseFunction";
assertEqual(`camelCase(): string with underscore`, acutalString, expectedString);