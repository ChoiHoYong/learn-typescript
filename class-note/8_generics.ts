// 제네릭

// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText(10);

// function logText<T>(text: T):T {
//     console.log(text);
//     return text;
// }
// logText<string>('하이');

// function logText(text: string | number) {
//     console.log(text);
    
//     return text;
// }
// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }
// logNumber(10);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}

logText<number>(10);
logText<string>('hi');
logText<boolean>(true);

// logText('A');
// logText(10);