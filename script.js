// api=  it as middle man
// https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1
var movies = [];

 const fetchData = async()=>{
    const res = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1")
    const data = await res.json();
    movies.push(...data.results)
    console.log(movies);
    movies.forEach(movie => createMovieCard(movie))
}

const createMovieCard = async(movie)=>{
    const div =document.createElement("div");
    div.classList.add("card");
    
    const img = document.createElement("img")
    
    const h3 = document.createElement("h3")
    h3.innerText = movie.title;

    const btn = document.createElement("button")
     btn.className = "btn btn-primary";
     btn.innerText = "Show-more";

     div.append(img, h3, btn)
     const cardGrid = document.getElementById('card-grid');
     cardGrid.appendChild(div);
}
// fetchData();
// var movies = [];
// const fetchData = async () => {
// const res = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=f531333d637d0c44abc85b3e74db2186&language=en-US&page=1')
// const data = await res.json();
// movies.push(...data.results);
// movies.forEach(movie => createMovieCard(movie))
// }
// const createMovieCard = async (movie) => {
// const card = document.createElement('div');
// card.classList.add('card')
// const img = document.createElement('img');
// img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
// const h3 = document.createElement('h3');
// h3.innerText = movie.title;
// const btn = document.createElement('button');
// btn.className = 'btn btn-primary';
// btn.innerText = 'Show More';
// card.append(img, h3, btn)
// const cardGrid = document.getElementById('card-grid');
// cardGrid.appendChild(card);
// }
