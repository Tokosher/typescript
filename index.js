var add = function (n1, n2) { return n1 + n2; };
function prResult(num) {
    console.log(num);
} // 2 01
var combinedValues;
function combineAndHandle(v1, v2, cb) {
    var res = v1 + v2;
    cb(res);
}
combineAndHandle(5, 15, function (r) {
    console.log(r);
});
