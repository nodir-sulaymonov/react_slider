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
                <div className="row">
                    <div className="col-lg-6">
                        <ActivitionCode/>
                    </div>
                    <div className="col-lg-6">
                        <ListPlayer/>
                    </div>
                </div>
            </section>

            <FooterBanner/>
        </div>
    );
}

export default App;
