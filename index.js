const inputForm = document.querySelector('#inputForm');
const outputForm = document.querySelector('#outputForm');
const secretMessageForm = document.querySelector('#secretMessageForm');

const {hash} = window.location;
const message = atob(hash.replace('#',''));

//Check if hash has encrypted message
if (message) {
    inputForm.classList.add('hide');
    secretMessageForm.classList.remove('hide')
    document.querySelector('h1').innerText = message;
}


inputForm.addEventListener('submit', (event) => {
    event.preventDefault();

    inputForm.classList.add('hide');
    outputForm.classList.remove('hide');

    const messageTextBox = document.querySelector('#messageTextBox');

    const encryptedText = btoa(messageTextBox.value);
    const link = document.querySelector('#linkTextBox');
    link.value = `${window.location}#${encryptedText}`;
    link.select();

});

