
function getInputValue(getInput) {
    const inputField = document.getElementById(getInput);
    const inputFieldText = inputField.value;
    const inputFieldAmmount = parseFloat(inputFieldText);
    // clear the diposit input value
    inputField.value = '';
    return inputFieldAmmount;
}
function balanceUpdate(input, dipositInputAmmount) {
    const previousBalance = document.getElementById(input);
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmmount = parseFloat(previousBalanceText);
    previousBalance.innerText = previousBalanceAmmount + dipositInputAmmount;
}
function updateTotal(dipositInputAmmount, isAdd) {
    const mainBalanceTotal = document.getElementById('balance-update');
    // const mainBalanceTotalText = mainBalanceTotal.innerText;
    // const mainBalanceTotalAmmount = parseFloat(mainBalanceTotalText);

    const mainBalanceTotalAmmount = getCurrentBalance();
    if (isAdd == true) {
        mainBalanceTotal.innerText = mainBalanceTotalAmmount + dipositInputAmmount;
    }
    else {
        mainBalanceTotal.innerText = mainBalanceTotalAmmount - dipositInputAmmount;
    }

}

function getCurrentBalance() {
    const mainBalanceTotal = document.getElementById('balance-update');
    const mainBalanceTotalText = mainBalanceTotal.innerText;
    const mainBalanceTotalAmmount = parseFloat(mainBalanceTotalText);
    return mainBalanceTotalAmmount;
}

// diposit button
document.getElementById('diposite-button').addEventListener('click', function () {
    // get diposit input value 
    // const dipositInput = document.getElementById('diposite-input');
    // const dipositInputText = dipositInput.value;
    // const dipositInputAmmount = parseFloat(dipositInputText);


    // get and update previous diposit ammount..
    // const previousDiposit = document.getElementById('diposite-ammount');
    // const previousDipositText = previousDiposit.innerText;
    // const previousDipositAmmout = parseFloat(previousDipositText);
    // previousDiposit.innerText = previousDipositAmmout + dipositInputAmmount;


    // get main balance
    // const mainBalanceTotal = document.getElementById('balance-update');
    // const mainBalanceTotalText = mainBalanceTotal.innerText;
    // const mainBalanceTotalAmmount = parseFloat(mainBalanceTotalText);

    // mainBalanceTotal.innerText = mainBalanceTotalAmmount + dipositInputAmmount;
    const dipositInputAmmount = getInputValue('diposite-input');
    if (dipositInputAmmount > 0) {
        balanceUpdate('diposite-ammount', dipositInputAmmount);
        updateTotal(dipositInputAmmount, true);
    }

})

// get withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // get withdraw input 
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmmout = parseFloat(withdrawInputText);


    // get and update withdraw ammount ..
    // const withdrawAmmount = document.getElementById('withdraw-ammount');
    // const withdrawAmmountText = withdrawAmmount.innerText;
    // const withdrawAmmountTotal = parseFloat(withdrawAmmountText);
    // withdrawAmmount.innerText = withdrawAmmountTotal + withdrawInputAmmout;

    // // clear withdraw input value..
    // withdrawInput.value = '';

    // get main balance 
    // const mainBalance = document.getElementById('balance-update');
    // const mainBalanceText = mainBalance.innerText;
    // const mainBalanceTotal = parseFloat(mainBalanceText);

    // mainBalance.innerText = mainBalanceTotal - withdrawInputAmmout;
    const withdrawInputAmmout = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawInputAmmout > 0 && withdrawInputAmmout <= currentBalance) {
        balanceUpdate('withdraw-ammount', withdrawInputAmmout);
        updateTotal(withdrawInputAmmout, false);
    }
})