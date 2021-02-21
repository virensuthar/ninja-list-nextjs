import Head from 'next/head';
import Link from 'next/link';
import Footer from '../comps/Footer';
import Navbar from '../comps/Navbar';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<>
			<Head>
				<title>Ninja List | Home</title>
				<meta name='keywords' content='ninjas' />
			</Head>

			<div>
				<h1 className={styles.title}>Home Page</h1>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
					dolores! Quidem, nemo doloribus excepturi a incidunt esse nobis
					quod voluptatem cum, hic deleniti? Quis magni in consequuntur.
					Quam, debitis modi.
				</p>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam,
					dolores! Quidem, nemo doloribus excepturi a incidunt esse nobis
					quod voluptatem cum, hic deleniti? Quis magni in consequuntur.
					Quam, debitis modi.
				</p>
				<Link href='/ninjas'>
					<a className={styles.btn}>See Ninja Listing</a>
				</Link>
			</div>
		</>
	);
}
