
const row_left = document.querySelector(".row-left")
var genres;


const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'write here your token key'
    }
  };


fetch('https://api.themoviedb.org/3/genre/movie/list?language=tr', options)
    .then(response => response.json())
    .then((response) => {
        genres = response["genres"]
    })
    .catch(err => console.error(err));

  
fetch('https://api.themoviedb.org/3/movie/top_rated?language=tr-TR&page=1', options)
    .then(response => response.json())
    .then((response) => {
        const films = response["results"]
        for (let i=0; i<films.length; i++) {
            let film = films[i]
            render_film(film)
        }
    })
    .catch(err => console.error(err));


const render_film = (film_informations) => {

    let release_date = film_informations["release_date"]
    let year = new Date(release_date).getFullYear();

    let new_overview = "";
    let overview = film_informations["overview"]
    
    if (overview.split(" ").length > 40) {
        overview = overview.split(" ")
        for (let i=0; i<40; i++) {
            new_overview += overview[i] + " "
        }
        new_overview += " . . ."
    } else {
        new_overview = overview
    }

    let genre_ids = film_informations["genre_ids"]
    let genre = "";
    for (let i=0; i<genre_ids.length; i++) {
        let genre_id = genre_ids[i]
        let gen = genres.filter(gen => gen["id"] == genre_id).map(gen => gen["name"])[0]
        genre += gen
        if (i+1 != genre_ids.length) {
            genre += " ,"
        }
    }


    html = `
        <div class="card">
            <div class="poster">
                <img src="https://image.tmdb.org/t/p/w200${film_informations["poster_path"]}" alt="" width="150">
            </div>
            <div class="film-infos">
                <div class="info">
                    <div class="base-infos">
                        <p class="title">${film_informations["title"]}</p>
                        <p class="original-name">${film_informations["original_title"]}</p>
                        <p class="kind">${genre}</p>
                    </div>
                    <div class="rate">
                        <div class="rate-star">
                            <i class="fa-solid fa-star"></i>
                            <p>${film_informations["popularity"]}</p>
                        </div>
                        <p>kişinin</p>
                        <p>favorisi</p>
                    </div>
                </div>
                <div class="extra-infos">
                    <div class="year">
                        <i class="fa-solid fa-calendar-days"></i>
                        <p>${year}</p>
                    </div>
                    <div class="time">
                        <i class="fa-solid fa-star"></i>
                        <p>${film_informations["vote_average"]}</p>
                    </div>
                    <div class="country">
                        <i class="fa-regular fa-flag"></i>
                        <p>${film_informations["original_language"]}</p>
                    </div>
                </div>
                <div class="statement">${new_overview}</div>
            </div>
        </div>
    `

    row_left.insertAdjacentHTML("beforeend", html)
}






backdrop_path
: 
"/nTPFkLUARmo1bYHfkfdNpRKgEOs.jpg"
genre_ids
: 
(2) [35, 10749]
id
: 
1072790
original_language
: 
"en"
original_title
: 
"Anyone But You"
overview
: 
"Harika bir ilk randevunun ardından Bea ve Ben'in ateşli çekiciliği buz gibi bir hal alır; ta ki kendilerini Avustralya'daki bir düğünde beklenmedik bir şekilde yeniden bir araya gelene kadar. Böylece her iki olgun yetişkinin yapacağı şeyi yaparlar: bir çiftmiş gibi davranmak.  Peki birbirlerinden nefret etmelerine rağmen bu oyunu sürdürebilecekler midir?"
popularity
: 
2089.297
poster_path
: 
"/vdlSv7mNhxt7gVJV6OI3RX9dVxz.jpg"
release_date
: 
"2023-12-21"
title
: 
"Senden Başka"
video
: 
false
vote_average
: 
6.877