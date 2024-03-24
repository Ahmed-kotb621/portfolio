import Contacts from "./pages/Contacts";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Work from "./pages/Work";

export default function App() {
  return (
    <div className="bg-black">
      <Landing />
      <Skills />
      <Work />
      <Resume />
      <Contacts />
    </div>
  );
}
