import React from 'react';
import Header from "./Header";
import ActivitionCode from "./ActivitionCode";
import ListPlayer from "./ListPlayer";
import FooterBanner from "./FooterBanner";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
        <Header/>
        <section>
            <ActivitionCode/>
            <ListPlayer/>
        </section>
      <FooterBanner/>
    </div>
  );
}

export default App;
