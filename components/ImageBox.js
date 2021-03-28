import Image from 'next/image';

export default function ImageBox({ src, alt, width, height, layout = 'responsive', caption }) {
	return (
		<figure>
			<Image src={src} alt={alt} width={width} height={height} layout={layout}></Image>
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	)
}
