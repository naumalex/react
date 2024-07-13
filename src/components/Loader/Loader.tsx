import React from 'react';
import './Loader.css';

interface LoaderProps {
  loading: boolean;
}

export class Loader extends React.Component<LoaderProps> {
  constructor(props: LoaderProps) {
    super(props);
  }

  render() {
    if (!this.props.loading) {
      return null;
    }
    return (
      <div className="overlay">
        <div className="loader"></div>
      </div>
    );
  }
}
