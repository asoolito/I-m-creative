let userName = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut recusandae accusamus, ipsam magni quasi quia facere necessitatibus praesentium. Ipsum recusandae mollitia, nulla voluptates aliquid sequi obcaecati quia modi officiis dignissimos Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ab error sit ratione inventore earum corporis doloribus, eos odit pariatur doloremque nam reprehenderit debitis beatae ipsa quisquam esse mollitia rem!"
text = document.createElement("p")
text.textContent = userName
document.body.appendChild(text)


let userNum = prompt("enter the background color")
let Num = prompt("Enter the text color")
document.body.style.backgroundColor = `${userNum}`
text.style.color = `${Num}`
