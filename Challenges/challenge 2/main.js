
// Operators Challenge

let a =10;
let b="20";
let c=80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ + a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
    [++a]
        Value = 11
        Explain = pre-increment operator

    [+] = "addition operater"

    [+b++]
        Value = 20;
        Explain = first unary plus operator convert the value from string to number, then post-increment increase the value by 1 to be 21 but not used
    
    [+] = "addition operater"

    [+c++]
        Value = 80;
        Explain = unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 81 but not used

    [-] = subtraction operater

    [+a++]
        Value = 11;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 12 but not used


    so, the total value = 11 + 20 + 80 - 11 = 100

*/



/*
    [++a]
        Value = 13
        Explain = pre-increment increase the value of a by 1 to be 13
        
    [+] = addtion operator

    [-b]
        Value = -21
        Explain = Unary negation operator convent the data type from string to number with differnt sign

    [+] = addition operator
    
    [+c++]
        Value = 81;
        Explain = Unary plus operator has not effect becuase the date type already number, then post-increment increase the value by 1 to be 82 but not used
    
    [-] = subtraction operater

    [-a++]
        Value = -13
        Explain = post-increment increase the value by 1 to be 14 but not used
    
    [+] = additon operator

    [+a]
        Value = 14
        Explain = Unary plus operator has not effect becuase the date type already number


    so, the total value = 13 -21 + 81 - -13 + 14 = 100
    
*/



/*
    [--c]
        Value = 81
        Explain = pre-decrement decress the value by 1 to be 81
    
    [+] = addition operator

    [+b]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number
    
    [+] = addition operator

    [--a]
        Value = 13
        Explain = pre decrement decress the value by 1 to be 13
    
    [*] = multiplication operator

    [+b++]
        Value = 21
        Explain = Unary plus operator has no effect because the date type is already number, then post increment increase the value by 1 to be 22
    
    [-] = subtraction operator

    [+b]
        Value = 22
        Expalin = Unary plus operator has no effect effect
    
    [*] = multiplaction operator

    [a]
        Value = 13
        Explain = from the previous a
    
    [+] = Addition operator

    [--a]
        Value = 12
        Explain = Pre-decrement decress the value by 1 to be 12
    
    [-] = subtraction operator

    [+true]
        Value = 1
        Expalin = unary plus opertor change the date type from boolean to be number

        so, the total value = 81 + 21 + (13 * 21) - (22 * 13) + 12 - 1 = 100
*/




/*Challenge 2 */


let d ="-100";
let e = "20";
let f =30;
let g=true;

console.log(-d * +e) ; //2000
console.log(++e * ++g + ++f + -d) ; //173
