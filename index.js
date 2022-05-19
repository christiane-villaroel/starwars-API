const div = document.getElementById("api-container")
const planetsContainer = document.getElementById("api-planets")
const length = 5
let planets = []
let renderPlanets
let descriptionHTML =[]

let combine=[]

const getChraracters = async () => {
    const Response = await fetch ("https://swapi.dev/api/people");
    const data = await Response.json();
    return data
}

getChraracters()
    .then(data => {
        descriptionHTML = data.results.splice(0,5).map(element => {
            return`
               <div class="character-card">
                   <h3>${element.name}</h3>
                   <span>Description:</span>
                       <ul  id="character-list" >
                           <li>Height: ${element.height}</li>
                           <li>Hair: ${element.hair_color}</li>
                           <li>Eye Color:  ${element.eye_color}</li>
                           <li>DOB: ${element.birth_year}</li>
                           <li>Gender: ${element.gender}</li>
                       </ul>
             </div>`
            }).join("")
            return div.innerHTML = descriptionHTML
    })



const getPlanets =  async () =>{
    const Response = await fetch("https://swapi.dev/api/planets/")
    const data = await Response.json()
    return data
}

getPlanets()
    .then(data => {
       planets = data.results.splice(0,5).map(planet => {
        return ` <div class ="planets">

        <span>${planet.name}</span>
        </div>` 
     })

    return planetsContainer.innerHTML =  planets. join("")
    })

    



 









        

      

