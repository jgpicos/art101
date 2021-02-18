/**
 * Authors:    Jason Blecman and Jesus Picos
 * Created:   01.01.2020
 **/

var myTransport = ["Bus", "Car", "Bike", "Walking"];
var myMainRide = {Year: 2003, Make: "Chevrolet",
Model: "Malibu", Color: "Tan", CurrentlyOwn: false}
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
