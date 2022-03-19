async function pokemon(n, c) {
  for(i = n; i <= c ; i++){
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
    const dataJson = await data.json()
    
    const box = document.createElement("div");
    const img = document.createElement("img");
    const boxImg = document.createElement("div")
    
    boxImg.id = "boxImg"
    
    boxImg.appendChild(img)
    
    img.id = `img${i}`
    img.src = dataJson.sprites.front_default
    
    document.getElementById("container")
      .appendChild(box).id = `${i}`
    
    document.getElementById(`${i}`)
      .appendChild(boxImg).setAttribute("onclick", `changeImage(${i})`)
      
  pokeName(dataJson, box)
  pokeStatus(dataJson, i)
  moves(dataJson, i)
  }
}

function pokeName(data, box) {
  const boxTwo = document.createElement("div")
  boxTwo.id = "types"
  
  const H1 = document.createElement("h2")
  const type = document.createElement("p")
  type.id = `${data.types[0].type.name}`
  const typeTwo = document.createElement("p")
  
  H1.innerHTML = `${data.id}: ${data.name}`
  
  if(data.types[0] && data.types[1]){
    typeTwo.id = `${data.types[1].type.name}`
    
    type.innerHTML = `${data.types[0].type.name}`
    typeTwo.innerHTML =  ` ${data.types[1].type.name}`
    
    boxTwo.appendChild(typeTwo)
  } else {
    type.innerHTML = `${data.types[0].type.name}`
  }
  
  box.appendChild(H1)
  boxTwo.appendChild(type)
  box.appendChild(boxTwo)
}

function changeImage(id) {
  const img = document.getElementById(`img${id}`)
  const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`

  if(img.src !== url){
    img.src = url
  } else {
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  }
}

function pokeStatus(data, id) {
  const div = document.createElement("div")
  
  const attack = document.createElement("p")
  const hp = document.createElement("p")
  const defense = document.createElement("p")
  const specialAttack = document.createElement("p")
  const specialDefense= document.createElement("p")

  hp.innerHTML = `${data.stats[0].stat.name} : ${data.stats[0].base_stat}`
  attack.innerHTML = `${data.stats[1].stat.name} : ${data.stats[1].base_stat}`
  defense.innerHTML = `${data.stats[2].stat.name} : ${data.stats[2].base_stat}`
  specialAttack.innerHTML = `${data.stats[3].stat.name} : ${data.stats[3].base_stat}`
  specialDefense.innerHTML = `${data.stats[4].stat.name} : ${data.stats[4].base_stat}`

  div.id = "status"
  
  div.appendChild(hp)
  div.appendChild(attack)
  div.appendChild(defense)
  div.appendChild(specialAttack)
  div.appendChild(specialDefense)
  
  document.getElementById(`${id}`)
    .appendChild(div)
}