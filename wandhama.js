var d3 = require("d3");

var name = [
  ["Sh Laas Koul", 42],
  ["Sh. Mohan Lal", 40],
  ["Sh. Bansi Lal", 35],
  ["Sh. Radha Krishen", 13],
  ["Sh. Lok Nath ", 42],
  ["Sh. Bandi Lal ", 26],
  ["Sh. Triloki Nath", 27],
  ["Sh. Avatar Kishan", 27],
  ["Smt. Deviki ", 12],
  ["Smt. Chand Rani", 28],
  ["Smt. Asha Ji ", 13],
  ["Smt. Geeta ", 40],
  ["Girja Bhat", 41],
  ["Princy Bhat", 29],
  ["Sushma Bhat", 13],
  ["Rajani Bhat", 43],
  ["Preetma Bhat", 22],
  ["Predman Bhat", 45],
  ["Rakesh Bhat", 23],
  ["Amit Bhat", 19],
];

var pics = [
  "Asset 1.png",
  "Asset 2.png",
  "Asset 3.png",
  "Asset 4.png",
  "Asset 5.png",
  "Asset 6.png",
  "Asset 7.png",
  "Asset 8.png",
  "Asset 9.png",
  "Asset 10.png",
  "Asset 11.png",
  "Asset 12.png",
  "Asset 13.png",
  "Asset 14.png",
  "Asset 15.png",
  "Asset 16.png",
  "Asset 17.png",
  "Asset 18.png",
  "Asset 19.png",
];

/*
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  ["Smt. Deviki ", 12],
  [],
  ["Smt. Asha Ji ", 13],
  [],
  [],
  [],
*/

var families = [
  ["Asset 1.png", "Predman Bhat", 45],
  ["Asset 2.png", "Rakesh Bhat", 23],
  ["Asset 3.png", "Amit Bhat", 19],
  ["Asset 6.png", "Princy Bhat", 29],
  ["Asset 9.png", "Rajani Bhat", 43],
  ["Asset 12.png", "Girja Bhat", 41],
  ["Asset 11.png", "Preetma Bhat", 22],
  ["Asset 13.png", "Sh Laas Koul", 42],
  ["Asset 5.png", "Sh. Radha Krishen", 13],
  ["Asset 4.png", "Sh. Bansi Lal", 35],
  ["Asset 7.png", "Sh. Bandi Lal ", 26],
  ["Asset 14.png", "Sh. Mohan Lal", 40],
  ["Asset 8.png", "Sh. Triloki Nath", 27],
  ["Asset 10.png", "Amit Bhat", 19],
  ["Asset 15.png", "Smt. Geeta ", 40],
  ["Asset 16.png", "Smt. Chand Rani", 28],
  ["Asset 17.png", "Sh. Lok Nath ", 42],
  ["Asset 18.png", "Sh. Avatar Kishan", 27],
  ["Asset 19.png", "Sushma Bhat", 13],
];

var x = 0;
var perRow = 5;

var desc = d3.select(".pic-description");

// while (x < pics.length) {
for (let i = 0; i < families.length; i++) {
  var photos = d3.select(`.photos > .photo-row`);

  var cont = photos
    .append("div")
    .attr("class", "photo-container")
    .attr("data-name", families[i][1])
    .attr("data-age", families[i][2]);

  cont.append("img").attr("src", "pics/" + families[i][0]);
}
// }

d3.selectAll(".photo-container").on("mouseover", function (e) {
  var pic = e.target;

  var x = pic.offsetLeft;
  var y = pic.offsetTop;

  // if (y > 400) {
  //   y -= 300;
  // }

  desc.style("top", y + 150 + "px");
  desc.style("left", x - 15 + "px");

  console.log(pic.dataset.name, pic.dataset.age);

  desc.select(".name").text(pic.dataset.name);
  desc.select(".age").text(pic.dataset.age);
  // desc.classed("show", true);
  desc.transition().duration(250).style("opacity", 1);
});

d3.selectAll(".photo-container").on("mouseout", function (e) {
  // desc.classed("show", false);
  desc.transition().duration(250).style("opacity", 0);
});

var maxSlide;

d3.selectAll(".slide").attr("data-slide", function (d, i) {
  return i;
});

// d3.selectAll(".go-down").on("click", function (e) {
//   var slideNum = e.target.parentElement.dataset.slide;
//   var h = window.innerHeight;

//   console.log(slideNum);

//   $("html, body").animate(
//     {
//       scrollTop: h * (slideNum + 1),
//     },
//     500
//   );
// });

document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splide", {
    autoHeight: true,
    width: "100vw",
    height: "100vh",
    direction: "ttb",
  }).mount();
});

d3.selectAll(".language-selection").on("click", function (e) {
  console.log(e.target);
  if (e.target.dataset.lang === "eng") {
    d3.selectAll(".urdu-text").style("display", "none");
    d3.selectAll(".english-text").style("display", "block");
  }
  if (e.target.dataset.lang === "urdu") {
    d3.selectAll(".english-text").style("display", "none");
    d3.selectAll(".urdu-text").style("display", "block");
  }
});

d3.selectAll(".urdu-text").style("display", "none");
d3.selectAll(".english-text").style("display", "block");
