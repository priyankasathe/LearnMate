function sendMessage() {
    // Get the message from the textbox
    const message = document.getElementById('message').value;
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    
    // Get the phone number to send the message to
    const phoneNumber = '7276093176';
    
    // Create the WhatsApp Web API URL
    const url = `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=Name :${name}\n Email : ${email}\n Message : ${message}`;
    
    // Open the URL in a new tab
    window.open(url, '_blank');
  }
  