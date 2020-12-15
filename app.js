
$(document).ready(function(){
    $('#btn').click(()=>{
       
    const newUrl = createURL();

    callApi(newUrl)

    })

   
})



function createURL(){
    const  title = document.querySelector('#naziv').value;
    const url ="http://www.omdbapi.com/?apikey=cb417685&t="+title;
    
console.log(url);
return url;
}

function callApi(url){
    $.ajax({
        type:"GET",
        url:url,
        success: function(response){
            console.log(response);
        }
        
    })
    
}




