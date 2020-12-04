import styles from "./Home.style.css";

import React from "react";
import { HomeProps } from "./Home";

export const HomeView: React.FC<HomeProps> = props => {
	return (
		<div className={styles.container}>
			<div className={styles.message}>🥳 Your Electron application!</div>
			<div className={styles.technology}>
				🎨 TypeScript, React, Webpack
			</div>
			<div className={styles.post_scriptum}>💝 P.S. Enjoy!</div>
		</div>
	);
};
