
// //calls ne server
// //http request fetch("")
// // get post put patch delete

// //kur bejme thirrje asinkrone me get promise ka 2 : pending dhe resolved(succes ose failed)
// //promise duhet bere handle

// fetch("https://jsonplaceholder.typicode.com/")
// .then(function (response){
//     return response.json();
// })
// .then(function(a){
//     console.log(a);
// })


// //per te marre te dhena nga serveri

// const getData = () => {
//     const body = document.querySelector("body")
//     let content = "";
//     fetch("https://jsonplaceholder.typicode.com/").then(function(){
//         return response.json()
//     }).then(json => {
//         //ti kalojme json htmls
//         content = 
//             `
//             <p>this is my id ${json.id}</p>
//             <p>this is my user id ${json.userId}</p>
            
//             `
//             body.innerHTML = content;
//         /*menyra 2
//             for (const key in json){
//                 content += `<p> This is my ${key}: ${json}</p>`
//             }
//             */
        
//     })
//     //jo ktu sepse ex para se eshte sinkron
//     //body.innerHTML = content;
// }


//-----------------------Ushtrim 2--------------------------------

const route = "https://jsonplaceholder.typicode.com/todos"
const getData = () => {
    const body = document.querySelector("body")
    fetch(route)
    .then((response) => 
      response.json()
    ).then(json => {
      for (const element of json){
        let str = "";
        //console.log(element)
        for( const key in element){
          //console.log(`${key}: ${element[key]}`);
          str += `<p>${key}: ${element[key]}</p>`
          
        }
        str = `<div>`+str+`</div>`
        body.innerHTML += str 
        const persons = document.querySelectorAll("div")
        
    }
    
    
    })
}



//DSH tek json place holder merr gjith userat  te ndara me div vetem se jane obj nested