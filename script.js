document.getElementById('textForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var userInput = document.getElementById('textInput').value;
    document.getElementById('output').innerHTML = "<strong>Entered Text:</strong><br>" + userInput;
  });
  