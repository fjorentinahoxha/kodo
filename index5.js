const route = "https://jsonplaceholder.typicode.com/users"
const getData = () => {
    const body = document.querySelector("body")
    fetch(route)
    .then((response) => 
      response.json()
    ).then(json => {
      for (const element of json){
        let str = "";
        console.log(element)
        for( const key in element){
          if(typeof element.key === 'object'){
            //for( )
                str += `<p>${key}: ${element.address[key]}</p>`
            }
          else{
            str += `<p>${key}: ${element[key]}</p>`

          }
          
        }
        str = `<div>`+str+`</div>`
        body.innerHTML += str 
        const persons = document.querySelectorAll("div")
        
    }
    
    
    })
}
