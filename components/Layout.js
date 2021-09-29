import Head from "next/head";
import styles from "../styles/Layout.module.css";

const Layout = ({ title, keywords, description, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" contnent={description} />
        <meta name="keywords" contnet={keywords} />
      </Head>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

Layout.defaultProps = {
  title: "DJ Events | Find the ottest parties",
  description: "Find the latest DJ and other",
  keywords: "music, dj, edm, events",
};

export default Layout;
