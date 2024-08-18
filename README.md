## Pasos para instalar el proyecto. 
Ingresamos al directorio del proyecto.
npm install.
npm run dev. 

## Descripción

El proyecto se basa en la comunicación con el API pokeAPI.co

## Explicación de la arquitectura del proyecto.

Se aplica la forma modular el cual consiste en que cada modulo tenga sus propias subcarpetas
-apis
-components
-composable
-pages
-stores

por lo cual existen dos modulos dentro del proyecto 

-pokemons
-shared

-Carpeta Pokemons
    Dentro de la carpeta pokemons tenemos los elementos necesarios para contruir la pagina en las rutas:

    /
    /team
    /team/:id

    Se utiliza Pinia como gestor de Estado para compartir información entre elementos


-Carpeta Shared
    Dentro de esta carpeta tenemos componentes que utiliza el modulo pokemons es decir, 
    esta carpeta tiene todo los elementos que pueden usar diferentes modulos, si se aplica 
    otro modulo al proyecto, puede utilizar todos los componentes de la carpeta shared.

    Aquí tambíen se encuentra el layout, el cual es una plantilla para darle forma al contenido 

    Dentro de la carpeta src se encuentra la carpeta interface.
    Está carpeta lo que realiza es el entender de como esta formado cada uno de los objetos
    que se utilizan con typescript.


