const apiURL = '../api/people.json'
const nameElement = document.getElementById('showName')
const randomBtn = document.getElementById('random-btn')

let showName = (name) => {
    nameElement.innerHTML = `${name}`
    
}

getRandomName = () => {
    fetch(apiURL)
        .then(res => res.json())
        .then(res => showName((res[Math.floor(Math.random() * 20)].name)))
}


randomBtn.addEventListener('click', () => {
    showName('')
    getRandomName()
});