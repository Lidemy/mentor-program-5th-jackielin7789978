function join(arr, concatStr) {
    // 先處理 special case：如果 arr 是空陣列，回傳空字串
    if (arr.length === 0) return '';
    // 用 for loop 按規律重新賦值
    var str = arr[0];
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

// console.log(join([], '!'));
// console.log(repeat('a', 5));
