const chat = () => {
const sendBtn = document.querySelector(".text span");
const mssgSpace = document.querySelector(".text textarea");
const chatbox = document.querySelector(".chats");


let usermessage;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("mssg-list", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

sendBtn.addEventListener("click", handlechat => {
    usermessage = mssgSpace.value.trim();
    if(!usermessage) return;

    chatbox.appendChild(createChatLi(usermessage, "outgoing-mssg"));
});









};


window.addEventListener("load", chat);