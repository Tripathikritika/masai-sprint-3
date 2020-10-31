var count = 0
window.addEventListener('load',function(){
        var xhr = new XMLHttpRequest()
        xhr.open('GET','https://the-one-api.dev/v2/book');
        xhr.send()
        xhr.onload = function(){  
            var data = JSON.parse(this.response)    
            console.log(data)   
            renderDOM(data)
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
        count++
        var div = document.createElement('div')
        var name = document.createElement('div')
        name.innerText = count +": "+ user.name
        div.append(name) 
        div.setAttribute('class','appendClass')
        return div
    }
  


})


   



