import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import Seo from "../components/Seo";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <Seo />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
