function filtrarObjetos(c){
    var x, i;
    x = document.getElementsByClassName("section");
    if (c=="TODO") c = "";
    for (i=0; i<x.length;i++){ //Para cada sección
        removeClass(x[i],"show"); //Eliminar la clase show
        if(x[i].className.indexOf(c) > -1) addClass(x[i],"show"); //Añadir la clase show a los objetos que coincidan con el año
    }
    console.log('filtrando por:' + c)
}

function addClass(element,name){
    var i, arr1, arr2;
    arr1= element.className.split(" ");
    arr2= name.split(" ");

    for (i=0; i<arr2.length;i++){
        if(arr1.indexOf(arr2[i])==-1){ 
            element.className+= " " + arr2[i];
        }
    }

}

function removeClass(element,name){
    var i, arr1, arr2;
    arr1= element.className.split(" ");
    arr2= name.split(" ");

    for (i=0; i<arr2.length;i++){
        while(arr1.indexOf(arr2[i]) > -1){ 
           arr1.splice(arr1.indexOf(arr2[i]),1);
        }
    }
    element.className = arr1.join(" ");
}