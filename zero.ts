// import assert from "assert";

function endZeros(a: number): number {
    let numArray = a.toString().split('').reverse();
    let counter = 0
    for ( let i = 0; i<numArray.length; i++) {
        if (numArray[i] =="0")
        {
            counter++
        }
        else
        break;
    }


    return counter;
}


console.log(endZeros(10));
console.log(endZeros(100));
console.log(endZeros(1000));
console.log(endZeros(1010));

// These "asserts" are used for self-checking
// assert.strictEqual(endZeros(1), 0);
// assert.strictEqual(endZeros(0), 1);
// assert.strictEqual(endZeros(10), 1);
// assert.strictEqual(endZeros(100), 2);
// assert.strictEqual(endZeros(1000), 3);
