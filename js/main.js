let arr = [
  ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"],
  ["1", "4", "7"], ["2", "5", "8"], ["3", "6", "9"],
  ["1", "5", "9"], ["3", "5", "7"]
];

let player1 = []
let player2 = []
var click =0

var flag = true

$('#page2').hide()

$(".button1").click(function () {
  $('#page1').hide()
  $('#page2').show()
  console.log($('#name1').val())
  nameOfplayer1 = $('#name1').val()
  nameOfplayer2 = $('#name2').val()

  console.log(nameOfplayer1)
})
// console.log(nameOfplayer1)

//   var welcomeF = first ;
//   var welcomeL = last ;
//   alert(welcomeF);
//   alert(welcomeL);
//   // return false; //To prevent it from going into next page.
// }


//
$(".button").click(function (e) {

  $(".col").html("");
  $(".col").removeClass("clicked");

  player1 = []
  player2 =[]

  flag = true
click =0

  $('.col').css('pointer-events','auto')


})
$(".col").click(function (e) {


let x = false;
  if (!$(this).hasClass("clicked")) {
    if (flag) {
      $(this).html("X");
      $(this).addClass("clicked");
      player1.push(e.target.id)
      flag = !flag


      arr.forEach(win => {
        if (player1.includes(win[0]) && player1.includes(win[1]) && player1.includes(win[2]) ){
        
      
          $('.col').css('pointer-events','none')  
          alert('Congratulations player '  + nameOfplayer1)      }
      });

    }

    else  {
      $(this).html("O");
      $(this).addClass("clicked");
      player2.push(e.target.id)
      flag = true

      arr.forEach(win => {
        if (player2.includes(win[0]) && player2.includes(win[1]) && player2.includes(win[2]) ){

          alert('Congratulations player ' + nameOfplayer2)

          x = true
          $('.col').css('pointer-events','none')
                }
      });

    }
    click ++
    if (click == 9){
      alert('Ops! try again' )
        
      
    }


  }
  $('.col')

  $('#configreset').click(function(){
    
    $('#configform')[0].reset();

});


});
