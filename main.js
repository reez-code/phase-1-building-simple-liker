// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
let modal = document.querySelector(".hidden");

let heart = document.querySelectorAll(".like-glyph");
fetch(mimicServerCall)
  .then((res) => console.log(res))
  .catch((err) => {
    modal.className = "";
    document.getElementById("modal-message").innerText = err;
    setTimeout(returnClass, 3000);
    function returnClass() {
      modal.className = "hidden";
      document.getElementById("modal-message").className = "hidden";
    }
  })
  .then(() => {
    for (const change of heart) {
      change.addEventListener("click", changeToBigHeart);
      function changeToBigHeart() {
        if (change.className !== "activated-heart") {
          change.className = "activated-heart";
          change.innerText = FULL_HEART;
        } else {
          change.className = "";
          change.innerText = EMPTY_HEART;
        }
      }
    }
  });
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

// let heart = document.getElementsByClassName("like-glyph");
//     for (let i = 0; i < heart.length; i++) {
//       heart[i].addEventListener("click", changeToBigHeart);
//     }
//     function changeToBigHeart() {
//       if (heart.className !== "activated-heart") {
//         heart.className = "activated-heart";
//         heart.innerText = FULL_HEART;
//       } else {
//         heart.className = "";
//         heart.innerText = EMPTY_HEART;
//       }
//     }
