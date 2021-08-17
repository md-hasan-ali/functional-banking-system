// add eventlistener 
document.getElementById('submit-btn').addEventListener('click',function() {
    // get user email
    const userField = document.getElementById('user-email');
    const userEmail = userField.value;
    
    // get user password 

    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    
    // user email and password simple validation 

    if(userEmail == 'hasan@gmail.com' && userPassword == 'hasan') {
        window.location.href = 'bank.html';
    } else {
        alert('invalid email or password...');
    }
})