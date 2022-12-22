import { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const Signout = (props) => {
    useEffect(() => {
      props.signUserOut()
    }, [])
    return (
      <div>
        <h1>Hope to see you soon!</h1>
      </div>
    );
}

export default connect(null, actions)(Signout)