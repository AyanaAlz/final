$(document).ready(function () {
  const events = [
    {
      title: "Cat Yoga",
      description: "Every Monday at 11:00 AM - Stretch and relax while playful cats wander around. Don’t forget your mat!",
      img: "685e91eae9e9eedaacebdef9_BZALjPBtQAyCAqabBwBU.jpeg",
      btn: "Join"
    },
    {
      title: "Drawing with Cats",
      description: "Friday at 5:00 PM - Take part in a relaxing drawing session surrounded by adorable cats. Materials provided!",
      img: "SAAM-1970.171_1.jpg",
      btn: "Reserve"
    },
    {
      title: "Coffee and Meow",
      description: "Sunday at 2:00 PM - Chill with a cup of our special latte and the company of friendly cats.",
      img: "cat-cafes.jpg",
      btn: "Book a Spot"
    }
  ];
  $.each(events, function (index, event) {
    const col = $("<div>").addClass("col-12 col-md-6 col-lg-4");

    const card = $("<div>")
      .addClass("card h-100 shadow event-card")
      .css("display", "none");

    const img = $("<img>")
      .addClass("card-img-top")
      .attr("src", event.img)
      .attr("alt", event.title);

    const cardBody = $("<div>").addClass("card-body");
    const title = $("<h5>").addClass("card-title").text(event.title);
    const desc = $("<p>").addClass("card-text").text(event.description);
    const button = $("<button>")
      .addClass("btn btn-primary")
      .text(event.btn)
      .click(function () {
        const confirmation = $("<div>")
          .addClass("alert alert-success mt-3")
          .text(`You joined: ${event.title}!`)
          .hide()
          .fadeIn(500)
          .delay(3500)
          .fadeOut(900, function () {
            $(this).remove();
          });
        cardBody.append(confirmation);
      });
    cardBody.append(title, desc, button);
    card.append(img, cardBody);
    col.append(card);
    $("#eventContainer").append(col);
    card.delay(index * 300).fadeIn(600);
  });
});
