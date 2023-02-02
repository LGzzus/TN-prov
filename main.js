function save(){
    var userC = "";
    var userC1 = new Array();
    var userC2 = new Array();
    var psw1 = document.getElementsByClassName('psw1'),
    claveValues = [].map.call(psw1,function(dataInput){
        userC1.push(dataInput.value);
    });
    var psw2 = document.getElementsByClassName('psw2'),
    claveValues = [].map.call(psw2,function(dataInput){
        userC2.push(dataInput.value);
    });
    userC1.forEach(function(inputsValuesData){
        console.log(inputsValuesData);
         userC = userC + inputsValuesData;
         console.log(userC.toString())
     });
    userC2.forEach(function(inputsValuesData){
       console.log(inputsValuesData);
        userC = userC + inputsValuesData;
        console.log(userC.toString())
    });
}
    //Esta funcion tambien es valida para iterar a los elementos del array
    /*var userC="";
    userA.forEach(element =>{
        console.log(element);
        userC = userC +  element;
        console.log('---asdsd');
        console.log(userC);
    });*/
function encrypt(){
    var user = document.getElementById("user").value; //get value from register.html
    var pass = "TN";//Password for run encrypt
    var cif = CryptoJS.AES.encrypt(user,pass);// method encrypt
    var des = CryptoJS.AES.decrypt(cif,pass);// decrypt method to check 
    console.log(cif.toString());
    console.log(des.toString(CryptoJS.enc.Utf8));
}