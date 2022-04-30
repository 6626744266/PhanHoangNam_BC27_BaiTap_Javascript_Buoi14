// BÀI 1:Xuất 3 số theo thứ tự tăng dần
//MÔ HÌNH  3 KHỐI
/*INPUT: 3 cần sắp xếp */
/*PROCESS
1. Lấy được input, var a, var b, var c
2. tạo biến var resultE1 chứa giá trị là 3 số đã được sắp xếp
3. In kết quả ra màn hình

*/

/* OUTPUT: In ra 3 số sau khi đã được sắp xếp theo thứ tự tăng dần*/




function ex1(){
var a = +document.getElementById("bt1-firstNumber").value;
var b = +document.getElementById("bt1-secondNumber").value;
var c = +document.getElementById("bt1-thirdNumber").value;

if(a<b && a<c)
{
    if(b<c){
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${a} < ${b} < ${c}`;
    }
    else{
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${a} < ${c} < ${b}`;
    }
    }
else if(b<a && b<c){
    if(a<c){
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${b} < ${a} < ${c}`;
    }
    else{
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${b} < ${c} < ${a}`;
    }
}
else{
    if(a<b){
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${c} < ${a} < ${b}`;
    }
    else{
        var resultE1 = document.getElementById("bt1-result");
        resultE1.innerHTML = `${c} < ${b} < ${a}`;
    }
}
   
    




}

// BÀI 2: Chương trình "Chào hỏi"
//MÔ HÌNH  3 KHỐI

/*INPUT: chọn người sử dụng */

/*PROCESS
1. Lấy được input
2. tạo biến var getMember để lấy ra value mà người dùng chọn
3. In kết quả ra màn hình

*/

/* OUTPUT: In ra câu chào tương ứng với lựa chọn của người dùng*/


function ex2(){
    var getMember=document.getElementById("memberSelector").value

    if(getMember === "B"){
        document.getElementById("member").innerHTML="Xin chào Bố!";
    }
    else if(getMember === "M"){
        document.getElementById("member").innerHTML="Xin chào Mẹ!";
    }
    else if(getMember === "A"){
        document.getElementById("member").innerHTML="Xin chào Anh Trai!";

    }
    else if(getMember === "E"){
        document.getElementById("member").innerHTML="Xin chào Em Gái!";
    }
    else{
        document.getElementById("member").innerHTML="Xin chào Người lạ ơi!";

    }
}


//BÀI 3: Đếm số chẵn lẻ
//MÔ HÌNH  3 KHỐI

/*INPUT: nhập vào 3 số nguyên */

/*PROCESS
1. Lấy được input, var firstNumber, var secondNumber, var thirdNumber
2. Tạo biến evenNumber để chứa giá trị số số chẵn đếm được, tạo biến oddNumber để chứa giá trị số số lẻ đếm được
3. Số số lẻ: oddNumber=3-evenNumber
4. In kết quả ra màn hình

*/

/* OUTPUT: In ra số số chẵn và số số lẻ đếm được*/

function ex3(){
    var firstNumber = +document.getElementById("bt3-firstNumber").value;
    var secondNumber = +document.getElementById("bt3-secondNumber").value;
    var thirdNumber = +document.getElementById("bt3-thirdNumber").value;
    var evenNumber=0;
    if(firstNumber%2===0)
    {
        evenNumber++;
    }
    if(secondNumber%2===0)
    {
        evenNumber++;
    }
    if(thirdNumber%2===0)
    {
        evenNumber++;
    }
    var oddNumber=3-evenNumber;
    document.getElementById("bt3-result").innerHTML=`Có ${evenNumber} số chẵn, có ${oddNumber} số lẻ`
}

//BÀI 4: Đoán hình tam giác
//MÔ HÌNH  3 KHỐI

/*INPUT: nhập vào 3 cạnh của tam giác */

/*PROCESS
1. Lấy được input, var a, var b, var c
2. Nếu a===b===c => tam giác đều
    nếu a===b || a===c || b===c => tam giác cân
    nếu a^2===b^2+c^2 || b^2===c^2 + a^2 || c^2===a^2 + b^2
    còn lại là loại tam giác nào đó
3. In kết quả ra màn hình

*/

/* OUTPUT: xuất ra loại tam giác*/
function ex4(){
    var a = +document.getElementById("bt4-canh1").value;
    var b = +document.getElementById("bt4-canh2").value;
    var c = +document.getElementById("bt4-canh3").value;
    if(a===b===c){
        document.getElementById("bt4-result").innerHTML = `Hình tam giác đều`

    }
    else if(a===b || a===c || b===c){
        document.getElementById("bt4-result").innerHTML = `Hình tam giác cân`

    }
    else if (a*a=== b*b + c*c || b*b === a*a + c*c || c*c=== a*a + b*b){
        document.getElementById("bt4-result").innerHTML = `Hình tam giác vuông`

    }
    else{
        document.getElementById("bt4-result").innerHTML = `Một loại tam giác nào đó`

    }
}
