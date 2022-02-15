const APIURL = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = async () => {
    const response = await fetch(APIURL);
    const resData = await response.json();

    return resData; 
}

const addPost = (post) => {
    const titleHTML ="<h1>" + post.title + "</h1>";
    const descriptionHTML = "<p>" + post.description + "</p>";
    const postElement = document.createElement('div');
    postElement.classList.add("post");

    postElement.innerHTML = titleHTML + descriptionHTML;

    document.body.appendChild(postElement);
}

const runApp = async() => {
    const post = await getPosts();

    post.forEach((post) => {
        addPost(post);
    });
}

runApp();