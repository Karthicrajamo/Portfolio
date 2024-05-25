import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

export const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});
	const [loading, setLoading] = useState(false);
	const { showAlert, alert, hideAlert } = useAlert();

	const handleChange = ({ target: { name, value } }) => {
		setForm((currForm) => {
			return { ...currForm, [name]: value };
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				"service_xf7wura",
				"template_indfq4l",
				{
					from_name: form.name,
					to_name: "Karthic Raja",
					from_email: form.email,
					to_email: "karthicraja2812@gmail.com",
					message: form.message,
          email: form.email,
          phone: form.phone
				},
				"pjtgH_dVQwj1mDR67"
			)
			.then(() => {
				setLoading(false);
				showAlert({
					show: true,
					text: "Thank you for your message 😉",
					type: "success",
				});

				setTimeout(() => {
					hideAlert(false);
					setForm({
						name: "",
						email: "",
            phone: "",
						message: "",
					});
				}, 3000);
			})
			.catch((error) => {
				setLoading(false);
				console.log(error);
				showAlert({
					show: true,
					text: "I didn't recive your message 😉",
					type: "danger",
				});
			});
	};

	return (
		<section className="relative lg:flex-row flex-col flex max-container">
			{alert.show && <Alert {...alert} />}
			<div className="flex-1 min-w-[50%] flex flex-col">
				<h1 className="head-text">Get in Touch</h1>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="w-full flex flex-col gap-7 mt-14"
				>
					<label className="text-black-500 font-semibold">
						Name
						<input
							type="text"
							name="name"
							className="input"
							placeholder="Karthic"
							required
							value={form.name}
							onChange={handleChange}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Email
						<input
							type="email"
							name="email"
							className="input"
							placeholder="karthicraja4@gmail.com"
							required
							value={form.email}
							onChange={handleChange}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Phone (eg: 123-123-1233)
						<input
							type="tel"
							name="phone"
							pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
							className="input"
							placeholder="+91"
							value={form.phone}
							onChange={handleChange}
						/>
					</label>
					<label className="text-black-500 font-semibold">
						Your Message
						<textarea
							name="message"
							rows="4"
							className="textarea"
							placeholder="Write your thoughts here..."
							value={form.message}
							onChange={handleChange}
						/>
					</label>
					<button type="submit" className="btn" disabled={loading}>
						{loading ? "Sending..." : "Submit"}
					</button>
				</form>
			</div>
			<div></div>
		</section>
	);
};
