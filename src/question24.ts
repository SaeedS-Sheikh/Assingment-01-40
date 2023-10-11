let name1 = "Sheikh";
let name2 = "Faizan";
let name3 = "Sheikh";
let strlen1 = name1.length;
let strlen2 = name2.length;
let strLower1 = name1.toLowerCase();
let strLower2 = name2.toLowerCase();
let num1 = 20;
let num2 = 10;
let fruit = ["Apple", "Banana", "Grape", "Mango"];
// let fruitGues = prompt("Enter Fruit name to check its on Array or not ");

// Tests for equality and inequality with strings
if (name1 == name2) {
    console.log(`${name1} is equal to ${name2} `)
} else {
    console.log(`${name1} is not equal to ${name2} `)
};

// test two strings lengths are equal or not
if (strlen1 == strlen2) {
    console.log(`${strlen1} is equal to ${strlen2} `)
} else {
    console.log(`${strlen1} is not equal to ${strlen2} `)
};

// Tests using the lower case function
if (strLower1 == strLower2) {
    console.log(`${strLower1} is equal to ${strLower2} `)
} else {
    console.log(`${strLower1} is not equal to ${strLower2} `)
};

// test numerical
if (num1 == num2) {
    console.log('Number', num1, 'is equal to number', num2)
} else if (num1 >= num2) {
    console.log('number', num1, 'is greater than', num2)
} else if (num1 <= num2) {
    console.log('number', num1, 'is smaller than', num2)
}

// test 'and' operator and 'or' operator
if (name1 == name2 && name1 == name3) {
    console.log('statement is true');
} else {
    console.log('statement is false');
}

if (name1 == name2 || name1 == name3) {
    console.log('statement is true');
} else {
    console.log('statement is false');
}
