var fs = require("fs");

// Asynchronous read
/*fs.readFile('hello.txt', function (err, data) {
if (err) {
	return console.error(err);
}
console.log("Asynchronous read: " + data.toString());
});
var data = fs.readFileSync('hello.txt');
console.log("Synchronous read: " + data.toString());

fs.writeFile('hello.txt', "Write Operation on File", 
function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Success");
    });
 

    fs.appendFile('hello.txt', "Append Operation on File", 
function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("Success");
    });
  */ 
    fs.unlink('hello.txt', function(err) {
        if (err) {
           return console.error(err);
        }
        console.log("File deleted successfully!");
     });