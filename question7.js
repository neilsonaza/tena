// 6.1 (3p) Hämta posts med fetch från denna url: https://jsonplaceholder.typicode.com/posts
// Visa title och body från varje post på sidan inuti: <div id="posts"></div>
// Visa endast posts från användaren med userId: 1

fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(posts => {
    const postsDiv = document.getElementById("postsWithComments");

    fetch("https://jsonplaceholder.typicode.com/comments")
      .then(response => response.json())
      .then(comments => {
        posts.forEach(post => {
          const postDiv = document.createElement("div");
          postDiv.style.padding = "20px";
          postDiv.style.margin = "10px";
          postDiv.style.fontWeight = "bold";
          postDiv.style.color = "gray";
          postDiv.style.backgroundColor = "lightgray";

          postDiv.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
          `;

          const commentsDiv = document.createElement("div");
          comments
            .filter(comment => comment.postId === post.id)
            .forEach(comment => {
              const commentDiv = document.createElement("div");
              commentDiv.style.padding = "20px";
              commentDiv.style.margin = "10px";
              commentDiv.style.fontWeight = "bold";
              commentDiv.style.color = "gray";
              commentDiv.style.backgroundColor = "lightgray";

              commentDiv.innerHTML = `
                <h4>${comment.name}</h4>
                <p>${comment.body}</p>
              `;

              commentsDiv.appendChild(commentDiv);
            });

          postDiv.appendChild(commentsDiv);
          postsDiv.appendChild(postDiv);
        });
      });
  });

// 6.2 (3p)
// Varje post ska ha padding: 20px och margin: 10px
// Texten på title ska vara bold
// Text-färgen ska vara grå
// Backgrundsfärgen på varje post ska vara ljus-grå
// När man för muspekaren över en post ska bakgrundsfärgen ändras till vit
// Visa posts i fyra kolumner för desktop och en kolumn för mobil

postDiv.style.padding = "20px";
postDiv.style.margin = "10px";
postDiv.style.fontWeight = "bold";
postDiv.style.color = "gray";
postDiv.style.backgroundColor = "lightgray";

postDiv.addEventListener("mouseover", () => {
  postDiv.style.backgroundColor = "white";
});

postDiv.addEventListener("mouseout", () => {
  postDiv.style.backgroundColor = "lightgray";
});

// 6.3 (3p)
// Hämta posts från url: https://jsonplaceholder.typicode.com/posts
// och hämta comments från denna url: https://jsonplaceholder.typicode.com/comments
// Visa title och body från varje post
// Under varje post visa alla dess tillhörande kommentarer.
// name och body visas för varje kommentar.
// Lägg alla posts med kommentarer på sidan inuti: <div id="postsWithComments"></div>
// Styla posts och comments på samma sätt som ovan.
// tips: comments är kopplade till posts med postId
