import Link from "next/link";
import Layout from "../components/Layout";

const about = () => {
  return (
    <Layout>
      <h1>ABOUT</h1>
      <Link href="/">Home</Link>
    </Layout>
  );
};

export default about;
