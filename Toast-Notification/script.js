const materialSymbolsLink = document.createElement('link');
materialSymbolsLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
materialSymbolsLink.rel = 'stylesheet';
document.head.appendChild(materialSymbolsLink);

const successBtn = document.querySelector('#success');
const errorBtn = document.querySelector('#error');
const invalidBtn = document.querySelector('#invalid');

let toastBox = document.querySelector('#toastBox');

let successMsg = `
  <span class="material-symbols-outlined">check_circle</span>
  Successfully Submitted`;

let errorMsg = `
  <span class="material-symbols-outlined">error</span>
  Error Occurred, Please fix the error!`;

let invalidMsg = `
  <span class="material-symbols-outlined">warning</span>
  Invalid Input, check again`;

successBtn.addEventListener('click', () => showToast(successMsg));
errorBtn.addEventListener('click', () => showToast(errorMsg));
invalidBtn.addEventListener('click', () => showToast(invalidMsg));

function showToast(msg) {
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    //Add class based on message content and change icon color
    if(msg.includes('error')) {
        toast.classList.add('error');
    }
    if(msg.includes('Invalid')) {
        toast.classList.add('invalid');
    }

    //Auto remove after 3 seconds
    setTimeout(() => {
        toast.remove();
    }, 3000);
}