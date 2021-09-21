//import type { NextApiRequest, NextApiResponse } from "next";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(`${process.env.SENDGRID_API_KEY}`);

export default async function getVideos(req: any, res: any) {
  const msg = {
    to: "stwcarthur@gmail.com",
    from: "stwcarthur@gmail.com", // Change to your verified sender
    subject: "New Message From Website",
    text: "New Message From Website",
    html: `  <html>
    <head>
      <title></title>
      <style>
      .thumbnail{
        width: 100%;
        background-image: url('http://cdn.mcauto-images-production.sendgrid.net/8cc2dd439f4eab64/f7b930d0-3cb0-44bd-a1fb-1ce728379b81/4272x2848.jpeg');
        height: 100vw;
        max-width: 500px;
        max-height: 500px;
        margin: auto;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      
      .title{
          font: 800 1.5rem sans-serif;
          width: 100%;
          text-align: center;
      }
      
      h2{
            font: 500 1.2rem sans-serif;
            color: #003388;
          }
          
      p{
          width: 100%;
            font: 500 1.2rem sans-serif;
            margin: 2rem auto;
          }
      
      </style>
    </head>
    <body>
   <div class="thumbnail"></div>
   <h1 class="title" >${req.body.name} has sent you a new message</h1> 
   <h2>Here is their email address: <br /> ${req.body.email}</h2>
   <p>${req.body.message}</p>
    </body>
  </html>`,
  };
  const sent = await sgMail.send(msg);
  console.log(sent);
}
