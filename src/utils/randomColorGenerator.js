export default function randomColorGenerator() {
    // Generate a random number between 0 and 16777215 (decimal value of #FFFFFF)
    const randomNumber = Math.floor(Math.random() * 16777215);
    // Convert the random number to a hexadecimal string and pad with 0s if necessary
    const randomColor = "#" + randomNumber.toString(16).padStart(6, '0');
    return randomColor;
}

console.log(randomColorGenerator()); // Example output: #3e2f1b