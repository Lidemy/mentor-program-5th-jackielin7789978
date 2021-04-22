function reverse(str) {
    var arr = str.split('');
    var reversedArr = [];
    for (var i = 1; i<=arr.length; i++){
        reversedArr[arr.length-i] = arr[i-1];
    } 
    console.log(reversedArr.join(''));
}

reverse('hello');