function logIn(){
    var usuario = document.getElementById("user").value;
    var contrasenia = document.getElementById("passw").value;
    var rol = document.getElementById("tipo").value;

    var table = document.getElementsByTagName('table')[0];

    var ii = 0
    var i = 0
    for (let i in table.rows) {
        let row = table.rows[i]
        if table[i,0] = usuario {
            stop
        } else {
            ii++
        }

        if ii = table.rows{
            var newRow = table.insertRow(1);

            var cell1 = newRow.insertCell(0);
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);

            cell1.innerHTML = usuario;
            cell2.innerHTML = contrasenia;
            cell3.innerHTML = tipo;
        }
     }  
    
    

}
