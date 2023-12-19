function ProjectCard({ title, projectImage, link }) {
	return (
		<div className="card">
			<a href={link} target="_blank">
				<h3>{title}</h3>
				<img className="cardImg" src={projectImage} />
			</a>
		</div>
	);
}
export default ProjectCard;
