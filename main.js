let guessedNumber;
        let no_of_guesses = 0;
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        console.log("Random Number:", randomNumber); // For testing

        function getGuess() {
            let ip = document.getElementById("ip");
            guessedNumber = Number(ip.value);
            no_of_guesses++;

            document.getElementById("lastGuess").textContent = `You guessed: ${guessedNumber}`;
            let result = document.getElementById("result");
            let attempts = document.getElementById("attempts");

            if (guessedNumber === randomNumber) {
                result.textContent = "🎉 Correct!";
                setTimeout(() => {
                    location.reload(); // Refresh after 1 second
                }, 5000);
            } else if (guessedNumber > randomNumber) {
                result.textContent = "Too high! Try a lower number.";
            } else {
                result.textContent = "Too low! Try a higher number.";
            }

            attempts.textContent = `Attempts: ${no_of_guesses}`;
            ip.value = "";           // Clear the input field
            ip.focus();              // Focus back on input
        }

        // 👇 Enable Enter key to submit
        document.getElementById("ip").addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                getGuess();
            }
        });