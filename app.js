//https://app.mailgun.com
//nzhyrkova@biarum.com
//Nzhyrkova

const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('name_1');
});

app.post('/send', (req, res) => {
    const output = `
        <table align="center"
       border="0"
       bgcolor="#eef6f8"
       cellpadding="0"
       cellspacing="0"
       width="100%"
       class="table-wrap"
       style="border-collapse: collapse;border-spacing: 0;min-width: 320px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
    <tbody>
    <tr>
        <td style="margin: 0;padding: 0;">
            <table align="center"
                   border="0"
                   cellpadding="0"
                   cellspacing="0"
                   width="600px"
                   class="table"
                   style="border-collapse: collapse;border-spacing: 0;min-width: 320px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;margin-top: 20px;max-width: 600px;">
                <tbody>
                <tr>
                    <td align="center" class="table-header-wrap" style="margin: 0;padding: 0;">
                        <table align="center"
                               bgcolor="#eef6f8"
                               border="0"
                               cellpadding="0"
                               cellspacing="0"
                               width="100%"
                               height="110px"
                               class="table-header"
                               style="border-collapse: collapse;border-spacing: 0;min-width: 320px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #12a0d2;">
                            <tbody>
                            <tr>
                                <td align="center" height="50" class="header-image" style="margin: 0;padding: 0;padding-top: 16px;">
                                    <img height="50"
                                         src="https://hellorigr.com/static/media/rigr_logo.ccd42545.svg"
                                         alt=""
                                         style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;">
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text header-text"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #ffffff;font-family: Arvo, Arial, sans-serif;font-size: 17px;line-height: 17px;">
                                    Precisely Personalized Supplements
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="table-content-wrap"
                        style="margin: 0;padding: 0;background-color: #ffffff;padding-top: 60px;padding-bottom: 100px;">
                        <table align="center"
                               bgcolor="#ffffff"
                               border="0"
                               cellpadding="0"
                               cellspacing="0"
                               width="100%"
                               class="table-content"
                               style="border-collapse: collapse;border-spacing: 0;min-width: 320px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;">
                            <tbody>
                            <tr>
                                <td align="center"
                                    class="text table-content-title"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 15px;">
                                    Your order has been shipped
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text table-content-subtitle"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 22px;line-height: 30px;padding-bottom: 40px;">
                                    Tracking #: 12345678ABC
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text table-content-text"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 18px;line-height: 24px;padding-bottom: 62px;">
                                    Good news, [FIRST NAME]—your order is on its way!
                                </td>
                            </tr>
                            <tr>
                                <td align="center" class="table-button-pb" style="margin: 0;padding: 0;padding-bottom: 100px;">
                                    <a target="_blank"
                                       href="https://hellorigr.com/"
                                       class="table-content-button"
                                       style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;display: block;width: 230px;height: 60px;background-color: #12a0d2;text-decoration: none;color: #ffffff;line-height: 60px;font-weight: 700;font-size: 14px;text-transform: uppercase;-webkit-transition: 0.3s;-o-transition: 0.3s;transition: 0.3s;">
                                        Track my order
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text table-content-title"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 15px;">
                                    Have any questions?
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="margin: 0;padding: 0;">
                                    <a target="_blank"
                                       href="https://hellorigr.com/"
                                       class="table-content-link"
                                       style="font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 14px;color: #12a0d2;text-decoration: none;line-height: 26px;">
                                        help@hellorigr.com
                                    </a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td class="table-footer-wrap" style="margin: 0;padding: 0;padding-top: 60px;padding-bottom: 100px;">
                        <table align="center"
                               bgcolor="#eef6f8"
                               border="0"
                               cellpadding="0"
                               cellspacing="0"
                               width="100%"
                               class="table-footer"
                               style="border-collapse: collapse;border-spacing: 0;min-width: 320px;width: 100%;margin: 0 auto;padding: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;background-color: #eef6f8;">
                            <tbody>
                            <tr>
                                <td align="center"
                                    class="text table-content-title"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #000000;font-family: Arvo, Arial, sans-serif;font-size: 28px;line-height: 34px;padding-bottom: 15px;">
                                    Join us on Instagram
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="margin: 0;padding: 0;">
                                    <a href="https://hellorigr.com/">
                                        <img src="https://www.seekpng.com/png/full/19-194083_subscribe-and-watch-on-our-youtube-channel-instagram.png"
                                             alt=""
                                             class="footer-image"
                                             style="outline: none;-ms-interpolation-mode: bicubic;display: block;margin: 0 auto;padding: 0;width: 32px;height: 32px;padding-bottom: 22px;">
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text footer-text"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
                                    Rigr Centrum™ <br> 1 Giralda Farms, Madison, NJ 07940
                                </td>
                            </tr>
                            <tr>
                                <td align="center"
                                    class="text footer-text"
                                    style="margin: 0;padding: 0;mso-line-height-rule: exactly;font-style: normal;letter-spacing: normal;color: #818181;font-family: &quot;Open Sans&quot;, Arial, sans-serif;font-size: 12px;line-height: 21px;padding-bottom: 40px;">
                                    ©2019 Pfizer, Inc. All rights reserved.
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </td>
                </tr>
                </tbody>
            </table>
        </td>
    </tr>
    </tbody>
</table>
    `;
    
    let transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org',
        port: 587,
        secure: false,
        auth: {
            user: 'postmaster@sandboxa68360e453624943b3b5f6f10881f74e.mailgun.org',
            pass: 'd45bc27df74b3f220f200678307f2de7-4a62b8e8-df47c46e'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    
    let mailOptions = {
        from: '"natalia Contact" <nzhyrkova@gmail.com>',
        to: 'neyia@mail.ru',
        subject: ' Request123123123123',
        text: '?',
        html: output
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        
        res.render('name_1', {msg: 'Email has been sent'});
    });
});
app.listen(3030, () => console.log('Server started...'));
