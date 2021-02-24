import { ToggleColorMode } from "../components/toggle-color-mode";
import { Layout } from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <ToggleColorMode />
      <pre>Theme UI Example for Bug Report</pre>
    </Layout>
  );
}
