import React from 'react';
import { Provider } from 'react-redux';

import craeteStore from '../../createStore';

import Route from '../Route/Route';
import MainMap from '../Map/MainMap';

const store = craeteStore();

function App() {
  return (
    <Provider store={store}>
      <main className="main-wrapper">
        <div className="container">
          <h1>Маршрут</h1>
          <section className="wrapper">
            <Route />
            <MainMap />
          </section>
        </div>
      </main>
    </Provider>
  );
}

export default App;
