const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', async function () {
  try {
    const inputKeyword = document.querySelector('.input-keyword');
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);
  } catch (error) {
    alert(error);
  }
  
});

function getMovies(keyword) {
  return fetch('http://www.omdbapi.com/?apikey=dca61bcc&s=' + keyword)
    .then((r) => {
      if (!r.ok) {
        throw new Error(r.statusText)
      }
      return r.json();
    })
    .then((r) => {
      if (r.Response === 'False') {
        throw new Error(r.error);
      }
      return r.Search;
    });
}

function updateUI(movies) {
  let cards = '';
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector('.movie-container');
  movieContainer.innerHTML = cards;
}

// event binding
document.addEventListener('click', async function (e) {
  if (e.target.classList.contains('modal-detail-button')) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMovieDetail(imdbid);
    updateUIDetail(movieDetail);
  }
});

function getMovieDetail(imdbid) {
  return fetch('http://www.omdbapi.com/?apikey=dca61bcc&i=' + imdbid)
    .then((r) => r.json())
    .then((m) => m);
}

function updateUIDetail(m) {
  const movieDetail = showMovieDetail(m);
  const modalBody = document.querySelector('.modal-body');
  modalBody.innerHTML = movieDetail;
}



function showCards(m) {
  return `<div class="col-md-4 my-4">
            <div class="card">
              <img class="card-img-top" src="${m.Poster}">
              <div class="card-body">
                <h5 class="card-title">${m.Title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">${m.Year}</h6>
                <a href="#" data-imdbid="${m.imdbID}" class="btn btn-primary modal-detail-button" data-toggle="modal" data-target="#movieDetailModal">Show Details</a>
              </div>
            </div>
          </div>`;
}

function showMovieDetail(m) {
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <img src="${m.Poster}" class="img-fluid" alt="">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item"><h4>${m.Title} (${m.Year})</h4></li>
                  <li class="list-group-item"><strong>Director : </strong>${m.Director}</li>
                  <li class="list-group-item"><strong>Actor : </strong>${m.Actors}</li>
                  <li class="list-group-item"><strong>Writter : </strong>${m.Writter}</li>
                  <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`;
}
