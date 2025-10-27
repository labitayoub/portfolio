
// import nodemailer from 'nodemailer'

// export default async function handler(req, res) {
//     console.log('Received request:', req.body);

//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method not allowed' });
//     }

//     const {name, email, subject, message} = req.body


//     const transporter = nodemailer.createTransport({
//         host: "smtp.ethereal.email",
//         port:  587,
//         secure: false, 
//         auth: {
//           user:  "dsimo4323@gmail.com",
//           pass: "uajo erpz akjt lyhq",
//         },
//       });
      
//       try {
//         const emailResponse = await transporter.sendMail({
//             from: name,
//             to: "dsimo4323@gmail.com",
//             replyTo: email,
//             subject: subject,
//             text: message,
//             html: `
//             <p>Name: ${name}</p>
//             <p>Email: ${email}</p>
//             <p>Subject: ${subject}</p>
//             <p>Message: ${message}</p>
//             `
//         })

//         console.log('message send: %s', emailResponse.messageId)


//         return res.status(200).json({ message: "Message sent successfully" })
//       } catch (error) {
//         console.log('Error sending email:', error);
//         console.log('-----------------');
//         return res.status(500).json({ message: "Error sending message..." })
//       }

// }