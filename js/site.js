function getValues() {
    let palindromeResults = {
        userString: document.getElementById('userString').value.replace(/[^A-Z0-9]/gi, ""),
        reverseString(userString) {
            let reversedString = '';
            for (let i = userString.length - 1; i >= 0; i--) reversedString += userString[i];
            return reversedString
        },
        checkForPalindrome(userString) {
            userString = userString.toLowerCase();
            let middle = (userString.length % 2 == 1) ? (userString.length - 3) / 2 : (userString.length / 2) - 1;
        
            for (let i = 0; i <= middle; i++) {
                if (userString[i] != userString[userString.length - 1 - i]) {
                    return false
                }
            }
            return true;
        }
    }
    displayResults(palindromeResults);
}

function displayResults(palindromeResults) {
    if (palindromeResults.checkForPalindrome(palindromeResults.userString)) {
        document.getElementById('reverse').textContent = palindromeResults.reverseString(palindromeResults.userString);
        document.getElementById('result').textContent = "We've got a palindrome!";
        document.getElementById('alert').classList.remove('invisible', 'alert-danger');
        document.getElementById('alert').classList.add('alert-success');
    } else {
        document.getElementById('reverse').textContent = palindromeResults.reverseString(palindromeResults.userString);
        document.getElementById('result').textContent = "Doesn't look like a palindrome to me, does it?";
        document.getElementById('alert').classList.remove('invisible', 'alert-success');
        document.getElementById('alert').classList.add('alert-danger');
    }
}