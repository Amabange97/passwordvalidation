function validatePassword() {
    var password = document.getElementById('password').value;
    var password2 = document.getElementById('password2').value;
    var errormessage = document.getElementById('error');
    var errorToThrow = "";
    document.getElementById('error').style.display = "block";
    try {
        if (password.length == 0) {
            errorToThrow += "<br /> password can't be left empty"
        }
        if (password.length < 6) {
            errorToThrow += "<br /> enter password too short";
        }
        if (/[A-Z]/g.test(password) == false) {
            errorToThrow += "<br /> password must include at least one capital number";

        }
        if (/\d/g.test(password) == false) {
            errorToThrow += "<br /> password must include at least one number";
        }
        if (password != password2) {
            errorToThrow += "<br /> password must match";
        }

        throw errorToThrow;
    } catch (err) {
        errormessage.innerHTML = err;
    }

}