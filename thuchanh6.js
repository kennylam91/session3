let login= prompt("Nhap vao:");
let message= (login=="Employee")?
    "HELLO":
    (login=="Director")?
        "Greetings":
        (login=="")?
            "No login":"";
alert(message);