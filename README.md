# Qr-Code-Generator
This is a simple web-based QR code generator project that allows you to create QR codes for any text or URL you input. The project is built using HTML, TailwindCSS and JavaScript.

## How it works

- Open the web page, and you'll see an input field where you can enter your desired text or URL.
- Type your content into the input field.
- Click the "Generate QR code" button to create the QR code for the entered content.
- The QR code will be displayed below the input field.
- If the input field is empty when you click the "Generate QR code" button, an alert will prompt you to enter some text or a URL.
- After generating the QR code successfully, a message will appear below the QR code indicating that the QR code has been generated.

This QR code generator project utilizes the "_qrserver_" API to generate QR codes. The API is publicly accessible and allows you to create QR codes dynamically based on the content you provide.

**The API URL used in the project is as follows:** https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=

Explanation of the parameters:

+ **size=150x150:** This sets the size of the generated QR code to 150x150 pixels. You can modify this value to adjust the size according to your requirements.

+ **data=:** This parameter is used to specify the content you want to encode into the QR code. The content can be any text or URL, and it will be appended to the end of the API URL.

For example, if you enter the text "Hello, World!" into the input field and click the "Generate QR code" button, the API URL will look like this: 
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Hello,%20World! 


