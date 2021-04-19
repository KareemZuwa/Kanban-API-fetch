const apiURL = '../api/people.json'
const nameElement = document.getElementById('showName')
const randomBtn = document.getElementById('random-btn')

let showPerson = (person) => {
    nameElement.innerHTML = `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}, ${person.img}`
}





getRandomPerson = () => {
    fetch(apiURL)
        .then(res => res.json())
        .then(res => showPerson((res[Math.floor(Math.random() * 20)])))
}


randomBtn.addEventListener('click', () => {
    showPerson('')
    getRandomPerson()
});