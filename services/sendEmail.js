const sgMail = require("@sendgrid/mail");

const sendEmail = async (email, verificationToken) => {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);
	const msg = {
		to: email,
		from: process.env.SENDGRID_API_EMAIL,
		subject: "Confirm your email, please",
		html: `<a href="http://localhost:3000/api/users/verify/${verificationToken}">Click here to verify your email</a>`,
	};

	try {
		await sgMail.send(msg);
		console.log("Email sent");
	} catch (e) {
		console.log(e);
	}
};

module.exports = sendEmail;
