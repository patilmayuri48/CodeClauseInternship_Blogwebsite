document.addEventListener("DOMContentLoaded", () => {
  const likeBtn = document.getElementById("likeBtn");
  const likeCount = document.getElementById("likeCount");
  const postComment = document.getElementById("postComment");
  const commentName = document.getElementById("commentName");
  const commentText = document.getElementById("commentText");
  const commentList = document.getElementById("commentList");

  let count = parseInt(likeCount.innerText);

  likeBtn.addEventListener("click", () => {
    count++;
    likeCount.innerText = count;
  });

  postComment.addEventListener("click", () => {
    const name = commentName.value.trim();
    const text = commentText.value.trim();

    if (name && text) {
      const comment = document.createElement("div");
      comment.innerHTML = `<strong>${name}</strong>: ${text}`;
      commentList.appendChild(comment);
      commentName.value = "";
      commentText.value = "";
    } else {
      alert("Please enter both name and comment.");
    }
  });
});
