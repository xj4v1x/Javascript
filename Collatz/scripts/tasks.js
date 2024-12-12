const number = document.getElementById('collatz_number');
const button = document.querySelector("button");
const tableRef = document.getElementById("myTable");

let rownumber = 1;
let opnumber = 0;
let par = true;
let operation = "";


function calcular() {    
    // Si el número de filas no es 1 (solo la cabecera) quiere decir que ya hay datos y hay que eliminarlos
    if (rownumber != 1){
        // Desde el último número de fila hasta 1
        for (let j = rownumber; j > 1; j--) {            
            tableRef.deleteRow(j-1);
        }
        // Reiniciar el contador de filas
        rownumber = 1;
    }
    // Hace la tabla visible
    tableRef.style.opacity = 1;    
    opnumber = number.value;    
    
    while (opnumber != 1) {
        let newRow = tableRef.insertRow(-1);
        if (opnumber % 2 == 0) {par = true;} else {par = false;}
        for (let i = 0; i < 5; i++) {
            let newCell = newRow.insertCell(i);
            switch (i) {
                case 0:
                    newCell.innerHTML = rownumber;
                    break;
                case 1:
                    newCell.innerHTML = opnumber;
                    break;
                case 2:                
                    if (par){
                        newCell.innerHTML = "Par";                    
                    } else {
                        newCell.innerHTML = "Impar";                                        
                    }
                    break;
                case 3:
                    if (par){
                        operation = "" + opnumber + "/ 2 = ";
                        opnumber = opnumber / 2;
                    } else {
                        operation = "(" + opnumber + "x3) + 1 = ";
                        opnumber = (opnumber * 3) + 1;
                    }
                    newCell.innerHTML = operation;                
                    break;
                case 4:
                    newCell.innerHTML = opnumber;
                    break;
            }
        }
        rownumber = rownumber + 1;
    }    
}

button.addEventListener("click", calcular);
