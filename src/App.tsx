import { Suspense } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./utils/theme";
import { Container } from "./components/atom/Container";
import { Location } from "./components/Location";
import { Today } from "./components/Today";
import { Hourly } from "./components/Hourly";
import { Air } from "./components/Air";
import { Weekly } from "./components/Weekly";
import { Footer } from "./components/Footer";
import { Toast } from "./components/Toast";
import { Loading } from "./components/Loading";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loading />}>
        <Location />
        <Today />
        <Toast />
        <Hourly />
        <Container>
          <Air />
          <Weekly />
        </Container>
        <Footer />
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
