// We write the Modash library in this file in the Unit Testing chapter


/*
 
***Test Data ***

const s = 'All code and no tests make Jack a precarious boy';
Modash.truncate(s, 21);
Modash.truncate(s, 100);

const str = 'stability was practically ASSURED.';
Modash.capitalize(str);

let string = 'started at';
Modash.camelCase(string);

string = 'started_at';
Modash.camelCase(string);

*/

function truncate(string, length) {
    if (string.length > length)
        return string.slice(0, length);
    else
        return string;
}


function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

function camelCase(string) {
    const words = string.split(/[\s|\-|_]+/);
    return [
        words[0].toLowerCase(), ...words.slice(1).map((w) => capitalize(w)),
    ].join('');
}


const Modash = {
    truncate,
    capitalize,
    camelCase
};

export default Modash;