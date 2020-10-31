window.addEventListener("load",function(){

    var div = document.createElement('div')   
    var name = document.createElement('div')
    var res = document.getElementById('res')
    var items = localStorage.getItem("char")
    name.innerText =  items 
    name.style.fontSize = '30px'
    name.style.padding = '20% 15% 15% 20%'
    name.style.color = 'silver'
    
    res.append(name)
  
    return div

    
})
