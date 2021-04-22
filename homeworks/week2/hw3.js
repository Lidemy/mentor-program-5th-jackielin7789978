function reverse(str) {
    var arr = str.split('');
    var reversed = [];
    for (var i = arr.length -1; i >= 0; i--){
        reversed.push(arr[i]);
    } 
    console.log(reversed.join(''));
}

reverse('hello');