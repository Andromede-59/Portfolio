import React from 'react';
import { useTranslation } from 'react-i18next';

const Contact = ({setAlert, setTypeAlert}) => {
	const { t } = useTranslation();
	const [name, setName] = React.useState('');
	const [email, setEmail] = React.useState('');
	const [msg, setMsg] = React.useState('');

	const handleSendMail = async (e) => {
		e.preventDefault();
		const form = e.target;
		const data = new FormData(form);
		const response = await fetch('/api/sendMail', {
			method: 'POST',
			body: data,
			headers: {
				'Accept': 'application/json'
			}
		});
		if (response.ok) {
			setAlert(t("mailSent"));
			setTypeAlert('SUCCESS');
			setTimeout(() => {
				setAlert("");
				setTypeAlert("");
			}, 4000);
			form.reset();
		} else {
			setAlert(t("mailError"));
			setTypeAlert('ERROR');
			setTimeout(() => {
				setAlert("");
				setTypeAlert("");
			}, 4000);
		}
	};

	return (
		<section id="contact" className="bg-gray-100 p-8">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-4">{t("contact")}</h2>
				<form className="max-w-lg mx-auto" onSubmit={handleSendMail}>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-2" htmlFor="name">{t("name")}</label>
						<input type="text" id="name" name="name" className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setName(e.target.value)} required />
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-2" htmlFor="email">{t("email")}</label>
						<input type="email" id="email" name="email" className="w-full p-2 border border-gray-300 rounded" onChange={(e) => setEmail(e.target.value)} required />
					</div>
					<div className="mb-4">
						<label className="block text-sm font-medium mb-2" htmlFor="message">{t("message")}</label>
						<textarea id="message" name="message" className="w-full p-2 border border-gray-300 rounded" rows="4" onChange={(e) => setMsg(e.target.value)} required></textarea>
					</div>
					<button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" disabled={!name || !email || !msg}>{t("send")}</button>
				</form>
			</div>
		</section>
	);
	};

export default Contact;
