
const playerSearch = function (e) {
    e.preventDefault();
    let name = $('.playerInput').val().trim();

    const queryUrl = `https://lookup-service-prod.mlb.com/json/named.search_player_all.bam?sport_code='mlb'&name_part='${name}%25'`;
    $.ajax({
        url: queryUrl,
        method: 'GET'
    }).then(function (response) {
        $('#playerResults').empty();
        $('.playerInput').empty();
        for (let i = 0; i < response.search_player_all.queryResults.row.length; i++) {
            $('#playerResults').append(`<div row><div col><div class="card" style="width: 18rem;">
    <img class="card-img-top" src="../assets/mlbLogo.jpg" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title nav-title">Player Name: ${response.search_player_all.queryResults.row[i].name_display_first_last}</h5>
      <p class="card-text nav-title"> Current Team: ${response.search_player_all.queryResults.row[i].team_full} <br />
      Professional Debut: ${response.search_player_all.queryResults.row[i].pro_debut_date}<br />
      Position: ${response.search_player_all.queryResults.row[i].position}<br />
      Bats: ${response.search_player_all.queryResults.row[i].bats}<br />
      Throws: ${response.search_player_all.queryResults.row[i].throws}<br />
      Height: ${response.search_player_all.queryResults.row[i].height_feet} Feet ${response.search_player_all.queryResults.row[i].height_inches} Inches



      </p>
      
    </div>  <p><button class="eventFlight btn flight-btn btn-primary" data-toggle="modal" data-target="#modalOpen">More Info</button></p></div></div>
  </div>`);
        }

    });



};
$('.playerSearch').on('click', playerSearch);

const revealSearchPage = function () {

    $('.form-inline').removeClass('hide');
    $('.h2').removeClass('hide');
    $('.slide').addClass('hide');
}
$('.searchPage').on('click', revealSearchPage);

const revealHomePage = function () {

    $('.form-inline').addClass('hide');
    $('.h2').addClass('hide');
    $('.slide').removeClass('hide');
}
$('.homePage').on('click', revealHomePage);

const clearResults = function (e){
    e.preventDefault();
    $('#playerResults').empty();
}
$('.clearResults').on('click', clearResults);