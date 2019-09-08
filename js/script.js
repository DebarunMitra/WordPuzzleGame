let val='',qc=0;
function uniueChar(value)
{
  val=val+value;
  document.getElementById('clickedChar').innerHTML=val;
}
$(document).ready(function(){
  let timeCount,point,n=1,charSet,hints,hintsCount=1;
  $('.hc').html(hintsCount);
  $('.hints').html(puzQue[qc].h1);
  charSet=puzQue[qc].charset.split(' ');
  $("#charSetButton").empty();
  $.each(charSet,function(k,v){
    let btn='<input class="character-button" onclick="uniueChar(this.value)"  type="button" value="'+v+'">';
    $('#charSetButton').append(btn);
  });
  $('.hintsBtn').click(function(){
    if(puzQue[qc].noh>hintsCount)
    {
      hintsCount=hintsCount+1;
      $('.hc').html(hintsCount);
      $('.hints').html(puzQue[qc]["h"+hintsCount]);
      n=hintsCount;
      console.log(n);
    }
    else {
      $('.hints').html('You Have Taken All Hints');
        //$('.hints').html(puzQue[qc].h1);
      //hintsCount=1;
    }
  });
  $('.clear').click(function(){
    $("#clickedChar").html('Guess The Word');
    val='';
  });
  let timeUpdate = function() {
    $('.t-sec').each(function() {
     timeCount = parseInt($(this).html());
      if (timeCount>=0) {
        $(this).html(timeCount +1+'sec');
      }
    });
  };
  setInterval(timeUpdate, 1000);
});
