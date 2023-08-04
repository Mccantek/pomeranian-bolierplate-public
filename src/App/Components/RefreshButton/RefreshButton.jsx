import React from 'react';

class RefreshButton extends React.Component {
  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    return (
      <button className="big-button" onClick={this.handleRefresh}>
        Odśwież stronę
      </button>
    );
  }
}

export default RefreshButton;
