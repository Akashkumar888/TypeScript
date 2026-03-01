"use strict";
// ===============================
// DOM SELECTORS
// ===============================
const getUserName = document.querySelector("#user");
const formSubmit = document.querySelector(".form");
const main_container = document.querySelector(".main-container");
// ===============================
// GLOBAL STATE (Store users once)
// ===============================
let allUsers = [];
// ===============================
// SHOW RESULT UI
// ===============================
const showResultUI = (singleUser) => {
    const { avatar_url, login, location, html_url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `
      <div class="card">
        <img src="${avatar_url}" alt="${login}">
        <h3>${login}</h3>
        <p>${location ?? "Location not available"}</p>
        <a href="${html_url}" target="_blank">View Profile</a>
      </div>
    `);
};
// ===============================
// GENERIC FETCHER
// ===============================
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Status: ${response.status}`);
    }
    return await response.json();
}
// ===============================
// DISPLAY USERS
// ===============================
const displayUsers = (users) => {
    main_container.innerHTML = "";
    if (users.length === 0) {
        main_container.insertAdjacentHTML("beforeend", `<p class="empty-msg">No matching users found</p>`);
        return;
    }
    users.forEach(user => showResultUI(user));
};
// ===============================
// FILTER FUNCTION
// ===============================
const filterUsers = (searchTerm) => {
    const filteredUsers = allUsers.filter(user => user.login.toLowerCase().includes(searchTerm.toLowerCase()));
    displayUsers(filteredUsers);
};
// ===============================
// INITIAL FETCH (Run Once)
// ===============================
const init = async () => {
    try {
        allUsers = await myCustomFetcher("https://api.github.com/users");
        displayUsers(allUsers);
    }
    catch (error) {
        console.error(error);
    }
};
// ===============================
// LIVE SEARCH (Auto While Typing)
// ===============================
getUserName.addEventListener("input", () => {
    const value = getUserName.value.trim();
    if (!value) {
        displayUsers(allUsers);
    }
    else {
        filterUsers(value);
    }
});
// ===============================
// FORM SUBMIT (Still Works)
// ===============================
formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = getUserName.value.trim();
    if (!value)
        return;
    filterUsers(value);
});
// ===============================
// START APP
// ===============================
init();
