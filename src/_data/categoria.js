const fetch = require("node-fetch");
const token =
  "bawRoSqmTPC_0S8b-aBhO9OBboFPmMSfhVlyWcHI50DlV2RTIZPzYoLcqxrHFjlg";

module.exports = async function () {
  let response = await fetch("https://graphql.apirocket.io/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: `
      query MyQuery {
        AllBdTrackJesuses {
          id
          imagen {
            url
          }
          nombre
          bg {
            url
          }
        }
        AllTests {
          id
          imagen {
            url
          }
          precio
          nombre
          size {
            size
          }
          descripcion
          colors {
            idInterno
            imagen {
              url
            }
            text
            value
          }
          category {
            id
            nombre
          }
        }
      }
      
`,
    }),
  })
    .then((res) => res.json())
    .then((json) => {
      let productos = json.data.AllTests;
      let categorias = json.data.AllBdTrackJesuses;
      let productoOrdenado = {};

      productos.forEach((prod) => {
        prod.category.forEach((productoCategory) => {
          if (!productoOrdenado[productoCategory.id]) {
            productoOrdenado[productoCategory.id] = [];
          }
          productoOrdenado[productoCategory.id].push(prod);
          //console.log(productoCategory.id);
          //console.log(productoOrdenado[productoCategory.id]);
           //console.log(productoOrdenado[productoCategory.id])
        });
      });

      categorias.forEach((categ) => {
       
        if(productoOrdenado[categ.id]){
        categ.productos=productoOrdenado[categ.id]
        
        categ.productos.forEach((catpro) => {
          console.log(catpro);
        });
      }
        
    
        //if(categ.id==prod.category.id){}
      });
      /* categorias.forEach((cat) => {
        cat.productos = []
        productos.forEach((prod) => {
          prod.category.forEach((el) => {
            if (cat.id == el.id) {
               cat.productos.push(prod)
            }
          });
        });
      });*/

      console.log(categorias);
      return categorias;
    })
    .catch((error) => {
      console.log(error);
    });

  return response;
};
