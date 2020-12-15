
$(document).ready(function(){
    $('#btn').click(()=>{
       
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
            $('#greska').html(error);

            $('#content').html(`
                
                <div id="info">
                <img src="${response.Poster}">
                <div>
                <p>Naslov:<span>${response.Title}</span></p>
                <p>Godina:<span>${response.Year}</span></p>
                <p>Datum objavljivanja: ${response.Released}<p/>
                <p>Trajanje:${response.Runtime}<p/>
                <p>Režiser:${response.Director}<p/>
                <p>Glumci:${response.Actors}<p/>
                <p>Radnja:${response.Plot}<p/>
                <p>
                </p>
                <p id="sezona">Broj sezona: ${response.totalSeasons}</p>
                <p>Ocjene gledalaca:<p>
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
                }
                },
        })
    }





