/**
 * Class UXnotification
 */
"use strict";
const boom = require("@hapi/boom");
// const NotificationSrv = require("../../services/NotificationSrv");
// const TemplateSrv = require("../../services/TemplateSrv");
// const UserSrv = require("../../services/Userrv");
const UXemail = require("../../utils/global/UXemail");
const UXglobal = require("../../utils/global/UXglobal");
const moment = require("moment-timezone");

class UXnotification {
    /**
     * Is the construct of the class
     * @method __construct
     */
    constructor() {
        this.notificationCode = {
            MESSAGE: 1,
        };
    }

    /**
     * Request sendNotification
     *
     * @param res
     * @return json
     */
    async sendNotification(
        userId,
        title,
        comment,
        create,
        unixtime,
        data = {},
        type = "",
        rolId = -1,
        cc = "",
        attachment = []
    ) {
        try {
            const notificationSrv = new notificationSrv();
            const templateSrv = new templateSrv();
            const usuarioSrv = new UsuarioSrv();

            let date = moment().tz("America/Bogota").format("YYYY-MM-DD");
            let hour = moment().tz("America/Bogota").format("H:m:s");
            let dateComplete = moment().tz("America/Bogota").format("YYYY-MM-DD H:m:s");

            let notification = {
                usuario: userId,
                rol: rolId,
                title: title,
                type: type,
                data: data,
                date,
                hour,
                dateComplete,
                comment,
                create,
                unixtime,
                state: UXglobal.uxCode.PENDING.code,
            };

            notification = await UXglobal.getCodeState(notification.state, notification);
            console.log("notification", notification);

            // let crearnotification = await notificationSrv.crearnotification({
            //     notification,
            // });

            if (crearnotification) {
                const usuario = await usuarioSrv.obtenerUsuarioConsulta({
                    query: {
                        where: {
                            id: userId,
                        },
                    },
                    // scope: "correo",
                });

                // let tokens = [];
                // firebaseLib.onSendNotificationOne(usuario.token, 	{
                // 	notification: {
                // 		"title": `Notification ACADEMIA HOME SCHOOL, ${title}`,
                // 		"body":  `${description}`,
                // 		"image": "https://platform.enginegtr.com/assets/images/logo.png",
                // 		"data": {
                // 			...data
                // 		}
                // 	}
                // });

                const template_email = await templateSrv.get({
                    query: {
                        where: {
                            codigo: parseInt(UXglobal.EMAIL_NOTIFICATION),
                        },
                    },
                });

                // console.log(template_email);
                if (!template_email) {
                    next(boom.badRequest("No se encuentra la plantilla"));
                } else {
                    let { html } = template_email.dataValues;

                    html = html.replace(/@_title_/g, `${title}`);
                    html = html.replace(/@_comment_/g, `${comment}`);

                    let key = Object.keys(data);

                    if (key.length > 0) {
                        let table = `<table style='margin: auto;'>`;
                        key.forEach((key) => {
                            table += `<tr>
								<td>${key.toUpperCase()}</td>
							`;
                            table += `
								<td>${data[key]}</td>
							</tr>`;
                        });
                        table += `</table>`;
                        html = html.replace(/@_datas_/g, table);
                    } else {
                        html = html.replace(/@_datas_/g, ` `);
                    }

                    var year = new Date();
                    console.log("year: ", year);
                    html = html.replace(/@_years_/g, year.getFullYear());

                    // console.log( "html: ", html );
                    console.log("usuario.correo: ", usuario.correo);

                    // from, to, subject, html, attachments = "", cc = "", bcc = "", text = ""
                    const UXmail = new UXemail(
                        `CV <do.not_replay@expresapp.com>`,
                        usuario.correo + ";" + cc,
                        `Notification CV, ${title}`,
                        html,
                        attachment,
                        "",
                        UXglobal.COPY_EMAIL,
                        ""
                    );
                    UXmail.onCorreo();
                }
                console.log(`Notification ${title} created type:${type}`);
            } else {
                console.log(`Notification not created ${title} type:${type}`);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = new UXnotification();
