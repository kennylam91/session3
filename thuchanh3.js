let username = prompt("Username= ");
if (username) {
    if (username == "Admin") {
        let password = prompt("Password= ");
        if (password) {
            if (password == "TheMaster") {
                alert("Welcome!");
            } else {
                alert("Wrong password");
            }

        } else {
            alert("Chua nhap password");
        }

    }
    else{
        alert("I don't know you");
    }
} else {
    alert("Chua nhap username")
}

