document.getElementById('textForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var userInput = document.getElementById('textInput').value;

  // Regular expression to check for specific HTML tags
  var htmlTagRegex = /<(h[1-6]|p)>[^<>]*<\/(h[1-6]|p)>/i;

  // Check if the user input contains any of the specified HTML tags
  if (htmlTagRegex.test(userInput)) {
    document.getElementById('output').innerText = "PWNEU{St0r3d-cr0xx-s!t3}";
  } else {
    // If not, display the entered text
    document.getElementById('output').innerText = "Entered Text:\n" + userInput;
  }
});
