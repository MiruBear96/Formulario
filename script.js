function SendMail(){
    let parms = {
        name : document.getElementById("Nombre").value,
        surname : document.getElementById("Apellido").value,
        email : document.getElementById("exampleInputEmail1").value,
        subject : document.getElementById("topic").value,
        message : document.getElementById("message").value,
    }

    emailjs.send("service_sptw8j8","template_w5bno89",parms).then(alert("Email Sent!!"))
}