
// 1) Сделать функцию которая при вызове напишет в консоль сумму 2-х переданных в неё чисел
function f1(p1,p2){
    result= 2-(p1+p2)
    console.log("task 1= ",result)
};
f1(10, 12);

// 2) Сделать функцию которая вернёт в консоль квадрат переданного числа
function f2(q1){
     result1= q1*q1
    console.log("Task 2 ", result1)
};
f2(4);

// 3) Сделать функцию. На вход принимет 3 параметра (Ф,И,О). Вернёт JSON
// {"name":И,
//  "surname":Ф,
//  "middlename":О}
function f3(n, s, m){
    console.log((JSON.stringify({ name: n, 
        surname: s, 
        middlename: m })))
    };
    f3("Julia", "Avsievich", "Vladimirovna");
    
    //4) вывести в консоль переменную-массив в которой будут все чётные числа. Переменную возвращает функц)
   
    let arr = [1, 44, 55, 4]
function f4(mas) {
    let mas2 = [];
    for (let i = 0; i < 6; i++) {
        if (mas[i] % 2 === 0) {
            mas2.push(mas[i])
        }
    }
    if (mas2.length == 0) {
        console.log("No even numbers")
    } else {
        console.log(mas2)
    }
};
f4(arr);

// 5) Сделать функцию которая вернёт количество букв 'a' в переданном в неё слове.// Алфавит Eng. Если нету букв 'а', то вернтуть текст "No a characters".
let str="Vadim Ksendzov is arrraaabian";
function f5(stroka){
    symbol='a';
    count=0;
    for(i=0;i<str.length;i++){
        if(str.charAt(i)==symbol){
            count++
        }
    }
    if (count!=0)
    {console.log(count)}
     else {console.log("No a characters")}
}
f5(str);

// 6) Написать функцию которая выдаст список тестов для переданного в неё web-ui элемента
// Элементы: Phone number field, CheckBox, SignIn Button.
let st='CheckBox'
function f6(web_ui){
    
    if(web_ui=="Phone number field"){
        console.log("Your web-ui is Phone number field. \n  Your checklist is: \n 1.Enter phone wothout +; \n 2.Enter empty field;\n 3.Enter space between numbers" )
    }
    else if(web_ui=="CheckBox"){
        console.log("Your web-ui is Checkbox. \n  Your checklist is: \n 1.Statement: enable or disable; \n 2.Compulsory selection of 1 CheckBox; \n 3.After moving to another page, selection should be saved" )
    }
    else if(web_ui=="SignIn Button"){
        console.log("Your web-ui is Checkbox. \n  Your checklist is: \n 1.Tap on button [Sign in]; \n 2.Button [Sign in] is active after filling fields with valid data; \n 3.Button [sign in] is unactive after filling fields with unvalid data" )

    }
    else{console.log( "We don't have checklist for this element")
    
    }
};
f6(st);

// 7) Написать функцию которая на вход получает JSON а возвращяет XML


const jsonObj = {
    name: 'Padawan',
    surname:"Avsievich",
    middlename:"Vladimirovna"
  };
function f7(json) {
    let xml = '';
    for (let key in json) {
        xml += '<' + key + '>' + json[key] + '<' + key + '/>' 
    }
    console.log(xml)
}
let json = {name: 'a1', surname: 'a2', middlename: 'a3' }
f7(jsonObj)