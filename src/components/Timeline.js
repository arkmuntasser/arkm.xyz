import React from 'react';
import { changelog } from '../../data/changelog';
import '../styles/timeline.css';

const nmd = require('nano-markdown');

function TimelineEntry({entry}) {
	const { date, notes } = entry;
	return (
		<div className="timeline-entry">
			<div className="inner">
				<time className="meta-content date">{date}</time>
				<ul className="note">
					{notes.map((note, i) => {
						const noteHTML = nmd(note);
						return <li key={i} dangerouslySetInnerHTML={{ __html: noteHTML }}></li>
					})}
				</ul>
			</div>
		</div>
	)
}

function Timeline() {
	const log = [...changelog].reverse();

	return (
		<div className="timeline">
			{log.map(entry => <TimelineEntry entry={entry} key={entry.date} />)}
		</div>
	)
}

export default Timeline;
