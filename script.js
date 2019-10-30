"use script"

// Grab the posts JSON from reddit
fetch("https://www.reddit.com/r/aww/.json")
  // Parse the data into Javascript Arrays and Objects
  .then(res => res.json())
  // Run the code to display the posts
  .then(postsData => {
    console.log("Got data");

    // Get a variable reference to the post container element
    const postContainerEl = document.querySelector("#post-container");

    // Loop through the posts
    for (let i = 0; i < 10; i++) {
      // Reference the current post data in a variable
      const post = postsData.data.children[i].data;

      // Create the post element and add the "post" class
      const postEl = document.createElement("div");
      postEl.classList.add("post");

      // Add the post title
      const postTitleEl = document.createElement("h3");
      postTitleEl.classList.add("post-title");
      postTitleEl.innerText = post.title;
      postEl.appendChild(postTitleEl);

      // Add the post thumbnail image
      const postThumbEl = document.createElement("img");
      postThumbEl.classList.add("thumbnail");
      postThumbEl.setAttribute("src", `${post.thumbnail}`);
      postEl.appendChild(postThumbEl);

      // Add the link back to the original reddit post
      const postLinkEl = document.createElement("a");
      postLinkEl.classList.add("reddit-link");
      postLinkEl.href = `https://www.reddit.com${post.permalink}`;
      postLinkEl.innerText = "Original Reddit Post";
      postEl.appendChild(postLinkEl);

      // Attach the post to the post container
      postContainerEl.appendChild(postEl);
      // console.log("made a post");
    }
  });