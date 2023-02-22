function save(){
    var user1 = "";
    var user2 = "";
    var userC1 = new Array();
    var userC2 = new Array();
    var nameU = document.getElementById("user").value;
    var psw1 = document.getElementsByClassName('psw1'),
    claveValues = [].map.call(psw1,function(dataInput){
        userC1.push(dataInput.value);
    });
    var psw2 = document.getElementsByClassName('psw2'),
    claveValues = [].map.call(psw2,function(dataInput){
        userC2.push(dataInput.value);
    });
    userC1.forEach(function(inputsValuesData){
         user1 = user1 + inputsValuesData;
     });
    userC2.forEach(function(inputsValuesData){
        user2 = user2 + inputsValuesData;
    });
    encrypt(nameU,user2);
};

/////////////////////////
function encrypt(psw,unm){
    var pass = "softitlan-TN";//Password for run encrypt
    var cif = CryptoJS.AES.encrypt(unm,pass);// method encrypt
    var cifps = CryptoJS.AES.encrypt(psw,pass);// method encrypt
    console.log(cif.toString());
    console.log(cifps.toString());
    var Usrcif = cif.toString().substring(34,45);
    var pswcif = cifps.toString().substring(34,45);
    send(Usrcif,pswcif);
}
function send(usercif,pswcif){
    var url = 'http://localhost:8080/user/registerNewUser';
    $.ajax({
        method: 'POST',
        url : url,
        data : {
            username : usercif,
            password : pswcif,
        },
        success: function(response){
            // Se ejecuta al finalizar
            //   mostrar si está OK en consola
            console.log(response);
        }
    });
}

/////////////////////////
function encrypt(psw,unm){
    var pass = "softitlan-TN";//Password for encrypt
    var cif = CryptoJS.AES.encrypt(unm,pass);// method encrypt
    var cifps = CryptoJS.AES.encrypt(psw,pass);// method encrypt
    console.log(cif.toString());
    console.log(cifps.toString());
    var Usrcif = cif.toString().substring(34,45);
    var pswcif = cifps.toString().substring(34,45);
    send(Usrcif,pswcif);
}