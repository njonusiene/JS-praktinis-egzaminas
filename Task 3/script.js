/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users'
const btn = document.getElementById('btn')

const showUsers = async () => {
  try {
    const res = await fetch(ENDPOINT)
    const users = await res.json()
    console.log(users)

    const outputDiv = document.getElementById('output')
    outputDiv.innerHTML = ''

    users.map(user => {
      const userCard = createUserCard(user)
      outputDiv.appendChild(userCard)
    })

    const message = document.getElementById('message')
    message.style.display = 'none'
  } catch (error) {
    console.error('Klaida:', error)
  }
}

const createUserCard = (user) => {
    const cardDiv = document.createElement('div')
    cardDiv.style.cssText = 
    `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
    `
  
    const login = document.createElement('p')
    login.textContent = `Login: ${user.login}`
    login.style.cssText = 
    `
      color: grey;
      font-size: 25px;
      padding: 10px;
      margin: 10px;
    `
  
    const avatar = document.createElement('img')
    avatar.src = user.avatar_url
    avatar.alt = `${user.login}'s avatar`
    avatar.style.cssText = 
    `
      width: 200px;
      border-radius: 50%;
    `
  
    cardDiv.appendChild(login)
    cardDiv.appendChild(avatar)
  
    return cardDiv
  }

btn.addEventListener('click', showUsers)
