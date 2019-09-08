let val='';
function uniueChar(value)
{
  //console.log(value);
  val=val+value;
  document.getElementById('clickedChar').innerHTML=val;
}
$(document).ready(function(){
  let timeCount,point,qc=1,n=0,charSet;
  //console.log(puzQue);
  charSet=puzQue[qc].charset.split(' ');
  $("#charSetButton").empty();
  $.each(charSet,function(k,v){
    //console.log(v);
    let btn='<input class="character-button" onclick="uniueChar(this.value)"  type="button" value="'+v+'">';
    $('#charSetButton').append(btn);
  });
  $('.clear').click(function(){
    $("#clickedChar").html('Guess The Word');
  });
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
