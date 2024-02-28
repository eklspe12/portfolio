import ProjectCard from './ProjectCard';
import FinEd from '../assets/FinEd.gif';
import machine from '../assets/machine.jpg';
import storeDemo from '../assets/storeDemo.png';
function Projects() {
	return (
		<div className="projects">
			<div className="projectContainer">
				<h2>Projects</h2>
				<div className="projectDisplay">
					<ProjectCard
						title="FinEd"
						projectImage={FinEd}
						link="https://seklund-fined.onrender.com/"
					/>
					<ProjectCard
						title="Store Demo"
						projectImage={storeDemo}
						link="https://demo-store-4cko.onrender.com/"
					/>
				</div>
			</div>
			<div className="blogContainer">
				<h2>Blog Posts</h2>
				<div className="blogDisplay">
					<ProjectCard
						title="Machine Learning in Science"
						projectImage={machine}
						link="https://medium.com/@eklund.spencer/the-need-for-machine-learning-in-science-4510f6b98298"
					/>
					<ProjectCard
						title="Creating Stock Behaviors"
						link="https://medium.com/@eklund.spencer/creating-realistic-stock-behaviors-in-a-stock-simulator-08b2d7e11d8f"
						projectImage={FinEd}
					/>
				</div>
			</div>
		</div>
	);
}
export default Projects;
