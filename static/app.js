// class Chatbox {
//     constructor() {
//         this.args = {
//             openButton: document.querySelector('.chatbox__button'),
//             chatbox: document.querySelector('.chatbox__support'),
//             sendButton: document.querySelector('.send__button')
//         }

//         this.state = false;
//         this.messages = [];
//     }

//     display() {
//         const { openButton, chatbox, sendButton } = this.args;
        
//         openButton.addEventListener('click', () => this.toggleState(chatbox));
//         sendButton.addEventListener('click', () => this.onSendButton(chatbox));

//         const node = chatbox.querySelector('input');
//         node.addEventListener("keyup", ({ key }) => {
//             if (key === "Enter") {
//                 this.onSendButton(chatbox);
//             }
//         });
//     }

//     toggleState(chatbox) {
//         this.state = !this.state;
//         console.log("in toggle state");
//         if (this.state) {
//             chatbox.classList.add('chatbox--active');
//         } else {
//             chatbox.classList.remove('chatbox--active');
//         }
//     }

//     onSendButton(chatbox){	
//         var textField = chatbox.querySelector('input');	
//         let text1 = textField.value	
//         if (text1 === "") {	
//             return;	
//         }	
//         let msg1 = { name: "User", message: text1 }	
//         this.messages.push(msg1);	
//         // 'http://127.0.0.1:5000/predict	
//         fetch($SCRIPT_ROOT + '/predict', {	
//             method: 'POST',	
//             body: JSON.stringify({message: text1}),	
//             mode: 'cors',	
//             headers: {	
//                 'Content-type': 'application/json'	
//             },	
//         })	
//         .then(r => r.json())	
//         .then(r => {	
//             let msg2 = { name: "Chatbot", message: r.answer };	
//             this.messsage.push(msg2);	
//             this.updateChatText(chatbox)	
//             textField.value = ''	
//         }).catch((error) => {	
//             console.error('Error:', error);	
//             this.updateChatText(chatbox)	
//             textField.value = ''	
//         });	
//     }

//     updateChatText(chatbox) {	
//         var html = '';	
//         this.messages.slice().reverse().forEach(function(item, index) {	
//             if (item.name === "Chatbot"){	
//                 html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>'	
//             } else {	
//                 html += '<div class="messages__item messages__item--operator">' + item.message + '</div>'	
//             }	
//         });	
//         const chatmessage = chatbox.querySelector(chatbox__messages);	
//         chatmessage.innerHTML = html;	
//     }

// }

// const chatbox = new Chatbox();
// chatbox.display();

class Chatbox {
    constructor() {
        this.args = {
            openButton: document.querySelector('.chatbox__button'),
            chatbox: document.querySelector('.chatbox__support'),
            sendButton: document.querySelector('.send__button')
        }

        this.state = false;
        this.messages = [];
    }

    display() {
        const { openButton, chatbox, sendButton } = this.args;

        openButton.addEventListener('click', () => this.toggleState(chatbox));
        sendButton.addEventListener('click', () => this.onSendButton(chatbox));

        const node = chatbox.querySelector('input');
        node.addEventListener("keyup", ({ key }) => {
            if (key === "Enter") {
                this.onSendButton(chatbox);
            }
        });
    }

    toggleState(chatbox) {
        this.state = !this.state;
        console.log("in toggle state");
        if (this.state) {
            chatbox.classList.add('chatbox--active');
        } else {
            chatbox.classList.remove('chatbox--active');
        }
    }

    onSendButton(chatbox) {
        var textField = chatbox.querySelector('input');
        let text1 = textField.value;
        if (text1 === "") {
            return;
        }
        let msg1 = { name: "User", message: text1 };
        this.messages.push(msg1);

        // 'http://127.0.0.1:5000/predict
        fetch($SCRIPT_ROOT + '/predict', {
            method: 'POST',
            body: JSON.stringify({ message: text1 }),
            mode: 'cors',
            headers: {
                'Content-type': 'application/json'
            },
        })
            .then(r => r.json())
            .then(r => {
                let msg2 = { name: "Chatbot", message: r.answer };
                this.messages.push(msg2); // Fix typo here
                this.updateChatText(chatbox);
                textField.value = '';
            }).catch((error) => {
                console.error('Error:', error);
                this.updateChatText(chatbox);
                textField.value = '';
            });
    }

    updateChatText(chatbox) {
        var html = '';
        this.messages.slice().reverse().forEach(function (item, index) {
            if (item.name === "Chatbot") {
                html += '<div class="messages__item messages__item--visitor">' + item.message + '</div>';
            } else {
                html += '<div class="messages__item messages__item--operator">' + item.message + '</div>';
            }
        });
        const chatmessage = chatbox.querySelector('.chatbox__messages'); // Fix selector here
        chatmessage.innerHTML = html;
    }

}

const chatbox = new Chatbox();
chatbox.display();
