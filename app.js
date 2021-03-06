
// Pop up action on home page

var $close = $(".close-pop-up");
var $popUp = $(".pop-up");
var $form = $(".pop-up-form");
var $upload = $(".upload-button");
var $closeForm = $(".close-form");

// click to close pop up
$close.on("click", function (e) {
  $popUp.addClass("clicked");
});

// click to open form
$upload.on("click", function (e) {
  $form.addClass("clicked");
});

// click to close form
$closeForm.on("click", function (e) {
  $form.removeClass("clicked");
});

/* jQuery for the navigation animation */

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    // Do something else, like open/close menu
  });

  /* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".navbar-menu");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");
    let getSidebarVisibility = document.querySelector(".side-nav");
    var $html = $("html");

    if (toggleNavStatus === false) {

      getSidebarVisibility.style.visibility = "visible"

      getSidebarLinks.forEach((item, index)=>{
        console.log(item);
        item.style.opacity = "1";
        item.style.visibility = "visible";
        });
      getSidebar.style.width = "60%";
      $html.addClass("clicked");
      toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
          item.style.transitionDelay = "0s";
          item.style.visibility = "hidden";
         });
        getSidebar.style.width = "0";
        $html.removeClass("clicked");
        toggleNavStatus = false;
    }
}

/* Modals collected in variables */

var $modalOne = $(".modal-one");
var $modalTwo = $(".modal-two");
var $modalThree = $(".modal-three");
var $modalFour = $(".modal-four");
var $modalFive = $(".modal-five");
var $modalSix = $(".modal-six");
var $modalSeven = $(".modal-seven");
var $modalEight = $(".modal-eight");
var $modalNine = $(".modal-nine");
var $modalTen = $(".modal-ten");
var $modalEleven = $(".modal-eleven");
var $modalTwelve = $(".modal-twelve");
var $modalThirteen = $(".modal-thirteen");
var $modalFourteen = $(".modal-fourteen");
var $modalFifteen = $(".modal-fifteen");
var $modalSixteen = $(".modal-sixteen");
var $modalSeventeen = $(".modal-seventeen");
var $modalEighteen = $(".modal-eighteen");
var $modalNineteen = $(".modal-nineteen");
var $modalTwenty = $(".modal-twenty");
var $modalTwentyOne = $(".modal-twenty-one");

/* Images collected in variables */

var $homeIcon = $(".home-icon");
var $html = $("html");

var $one = $("#one");
var $two = $("#two");
var $three = $("#three");
var $four = $("#four");
var $five = $("#five");
var $six = $("#six");
var $seven = $("#seven");
var $eight = $("#eight");
var $nine = $("#nine");
var $ten = $("#ten");
var $eleven = $("#eleven");
var $twelve = $("#twelve");
var $thirteen = $("#thirteen");
var $fourteen = $("#fourteen");
var $fifteen = $("#fifteen");
var $sixteen = $("#sixteen");
var $seventeen = $("#seventeen");
var $eighteen = $("#eighteen");
var $nineteen = $("#nineteen");
var $twenty = $("#twenty");
var $twentyOne = $("#twenty-one");

/* Add Clicked Class */

$one.on("click", function(e) {
  $modalOne.addClass("clicked");
  $html.addClass("clicked");
});

$two.on("click", function(e) {
  $modalTwo.addClass("clicked");
  $html.addClass("clicked");
});

$three.on("click", function(e) {
  $modalThree.addClass("clicked");
  $html.addClass("clicked");
});

$four.on("click", function(e) {
  $modalFour.addClass("clicked");
  $html.addClass("clicked");
});

$five.on("click", function(e) {
  $modalFive.addClass("clicked");
  $html.addClass("clicked");
});

$six.on("click", function(e) {
  $modalSix.addClass("clicked");
  $html.addClass("clicked");
});

$seven.on("click", function(e) {
  $modalSeven.addClass("clicked");
  $html.addClass("clicked");
});

$eight.on("click", function(e) {
  $modalEight.addClass("clicked");
  $html.addClass("clicked");
});

$nine.on("click", function(e) {
  $modalNine.addClass("clicked");
  $html.addClass("clicked");
});

$ten.on("click", function(e) {
  $modalTen.addClass("clicked");
  $html.addClass("clicked");
});

$eleven.on("click", function(e) {
  $modalEleven.addClass("clicked");
  $html.addClass("clicked");
});

$twelve.on("click", function(e) {
  $modalTwelve.addClass("clicked");
  $html.addClass("clicked");
});

$thirteen.on("click", function(e) {
  $modalThirteen.addClass("clicked");
  $html.addClass("clicked");
});

$fourteen.on("click", function(e) {
  $modalFourteen.addClass("clicked");
  $html.addClass("clicked");
});

$fifteen.on("click", function(e) {
  $modalFifteen.addClass("clicked");
  $html.addClass("clicked");
});

$sixteen.on("click", function(e) {
  $modalSixteen.addClass("clicked");
  $html.addClass("clicked");
});

$seventeen.on("click", function(e) {
  $modalSeventeen.addClass("clicked");
  $html.addClass("clicked");
});

