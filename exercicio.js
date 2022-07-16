let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

const varD = varA;

varA = varB;

varB = varC;

varC = varD;


console.log(varA, varB, varC);

