const weeks = document.querySelectorAll(".choose-week");
const frame = document.querySelector(".frame");
let giatri = weeks.options[e.selectedIndex].text;

console.log(giatri);

let curWeek = 1;

weeks.forEach(function (week) {
  week.addEventListener("onClick", function () {
    console.log(week);
  });
});
