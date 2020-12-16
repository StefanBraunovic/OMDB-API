
$(document).ready(function(){
    $('#btn').click(()=>{
       

        $("form").submit((e) => {
            e.preventDefault(); })
    const newUrl = createURL();
    callApi(newUrl)
})
})

function createURL(){
    const title = document.querySelector('#naziv').value;
    const tip = document.querySelector('#type').value;
    const year = document.querySelector('#godina').value;
    const url =`http://www.omdbapi.com/?apikey=cb417685&t=${title}&type=${tip}&y=${year}`;

console.log(url);
return url;
}

function callApi(url){
    $.ajax({
        type:"GET",
        url:url,
        success: function(response){
            console.log(response);
           
            const error = response.Error;
           if (response.Response === "False") {
                return $('#content').html(`
                  <h1 class="text-center bg-danger container" >${error}</h1>  `
                )
              } 
              
             $('#content').html(`
                
                <div id="info" >
                <img id="slika" src="${(response.Poster)}">
                <div id="text">
                <p>Title:</p>
                <p>${response.Title}</p>
                <p>Year:</p>
                <p>${response.Year}</p>
                <p>Released:</p>
                <p>${response.Released}</p>
                <p>Runtime:</p>
                <p>${response.Runtime}</p>
                <p>Director:</p>
                <p>${response.Director}</p>
                <p>Actors:</p>
                <p>${response.Actors}</p>
                <p>Plot:</p>
                <p>${response.Plot}</p>
                <p id="sezona">Ttotal Seasons:</p>
                <p id="sezona1">${response.totalSeasons}</p>
                <p></p>
                <p class="ocjene">Ratings:</p>
                <div id="ocjene">
                ${response.Ratings.map((rating) => {
                    return `
                 
                      <p id="Source">${rating.Source}:</p>
                        <p id="Value">${rating.Value}</p>
                       
                    `;
                  }).join("")}
                  </div>
                  </div>
                </div>
                `,
                )
                if (response.Type==="movie") {
                    $("#sezona").html(" ");
                    $("#sezona1").html(" ")
                }
                if(response.Poster==="N/A"){
                    $("#slika").attr("src","/img/download.jpg"); 
                }
        }
    })
}





