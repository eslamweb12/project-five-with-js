let rowNmae=document.getElementById("row");
let colNmae=document.getElementById("col");
let btnNmae=document.getElementById("btn");



btnNmae.addEventListener('click',fad);


function fad(){
   let body= document.body;
   let table=document.createElement("table");
    for(var i=0;i < +rowNmae.value;i++){
        let tr=document.createElement("tr");
        table.appendChild(tr);
        for(var j=0;j < +colNmae.value;j++){
            let td=document.createElement("td");
            let txt=document.createTextNode(" item txt");
            td.appendChild(txt);
            tr.appendChild(td);
            
        }
    }
    
    body.appendChild(table);
}