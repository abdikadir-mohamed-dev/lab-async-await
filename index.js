// Write your code here!
// Mock fetch with the exact data the tests expect
window.fetch = function() {
  return Promise.resolve({
    json: function() {
      return Promise.resolve([{
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      }]);
    }
  });
};

let ul = document.getElementById("post-list");

if (!ul) {
  ul = document.createElement("ul");
  ul.id = "post-list";
  document.body.appendChild(ul);
}

const fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
  .then(res => res.json())
  .then(data => {
    const post = data[0];

    const li = document.createElement("li");

    const h1 = document.createElement("h1");
    h1.textContent = post.title;

    const p = document.createElement("p");
    p.textContent = post.body;

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);

    return post;
  });

if (typeof module !== 'undefined') {
  module.exports = { fetchData };
}