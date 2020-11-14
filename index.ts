const add = (n1: number, n2: number) => n1 + n2;
function prResult (num: number): void {
    console.log(num);
} // 2 01

let combinedValues: (v1: number, v2: number) => number;

function combineAndHandle (v1: number, v2: number, cb: (result) => void) {
    const res = v1 + v2;
    cb(res);
}

combineAndHandle (5, 15, (r: number) => {
    console.log(r);
    return r;
}); // 2 11 24