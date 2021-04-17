import Image from 'next/image';
import styles from '../styles/Imagebox.module.css';

export default function ImageBox({ src, alt, width, height, layout = 'responsive', caption }) {
	return (
		<figure className={styles.imagebox}>
			<Image src={src} alt={alt} width={width} height={height} layout={layout}></Image>
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	)
}
