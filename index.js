$(function() {
  $("#button").click(function(e){
    e.preventDefault();
    $.ajax({
      method: "GET",
      beforeSend: function(request) {
        request.setRequestHeader("X-Mashape-Key", 'JffA8g8glAmsh2NPH79UZNpC40xbp1V4Y2njsnOsAsnikSS5x2');
      },
      url: "https://omgvamp-hearthstone-v1.p.mashape.com/cards/Ysera",
      dataType: 'json',
      success: function(data) {
        data = JSON.parse(data);
        console.log(data);
      }
    });
  });
});