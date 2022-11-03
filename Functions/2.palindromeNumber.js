function isPalindrome(n){
    const copyOfNum = n;

    let rev = 0;

    while(n > 0){
        let rem = n % 10;
        rev = rev * 10 + rem;
        n = parseInt(n / 10);
    }

    // if(rev === copyOfNum){
    //     return true;
    // }
    // return false;

    return rev === copyOfNum;
}

console.log(isPalindrome(12231));