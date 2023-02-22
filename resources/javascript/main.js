
function save(){
    let Apsw1 = "";
    let Apsw2= "";
    let userC1 = new Array();
    let userC2 = new Array();
    let nameU = document.getElementById('username').value;
    var psw1 = document.getElementsByClassName('psw1'),
    claveValues = [].map.call(psw1,function(dataInput){
        userC1.push(dataInput.value);
    });
    var psw2 = document.getElementsByClassName('psw2'),
    claveValues = [].map.call(psw2,function(dataInput){
        userC2.push(dataInput.value);
    });
    userC1.forEach(function(inputsValuesData){
         Apsw1 = Apsw1 + inputsValuesData;
     });
    userC2.forEach(function(inputsValuesData){
        Apsw2 = Apsw2 + inputsValuesData;
    });
    console.log(nameU);
    send(nameU,Apsw2);

}
function send(username){
    const url = 'http://localhost:8080/user/validateUser';
    $.ajax({
        method: 'POST',
        url : url,
        data : {
            username : username
        },
        success: function(response){
            alert(response);
        }
    });
}

//send for user register
function register(username,password){
    const url='http://localhost:8080/user/registerNewUser';
    $.ajax({
        method:  'POST',
        url : url,
        data : {
            username : username,
            password : password
        },
        success : function(response){
            alert("Usuario Registrado");
        }
    });
}