$(document).ready(function () {
  const cats = [
    "our-cats-love-their-giant.jpg",
    "los-angeles-cat-cafe.jpg",
    "fdec1eca-cf10-41d9-a412-bd669a612450.jpg",
    "50b108ef-a440-447b-b5b9-57fc1ea171ad.jpg",
    "Без названия.jpg"
  ];

  let current = 0;
  const carousel = $("<div>").addClass("carousel");
  const img = $("<img>")
    .attr("src", cats[current])
    .addClass("carousel-img rounded shadow");

  const prevBtn = $("<button>").addClass("carousel-btn prev").text("❮");
  const nextBtn = $("<button>").addClass("carousel-btn next").text("❯");
  const caption = $("<p>").addClass("carousel-caption");

  carousel.append(prevBtn, img, nextBtn, caption);
  $("#gallery").append(carousel);

  function updateImage() {
    img.fadeOut(400, function () {
      img.attr("src", cats[current]).fadeIn(400);
    });
  }

  nextBtn.click(function () {
    current = (current + 1) % cats.length;
    updateImage();
  });

  prevBtn.click(function () {
    current = (current - 1 + cats.length) % cats.length;
    updateImage();
  });
  setInterval(() => {
    nextBtn.click();
  }, 5000);
});
