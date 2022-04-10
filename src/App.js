
import './App.css';
import Header from './components/header/Header';
import Nav from './components/Nav';
import Features from './components/Features'; 
import Motivation from './components/motivation/Motivaion';
import Faq from './components/Faq/Faq'; 
import Footer from './components/footer/Footer'; 
import Form from './components/Form/Form';
import COuter from './components/COuter';
// import {render, screen} from '@testing-library/react';

// testy
// test('is jpg presented by alt', () => {
//   render(<Features/>);
//   const linkElement=screen.getByAltTest()('backstroke.jpg');
//   expect(linkElement).toBeInDocument();
// });

// test('loads and displays greeting', () => {
//   render(<Header/>);
//   const linkElement=screen.getByText()('WELCOME!');
//   expect(linkElement).toBeInDocument();
// });


function App() {
  return (
    <div onWheel={(e) => {console.log('Scroll'); }} onTouchStart={(e) => {console.log('Touch'); }} onTouchMove={(e) => {console.log('Touch Move'); }} onTouchEnd={(e) => {console.log('Touch End'); }} onTouchCancel={(e) => {console.log('Touch Cancel'); }} >
      <header className="header-bg">
      <Nav/>
      </header>
      <div className='features-bg'>
      <Header/>
      </div>
      <Features />
      <Motivation />
      <Faq/>
      <Form/>
      <COuter/>
      <Footer />
    </div>
  );
}

export default App;