// Initialize Firebase 
var config = {
apiKey: "AIzaSyCW2aE8Cv-LwPp8rwHT0PagtMa2AwWH_gc",
authDomain: "class-b1fe3.firebaseapp.com",
databaseURL: "https://class-b1fe3.firebaseio.com",
projectId: "class-b1fe3",
storageBucket: "class-b1fe3.appspot.com",
messagingSenderId: "116649786633"
};
firebase.initializeApp(config);

var database = firebase.database();

$("#add-train-btn").on("click", function() {
    event.preventDefault();
var trainName = $("#trainName").val().trim();
var trainDestination = $("#trainDestination").val().trim();
var trainTime = $("#trainTime").val().trim();
var trainFrequency = $("#trainFrequency").val().trim();

var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
};

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
console.log(newTrain.time);
console.log(newTrain.frequency);

$("#trainName").val("");
$("#trainDestination").val("");
$("#trainTime").val("");
$("#trainFrequency").val("");
});

database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    var returnName = childSnapshot.val().name
    var returnDestination = childSnapshot.val().destination
    var returnTime = childSnapshot.val().time
    var returnFrequency = childSnapshot.val().frequency

    var newRow = $("<tr>").append(
    // newRow.append($("<td>" + returnName + "</td>"));
    // newRow.append($("<td>" + returnDestination + "</td>"));
    // newRow.append($("<td>" + returnTime + "</td>"));
    // newRow.append($("<td>" + returnFrequency + "</td>"));
    // var returnName = childSnapshot.val().name
    $("<td>").text(returnName),
    $("<td>").text(returnDestination),
    $("<td>").text(returnTime),
    $("<td>").text(returnFrequency)
    );

    $("#train-table-rows").append(newRow);
    
});


