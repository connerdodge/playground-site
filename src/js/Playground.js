import React, { Component } from 'react';

import 'src/css/Playground.scss';
import NavigationContainer from 'src/js/components/NavigationContainer';
import ContentContainer from 'src/js/components/ContentContainer';

class Playground extends Component {
  render() {
    return (
      <div className="playground-app">
        <NavigationContainer />
        <ContentContainer />
      </div>
    );
  }
}

export default Playground;
