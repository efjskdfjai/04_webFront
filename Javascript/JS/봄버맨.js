document.addEventListener('DOMContentLoaded', function () {
  const bomberman = document.getElementById("bomberman");
  const box = document.getElementById("box");
  let bombermanX = 50;
  let bombermanY = 50;


  document.addEventListener("keydown", function (event) {
    switch (event.key) {
      case "ArrowRight":
        bomberman.style.left = `${bombermanX}px`;
        bombermanX += 1;
      break;
    }

      switch (event.key) {
        case "ArrowLeft":
          bomberman.style.up = `${bombermanX}px`;
          bombermanX -= 1;
        break;
      }

  });

});
