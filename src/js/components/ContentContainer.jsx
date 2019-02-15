import React from 'react';

import logo from 'src/assets/logo.svg';

class ContentContainer extends React.Component {
  render() {
    return (
      <div className="content-body">
        <img src={logo} className="react-logo" alt="logo" />
      </div>
    );
  }
}

export default ContentContainer;