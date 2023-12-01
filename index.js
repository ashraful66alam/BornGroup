const cursorRounded = document.querySelector(".rounded");
const inner = document.querySelector(".inner");

const moveCursor = (e) => {
  const cursorWidth = cursorRounded.clientWidth;
  const cursorHeigth = cursorRounded.clientHeight;

  // const mouseY = e.clientY;
  // const mouseX = e.clientX;

  const mouseY = e.pageY;
  const mouseX = e.pageX;

  cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  // cursorRounded.style.left = `${-cursorWidth / 2}px`;
  // cursorRounded.style.top = `${-cursorHeigth / 2}px`;
};

window.addEventListener("mousemove", moveCursor);

$(".title, li ,a").mouseover(function () {
  const change = 100;
  // cursorRounded.style.left = `${-change / 50}px`;
  // cursorRounded.style.top = `${-change / 50}px`;

  $(cursorRounded).css("background-color", "rgba(0, 208, 132, .51)");

  $(cursorRounded).animate(
    {
      width: change,
      height: change,
      left: -(change / 2),
      // "margin-left": "-40",
      top: -(change / 2),
      // "margin-top": "-40",
    },
    200,
    "linear",
    function () {
      // const cursorWidth = cursorRounded.clientWidth;
      // const cursorHeigth = cursorRounded.clientHeight;
      // cursorRounded.style.left = `${-cursorWidth / 2}px`;
      // cursorRounded.style.top = `${-cursorHeigth / 2}px`;

      $(inner).html("Learn more!");
    }
  );
});
$(".title, li ,a").mouseout(function () {
  const change = 20;
  // cursorRounded.style.left = `${-change / 2}px`;
  // cursorRounded.style.top = `${-change / 2}px`;
  $(cursorRounded).css("background-color", "rgba(0, 208, 132, 1)");
  $(cursorRounded).animate(
    {
      width: 20,
      height: 20,
      left: -10,
      top: -10,
    },
    200,
    "linear",
    function () {
      // const cursorWidth = cursorRounded.clientWidth;
      // const cursorHeigth = cursorRounded.clientHeight;
      // cursorRounded.style.left = `${-cursorWidth / 2}px`;
      // cursorRounded.style.top = `${-cursorHeigth / 2}px`;

      $(inner).html("");
    }
  );
});
