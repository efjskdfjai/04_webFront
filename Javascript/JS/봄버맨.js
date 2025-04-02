// document.addEventListener('DOMContentLoaded', function () {
//   const bomberman = document.getElementById("bomberman");
//   const box = document.getElementById("box");
//   let bombermanX = 50;
//   let bombermanY = 50;


//   document.addEventListener("keydown", function (event) {
//     switch (event.key) {
//       case "ArrowRight":
//         bomberman.style.left = `${bombermanX}px`;
//         bombermanX += 1;
//       break;
//     }

//       switch (event.key) {
//         case "ArrowLeft":
//           bomberman.style.up = `${bombermanX}px`;
//           bombermanX -= 1;
//         break;
//       }

//   });

// });
let xindex = 0;
let yindex = 0;

document.addEventListener("keydown", function (e) {
  const bomberman = document.querySelector("#bomberman");

  console.log(e.key);

  switch (e.key) {
    case 'ArrowRight': xindex += 10; break;
    case 'ArrowLeft': xindex -= 10;  break;
    case 'ArrowUp': yindex -= 10; break;
    case 'ArrowDown': yindex += 10; break;
    case 'x': 
    const box = this.document.querySelector("#box");
    box.innerHTML += 
    `<img src="../../images/bomb.png"
    class="bomb"
    style="transform: translate(${xindex}px, ${yindex}px);
    position:absolute">`;
    
    break;
    case 'z': break;
    default: alert("방향키, z, x 만 가능");
  }

  bomberman.style.transform = `translate(${xindex}px, ${yindex}px)`;

});

const explodeBomb = () => {
  const bombs = document.querySelectorAll(".bomb");
  // bombs 유사배열 형태

  // for .. of 문 : 반복 가능한 객체의 요소를 순차적으로 순회하는 반복문
  for(let bomb of bombs) {
    bomb.src = "../../images/boomm.png";
    
  } 
}

