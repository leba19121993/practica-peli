let movieNameRef= document.getElementById("movie-name")
let searchBtn = document.getElementById("search-btn")
let result = document.getElementById("result")


// function to fetch data from api

let getMovie = () =>{
    let movieName = movieNameRef.value;
    let url =  `http://www.omdbapi.com/?t=${movieName}&apikey=${key}`;


    //if input field is empty

    if(movieName.length <= 0){
        result.innerHTML = `<h3 class="msg">Please enter a movie</h3>`;
    }

    //if input isn´t empty

    else{
        fetch(url).then((resp) => resp.json()).then.((data) =>{
            //if movie exist in database
            if(data.Response == "True"){
                result.innerHTML = `
                <div class="info">
                <img src=${data.Poster} class="poster">
                <div>
                    <h2>${data.Title}</h2>
                    <div class="rating">
                         <img src="start"  
                    </div>


                `
            }

        })
    }
}

