
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

async function fetchData(){
     const data = await fetch('https://jsonplaceholder.typicode.com/todos')
     const json = await data.json(data)
  
     const titleList = document.getElementById('titleList')
     for(let i = 0; i < json.length ; i++){
      titleList.innerHTML += `<h3>${json[i].title}</h3>`
     } 
}      
fetchData()





// class Tiger{
//     constructor(name){
//         this.name = name;
//     }
// }

// function changeTitleColor(){
//     let title = document.getElementById("title")


//     if (title.classList.contains("hidden")){
//         title.classList.remove("hidden")
//     }else{ 
//         title.classList.add("hidden")
// }
// }

// function sum(){
//     let num1 = parseInt(document.getElementById("num1").value)
//     let num2 = parseInt(document.getElementById("num2").value)

//     let result = document.getElementById("result")

//     result.innerHTML = num1 + num2
    
// }
