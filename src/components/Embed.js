export default function Embed({ src, title, width = '100%', height = '420px' }) {
	return (
		<div class="embed" style={{ width, height, marginBlockEnd: 'var(--space-4)' }}>
			<iframe
				src={src}
				title={title}
				allow="geolocation; microphone; camera; midi; vr; encrypted-media"
				loading="lazy"
				style={{ width: '100%', height: '100%', border: 0 }}>
			</iframe>
		</div>
	)
}
