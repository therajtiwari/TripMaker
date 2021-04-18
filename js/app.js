// adult counter
$("#plusa").click(function () {
  changeValueA(1);
});
$("#minusa").click(function () {
  changeValueA(-1);
});

function changeValueA(val) {
  var container = $("#valuea");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}

// child counter

$("#plusc").click(function () {
  changeValueC(1);
});
$("#minusc").click(function () {
  changeValueC(-1);
});

function changeValueC(val) {
  var container = $("#valuec");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}
