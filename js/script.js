$(document).ready(function(){
  let timeCount;
  //console.log(puzQue);
  let timeUpdate = function() {
    $('.t-sec').each(function() {
     timeCount = parseInt($(this).html());
      if (timeCount>=0) {
        $(this).html(timeCount +1);
      }
    });
  };
  setInterval(timeUpdate, 1000);
});
