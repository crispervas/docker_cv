/**
 * Class Gpglobal
 */
"use strict";

var nodemailer = require("nodemailer");
const chalk = require("chalk");
const envConfigs = require("../../../config");
const env = process.env.NODE_ENV;
const config = envConfigs[env];

class UXEmail {
    /**
     * Is the construct of the class
     * @method __construct
     */
    constructor(from, to, subject, html, attachments = "", cc = "", bcc = "", text = "") {
        this.message = {
            from: from,
            to: to,
            cc: cc,
            bcc: bcc,
            subject: subject,
            text: text,
            html: html,
            attachments: attachments,
        };
    }

    async onCorreo() {
        var message = this.message;

        var transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            secureConnection: false, // TLS requires secureConnection to be false
            tls: {
                ciphers: "SSLv3",
            },
            requireTLS: true,
            debug: true,
            auth: {
                user: config.nodemailer_mail,
                pass: config.nodemailer_password,
            },
        });

        console.log(chalk.yellow("Asunto: " + this.message.subject));
        console.log(chalk.blue("mail: " + config.nodemailer_mail));
        console.log(chalk.blue("mail: " + config.nodemailer_password));

        await transporter.verify((error) => {
            error
                ? console.log(error) // eslint-disable-line
                : // send mail with defined transport object
                  // console.log("Server is ready to take our messages", message);
                  transporter.sendMail(message, function (error, info) {
                      if (error) {
                          console.log(error); // eslint-disable-line
                          return error;
                      }
                      console.log(chalk.yellow("Mensaje enviado: " + info.response)); // eslint-disable-line
                      return "Mensaje enviado: " + info.response;
                  });
        });
    }
}

module.exports = UXEmail;
