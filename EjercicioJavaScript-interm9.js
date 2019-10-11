var megaPkemon = ""
function traer() {
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(function (res) {
      return res.json();
    })
    .then(data => {
      //console.log(data);
      let urls = data.results.map(function (pokemon) {
        console.log(pokemon.url)
        return pokemon.url
      });

      urls.forEach(function (element) {
        //console.log(element);

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
              console.log(this)
              
            })
          } 
          );
      });
    })
    .catch(function (err) {
      console.error(err);
    });
}





