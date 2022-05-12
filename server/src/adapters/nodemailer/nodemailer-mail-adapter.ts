import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "a99c2d3530cb1c",
        pass: "00c4eb12b43c36"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Team Feedget <hi@feedget.com>',
            to: 'Eduardo Lisboa <save@gmail.com>',
            subject,
            html: body,
        })
    };
}