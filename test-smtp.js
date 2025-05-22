const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  requireTLS: true,
  auth: {
    user: 'graha.ayoe1@gmail.com',
    pass: 'dlgagfpeoxoyhoyw', // Ganti dengan app password baru
  },
})

transporter
  .sendMail({
    from: 'graha.ayoe1@gmail.com',
    to: 'graha.ayoe1@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email',
  })
  .then((info) => console.log('✅ Email sent:', info))
  .catch((error) => console.error('❌ SMTP Error:', error))
