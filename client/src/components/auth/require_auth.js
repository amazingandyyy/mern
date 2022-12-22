import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

const AuthComponent = ({ Component, ...props }) => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!props.authenticated) {
      navigate('/signin')
    }
  }, [])

  return <Component {...props} />
}

function mapStateToProps({auth}) {
  return { authenticated: auth.authenticated };
}
export default connect(mapStateToProps)(AuthComponent)