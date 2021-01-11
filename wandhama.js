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

var x = 0;
var perRow = 5;

var desc = d3.select(".pic-description");

// desc.append("p").attr("class", "name").text("Lorem Ipsum");
// desc.append("p").attr("class", "age").text("XX years");

row = 1;
while (x < pics.length) {
  for (let i = x; i < x + perRow && i < pics.length; i++) {
    var photos = d3.select(`.photos > .row-${row}`);

    var cont = photos.append("div").attr("class", "photo-container");
    cont.append("img").attr("src", "pics/" + pics[i]);
  }

  x += perRow;
  row++;
}

// x += perRow;

// for (let i = x; i < x + perRow; i++) {
//   var photos = d3.select("#photos > .row-2");

//   var cont = photos.append("div").attr("class", "photo-container");
//   cont.append("img").attr("src", "pics/" + pics[i]);
// }

// x += perRow;

// for (let i = x; i < x + perRow && i < pics.length; i++) {
//   var photos = d3.select("#photos > .row-3");

//   var cont = photos.append("div").attr("class", "photo-container");
//   cont.append("img").attr("src", "pics/" + pics[i]);
// }

pics.forEach((pic, i) => {});

d3.select(".go-down").on("click", () => {
  window.scrollBy(window.innerHeight);
});

d3.selectAll(".photo-container").on("mouseover", function (e) {
  var pic = e.target;

  var x = pic.offsetLeft;
  var y = pic.offsetTop;

  // if (y > 400) {
  //   y -= 300;
  // }

  desc.style("top", y + 150 + "px");
  desc.style("left", x - 15 + "px");
  var rand = name[Math.floor(Math.random() * name.length)];
  desc.select(".name").text(rand[0]);
  desc.select(".age").text(rand[1]);
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
