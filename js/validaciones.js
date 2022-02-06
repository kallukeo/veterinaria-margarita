function enviarformulario(){
    var name=document.getElementById("name").value;
    var tutor=document.getElementById("tutor").value;
    var fecha_de_nacimiento=document.getElementById("fecha_nacimiento").value;
    var esteril=document.getElementById("esteril").value;
    var peso=document.getElementById("peso").value;
    //var especie=docmunet.getElementById("especie").value;
    //var raza=document.getElementById("raza").value;
    //var sexo=document.getElementById("sexo").value;
    var diagnostico=document.getElementById("diagnostico").value;
    alert("Nombre:" + name+
    "\ntutor:" + tutor+
    "\nfecha de nacimiento:"+fecha_de_nacimiento+
    "\nesteril"+esteril+
    "\npeso"+peso+
    //"\nespecie"+especie+
    //"\nraza"+raza+
    //"\nsexo"+sexo+
    "\diagnostico"+diagnostico
    );
}