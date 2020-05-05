let movieList = {
    "movie": [
        {
            "youtubeid": "TcMBFSGVi1c",
            "title": "Avengers: Endgame"
        },
        {
            "youtubeid": "GokKUqLcvD8",
            "title": "The Dark Knight Rises"
        },
        {
            "youtubeid": "SIyoKbMByYc",
            "title": "Trailer Park Boys: The Movie"
        },
        {
            "youtubeid": "Nt9L1jCKGnE",
            "title": "Spider-Man: Far From Home"
        },
        {
            "youtubeid": "S1--V7ST-3k",
            "title": "Klovn The Final"
        },
    ]
};


//finding the root element
const app = document.getElementById('root');

//creating a container element
const container = document.createElement('div');
container.setAttribute('class', 'container');

//attaching the logo and the container to the root element
app.appendChild(container);


// URL'en er vores endpoint og indeholder den data vi skal bruge i vores fetch
const url = "https://www.omdbapi.com/?apikey=6ca43d39&t="
//for (let i = 0; i < movieList.movies.length; i++) {
//let final = url + movieList.movies[i].title.replace(/( )/g, "%20");

for (let i = 0; i < movieList.movie.length; i++) {
    let titleurl = movieList.movie[i].title.replace(/( )/g, "%20");
    fetch( url + titleurl)
        //when the promise is resolved we extract the JSON part of the response object
        .then(response => {
            return response.json();
        })
        .then(movie => {
// We iterate through all the objects
            console.log(movie.title);
            //Create a div with a card class
            const card = document.createElement('div');
            card.setAttribute('class', 'card');

            //Create an h1 (headline) and set the text content to the film's title
            const h1 = document.createElement('h1');
            h1.textContent = movie.Title;

            //Create a p and set the text content to the film's description
            const p = document.createElement('p');
            p.textContent = movie.Plot;

            // Create a age and set the text content to the film's description
            const age = document.createElement('p');
            age.textContent = "This film is " + ("2020" - movie.Year) + " years old.";
            age.setAttribute('class', 'age')

            // Create a IMDB rating
            const rate = document.createElement('rate');
            rate.textContent = "This film has the IMDB rating of: " + movie.imdbRating;

            // Create a frame for trailer
            const trailer = document.createElement('iframe');
            trailer.setAttribute('src',('https://www.youtube.com/embed/' + movieList.movie[i].youtubeid));

            // Create the thumbnail for trailer
            const thumbnail = document.createElement("img");
            thumbnail.setAttribute('src',('https://i3.ytimg.com/vi/' + movieList.movie[i].youtubeid + '/default.jpg'));


            // Insert/Append the values into the container
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(age);
            card.appendChild(rate);
            card.appendChild(trailer);
            card.appendChild(thumbnail);
            container.appendChild(card);
        })
        .catch(function (error) {
            // If failed - Show error msg
            console.log('error: ' + error);
        });
}