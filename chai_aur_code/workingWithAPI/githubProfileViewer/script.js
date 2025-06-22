async function getUser(){
  const username = document.getElementById('usernameInput').value.trim()
  const profileDiv = document.getElementById('profile')

  if(!username){
    alert('please enter a username')
    return 
  }

  const url = `https://api.github.com/users/${username}`;

  try{
    const response = await fetch(url)
    if(!response.ok){
      throw new Error('user not found')
    }

    const data = await response.json()
    console.log(data);
    const createdDate = data.created_at;
    console.log(createdDate);
    
    profileDiv.innerHTML = `
    <img src='${data.avatar_url}' alt='${data.login}'s avatar'/>
    <h2>${data.name || data.login}</h2>
    <p><strong>Bio:</strong> ${data.bio || "No bio"}</p>
    <p><strong>Location:</strong> ${data.location || "Unknown"}</p>
    <p><strong>Followers:</strong> ${data.followers}</p>
    <p><strong>Public Repos:</strong> ${data.public_repos}</p>
    <p><strong>Joined at:</strong> ${data.created_at}</p>
    <a href="${data.html_url}" target="_blank">View Profile</a>
    `
  } 
  catch (error){
    profileDiv.innerHTML = `<p style="color: red">${error.message}</p>`
  }
}

function saveLastSearchedUser(){
  let history = JSON.parse(localStorage.getItem('history')) || []
  if(!history.includes(username)){
    history.push(username)
    localStorage.setItem('history',JSON.stringify(history))
  }
  showLastUser()
}

function showLastUser(){
  let history = JSON.parse(localStorage.getItem('history')) || []
  let container = document.getElementById('history')
  container.innerHTML = ''

  history.forEach(username => {
    let btn = document.createElement('button')
    btn.textContent = username
    btn.onclick = () => {
      document.getElementById('usernameInput').value = username
      getUser()
    }
    container.appendChild(btn)
  })
}

window.onload = showLastUser