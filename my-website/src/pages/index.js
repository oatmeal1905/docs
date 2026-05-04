import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {Redirect} from '@docusaurus/router';

export default function Home() {
  return <Redirect to="/docs/docs/intro" />;
}