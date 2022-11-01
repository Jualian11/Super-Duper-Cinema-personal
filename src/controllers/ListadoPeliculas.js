let peliculas = [
    {
        nombre:"Halloween",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/hallowenposter.jpg?alt=media&token=e6b7c7aa-e66f-4850-8886-da84948c1272"
    },
    {
        nombre:"Jeepers creepers",
        duracion:120,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/j-creeperposter.png?alt=media&token=d4f3a4b2-ff63-4a54-83b1-36ab398d6300"
    },
    {
        nombre:"Tadeo 3",
        duracion:100,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/Tadeo3poster%7D.jpg?alt=media&token=c523933b-f0db-4bfd-a2a6-1495c5eab26f"
    },
    {
        nombre:"Jauria",
        duracion:105,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/jauriaposter.png?alt=media&token=be8e0afa-59b0-45c3-9efb-c77c72756d63"
    },
    {
        nombre:"Mujer Rey",
        duracion:98,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/mujer-reyposter.png?alt=media&token=fa9bba4c-2d02-4d68-84ee-9d418f76dd47"
    },
    {
        nombre:"Reyes del Mundo",
        duracion:125,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/reyes-del-mundoposter.jpg?alt=media&token=80274292-d974-4d12-bb76-1827a5e0d8c8"
    },
    {
        nombre:"Smile",
        duracion:110,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/smileposte.jpg?alt=media&token=a2b1a41f-8001-4271-b7ba-119ce5ccb29d"
    },
    {
        nombre:"The Long Nigth",
        duracion:140,
        poster:"https://firebasestorage.googleapis.com/v0/b/cinemajulian-dec6c.appspot.com/o/the-long-nightposter.png?alt=media&token=00685a05-cf50-498d-8fed-95d7636b5ebf"
    }
]

let fila=document.getElementById("fila")

peliculas.forEach(function(pelicula){
    console.log(pelicula.poster)

   let foto=document.createElement("img")
   foto.src=pelicula.poster 
   foto.classList.add("img-fluid","w-100")

   fila.appendChild(foto)
})