document.getElementById('ampm')
let datetime=new Date()


function displaytime(){
    let datetime=new Date();
    let hr=datetime.getHours();
    let min=datetime.getMinutes();
    let sec=datetime.getSeconds();
    if(hr>12){
        hr=hr-12
        ampm.innerHTML='pm'
    
        
    }

    document.getElementById('hours').innerHTML=hr
    document.getElementById('min').innerHTML=min
    document.getElementById('sec').innerHTML=sec

}


setInterval(displaytime,500)

  