
var typed = new Typed('.element', {
    strings: ["I am a 3rd year SoSy Student @ SFU.", "Currently interested in Game Dev.", "Active in Basketball, Hiking and the Gym.",],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true
  });


  function sendEmail(){
    Email.send({
        SecureToken : "8abb8e76-f5df-4d6c-a4de-e5d4a6963714",
        To : 'tallalmoohar@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New Contact from Portfolio",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
  }


//