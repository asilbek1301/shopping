/* Asynchronous function: Callback & Async & Promise

    DEFINE:             CALL:
    callback            function
    async / await       then / catch & async/await
    peromise            then / catch & async/await

    

*/

// define
async function division(a, b) {
        if(b === 0) {
            throw new Error("Not divided by zero");
        } else {
            return a % b;
        }
}

// call
// division() ni call qismida then / catch ni o'rniga <<< async/await >>> ishlatilsa promise & callback hell ni oldini oladi
async function run() {

    let result = await division(10, 3);
    console.log("result one:", result);

    result = await division(10, 4);
    console.log("result two:", result);

    result = await division(20, 7);
    console.log("result three:", result);
}

run();