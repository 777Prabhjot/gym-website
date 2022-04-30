import React from 'react';
import Featurebox from './Featurebox';

const Features = () => {
  
  return (
    <div id="features">
    <h1>FEATURES</h1>
    <div className="a-container">
    <Featurebox image="https://iili.io/WFrpYg.png" title="Weight Lifting" />
    <Featurebox image="https://iili.io/WF4c8u.png" title="Legs Exercise" />
    <Featurebox image="https://iili.io/WF4N8g.png" title="Heavy Weight" />
    <Featurebox image="https://iili.io/WF4bol.png" title="Sholders Exercise" />
    </div>
    </div>
    )
}

export default Features;