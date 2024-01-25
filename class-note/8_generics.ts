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

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }

// logText<number>(10);
// logText<string>('hi');
// logText<boolean>(true);

// logText('A');
// logText(10);

interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj: Dropdown<string> = {value: 'abc', selected: false};

//제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//     text.forEach(function(text){
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi']);

interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T{
    text.length;
    return text;
}
logTextLength('a');

//keyof
interface ShoppingItem{
    name: string;
    price: number; 
    stock: number;
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

getShoppingItemOption("name");