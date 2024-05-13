let num = 0;

while (num <= 10) {
    if (num === 0) {
        console.log(num);
    } else if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
    num++;
}