import './Features.css';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Main from '../Components/Main/Main';
import Main11 from '../Components/Main1/Main11';
import Main22 from '../Components/Main2/Main22';
import Main33 from '../Components/Main3/Main33';
import Navbar from '../Components/Navbar/Navbar';

function Features() {
  return (
    <div className="App">
        <Navbar />
        <Header />
        <Main />
        <Main11 />
        <Main22 />
        <Main33 />
        <Footer />
    </div>
  );
}

export default Features;
