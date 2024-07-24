import GlobalStyle from "./GlobalStyle";
import { Router } from "./Routes/Router";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
      <link rel="preload" href="./assets/flower.jpg" as="image" />
    </>
  );
}

export default App;
