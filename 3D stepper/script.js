$(document).ready(function () {
  var zero = 0;
  var rotateY = 180;
  var value = 0;
  var count = 0;

  var setValue = function () {
    if (count % 2 === 0) {
      $(".value_front").text(value);
    } else {
      $(".value_back").text(value);
    }
  };

  $(".increment").on("mouseenter", function () {
    $(".increment").css({
      opacity: "1",
    });
    $(".decrement").css({
      opacity: ".2",
    });
  });

  $(".container").on("mouseout", function () {
    $(".increment").css({
      opacity: ".2",
    });
    $(".decrement").css({
      opacity: ".2",
    });
  });

  $(".decrement").on("mouseenter", function () {
    $(".decrement").css({
      opacity: "1",
    });
    $(".increment").css({
      opacity: ".2",
    });
  });

  $(".increment").on("mousedown", function () {
    count++;
    $(".container").css({
      transform: "rotateY(" + (zero = zero + rotateY) + "deg)",
    });
    value++;
    setValue();
  });

  $(".decrement").on("mousedown", function () {
    count++;
    $(".container").css({
      transform: "rotateY(" + (zero = zero - rotateY) + "deg)",
    });
    value--;
    setValue();
  });
});
