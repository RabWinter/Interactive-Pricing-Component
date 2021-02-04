const init = function () {
 const slider = document.getElementById("price-range");
 const priceOutput = document.getElementById("price");
 const viewsOutput = document.getElementById("pageviews");
 const discountBtn = document.getElementById("discount");

 const views = ["10K", "50K", "100K", "500K", "1M"];
 const prices = [8, 12, 16, 24, 36];

 function updateOutput() {
  if (discountBtn.checked) {
   priceOutput.innerHTML = `${prices[slider.value] * 0.75}.00`;
   viewsOutput.innerHTML = `${views[slider.value]} PAGEVIEWS`;
  } else {
   priceOutput.innerHTML = `${prices[slider.value]}.00`;
   viewsOutput.innerHTML = `${views[slider.value]} PAGEVIEWS`;
  }
 }

 slider.addEventListener("input", (e) => {
  e.preventDefault();
  updateOutput();
  const color = `linear-gradient(90deg, rgb(165, 243, 235) ${
   slider.value * 25
  }%, rgb(234, 238, 251) ${slider.value * 25}%)`;
  slider.style.background = color;
 });

 discountBtn.addEventListener("click", () => {
  updateOutput();
  console.log("click");
 });
};
init();
