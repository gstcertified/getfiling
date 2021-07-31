

// //scroll on fixtop navigation
window.onscroll = function() {fixNav()};

function fixNav() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("main-nav").className = "fixed";
  } else {
    document.getElementById("main-nav").className = "";
  }
}

/**tooltips***/
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// slick slider scroll 3 devision


     $('.service').slick({
        arrows:true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        
        responsive: [{
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 2,
      dots: false,
      arrows:false
    }
  }, {

    breakpoint: 300,
    settings: {
      slidesToShow: 1,
      dots: false,
      arrows:false
    }
  }]

});


/**search filter***/
function search() {
  document.getElementById('showSearch').style.display = 'block';
}
/***mobile toggle nav***/

    function tglBtn() {
      var mobmenu = document.getElementsByClassName("mn-dtl");
      mobmenu[0].style.left = '0';
      var overlay = document.getElementsByClassName("overlay");
      overlay[0].style.display = 'block';
    }
    function overlay() {
      var mobmenu = document.getElementsByClassName("mn-dtl");
      mobmenu[0].style.left = '-100%';
      var overlay = document.getElementsByClassName("overlay");
      overlay[0].style.display = 'none';
    }