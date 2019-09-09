let val='',qc=0,point=0,level=0,cc=0,bonus=5;
function uniueChar(value)
{
  val=val+value;
  document.getElementById('clickedChar').innerHTML=val;
}
$(document).ready(function(){
  let timeCount,n=1,charSet,hints,hintsCount=1;
  //console.log(puzQue.length);
  let mainFunction=function(){
    val='';level=qc+1;cc=0;
    if(qc<puzQue.length)
    {
      $('.hc').html(hintsCount);
      $('.hints').html(puzQue[qc].h1);
      $('.l-count').html(puzQue[qc].level);
      $('.gamePoint').html(point);
      $("#clickedChar").html('Guess The Word');
      charSet=puzQue[qc].charset.split(' ');
      $("#charSetButton").empty();
      $.each(charSet,function(k,v){
        let btn='<input class="character-button" onclick="uniueChar(this.value)" style="background-color:'+colors[cc]+'"  type="button" value="'+v+'">';
        $('#charSetButton').append(btn);
        cc=cc+1;
      });
      qc=qc+1;
    }
    else if (level===(puzQue.length+1)){
      $('.firstContainer').css("display","none");
      $('.secondContainer').css("display","block");
      $('.image').attr("src","images/success.gif");
    }
    else {
      point=0;
      $('.firstContainer').css("display","none");
      $('.secondContainer').css("display","block");
      $('.image').attr("src","images/wrong.jpg");
    }
  };
        mainFunction();
  $('.hintsBtn').click(function(){
    if(puzQue[qc-1].noh>hintsCount)
    {
      hintsCount=hintsCount+1;
      $('.hc').html(hintsCount);
      $('.hints').html(puzQue[qc-1]["h"+hintsCount]);
      n=hintsCount;bonus=bonus-1;
    }
    else {
      $('.hints').html('You Have Taken All Hints');
      }
  });
  $('.clear').click(function(){
    $("#clickedChar").html('Guess The Word');
    val='';cc=0;
  });
  $('.check').click(function(){
    if($('#clickedChar').html()===puzQue[qc-1].word && level<=puzQue.length)
    {
      hintsCount=1;point=point+100*bonus;
      mainFunction();
    }
    else
    {
      point=0;
      $('.firstContainer').css("display","none");
      $('.secondContainer').css("display","block");
      $('.image').attr("src","images/wrong.jpg");
    }
  });
  $('.image').click(function(){
      location.reload();
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
