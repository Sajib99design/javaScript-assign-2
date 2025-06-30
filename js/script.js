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



// add dollar & deposit
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function () {
    let depositInput = document.getElementById('depositInput').value;
    if (depositInput > 0 && depositInput != ' ') {
        depositInput = depositInput;
    }
    else {
        depositInput = 0;
    };
    const depositNumber = parseFloat(depositInput);



    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNum = parseFloat(currentDeposit);

    const result = depositNumber + currentDepositNum;
    document.getElementById('currentDeposit').innerText = result;



    // updateSpan('currentBalance', depositNumber);
    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNum = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNum;
    document.getElementById('currentBalance').innerText = totalBalance;
    document.getElementById('depositInput').value = '';
});
