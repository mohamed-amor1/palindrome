function palindrome(str) {
  let lowerStr = str.toLowerCase();
  let regex = /[a-zA-Z0-9]+/;
  let lowerArr = lowerStr.trim().split("");
  if (lowerArr.length === 0) {
    return "empty";
  }
  let charArr = lowerArr.filter((char) => regex.test(char));
  if (charArr.length === 0) {
    return "empty";
  }

  let reversedCharArr = charArr.slice().reverse();

  for (let i = 0; i < charArr.length; i++) {
    if (charArr[i] !== reversedCharArr[i]) {
      return false;
    }
  }

  return true;
}

document.addEventListener("DOMContentLoaded", function () {
  const checkButton = document.getElementById("check-button");
  const wordInput = document.getElementById("word-input");
  const resultDiv = document.getElementById("result");

  // Trigger the button click when the Enter key is pressed
  wordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default form submission
      checkButton.click(); // Simulate a click on the Check button
    }
  });

  checkButton.addEventListener("click", function () {
    const word = wordInput.value;
    if (word.length === 0) {
      document.getElementById("result").style.color = "orange";

      resultDiv.textContent = "Please enter a word.";
      return;
    }
    if (palindrome(word) === "empty") {
      document.getElementById("result").style.color = "orange";

      resultDiv.textContent = "Please enter a word.";
      return;
    }
    if (palindrome(word)) {
      document.getElementById("result").style.color = "green";

      resultDiv.textContent = "It's a palindrome! 😀 ";
    } else {
      document.getElementById("result").style.color = "red";

      resultDiv.textContent = "It's not a palindrome 😞. Try again.";
    }
  });

  // Clear the result message when new input is typed
  wordInput.addEventListener("input", function () {
    resultDiv.textContent = "";
  });
});
