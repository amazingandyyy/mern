import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

export default function(ComposedComponent) {
  const Authentication = (props) => {
    const navigate = useNavigate()
    useEffect(() => {
      if (!props.authenticated) {
        navigate('/signin')
      }
    }, [props.authenticated])
    return <ComposedComponent {...props} />
  }

  function mapStateToProps({auth}) {
    return { authenticated: auth.authenticated };
  }

  return connect(mapStateToProps)(Authentication);
}