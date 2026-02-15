const correctPassword = "1602";
let input = "";

const dots = document.querySelectorAll(".dots span");
const keys = document.querySelectorAll(".key");
const lockScreen = document.querySelector(".lock-screen");
const chatScreen = document.getElementById("chatScreen");
const messagesContainer = document.getElementById("messages");

const birthdayMessages = [
    "Chúc mừng sinh nhật anh - người đã ở bên em một năm qua 🎂",
    "Dù đôi lúc người này vẫn còn làm em buồn nhiều nhưng mà em vẫn thương ❤️",
    "Bình thường anh vẫn là người chủ động và hay nói lời tình cảm với em, nhưng em lại rất ít khi nói lời tình cảm với anh. Dù em có ít thể hiện nhưng anh yên tâm em vẫn luôn ở đây. Nhưng mà anh làm cho em buồn nhiều thì em không chơi với anh nữa đâu nha.",
    "Em không biết tương lai mình còn được đồng hành cùng nhau hay không 😊",
    "Nhưng hãy luôn vui vẻ nhé 😊",
    "Chúc anh có một ngày sinh nhật thật vui vẻ và hạnh phúc bên người thân nhé 😉",
    "Còn nữa...",
    "Mai Tết rùi,...",
    "Anh đang chờ phải ko kkk",
    "😋😋😋😋😋😋",
    "Happy birthday to you 🎉🎉🎉🎉🎉🎉",
    "Yêu anh ❤️❤️❤️"
];

keys.forEach(key => {
    key.addEventListener("click", () => {

        if(key.classList.contains("delete")){
            input = input.slice(0,-1);
        } else {
            if(input.length < 4){
                input += key.textContent;
            }
        }

        updateDots();

        if(input.length === 4){
            checkPassword();
        }
    });
});

function updateDots(){
    dots.forEach((dot,index)=>{
        dot.classList.toggle("filled", index < input.length);
    });
}

function checkPassword(){
    if(input === correctPassword){
        lockScreen.style.display = "none";
        chatScreen.style.display = "flex";
        showMessages();
    }else{
        lockScreen.classList.add("shake");
        setTimeout(()=>{
            lockScreen.classList.remove("shake");
            input="";
            updateDots();
        },300);
    }
}

// function showMessages(){
//     birthdayMessages.forEach((text,index)=>{
//         setTimeout(()=>{
//             const msg = document.createElement("div");
//             msg.className = "message sent";
//             msg.textContent = text;
//             messagesContainer.appendChild(msg);
//             messagesContainer.scrollTop = messagesContainer.scrollHeight;
//         }, index * 1200);
//     });
// }

function showMessages(){

    let totalDelay = 0;

    birthdayMessages.forEach((text, index) => {

        // Nếu là câu "Anh đang chờ phải ko kkk"
        if(text.includes("Anh đang chờ phải ko kkk")){
            totalDelay += 3000; // delay thêm 3 giây
        }

        setTimeout(()=>{
            const msg = document.createElement("div");
            msg.className = "message sent";
            msg.textContent = text;
            messagesContainer.appendChild(msg);
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, totalDelay);

        totalDelay += 1500; // khoảng cách giữa các tin nhắn bình thường
    });
}
