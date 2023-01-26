function check(){
    let char1 = document.getElementById("char1").value;
    let char2 = document.getElementById("char2").value;
    let char3 = document.getElementById("char3").value;
    let char4 = document.getElementById("char4").value;
    let char5 = document.getElementById("char5").value;
    let charv1 = document.getElementById("charv1").value;
    let charv2 = document.getElementById("charv2").value;
    let charv3 = document.getElementById("charv3").value;
    let charv4 = document.getElementById("charv4").value;
    let charv5 = document.getElementById("charv5").value;
    
    let concat = char1+char2+char3+char4+char5;

    let concat2 = charv1+charv2+charv3+charv4+charv5;
    console.log(concat);
    console.log(concat2);

    if(concat == concat2){
        console.log("Son iguales")
        document.append(alert("Contraseñas verificadas"))
    }else{
    console.log("son iniguales")
    document.append(alert("verificar contraseñas"))

   } 
}