$eighteen.on("click", function(e) {
  $modalEighteen.addClass("clicked");
  $html.addClass("clicked");
});

$nineteen.on("click", function(e) {
  $modalNineteen.addClass("clicked");
  $html.addClass("clicked");
});

$twenty.on("click", function(e) {
  $modalTwenty.addClass("clicked");
  $html.addClass("clicked");
});

$twentyOne.on("click", function(e) {
  $modalTwentyOne.addClass("clicked");
  $html.addClass("clicked");
});

/* Remove Clicked Class */

$homeIcon.on("click", function(e) {
  $modalOne.removeClass("clicked");
  $modalTwo.removeClass("clicked");
  $modalThree.removeClass("clicked");
  $modalFour.removeClass("clicked");
  $modalFive.removeClass("clicked");
  $modalSix.removeClass("clicked");
  $modalSeven.removeClass("clicked");
  $modalEight.removeClass("clicked");
  $modalNine.removeClass("clicked");
  $modalTen.removeClass("clicked");
  $modalEleven.removeClass("clicked");
  $modalTwelve.removeClass("clicked");
  $modalThirteen.removeClass("clicked");
  $modalFourteen.removeClass("clicked");
  $modalFifteen.removeClass("clicked");
  $modalSixteen.removeClass("clicked");
  $modalSeventeen.removeClass("clicked");
  $modalEighteen.removeClass("clicked");
  $modalNineteen.removeClass("clicked");
  $modalTwenty.removeClass("clicked");
  $modalTwentyOne.removeClass("clicked");
  $html.removeClass("clicked");
});

// ------------------------------------------------- DARK MODE -----------------------------
 
// Home Page

/* Navigation Bar and Body */
var $darkToggle = $('.dark-toggle')
var $navbarMenu = $(".navbar-menu");
var $sideNavA = $(".side-nav a");
var $activeMenu = $(".active-menu");
var $isActiveHamburger = $(".hamburger.is-active .hamburger-inner::after");
var $DTspan = $(".DTspan");
var $body = $("body");
var $mobileWrapper = $(".mobile-wrapper");
var $hamburgerInner = $(".hamburger-inner");
var $mobileLogo = $("#mobile-logo");
var $darkModeLogo = $(".dark-mode-logo");


/* Body Selections */
var $bodyP = $("body p");
var $bodyH2 = $("body h2");
var $bodyH3 = $("body h3");

/* Landing */
var $landingDark = $("#dark");
var $floatingBox = $(".floating-box");
var $whiteComb = $(".white-comb");
var $darkComb = $(".dark-comb");

/* Customer Service */
var $customerService = $("#customer-service");

/* Trust Us */
var $estimate = $(".estimate");
var $contentBack = $(".content-back");

/* Offer */
var $darkSVG = $(".dark-svg");
var $lightSVG = $(".light-svg");

/* Why Us */
var $whyUs = $("#why-us");

/* FAQ */
var $faq = $("#frequently-asked-questions");
var $faqH4 = $(".faq-group h4");
var $faqA = $(".faq-group a");
var $faqUL = $("ul li");

/* Spotlight */
var $spotlight = $("#spotlight");

/* Contact */
var $topH2 = $(".top h2");
var $topP = $(".top p");

/* Meet The Team */
var $meetTheTeam = $("#meet-the-team");
var $teamContent = $(".team-content");
var $teamContentP = $(".team-content p");

/* Footer */
var $footer = $("footer");

/* Blog */
var $SideBarH2 = $("#side-bar h2 a");
var $lightSide = $(".light-side");
var $darkSide = $(".dark-side");
var $blogPostH3 = $(".blog__post h4");
var $monthsH4 = $(".months a");
var $monthsH3 = $(".months h3");
var $headerH1 = $(".blog__post--header h1");
var $nav = $("nav");
var $2020 = $(".months p");

// -------------------------------------------
//             ABOUT PAGE
//--------------------------------------------

var $numberItemH4 = $('.number-item h4');
var $squareH2 = $('.square h2');

// -------------------------------------------
//             STORIES PAGE
//--------------------------------------------

var $story = $(".story");

// -------------------------------------------
//             CONTACT PAGE
//--------------------------------------------

var $contactTopper = $('.contact-topper');
var $contactRightH4 = $('.contact-right h4');
var $contactRightA = $('.contact-right a');

// Dark Mode Action
let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode');

