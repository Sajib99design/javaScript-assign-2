// click event
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    const inputPass = document.getElementById('input-pass').value;

    if (inputPass > 0 && inputPass != ' ') {
        loginArea.style.display = "none";
        const transactionArea = document.getElementById('transaction-area');
        transactionArea.style.display = "block";
    }
    else {
        const inputPass = document.getElementById('input-pass').placeholder = "Type Password";
    }

});