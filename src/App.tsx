import './App.scss';
import Base from './components/Base/Base';
import Combo from './components/Combo/Combo';
import Favs from './components/Favs/Favs';
import Giftset from './components/Giftset/Giftset';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="app">
      <Header/>
      <Base/>
      <Favs/>
      <Giftset/>
      <Combo/>
    </div>
  );
}

export default App;
