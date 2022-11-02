import { PersonInfo } from "./common/PersonInfo";
import { Skills } from "./features/Skills";
import { ToLearn } from "./features/ToLearn";
import { Portfolio } from "./features/Portfolio";
import { Footer } from "./common/Footer";

function App() {
  return (
    <>
      <PersonInfo />
      <Skills />
      <ToLearn />
      <Portfolio />
      <Footer />
    </>
  );
}

export default App;
