function ProjectCard({ title, projectImage, link }) {
	return (
		<div className="card">
			<a href={link} target="_blank">
				<div className="projectTitle">
					<h3 className="title">{title}</h3>
				</div>
				<img className="cardImg" src={projectImage} />
			</a>
		</div>
	);
}
export default ProjectCard;
