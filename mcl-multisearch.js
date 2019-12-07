// Simulate a sleep function.

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

// Break up the contents of the draft by new line.
var lines = draft.content.split("\n");

// Get the number of lines.
var numOfLines = lines.length;

// Loop over each line until the number of lines is reached.
for (var i=0; i<numOfLines; i++) {
	// Store the contents of the line currently processed.
	var currentLine = lines[i];
	// Concatenate the search url and the encoded contents of the current line.
	var url = 'https://merl.ent.sirsi.net/client/en_US/mcl/search/results?qu=&qu=TITLE%3D'+encodeURI(currentLine);
	// Open the url.
	app.openURL(url);
	// Wait 3 seconds before starting on the next line (sleep function declared above).
	sleep(3000);
}
