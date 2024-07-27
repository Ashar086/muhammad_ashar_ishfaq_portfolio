function emailSend() {

let name = document.getElementById('name').value;
let email = document.getElementById('email').value;
let subject = document.getElementById('subject').value;
let msgBody = document.getElementById('message').value;

Email.send({
    Host : "sandbox.smtp.mailtrap.io",
    port: 2525,
    Username : "0788e03750ae70",
    Password : "d8118c3b960d31",
    To : 'muhammadasharishfaq@gmail.com',
    From : "muhammadasharishfaq@gmail.com",
    Subject : `Landing Page Contact, RE: ${subject}`,
    Body : `Name: ${name}<br>
    EMail Address: ${email}<br>
    Message: ${msgBody}`
}).then(
  message => alert("Your message has been sent.")
);
}
