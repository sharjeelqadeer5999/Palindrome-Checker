const inputField = document.getElementById("input-field");
const checkBtn = document.getElementById("check-btn");
const resultDiv = document.getElementById("result");

checkBtn.addEventListener("click", checkPalindrome);

function checkPalindrome() {
	const userInput = inputField.value.trim();
	const inputStr = userInput.toLowerCase().replace(/\s+/g, "");
	const reversedStr = inputStr.split("").reverse().join("");

	if (inputStr === reversedStr) {
		resultDiv.innerHTML = `Yes, "${userInput}" is a palindrome!`;
	} else {
		resultDiv.innerHTML = `No, "${userInput}" is not a palindrome.`;
	}
}