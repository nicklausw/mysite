import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const code =
`#define SCREEN(x,y) "\x1b["#y";"#x"H"

struct Custom : Object {
  int frame;
  Custom() {
    frame = 0;
  }
  void Step() override {
    if(!TouchScreen.Held()) {
      frame++;
    } else {
      frame -= 2;
    }
    std::cout << SCREEN(0,10) << "Frame = " << frame;
  }
};

`

export default () => (
  <div className="section">
    <div className="container">
      <div className="content">
        <div className="columns is-centered">
          <div className="column is-9 header-white pt-0">
            <h1 className="mb-0 has-text-centered" style={{fontSize: "50px"}}>NDSA</h1>
            <h2 className="mt-0 has-text-centered">Nintendo DS C++ Engine</h2>
            <p style={{fontSize: "20px"}}>A C++ header library approach to building DS games.</p>
            <div style={{display: "block"}} className="has-text-left">
              <p style={{fontSize: "20px"}}>Game objects are simple.</p>
              <SyntaxHighlighter language="cpp" style={vscDarkPlus}>
                {code}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)