let movies=[
    {
        name:"Money Heist",
        poster:"./images/400e2f9e969c0debca96fbb43e6eebba.jpg",
        rating: "8.2",
        actor:"Berlin,Professor.."
    },
    {
        name:"Spiderman-Homecoming",
        poster:"./images/OIP.jpg",
        rating: "7.4",
        actor:"Tom Hollnad,Zendaya.."
    },
    {
        name:"Justice League",
        poster:"./images/download.jpg",
        rating:"7.2",
        actor:"Gal Gadot,Henry Cavil.."
    },
    {
        name:"Thor Ragnarok",
        poster:"./images/2.jpg",
        rating:"7.9",
        actor:"Chris Hemsworth,Tom Hiddleston.."
    },
    {
        name:"Iron Man",
        poster:"./images/3.jpg",
        rating:"7.9",
        actor:"Robert Downey Jr.,Gwyneth Paltrow.."
    },
    {
        name:"Avenger Endgame",
        poster:"./images/4.jpg",
        rating:"8.4",
        actor:"Robert Downey Jr.,Chris Evans.."
    },
    {
        name:"Bhaag Milkha Bhaag",
        poster:"./images/5.jpg",
        rating:"8.2",
        actor:"Farhan Akhtar.."
    },
    {
        name:"Avatar",
        poster:"./images/6.jpg",
        rating:"7.6",
        actor:"Sam Worthington,Zoe Saldana.."
    },
    {
        name:"Guardians of the Galaxy",
        poster:"./images/7.jpg",
        rating:"8.0",
        actor:"Chris Pratt,Vin Diesel.."
    },
    {
        name:"John Wick",
        poster:"./images/8.jpg",
        rating:"7.4",
        actor:"Keanu Reeves,Michael Nyqvist.."
    },
    {
        name:"Lagaan",
        poster:"./images/9.jpg",
        rating:"8.1",
        actor:"Aamir Khan,Gracy Singh.. "
    },
    {
        name:"Captain America",
        poster:"./images/10.jpg",
        rating:"6.9",
        actor:"Chris Evans,Hayley Atwell.."
    },
    {
        name:"Squid Game",
        poster:"./images/11.jpg",
        rating:"8",
        actor:"Lee Jung-jae,Park Hae-soo.."
    },
    
    {
        name:"Game of Thrones",
        poster:"./images/12.jpg",
        rating:"9.2",
        actor:"Kit Harington,Emilia Clarke.."
    },
    
    {
        name:"Vikings",
        poster:"./images/13.jpg",
        rating:"8.5",
        actor:"Travis Fimmel,Katheryn Winnick.."
    },
    
    {
        name:"Stranger Things",
        poster:"./images/14.jpg",
        rating:"8.7",
        actor:"Finn Wolfhard,Millie Bobby Brown.."
    }
    

]

function searchmovie(){
    let movie=document.querySelector('.search-field').value;
    if(movie!=="")//if anyone search with search field then perform matching operation on given array with input field
    {
        //filter function is used 
       let result= movies.filter(function(moviesarray){
           return moviesarray.name.toUpperCase().includes(movie.toUpperCase());
        })
        displaymovie(result);
    }
    else{
        //if user not search anything all movies are display
        displaymovie(movies);
    }
    
    
}
function displaymovie(data){
    // backtick used to display a html code (movie display code)
    let htmlstring=``;
   for(let i=0;i<data.length;i++){
    htmlstring=htmlstring+
    `<div class="movie" >
    <div class="overlay">
       <div class="video" ></div>
       <div class="details">
         <h1>${data[i].name}</h1>
         <h2>IMDB:-${data[i].rating}</h2>
         <p>${data[i].actor}</p>
       </div>
    </div>
    <img src="${data[i].poster}" class="poster">
   </div>`;
   }
   document.querySelector('.movies').innerHTML=htmlstring;
}
displaymovie(movies);
function contactus(){
    window.location.href="./contact.html";
}
function home(){
    window.location.href="./index.html";
}
