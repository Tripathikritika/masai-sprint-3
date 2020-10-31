var count = 0
function movieFunction(){
    var xhr = new XMLHttpRequest()
    xhr.open("GET", "https://the-one-api.dev/v2/character");
    xhr.setRequestHeader("authorization", "Bearer h_pfnkNaRk07MoA1d-ZP");    
    xhr.send()
   
    xhr.onload = function(){  
        var data = JSON.parse(this.response)    
        console.log(data)   
        renderDOM(data)
    }  
}

function renderDOM(data){
    var bookArray  = data.docs
    var res = document.getElementById('res')

    bookArray.forEach(function(user){
        var div = createCard(user)
        res.append(div)
    })
}

function createCard(user){
    var div = document.createElement('div')
    var input =  document.getElementById('search').value
    var showInput = ""
    var res = document.createElement('div')
  
    if(input === user.name){
        showInput =  input +"\n" + "Date Of Birth: " + user.birth +"\n" + "Gender: " + user.gender+"\n"  + "Realm: " + user.realm +"\n" + "Spouse Name: " + user.spouse+"\n"  + "Date Of Death: "  + user.death 
        localStorage.setItem("char",showInput)
        window.open('character.html')
    }

    else if(input != user.name) {
        count ++
        if(count===1){
            // res.innerText += "Sorry! no user found"
            res.style.color = 'red'
            res.style.fontSize = '20px'
            res.style.margin = '10px 10px 10px 0px'
        }  
    }
    div.append(res)
    return div
}

window.addEventListener("load",function(){
    var btn = document.getElementById('charBtn')
    btn.addEventListener('click',movieFunction)
})
