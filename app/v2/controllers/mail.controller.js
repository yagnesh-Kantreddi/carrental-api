
var nodemailer=require('nodemailer')
exports.sendemail = async (user)=>{
    console.log("*********************",user)
    return new Promise((resolve, reject) => {
        var transporter = nodemailer.createTransport({
            host: 'smtp.miraclesoft.com',
            port: 587,
            auth: {
                user: 'ykantreddi@miraclesoft.com',
                pass: 'Mlabs542@#'
            }
        })
       
            var mailOptions1 = {
                from: 'ykantreddi@miraclesoft.com',
                to:  'yagnesyagne87@gmail.com',
                subject: 'Agent Escalation Portal Credentials ',
                text: `Hi `+user.name+`
 
                Please find below the login details for agent portal.
                
                Login at https://mportal.miraclesoft.com
                
                Your Login information :
                 
                Login id - `+user.userid+`
                Password -  `+user.password+`
                 
                Login into our website & start working.
                
                Mail to help@miraclesoft.com for any further details / queries / login issues.`

            };
            transporter.sendMail(mailOptions1, function (error, response) {
                if (error) {
                    console.log("ERROR while sending mail", error);
                    // callback(error);
                    resolve()
                }
                else {
                    console.log("email sent to user")
                    reject()
                }
            });
        // });




    })
}