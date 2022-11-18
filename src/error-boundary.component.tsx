import React, { ErrorInfo } from "react";

export default class ErrorBoundary extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
    // You can also log error messages to an error reporting service here
  }

  render() {
    if (this.state && this.state.errorInfo) {
      // Error path
      return (
        <div data-testid="errorboundary" className="error-card">
          <div className="error-data">
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
            </details>
          </div>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}