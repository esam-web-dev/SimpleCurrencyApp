let btnconv = document.querySelector(".btnconv");
let resDis = document.querySelector(".result");



btnconv.onclick = function() {
// ملاحظة: حطيت المتغيرات هون مشان اول ما يعمل كليك ياخد القيم منهن لانو ازا حطيتن فوق رح ياخد الحقول فاضية اول ما يشتغل الكومبايلر
let amount = document.querySelector(".amount").value;
let seform = document.querySelector(".from").value;
let seto = document.querySelector(".to").value;


if(amount && seform && seto) { // يعني ازا الحقول قيمة معباية

fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=b3513b4f8f7342279e9f4604e98bd83c")
.then((res) => { // الاجابة
    let myData = res.json();
    // console.log(myData) // البروميس
    return myData;
}).then((res) => {
    // console.log(res); // لمعلومات يلي بدي اتحكم فيا يلي اجتني من ريسبون قد تكون اوبجكت او مصفوفة 
    res.base = seform; // قمنا بتغير البيس حسب المستخدم يلي بحطة هوة
    let rate = res.rates[seto];
    // console.log(res.rates) 
    let result = (amount * rate).toFixed(0);
    resDis.innerHTML = `${amount} ${seform} = ${result} ${seto}`
    //                   100 Dollar         = 3000 Gneh
}).catch((erorr) => {resDis.innerHTML=`Somthing Rong ${erorr}`})

} else {
    resDis.innerHTML = "Please Fill All Fields"
}


}