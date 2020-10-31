var count = 0;
window.addEventListener("load",function(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://the-one-api.dev/v2/movie");
    xhr.setRequestHeader("authorization", "Bearer h_pfnkNaRk07MoA1d-ZP");    
    xhr.send()
    xhr.onload = function(){  
        var data = JSON.parse(this.response)    
        console.log(data)   
         renderDOM(data)
    }  

function renderDOM(data){
    var movieArray  = data.docs
    var resOne = document.getElementById('awardNomination')

    movieArray.forEach(function(user){
        var divOne = createAwards(user)
        resOne.append(divOne)
    })
}

function createAwards(user){
    var div = document.createElement('div')

    var name = document.createElement('div')
    var nomination = document.createElement('div')
    var winned = document.createElement('div')
    var boxOffice = document.createElement('div')
    var durations = document.createElement('div')

    name.innerText = "Name: "+ user.name 
    nomination.innerText = "Award Nominations: " + user.academyAwardNominations
    winned.innerText = "Awards Win: " + user.academyAwardWins
    boxOffice.innerText = "Box Office Collection: " + user.boxOfficeRevenueInMillions + " crores"
    var hours =  Math.floor((user.runtimeInMinutes) / 60)
    var minutes = (user.runtimeInMinutes) % 60
    durations.innerText = "Duration: " + hours + " hrs " + minutes + " min"

    div.append(name,nomination,winned,boxOffice,durations)
    div.setAttribute('class','awardNomination')
    div.style.border = '1px solid silver'
    div.style.padding = '10px '
    div.style.margin = '10px'
    div.style.width = "500px"
    div.style.float = 'left'

    return div
}    

})
