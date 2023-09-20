var tagList = document.querySelector('.tagList')
var clearAll = document.querySelector('.clear-btn')
var title = document.querySelector('.title')
var input = document.querySelector('.content input')
var content = document.querySelector('.content')
var tags = []

function render() {
    tagList.innerHTML = ''
    for (var i = 0; i < tags.length; i++) {
        tagList.innerHTML += `<li class="tag">
                            ${tags[i]}
                            <i class="cancel fa-solid fa-xmark" onclick='removeTag(${i})'></i>
                            </li>`
    }
}
render()

input.addEventListener('keydown', function(e) {
    if (e.key == `Enter`) {
        tags.push(input.value.trim())
        render()
        input.value = ''
    }
})

function removeTag(index) {
    tags.splice(index, 1)
    render()
}

clearAll.addEventListener('click', function(){
    tags = []
    render()
})






