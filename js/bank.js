function getInputValue(inputValue) {
    // get diposit input value
    const dipositInput = document.getElementById(inputValue);
    const dipositInputText = dipositInput.value;
    const dipositInputAmmount = parseInt(dipositInputText);
    // clear the diposit input field
    dipositInput.value = '';
    return dipositInputAmmount;
}

function updateTotal(updateTotal, dipositInputAmmount) {
    const previousDiposit = document.getElementById(updateTotal);
    const previousDipositText = previousDiposit.innerText;
    const previousDipositAmmout = parseFloat(previousDipositText);

    previousDiposit.innerText = previousDipositAmmout + dipositInputAmmount;
}
function currentBalance() {
    const previousBalanceText = previousBalance.innerText;
    const previousBalanceAmmout = parseFloat(previousBalanceText);
    return previousBalanceAmmout;
}

function balanceTotol(dipositInputAmmount, isAdd) {
    const previousBalance = document.getElementById('balance-update');
    // const previousBalanceText = previousBalance.innerText;
    // const previousBalanceAmmout = parseFloat(previousBalanceText);
    
    if (isAdd == true) {
        previousBalance.innerText = previousBalanceAmmout + dipositInputAmmount;
    } else {
        previousBalance.innerText = previousBalanceAmmout - dipositInputAmmount;
    }

}
// diposite button add evenlistener 
document.getElementById('diposite-button').addEventListener('click', function () {
    // // get diposit input value
    // const dipositInput = document.getElementById('diposite-input');
    // const dipositInputText = dipositInput.value;
    // const dipositInputAmmount = parseInt(dipositInputText);


    // get and update diposit value
    // const previousDiposit = document.getElementById('diposite-ammount');
    // const previousDipositText = previousDiposit.innerText;
    // const previousDipositAmmout = parseFloat(previousDipositText);

    // previousDiposit.innerText = previousDipositAmmout + dipositInputAmmount;


    // update diposita total ammount 
    // const updateDipositTotal = previousDipositAmmout + dipositInputAmmount;
    // previousDiposit.innerText = updateDipositTotal;

    // // clear the diposit input field
    // dipositInput.value = '';

    // update main balance part 
    // const previousBalance = document.getElementById('balance-update');
    // const previousBalanceText = previousBalance.innerText;
    // const previousBalanceAmmout = parseFloat(previousBalanceText);

    // previousBalance.innerText = previousBalanceAmmout + dipositInputAmmount;
    const dipositInputAmmount = getInputValue('diposite-input');
    if (dipositInputAmmount > 0) {
        updateTotal('diposite-ammount', dipositInputAmmount);
        balanceTotol(dipositInputAmmount, true);
    }


});

// withdraw balance configuration 
document.getElementById('withdraw-button').addEventListener('click', function () {
    // withdraw input 
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawInputText = withdrawInput.value;
    // const withdrawInputAmmout = parseFloat(withdrawInputText);



    // get and update diposit value
    // const previousWithdrawBalance = document.getElementById('withdraw-ammount');
    // const previousWithdrawBalanceText = previousWithdrawBalance.innerText;
    // const previousWithdrawBalanceAmmount = parseFloat(previousWithdrawBalanceText);

    // const withdrawTotal = withdrawInputAmmout + previousWithdrawBalanceAmmount;





    // previousWithdrawBalance.innerText = withdrawTotal;

    // update main valance 

    // const mainBalanceUpdate = document.getElementById('balance-update');
    // const mainBalanceUpdateText = mainBalanceUpdate.innerText;
    // const mainBalanceUpdateAmmount = parseFloat(mainBalanceUpdateText);

    // mainBalanceUpdate.innerText = mainBalanceUpdateAmmount - withdrawInputAmmout;
    const withdrawInputAmmout = getInputValue('withdraw-input');
    if (withdrawInputAmmout > 0) {
        updateTotal('withdraw-ammount', withdrawInputAmmout);
        balanceTotol(withdrawInputAmmout, false)
    }

});
