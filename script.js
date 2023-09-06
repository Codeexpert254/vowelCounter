function countVowels() {
    // This is a function declaration for the "countVowels" function.
    // This function will be called when the button is clicked.

    var text = document.getElementById("inputText").value;
    // This line gets the value of the textarea element with the id "inputText" and stores it in the "text" variable.

    var vowelCount = 0;
    // This initializes a variable called "vowelCount" to 0. It will be used to count the number of vowels.

    // Convert it into lowercase
    text = text.toLowerCase();
    // This line converts the contents of the "text" variable to lowercase to ensure that vowel matching is case-insensitive.

    for (var i = 0; i < text.length; i++) {
        // This line starts a "for" loop that iterates through each character in the "text" variable.

        var char = text.charAt(i);
        // This line gets the character at the current position "i" in the "text" string and stores it in the "char" variable.

        if (isVowel(char)) {
            // This line checks if the current character "char" is a vowel by calling the "isVowel" function.

            vowelCount++;
            // If the character is a vowel, it increments the "vowelCount" variable by 1.
        }
    }

    var result = document.getElementById("result");
    // This line gets a reference to the HTML element with the id "result" and stores it in the "result" variable.

    result.textContent = "Total Vowels: " + vowelCount;
    // This line sets the text content of the "result" element to display the total vowel count.
}

function isVowel(char) {
    // This is a function declaration for the "isVowel" function, which checks if a given character is a vowel.

    var vowels = ["a", "e", "i", "o", "u"];
    // This line defines an array called "vowels" containing the lowercase vowel characters.

    return vowels.includes(char);
    // This line checks if the "char" character is included in the "vowels" array and returns true if it is a vowel, or false if it is not.
}
