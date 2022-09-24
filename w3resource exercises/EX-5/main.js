var string = 'w3resource'
var reverse = ''

for (i = (string.length - 1); i > -1; i--) {
    reverse = reverse + string[i]
    string = string.slice(0,i)
    console.log(string)
}

console.log(string)
console.log(reverse)