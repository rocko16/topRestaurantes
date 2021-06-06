(function(){
    //OBTENIENDO LOS ELEMENTOS DE LA CLASE .close-me
    const links = document.querySelectorAll(".close-me");

    //RECORRIENDO ELEMENTOS 
    links.forEach(el =>{

        //AGREGANDO UN EVENTO A CADA UNO DE ELLOS
      el.addEventListener("click",function(ev){
        let container = document.querySelector(".content");
        ev.preventDefault();

        // QUITANDOLE KAS CLASES DE ANIMACION QUE YA TIENEN
        container.classList.remove("animate__bounceInDown");
        container.classList.remove("animate__bounceInDown");

        // AGREGANDOLE CLASES PARA ANIMAR SU SALIDA
        container.classList.add("animate__bounceOutDown");
        container.classList.add("animate__bounceInDown");
        
        setTimeout(()=>{
          location.href = this.href;
        },600);
        return false;
      })
    })
  
  })();

// AGREGANDO UN EVENTO CLICK A CADA UNO DE ELLOS