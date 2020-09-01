const add = (n1: number, n2: number, showRes: boolean, phrase: string) => {
    const result: number = n1 + n2;
    if (showRes) {
        console.log(phrase + result);
    } else {
        return n1+n2;
    }

};

const number1 = 5;
const number2 = 1;

add(number1, number2, true, 'Result: ');