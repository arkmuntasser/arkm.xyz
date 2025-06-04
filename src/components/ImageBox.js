import Image from 'next/image';
import styles from '../styles/Imagebox.module.css';

export default function ImageBox({ src, alt, width, height, layout = 'responsive', caption, style = {} }) {
	return (
		<figure className={styles.imagebox} style={style}>
			<Image src={src} alt={alt} width={width} height={height}></Image>
			{caption ? <figcaption>{caption}</figcaption> : null}
		</figure>
	)
}
