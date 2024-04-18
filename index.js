// Question 70
function PrintNumber() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
    // i is not accessible here but it is not accessible outside it is defined with let
}
PrintNumber();
// Question 71
let num = 5;
num = 6;
console.log(num);
const name = "Maham";
try {
    // name = "false";
    // This line will give an error because Cannot assign to 'bool' because it is a constant
}
catch (error) {
    console.log(`Cannot assign to 'bool' because it is a constant.`);
}
// Question 72
{
    let age = 45;
    console.log(age);
    const name1 = "Maham";
    console.log(name1);
}
// This line give error : Cannot find name 'age'.
// console.log(age);
// This line give error : Cannot find name1.
// console.log(name1)
try {
    console.log(age);
}
catch (error) {
    console.log("`age` is not accessible outside the block.");
}
try {
    console.log(name1); // This will also fail
}
catch (error) {
    console.log("`name1` is not accessible outside the block.");
}
export {};
// This shows that `let` and `const` keep variables safe inside the block where they're defined.
