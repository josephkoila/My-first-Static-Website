function sendMail(){
    var params = {
      Firstname: document.getElementById("First Name").value,
      Lastname: document.getElementById("Last Name").value,
        phonenumber: document.getElementById("tel").value,
        email: document.getElementById("email").value,
        comment: document.getElementById("comment").value,
    };
  const serviceID = "service_kfrh3rj";
  const templateID = "template_iu2bvyi";

  emailjs
  .send(serviceID,templateID,params)
  .then((res) => {
        document.getElementById("First Name").value = "";
        document.getElementById("Last Name").value = "";
        document.getElementById("tel").value = "";
        document.getElementById("email").value = "";
        document.getElementById("comment").value = "";
        console.log(res);
        alert(" message sent ");

    })
    .catch((err) => console.log(err));
}
