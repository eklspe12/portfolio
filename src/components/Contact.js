import React from 'react';
import portfolioPic from '../assets/portfolio_pic.jpg';
import github from '../assets/github-code-source.png';
import linkedIn from '../assets/linkedin.png';
import email from '../assets/email.png';

function Contact() {
	const copyEmail = () => {
		const emailAddress = 'eklund.spencer@outlook.com';
		const tempInput = document.createElement('input');
		tempInput.value = emailAddress;
		document.body.appendChild(tempInput);
		tempInput.select();
		document.execCommand('copy');
		document.body.removeChild(tempInput);

		const message = document.getElementById('message');
		message.innerText = 'Email copied!';
	};
	return (
		<div className="contact">
			<img
				className="portfolioPic"
				src={portfolioPic}
				alt="Portfolio picture"
			/>
			<div className="education">
				<h4>Flatiron School - Software Engineering Program - 2023</h4>
				<h4>University of Wisconsin La Crosse - BS Biology - 2019</h4>
			</div>
			<h3 className="email">
				<img
					className="icon"
					src={email}
					id="copyEmailImage"
					onClick={copyEmail}
					alt="email icon"
				/>
				<a href="https://github.com/eklspe12" target="_blank">
					<img className="icon" src={github} alt="github logo" />
				</a>
				<a href="https://www.linkedin.com/in/spencer-eklund/" target="_blank">
					<img className="icon" src={linkedIn} alt="linkedIn logo" />
				</a>
			</h3>
			<div id="message"></div>
		</div>
	);
}
export default Contact;
