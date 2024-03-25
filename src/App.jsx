import Footer from "./features/Footer/Footer";
import Contacts from "./pages/Contacts";
import Landing from "./pages/Landing";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import { Toaster } from "react-hot-toast";
export default function App() {
  return (
    <div className="bg-black">
      <>
        <Landing />
        <Skills />
        <Work />
        <Resume />
        <Contacts />
        <Footer />
      </>
      <Toaster
        position="top-center"
        gutter={8}
        toastOptions={{
          success: {
            duration: 3000,
            style: {
              background: "#000000b3",
              color: "#fff",
            },
          },
          error: {
            duration: 5000,
            style: {
              background: "#000",
              color: "#fff",
            },
          },
        }}
      />
    </div>
  );
}
