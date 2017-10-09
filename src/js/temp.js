//This code is for dropdown menu demonstration

$( document ).ready(function() {
    //dropdown demo

    var card_area = $('.card-area-dropdown');
    card_area.hide();
    $('.card-inner-location').on('click', function() {
      if ( card_area.is(':hidden') ) {
        card_area.slideDown();
      } else {
        card_area.slideUp();
      }
    });

    var stats_area = $('.stats-area-dropdown');
    stats_area.hide();
    $('.stats-room-select').on('click', function() {
      if ( stats_area.is(':hidden') ) {
        stats_area.slideDown();
      } else {
        stats_area.slideUp();
      }
    });

    var occupancy_area = $('.occupancy-area-dropdown');
    occupancy_area.hide();
    $('.stats-occupancy-select').on('click', function() {
      if ( occupancy_area.is(':hidden') ) {
        occupancy_area.slideDown();
      } else {
        occupancy_area.slideUp();
      }
    });

});
