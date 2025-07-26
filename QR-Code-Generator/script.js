const imgBox = document.querySelector('#imgBox');
const qrImage = document.querySelector('#qrImage');
const textInput = document.querySelector('#textInput');
const generateBtn = document.querySelector('button');

function qrgenerate() {
    if (textInput.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + textInput.value;
        imgBox.classList.add('show-img');
    }
}

generateBtn.addEventListener('click', qrgenerate);