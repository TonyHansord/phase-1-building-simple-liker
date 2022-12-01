// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
const likeBtn = document.querySelectorAll('.like-glyph');
const modal = document.getElementById('modal');

const like = (e) => {
  mimicServerCall('bogusURL')
    .then(() => {
      e.textContent = FULL_HEART;
      e.className = 'activated-heart';
    })
    .catch((error) => {
      modal.className = '';
      modal.innerText = error;
      setTimeout(() => (modal.className = 'hidden'), 3000);
    });
};

const unlike = (e) => {
  e.textContent = EMPTY_HEART;
  e.className = '';
};

likeBtn.forEach((element) => {
  element.addEventListener('click', (e) => {
    console.log(e);
    e.target.textContent === EMPTY_HEART ? like(e.target) : unlike(e.target);
    //Check if heart is full
    //Otherwise empty
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject('Random server error. Try again.');
      } else {
        resolve('Pretend remote server notified of action!');
      }
    }, 300);
  });
}
