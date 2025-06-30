const getTodos = async () => {
    const responce = await fetch('https://jsonfakery.com/movies/paginated');
    const data = await responce.json();
    console.log(data);
    movieList(data);
    bgImage(data);
}
getTodos();


function movieList(data){
let html = '';
data.data.forEach((item, i)=>{
     const title = item.original_title;
     const releaseDate = item.release_date;
     const releaseYear = releaseDate.split('/')[2];
     const posterImage = item.poster_path;
     const id = item.id;

    html = html + ` <div class="movieDetails">
                        <a class='page2' data-index='${i}' data-movie-id='${id}' href='matter.html'>
                        <div class="imageContainer">
                            <img src="${posterImage}" alt="${title}">
                        </div></a>
                        <div class="detailContainer">
                            <p class="movieTitle">${title}</p>
                            <p class="releaseYear">${releaseYear}</p>
                        </div>
                    </div>`
                });
document.querySelector('.row').innerHTML = html;
movieinfo(data);
localStorage.setItem('movieList', JSON.stringify(data.data));               
};

function movieinfo(data){
    document.querySelectorAll('.page2').forEach((element)=>{
    element.addEventListener('click', ()=>{
        const movieId = element.dataset.movieId;
        const i = element.dataset.index;
        localStorage.setItem('index', i); 
    });   
});
}

function bgImage(data){
    const images = data.data.map(item => item.backdrop_path);
    const div = document.querySelector('.trilerWrap');
    let index = 0;
    const styling = div.style
    styling.backgroundSize = 'cover';
    styling.backgroundPosition = 'top';
    

    setInterval(() => {
        index = (index + 1) % images.length; // loop back to start
        div.style.backgroundImage = `url('${images[index]}')`;
    }, 4000);
}

function scroolMouse(){

    const scrollRow = document.querySelector('.row');

    scrollRow.addEventListener('wheel', (evt) => {
        if (Math.abs(evt.deltaX) === 0) {
            evt.preventDefault();
            scrollRow.scrollLeft += evt.deltaY * 7; // Adjust sensitivity here
        }
    });

};


function scrollButton(){

    const row = document.querySelector('.row');
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

scroolMouse();
scrollButton();








