console.log("%cNetworking", "color: #3913B8; font-size: 20px;");

const getUsers = () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => data);
};

const getUsersButton = document.querySelector("#getUsers");
getUsersButton.addEventListener("click", async () => {
    const users = await getUsers();
    console.log(users);
});


const getPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    return data;
};

const getPostsButton = document.querySelector("#getPosts");
getPostsButton.addEventListener("click", () => {
    getPosts().then((data) => console.log(data));
});