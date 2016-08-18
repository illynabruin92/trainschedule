// Steps to complete:
/*
1. Initialize Firebase
2. Create button for adding new trains - then update the html + update the database
3. Create a way to retrieve train names from the train database.
4. Create a way to calculate the next train. Using difference between start and frequency. Then use moment.js formatting to set minutes away.

*/
// 1. Initialize Firebase
var config = {
   apiKey: "AIzaSyChvedmzgP5qZ7KIsygPuGxs7PElZhIAWw",
   authDomain: "trainschedule-50edf.firebaseapp.com",
   databaseURL: "https://trainschedule-50edf.firebaseio.com",
   storageBucket: "trainschedule-50edf.appspot.com",
 };
 firebase.initializeApp(config);

var database = firebase.database();

//Display Time h3
  function displayTime() {
    var time = moment().format('HH:mm');
    $('#time').html(time);
    setTimeout(displayTime, 1000);
  }

  $(document).ready(function() {
      displayTime();
  });


// 2. Button for adding Train
$("#addTrainBtn").on("click", function(){

	// Grabs user input
	var trainName = $("#trainNameInput").val().trim();
	var trainDest = $("#destinationInput").val().trim();
	var trainStart = moment($("#startInput").val().trim(), "HH:mm").format("X");
	var frequencyTrain = $("#frequencyInput").val().trim();

	// Creates local "temporary" object for holding train data
	var newTrain = {
		name:  trainName,
		destination: trainDest,
		start: trainStart,
		frequency: frequencyTrain
	}

	// Uploads employee data to the database
	database.ref().push(newTrain);

	// Logs everything to console
	console.log(newTrain.name);
	console.log(newTrain.destination);
	console.log(newTrain.start);
	console.log(newTrain.frequency);


	// Clears all of the text-boxes
	$("#trainNameInput").val("");
	$("#destinationInput").val("");
	$("#startInput").val("");
	$("#frequencyInput").val("");

	// Prevents moving to new page
	return false;
});


// 3. Create Firebase event for adding train to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot){

	console.log(childSnapshot.val());

	// Store everything into a variable.
	var trName = childSnapshot.val().name;
	var trDestination = childSnapshot.val().destination;
	var trStart = childSnapshot.val().start;
	var trFrequency = childSnapshot.val().frequency;

	// Train Info
	console.log('Train: ' + trName);
	console.log('Destination: ' + trDestination);
	console.log('First Departure: ' + trStart);
	console.log('Frequency: ' +trFrequency);


		var blueTrain = moment(trStart, "HH:mm").subtract(1, "years");
		console.log("New time: " + blueTrain);

    // Current Time
    var currentTime = moment();
    console.log('CURRENT TIME: ' + moment(currentTime).format("HH:mm"));


  // Difference between the times
  var diffTime = moment().diff(moment(blueTrain), "minutes");
  console.log('DIFFERENCE IN TIME: ' + diffTime);

  // Time apart (remainder)
  var trRemainder = diffTime % trFrequency;
  console.log('Time Apart: ' + trRemainder);

  // Minute Until Train
  var trMinutesTillTrain = trFrequency - trRemainder;
  console.log('MINUTES TILL TRAIN: ' + trMinutesTillTrain + "minutes");

  // Next Train
  var nextTrain = moment().add(trMinutesTillTrain, "minutes");
  console.log('ARRIVAL TIME: ' + moment(nextTrain).format("HH:mm"))


	// Add each train's data into the table
	$("#trainTable > tbody").append("<tr><td>" + trName + "</td><td>" + trDestination + "</td><td>" + trFrequency + "</td><td>" + nextTrain.format("HH:mm") + "</td><td>" + trMinutesTillTrain + "</td></tr>");

});
