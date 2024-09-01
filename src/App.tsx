import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <div className="flex justify-center items-center w-full h-full">
        <div>
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
