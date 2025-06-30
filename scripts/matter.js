const i = localStorage.getItem('index');
console.log('Index from localStorage:', i);
const movieList = JSON.parse(localStorage.getItem('movieList'));
console.log(movieList);
const item = movieList[i];

function getcast(item){
    let html = '';
    item.casts.forEach((castDetails)=>{
    const realName = castDetails.original_name;
    const character = castDetails.character;
    const castImage = castDetails.profile_path;
    html = html + `<div class="single">
                        <div class="PhotoContainer"><div class="castPhoto"><img src="${castImage}" alt="Profile";
';"></div></div>
                        <div class="castDetails">
                            <p class="castName">${character}</p>
                            <p class="RealName">${realName}</p>
                        </div>
                   </div>`
    });
    document.querySelector('.castItem').innerHTML = html;
};

function getMovieData(item){
        const moviePoster = item.poster_path;
        const movieTitle = item.original_title;
        const releaseDate = item.release_date;
        const releaseYear = releaseDate.split('/')[2];
        const language = item.original_language;
        const rating = item.vote_average;
        const votes = item.vote_count;
        const popularity = item.popularity;
        const movieDiscription = item.overview
        
        

        
        html = `<div class="moviePoster"><img src="${moviePoster}">
                       </div>
                       <div class="movieCall">
                            <p class="movieTitle2">${movieTitle}</p>
                            <div class='yrla'>
                                <p class="releaseYear2">${releaseYear}</p>
                                <p class="language2">${language}</p>
                            </div>
                            <div class='rating'>
                                <i class="fa-brands fa-imdb"></i><p class="rating2">${rating}</p>
                                <i class="fa-solid fa-square-poll-vertical"></i><p class="votes2">${votes}</p>
                            </div>
                            <div class="options">
                                <button class="Watch"><i class="fa-solid fa-play"></i>Watch Free</button>
                                <i class="fa-solid fa-bookmark"></i>
                                <i class="fa-solid fa-circle-check"></i>
                                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                            </div>

                            <p class='movieDescription'>${movieDiscription}</p>
                </div>`  
    
    document.querySelector('.container1').innerHTML = html;
    document.querySelector('.titleCast').innerHTML = `Cast of ${movieTitle}`;
};


function getmainBg(item){
    const image = item.backdrop_path;
    const div = document.querySelector('.mainContainerWrap');
    const styling = div.style;

    styling.backgroundImage = ` url('${image}')`;
    styling.backgroundSize = 'cover';
    styling.backgroundPosition = 'center right';
    styling.backgroundSize = '100% 100%';
};


const scrollRow = document.querySelector('.castItem');

scrollRow.addEventListener('wheel', (evt) => {
    if (Math.abs(evt.deltaX) === 0) {
        evt.preventDefault();
        scrollRow.scrollLeft += evt.deltaY * 3; // Adjust sensitivity here
    }
});

function scrollButton(){

    const row = document.querySelector('.castItem');
    const leftArrow = document.querySelector('.arrow.left');
    const rightArrow = document.querySelector('.arrow.right');

    const scrollAmount = 500; // customize this based on your design

    leftArrow.addEventListener('click', () => {
    row.scrollLeft -= scrollAmount;
    });

    rightArrow.addEventListener('click', () => {
    row.scrollLeft += scrollAmount;
    });

};


getMovieData(item);
getcast(item);
getmainBg(item);
scrollButton();

