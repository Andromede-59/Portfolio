import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Alert from './components/Alert';
import './i18n';
import './App.css';

const App = () => {
	const [alert, setAlert] = React.useState("");
	const [typeAlert, setTypeAlert] = React.useState('');

	return (
		<div>
			<Header />
			<main>
				{alert && <Alert message={alert} type={typeAlert}/>}
				<About />
				<Projects />
				<Contact setAlert={setAlert} setTypeAlert={setTypeAlert}/>
			</main>
			<Footer />
		</div>
	);
};

export default App;
