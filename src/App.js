import React from 'react';

import { Header } from './components';
import { Home, Cart } from './pages';
import { Route } from 'react-router-dom';

function App() {
  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:3000/db.json')
      .then((resp) => resp.json())
      .then((json) => {
        setPizzas(json.pizzas);
      });
  }, []);

  console.log(pizzas);

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={pizzas} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
