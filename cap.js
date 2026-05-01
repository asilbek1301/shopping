/* Asynchronous function: Callback & Async & Promise

    DEFINE:             CALL:
    callback            function
    async / await       then / catch
    peromise            then / catch

    

*/

// define
function division(a, b) {
    return new Promise((resolve, reject) => {
        if(b === 0) {
            reject("Not divided by zero");
        } else {
            setTimeout(function() {
                resolve(a % b);
            }, 5000);
        }
    })
}

// call
division(10, 3).then(data => {
    console.log("Result:", data);
    console.log("....");

    division(10, 4).then(data => {
        console.log("Result:", data);
        console.log("....");

        division(20, 7).then(data => {
            console.log("Result:", data);
            console.log("....");
        }).catch(err => {
            console.log("Error division:", err);
        });
    }).catch(err => {
        console.log("Error division:", err);
    });
}).catch(err => {
    console.log("Error division:", err);
});
