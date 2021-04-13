function cambiar(e) {
    let contenedor=document.getElementById("contenedor");
    let parrafo=document.getElementById("texto");
    if (e==1){
        parrafo.innerText='color:navy';
    } else if (e==2){
        parrafo.innerText='color:expresso';    
    }else{
        parrafo.innerText='color:dark gray'; 
    }

}