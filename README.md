# email-dispatcher

You can use this program to send email and generate tokens in your project

# sample code
## send email
``` ruby
main();
/**
 * This function is used to send email
 */
function main() {
    var mailOptions = {
        from: 'sgstack2020@gmail.com',
        to: 'sgstack2020@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!',
    };

    email.SendMailer(mailOptions)
        .then(sucess)
        .fail(error);

    function sucess(results) {
        console.log('results', results);
    }

    function error(error) {
        console.log('error', error);
    }
}

```
#sample code
##token Generation
```
ruby
token();

function token() {
    console.log('token', email.tokenGeneration(32, '25bgfd566s58e2d21sd121s2sd2d3s3d23'))
}