const enableDarkMode = () => {

  /* Navigation */
  $darkToggle.addClass("dark-mode");
  $DTspan.addClass("dark-mode");
  $body.addClass("dark-mode");
  $navbarMenu.addClass("dark-mode");
  $sideNavA.addClass("dark-mode");
  $activeMenu.addClass("dark-mode");
  $isActiveHamburger.addClass("dark-mode");
  $mobileWrapper.addClass("dark-mode");
  $hamburgerInner.addClass("dark-mode");
  $mobileLogo.addClass("dark-mode");
  $darkModeLogo.addClass("dark-mode");

  /* Body Styles */
  $bodyP.addClass("dark-mode");
  $bodyH2.addClass("dark-mode");
  $bodyH3.addClass("dark-mode");

  /* Landing */
  $landingDark.addClass("dark-mode");
  $floatingBox.addClass("dark-mode");
  $whiteComb.addClass("dark-mode");
  $darkComb.addClass("dark-mode");

  /* Service */
  $customerService.addClass("dark-mode");

  /* Estimate/Trust Us */
  $estimate.addClass("dark-mode");
  $contentBack.addClass("dark-mode");

  /* Offer */
  $darkSVG.addClass("dark-mode");
  $lightSVG.addClass("dark-mode");

  /* Why Us */
  $whyUs.addClass("dark-mode");

  /* FAQ */
  $faq.addClass("dark-mode");
  $faqH4.addClass("dark-mode");
  $faqA.addClass("dark-mode");
  $faqUL.addClass("dark-mode");

  /* Spotlight */
  $spotlight.addClass("dark-mode");

  /* Meet The Team */
  $meetTheTeam.addClass("dark-mode");
  $teamContent.addClass("dark-mode");
  $teamContentP.addClass("dark-mode");

  /* Footer */
  $footer.addClass("dark-mode");

  // -------------------------------------------
  //             ABOUT PAGE
  //--------------------------------------------

  $numberItemH4.addClass("dark-mode");
  $squareH2.addClass("dark-mode");

  // -------------------------------------------
  //             STORIES PAGE
  //--------------------------------------------

  $story.addClass("dark-mode");

  // -------------------------------------------
  //             CONTACT PAGE
  //--------------------------------------------

  $contactTopper.addClass("dark-mode");
  $contactRightH4.addClass("dark-mode");
  $contactRightA.addClass("dark-mode");

  // -------------------------------------------
  //              BLOG PAGE
  //--------------------------------------------

  $SideBarH2.addClass("dark-mode");
  $lightSide.addClass("dark-mode");
  $darkSide.addClass("dark-mode");
  $blogPostH3.addClass("dark-mode");
  $monthsH4.addClass("dark-mode");
  $monthsH3.addClass("dark-mode");
  $headerH1.addClass("dark-mode");
  $2020.addClass("dark-mode");

  localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {

  /* Navigation */
  $darkToggle.removeClass("dark-mode");
  $DTspan.removeClass("dark-mode");
  $body.removeClass("dark-mode");
  $navbarMenu.removeClass("dark-mode");
  $sideNavA.removeClass("dark-mode");
  $activeMenu.removeClass("dark-mode");
  $isActiveHamburger.removeClass("dark-mode");
  $mobileWrapper.removeClass("dark-mode");
  $hamburgerInner.removeClass("dark-mode");
  $mobileLogo.removeClass("dark-mode");
  $darkModeLogo.removeClass("dark-mode");

  /* Body Styles */
  $bodyP.removeClass("dark-mode");
  $bodyH2.removeClass("dark-mode");
  $bodyH3.removeClass("dark-mode");

  /* Landing */
  $landingDark.removeClass("dark-mode");
  $floatingBox.removeClass("dark-mode");
  $whiteComb.removeClass("dark-mode");
  $darkComb.removeClass("dark-mode");

  /* Service */
  $customerService.removeClass("dark-mode");

  /* Estimate/Trust Us */
  $estimate.removeClass("dark-mode");
  $contentBack.removeClass("dark-mode");

  /* Offer */
  $darkSVG.removeClass("dark-mode");
  $lightSVG.removeClass("dark-mode");

  /* Why Us */
  $whyUs.removeClass("dark-mode");

  /* FAQ */
  $faq.removeClass("dark-mode");
  $faqH4.removeClass("dark-mode");
  $faqA.removeClass("dark-mode");
  $faqUL.removeClass("dark-mode");

  /* Spotlight */
  $spotlight.removeClass("dark-mode");

  /* Contact */
  $topH2.removeClass("dark-mode");
  $topP.removeClass("dark-mode");

  /* Meet The Team */
  $meetTheTeam.removeClass("dark-mode");
  $teamContent.removeClass("dark-mode");
  $teamContentP.removeClass("dark-mode");

  /* Footer */
  $footer.removeClass("dark-mode");

// -------------------------------------------
//             ABOUT PAGE
//--------------------------------------------

$numberItemH4.removeClass("dark-mode");
$squareH2.removeClass("dark-mode");

  // -------------------------------------------
  //             STORIES PAGE
  //--------------------------------------------

  $story.removeClass("dark-mode");

// -------------------------------------------
//             CONTACT PAGE
//--------------------------------------------

$contactTopper.removeClass("dark-mode");
$contactRightH4.removeClass("dark-mode");
$contactRightA.removeClass("dark-mode");

// -------------------------------------------
//               BLOG PAGE
//--------------------------------------------

  /* Blog */
  $SideBarH2.removeClass("dark-mode");
  $lightSide.removeClass("dark-mode");
  $darkSide.removeClass("dark-mode");
  $blogPostH3.removeClass("dark-mode");
  $monthsH4.removeClass("dark-mode");
  $monthsH3.removeClass("dark-mode");
  $headerH1.removeClass("dark-mode");
  $2020.removeClass("dark-mode");

  localStorage.setItem("darkMode", null)
}

if (darkMode == "enabled") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode !== "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
})

