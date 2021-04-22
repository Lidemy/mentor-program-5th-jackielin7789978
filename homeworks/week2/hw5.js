function join(arr, concatStr) {
    var str = arr[0];
    // 先處理 special case
    if (arr.length === 1){
        return str;
    }
    // 用 for loop 按規律重新賦值
    for (var i=1; i<arr.length; i++){
        str += concatStr + arr[i];
    }
    return str;
}

function repeat(str, times) {
    var newStr = '';
    for (var i = 0; i < times; i++){
        newStr += str;
    }
    return newStr;
}

console.log(join(['a'], '!'));
console.log(repeat('a', 5));
