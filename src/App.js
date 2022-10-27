import './App.css';
import Header from './Components/Header/Index.js'
import Main from './Components/Main/Index.js'
import Footer from './Components/Footer/Index.js'


function App() {
  return (
    <div className='bg-lightBlack'>
      <div className='bg-lightOrange'>
      <Header />
      </div>
     <div className=" container mx-auto mt-5">
      <Main />
      </div>
      <div className='bg-lightOrange'>
      <Footer />
      </div>
    </div>
  );
}

export default App;
