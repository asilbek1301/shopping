/* callback function:
    define      call
    callback    function

*/

// define
function division(a, b, callback) {
    if(b === 0) {
        callback("Not divided by zero", null);
    } else {
        setTimeout(function() {
            callback(null, a % b);
        }, 5000);
    }
}

// call
division(10, 3, (err, data) => {
    if(err) console.log("ERROR:", err);
    else {
        console.log("RESULT:", data)
        console.log("...");

        division(10, 4, (err, data) => {
            if(err) console.log("ERROR:", err);
            else {
                console.log("RESULT:", data)
                console.log("...");

                division(20, 7, (err, data) => {
                    if(err) console.log("ERROR:", err);
                    else {
                        console.log("RESULT:", data)
                        console.log("...");
                    }
                });
            }
        });
    }
});
