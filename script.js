// Delete function

const deleteBtn = document.getElementById("deleteBtn");

const topics_comments = document.getElementById("topics_comments");

deleteBtn.addEventListener("click", () => {
  topics_comments.classList.toggle("hideText");
  if(topics_comments.classList.contains("hideText")) {
    deleteBtn.textContent = "Show Talk"
  } else {
    deleteBtn.textContent = "Delete Talk"
  }
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

  // Update comment
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

const topicText = document.querySelector(".topicText");

const summaryText = document.getElementById("summaryText");

// Updating the author
const author = document.getElementById("author");
const userName = document.getElementById("userName");

talk_summaryForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Update title
  const talkInput = titleInput.value.trim();
  if (talkInput === "") {
    alert("Please add a title");
  } else {
    userTopic.textContent = talkInput;
  }

  //  Update summary
  const summaryInput = summaryText.value.trim();
  if (summaryInput === "") {
    alert("Please add a summary.");
    return;
  }

  topicText.textContent = summaryInput;

  // Update author
  const userNameInput = userName.value.trim();
  if (userNameInput === "") {
    alert("authored by who?");
  } else {
    author.innerHTML = `by <strong>${userNameInput}</strong>`;
    return;
  }

});
