var megaPkemon = ""
function traer() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (res) {
      return res.json();
    })
    .then(data => {
      //console.log(data);
      let urls = data.results.map(function (pokemon) {
        //console.log(pokemon.url)
        return pokemon.url
      });

      urls.forEach(function (element) {
        console.log(element);

        fetch(element)
          .then(respuesta => respuesta.json())
         
          .then(json => {
            var contenido = document.querySelector('#contenido');
            var nuevo = document.createElement("div");
            nuevo.id = 'padre';
            contenido.appendChild(nuevo);

            var imagen = document.createElement("img");
            imagen.id = json.name;
            imagen.src = json.sprites.front_default
            nuevo.appendChild(imagen);
            imagen.addEventListener("click",function(){
             //console.log(this)
            // name = json.name
             //altura = json.height
             //peso = json.weight

            var descripcion = document.querySelector('#desc');
            var nuevaDescripcion = document.createElement("h4");
            nuevaDescripcion.id = "Caracteristicas"
            descripcion.appendChild(nuevaDescripcion);

            var valores = document.createElement("div");
            valores.id = json.name;
            nuevaDescripcion.appendChild(valores);

            var pok = document.createElement("img");
            pok.src = json.sprites.front_default
            valores.appendChild(pok); 
            
            var esc = document.createElement("p")
            esc.innerHTML = 

            "Nombre: " + json.name + "</br>" + 
            "Peso: " + json.weight + "</br>" +
            "Altura: " + json.height + "</br>" 
           
            valores.appendChild(esc)
            })
          } 
          );

      });
    })
    .catch(function (err) {
      console.error(err);
    });
}





