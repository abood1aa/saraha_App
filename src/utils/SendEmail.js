import nodemailer from 'nodemailer'

const sendEmail = async({from="aa2949139@gmail.com",to,subject="Hello",html}={}
)=>{
    const transporter = nodemailer.createTransport({
       service:"gmail",
        secure: false,
        auth: {
          user: "aa2949139@gmail.com",
          pass: "xuhlstfltskmiciq",
        },
      });
      const info = await transporter.sendMail({
        from,
        to,
        subject,

        html,
      });
      console.log(info);
}
export default sendEmail