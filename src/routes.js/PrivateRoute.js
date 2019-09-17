
import {Component} from 'react'

class PrivateRoute extends Component{
  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default PrivateRoute;
