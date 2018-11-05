import React from 'react';

class ErrorBoundry extends React.Component {
  state = {
    error: false,
  };

  static getDerivedStateFromError(error) {
    return { error: true };
  }

  componentDidCatch(e, i) {
    this.setState({ error: true });
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{ backgroundColor: 'red', color: 'white' }}>Error</div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundry;
