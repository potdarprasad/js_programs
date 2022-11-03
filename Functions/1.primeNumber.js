function isPrimeNumber(n) {
    if (n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    }

    let i = 2;
    while (i < n) {
        if (n % i === 0) {
            return false;
        }
        i++;
    }

    return true;
}

console.log(isPrimeNumber(2));