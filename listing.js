const db = {
    users:[],
    passwords:[],
}

const inputs = document.querySelectorAll("input") 
const wrapper = document.querySelector(".wrapper")
const btnGo = document.querySelector(".b3")
//btnGo.style.display="none"
//btnGo.style.display="block"
const register = () => {
    const message = document.querySelector('.message')
    if (inputs[1].value !== inputs[2].value) {
        message.innerText = "Passwords do not match!"
        message.style.color = "red"
        return
    }
   
    db.users.push(inputs[0].value)
    db.passwords.push(inputs[1].value)
    message.innerText = "Registered successfully"
    message.style.color = "green"

    setTimeout(() =>{
        changeView()
    }, 2000)

}
const btn1 = document.querySelector(".b2")
const changeView = () => {
    inputs[0].value = "";
    inputs[1].value = ""
    inputs[2].style.display = "none"
    btn1.style.display="none"
    message. innerHTML = "";
    console.log(inputs[2], db)
 }

 //const inputs = document.querySelectorAll("input") 
 const message = document.querySelector('.message')


 const login = () => {
    const {users, passwords} = db
    let isExisting = false;

    for (let i = 0 ; i<= users.length; i++){
        if( users[i] === inputs[0].value && passwords[i] === inputs[1].value) {

        isExisting = true;
        break;
     
        } 
    }
    if(isExisting){
        relocate();
        return
    }

    message.innerText = "Wrong credentials"
    message.style.color = "red"
}

 
const relocate = () => {
    const body = document.querySelector("body");
    body.innerHTML = 
}








// const login = () => {
//     //const {users} = db
//     for (const element of db.users){
//     if(inputs1[0].value == element) {
//         console.log(inputs[0], db, "------")
//         message.innerText = "User already exists"
//         message.style.color = "red"
//       return
//     } 
//     {
//         setTimeout(() =>{
//             changeViewToSignup()
//         }, 2000)
//     }
// }

 
// }

// const btn2 = document.querySelector(".b2")
// const changeViewToSignup = () => {
//     inputs[0].value = "";
//     inputs[1].value = ""
//     inputs[2].value = ""
//     btn2.style.display="none"
//  }


//deconstructor - me merr vl e nje obj