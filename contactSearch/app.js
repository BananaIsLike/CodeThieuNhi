var contacts = document.querySelector('.contacts')
var searchBtn = document.querySelector('.btn')
var input = document.querySelector('.input')
var userNames = document.querySelectorAll('.contact-name')
var listItem = []

contacts.innerHTML = ``

async function getData() {
    var apiURL = `https://randomuser.me/api?results=50`
    var data = await fetch(apiURL).then(res => res.json())
    var dataResults = data.results
    // console.log(dataResults)
    dataResults.forEach(user =>{
        var creatItem = document.createElement('li')
        creatItem.classList.add('contact')
        creatItem.innerHTML = `<img src="${user.picture.thumbnail}" alt="" class="contact-img">
                                <div class="contact-main">
                                    <div class="contact-name">
                                        ${user.name.title} ${user.name.first} ${user.name.last}
                                    </div>
                                    <div class="contact-number">
                                        <i class="fa-solid fa-phone"></i>
                                        ${user.phone}
                                    </div>
                                    <div class="contact-email">
                                        <i class="fa-solid fa-envelope"></i>
                                        ${user.email}
                                    </div>
                                </div>`
        contacts.appendChild(creatItem)
        listItem.push(creatItem)
    })
}

getData()

input.addEventListener('input', (e) => filterInput(e.target.value))

function filterInput(keySearch) {
    var searchTerm = keySearch.toLowerCase().split('')
    console.log(searchTerm)
    listItem.forEach(item =>{
        var userNameForCheck = item.innerText.toLowerCase().split('')
        console.log(userNameForCheck)
        userNameForCheck.forEach(element => {
            console.log()
        })
    })

}
   
      
        

