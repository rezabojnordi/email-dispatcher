var nodemailer = require('nodemailer'),
	config = require('./config')
q = require('q');

var transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'sgstack2020@gmail.com',
		pass: ''
	}
});


/** 
 * @param {object} mailOptions
 */
SendMailer = (mailOptions) => {

	var dfd = q.defer();
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			dfd.reject(config.e.errorMail);
		} else {
			dfd.resolve(config.e.sendMail);
		}
	});
	return dfd.promise;
}


/**
 * @param {int} length
 * @param {string} chars
 */
tokenGeneration = (length, chars) => {
	var result = '';

	for (var i = length; i > 0; --i)

		result += chars[Math.floor(Math.random() * chars.length)];

	return result;

}

exports.SendMailer = SendMailer;
exports.tokenGeneration = tokenGeneration;
