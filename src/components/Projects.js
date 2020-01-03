import React, { useState, useEffect } from 'react';
import '../styles/projects.css';
import '../styles/post-snippet.css';

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		async function getRepos() {
			const res = await fetch('https://api.github.com/users/arkmuntasser/repos?sort=updated');
			let repos = await res.json();

			// remove private repos
			repos = repos.filter(repo => repo.private === false);

			// remove repos that are forks
			repos = repos.filter(repo => repo.fork === false);

			// remove sv related repos
			repos = repos.filter(repo => !repo.name.includes('sv-'));

			// remove personal site repos
			repos = repos.filter(repo => !repo.name.includes('arkm'));

			repos = repos.slice(0, 6);

			setProjects(repos);
		}

		getRepos();
	});

	return (
		<section className="projects">
			<div className="inner">
				<h2>Recent Projects</h2>
				{projects.map(project => (
					<div className="project post-snippet" key={project.id}>
						<h3 className="title">
							<a href={project.html_url}>
								{project.name}
							</a>
						</h3>
						<p className="excerpt">{project.description}</p>
					</div>
				))}
				<a href="https://github.com/arkmuntasser?tab=repositories">See all projects →</a>
			</div>
		</section>
	)
}

export default Projects;
