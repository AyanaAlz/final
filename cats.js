$(document).ready(function () {
  $("#catSearch").on("keyup", function () {
    const query = $(this).val().toLowerCase();

    $(".cat-card").each(function () {
      const title = $(this).find(".card-title").text().toLowerCase();
      const text = $(this).find(".card-text").text().toLowerCase();

      if (title.includes(query) || text.includes(query)) {
        $(this).fadeIn(200);
      } else {
        $(this).fadeOut(200);
      }
    });
  });
});
