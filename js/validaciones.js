function enviarformulario(){
    var name=document.getElementById("name").value;
    var tutor=document.getElementById("tutor").value;
    var fecha_de_nacimiento=document.getElementById("fecha_nacimiento").value;
    var esteril=document.getElementById("esteril").value;
    var peso=document.getElementById("peso").value;

    var especie=document.getElementById("especie");
    var especiecievalue=especie.options[especie.selectedIndex].value;

    var raza=document.getElementById("raza");
    var razavalue=raza.options[raza.selectedIndex].value;

    var sexo=document.getElementById("sexo");
    var  sexovalue=sexo.options[sexo.selectedIndex].value;

    var diagnostico=document.getElementById("diagnostico").value;
    alert("Nombre:" + name+
    "\ntutor:" + tutor+
    "\nfecha de nacimiento:"+fecha_de_nacimiento+
    "\nesteril"+esteril+
    "\npeso"+peso+
    "\nespecie"+especiecievalue+
    "\nraza"+razavalue+
    "\nsexo"+sexovalue+
    "\ndiagnostico"+diagnostico
    );
}