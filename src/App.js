import Footer from './components/Footer';
import MainComp from './components/MainComp';
import MainSection from './components/MainSection';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen overflow-y-auto">
      <NavBar />
      <MainSection />
      <Footer />
      {/* <MainComp /> */}
    </div>
  );
}

export default App;
