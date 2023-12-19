import '../App.css';
import Bio from './Bio';
import Contact from './Contact';
import Projects from './Projects';

function App() {
	return (
		<div className="App">
			<div className="left">
				<Bio />
				<Projects />
			</div>
			<Contact />
		</div>
	);
}

export default App;
