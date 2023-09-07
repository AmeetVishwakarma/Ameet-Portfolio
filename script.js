// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
// window.onscroll = function() {scrollFunction()};
// var anchorColor = document.getElementsByClassName("nav-link")
// function scrollFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     document.getElementById("nav").style.padding = " 4px 30px";
//     document.getElementById("nav").style.backgroundColor = "#3f6cc7 ";
//     document.getElementById("nav").style.opacity = "0.97";
//     // for (var i = 0; i <anchorColor.length;i++){
//     //     anchorColor[i].style.color = "white";
//     // }
//     document.getElementById("logo").style.fontSize = "25px";
//   } else {
//     document.getElementById("nav").style.padding = "10px 30px";
//     document.getElementById("nav").style.backgroundColor = "#095cac";
//     // for (var i = 0; i <anchorColor.length;i++){
//     //     anchorColor[i].style.color = "white";
//     // }
//     document.getElementById("logo").style.fontSize = "35px";
//   }
// }

// Ameet

const tabs = document.querySelectorAll(".tabs-container .tab");
const contents = document.querySelectorAll(".tabs-container .content");

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("tab-active");
  });

  contents.forEach((c) =>{
    c.classList.remove("content-active");
  });
};

tabs.forEach((t, i) =>{
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("content-active");
    t.classList.add("tab-active")
  });
});
