var add = function (n1, n2, showRes, phrase) {
    var result = n1 + n2;
    if (showRes) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
};
var number1 = 5;
var number2 = 1;
add(number1, number2, true, 'Result: ');
