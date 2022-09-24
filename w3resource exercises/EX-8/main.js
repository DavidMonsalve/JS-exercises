random = Math.floor(Math.random() * 10) + 1;
console.log(random)

input = prompt("try to guess the secret number (1-10)")


if (input == random){
    alert("Good Work.")
} else {
    alert("Not matched.")
}