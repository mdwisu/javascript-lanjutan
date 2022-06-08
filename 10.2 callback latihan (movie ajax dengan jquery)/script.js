$('.search-button').click(function (e) { 
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=dca61bcc&s=' + $('.input-keyword').val(),
    success: function (response) {
      const movies = response.Search;
      let cards = '';
      movies.forEach(m => {
        cards += showCards(m);
      });
      $('.movie-container').html(cards);
  
      // ketika tombol detail di clik
      $('.modal-detail-button').click(function () {
        $.ajax({
          url:
            'http://www.omdbapi.com/?apikey=dca61bcc&i=' + $(this).data('imdbid'),
          success: function (m) {
            const movieDetail = showMovieDetail(m);
  
            $('.modal-body').html(movieDetail);
          },
          error: function (e) {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});


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