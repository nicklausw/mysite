import React from 'react';
import Obfuscate from 'react-obfuscate';

export default () => (
  <div className="section">
    <div className="container">
      <div className="content">
        <p className="is-size-5 has-text-centered pl-0">e-mail: <Obfuscate linkText="E-mail me!" email="n@nicklausw.com"/></p>
        <p className="is-size-5 has-text-centered pl-0">phone: <a href="tel:7708289753">7708289753</a></p>
      </div>
    </div>
  </div>
)