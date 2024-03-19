const divEle = document.querySelector(".card-container");
let currentIndex = 0;
let users = [];

function fetchUsers() {
    const request = new XMLHttpRequest();
    request.open('GET', 'https://dummyjson.com/users');
    
    request.addEventListener('load', function () {
        let data = JSON.parse(this.responseText);
        users = data.users.slice(0, 12);
        displayUser(users[currentIndex]);
    });

    request.send();
}

function displayUser(user) {
    let divEl = `<div class="user-card">
        <img src="${user.image}" alt="Profile Image" class="user-image" />
        <h3>${user.firstName} ${user.lastName}</h3>
        <p class="email">${user.email}</p>
        <div>
            <button class="btn-prev">Previous</button>
            <button class="btn-next">Next</button>
        </div>
    </div>`;

    divEle.innerHTML = divEl;

    // Next button
    const nextButton = document.querySelector(".btn-next");
    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % users.length;
        updateImage(users[currentIndex].image);
    });

    // Previous button
    const prevButton = document.querySelector(".btn-prev");
    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + users.length) % users.length;
        updateImage(users[currentIndex].image);
    });
}

function updateImage(imageUrl) {
    const userImage = document.querySelector(".user-image");
    userImage.src = imageUrl;
}

fetchUsers();