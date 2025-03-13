import nodemailer from "nodemailer";

export default async function HandleEmail(model, req, res) {
  let isEmailBody = "";
  req.on("data", (data) => {
    isEmailBody += data;
  });
  req.on("end", () => {
    const isEmailObj = JSON.parse(isEmailBody);
    if (
      !Object.hasOwn(isEmailObj, "name") ||
      !Object.hasOwn(isEmailObj, "email") ||
      !Object.hasOwn(isEmailObj, "message") ||
      !Object.hasOwn(isEmailObj, "subject")
    ) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Invalid Request body" }));
    }
    const isName =
      /^[0-9A-Za-z ]*$/.test(isEmailObj.name) ||
      /^[0-9A-Za-z ]*$/.test(isEmailObj.message) ||
      /^[0-9A-Za-z ]*$/.test(isEmailObj.subject);
    const isEmail = /^[A-Za-z0-9]*@gmail\.com$/.test(isEmailObj.email);

    if (!isName) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Inalid Name or Message" }));
    }

    if (!isEmail) {
      res.writeHead(400);
      return res.end(JSON.stringify({ error: "Invalid Email" }));
    }

    (async () => {
      const hasEmail = await model.exists({
        email: { $regex: new RegExp(`^${isEmailObj.email}`, "i") },
      });
      if (hasEmail !== null) {
        res.writeHead(409);
        return res.end(
          JSON.stringify({
            error: "You've already sent message using this email",
          })
        );
      }
      const isId = await model.estimatedDocumentCount();
      const toInsert = {
        id: isId + 1,
        email: isEmailObj.email,
      };
      const toCreate = await model.create([toInsert], { ordered: true });
      if (!toCreate) {
        res.writeHead(500);
        return res.end(
          JSON.stringify({ error: "server failed to submit message" })
        );
      }
      const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 587,
        auth: {
          user: process.env.SEND_USER,
          pass: process.env.SEND_KEY,
        },
      });
      const mailSent = await transporter.sendMail({
        from: process.env.SEND_EMAIL,
        to: isEmailObj.email,
        subject: "From Abdul Ahad - Portfolio Website",
        text: "Your message has been received will contact you shortly! Abdul Ahad - Programmerdev125@gmail.com",
      });
      const toSelfMail = await transporter.sendMail({
        from: process.env.SEND_EMAIL,
        to: process.env.SEND_EMAIL,
        subject: `From ${isEmailObj.email}`,
        text: isEmailObj.message,
      });
      if (mailSent.rejected.length > 0 || toSelfMail.rejected.length > 0) {
        res.writeHead(500);
        return res.end(JSON.stringify({ error: "Server failed to send mail" }));
      }
      res.writeHead(201);
      res.end(
        JSON.stringify({
          success: "Message Submitted will get back to you in 24 hours",
        })
      );
    })();
  });
}
