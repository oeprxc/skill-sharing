// Delete function

const deleteBtn = document.getElementById("deleteBtn");

const topics_comments = document.getElementById("topics_comments");

deleteBtn.addEventListener("click", () => {
  topics_comments.classList.toggle("hideText");
});

// Add comment

const commentForm = document.getElementById("commentForm");
const commentInput = document.getElementById("commentInput");
const userCommentList = document.getElementById("userCommentList");

const commentText = document.getElementById("commentText");

commentForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const userCommentInput = commentInput.value.trim();
  console.log(userCommentInput);

  if (userCommentInput === "") {
    alert("Leave a comment!");
    return;
  } else {
    const li = document.createElement("li");
    li.textContent = userCommentInput;
    userCommentList.append(li);

    // Update count
    const count = userCommentList.children.length;
    commentText.textContent = `Comments (${count})`;

    commentInput.value = "";
  }
});

// Update Talks.

const userTopic = document.getElementById("userTopic");

const talk_summaryForm = document.getElementById("talk_summaryForm");

const titleInput = document.getElementById("titleInput");



talk_summaryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const talkInput = titleInput.value.trim();
  if (talkInput === "") {
    alert("Please add title")
  } else{
   userTopic.textContent = talkInput;
  }
 
});


