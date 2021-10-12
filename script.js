let search = document.getElementById("search");
let matchList = document.getElementById("match-list");

const searchStates = async searchText =>{
  const res = await fetch("States.json");
  const states = await res.json();

  matchList.innerHTML = "";

  // console.log(states);

  // let allKeys = Object.keys(states);

  // console.log(allKeys)

  // allKeys.forEach(k => {
  //   // console.log(states[k])
  //   const regex = new RegExp(`^${searchText}`, 'gi');
  //   if(states[k].name.match(regex) || states[k].capital.match(regex)){
  //     console.log(`${k} - ${states[k].name} - ${states[k].capital}`)
  //     matchList.innerHTML += `
  //     <div>
  //     ${k} - ${states[k].name} - ${states[k].capital}
  //     </div>
  //     `
  //   }
  // })

if (searchText.length === 0) {
  states ={};
  matchList.innerHTML = "";
}


let allKeys = Object.keys(states);

allKeys.forEach(k =>{
  let regex = new RegExp(`^${searchText}`, 'gi');
  if (states[k].name.match(regex) || states[k].capital.match(regex) ) {
    console.log(`${states[k].name} ${states[k].capital}`)

    matchList.innerHTML += `
<div class="card card-body mb-1" onclick="location.href='https://www.google.com/';" style="cursor: pointer">
<h4>${states[k].name}</h4> <h5><span class= "text-primary">${states[k].capital}</span></h5>
<small>Lat: ${states[k].lat} / Long: ${states[k].long}</small>
</div>
`
  }
})



}



search.addEventListener("input",()=> searchStates(search.value) );
