// Exercie 1 = Palindrome

function palindrome(str) {
    if(str.split("").reverse().join("") === str) {
        console.log("Oui c'est un palindrome");
    }
    else {
        console.log("Non ce n'est pas un palindrome");
    }
    
}

palindrome("kayak")
palindrome("Salut")