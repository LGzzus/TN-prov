function save(){
    var user1 = "";
    var user2 = "";
    var userC1 = new Array();
    var userC2 = new Array();
    var nameU = document.getElementById("user").value
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
         user1 = user1 + inputsValuesData;
         console.log(user1.toString())
     });
    userC2.forEach(function(inputsValuesData){
       console.log(inputsValuesData);
        user2 = user2 + inputsValuesData;
        console.log(user2.toString())
    });
    console.log(nameU);
    equals(user1,user2,nameU);
}
//Funcion para verificar que sean correctas
function equals(vl1,vl2,nm){
    var pswf = vl2;
    var usr = nm;
    if(vl1 == vl2){
        console.log("Son iguales");
        encrypt(pswf,usr);
        document.append(alert("Contraseñas verificadas"));
    }else{
    console.log("son iniguales");
    document.append(alert("verificar contraseñas"));

   } 
}
//funcion para encriptar los datos
function encrypt(psw,unm){
    var pass = "TN";//Password for run encrypt
    var cif = CryptoJS.AES.encrypt(unm,pass);// method encrypt
    var cifps = CryptoJS.AES.encrypt(psw,pass);// method encrypt
    var des = CryptoJS.AES.decrypt(cif,pass);// decrypt method to check 
    var des2 = CryptoJS.AES.decrypt(cifps,pass);// decrypt method to check 
    console.log(cif.toString());
    console.log(cifps.toString());
    console.log(des.toString(CryptoJS.enc.Utf8));
    console.log(des2.toString(CryptoJS.enc.Utf8));
}