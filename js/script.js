const likeBtn = document.getElementById("likeBtn");
const dislikeBtn = document.getElementById("dislikeBtn");
const countSpan = document.getElementById("likeCount");

let count = 0;
let liked = false;
let disliked = false;

// LIKE
likeBtn.addEventListener("click", function () {
  if (!liked) {
    liked = true;
    likeBtn.classList.add("liked");
    count++; // 

    if (disliked) {
      disliked = false;
      dislikeBtn.classList.remove("disliked");
      count++;
    }

  } else {
    liked = false;
    likeBtn.classList.remove("liked");
    count--; 
  }

  countSpan.textContent = count;
});


dislikeBtn.addEventListener("click", function () {
  if (!disliked) {
    disliked = true;
    dislikeBtn.classList.add("disliked");
    count--; 

    if (liked) {
      liked = false;
      likeBtn.classList.remove("liked");
      count++; 
    }

  } else {
    disliked = false;
    dislikeBtn.classList.remove("disliked");
    count--;
  }

  countSpan.textContent = count;
});