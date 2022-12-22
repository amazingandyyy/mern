import { connect } from 'react-redux';
import useForm from '../../use-form-react';
import {signUserIn} from '../../actions';
import CenterCard363 from '../centerCard363';

const Signin = (props) => {
    const options = {
        initialValues: {
            'email': '',
            'password': ''
        },
        callback: () => {
            console.log('works!', inputs)
            props.signUserIn(inputs);
        },
        debug: false
    }
    const { onSubmit, onChange, inputs, dirty, submitting } = useForm('AdvanceForm', options);
    return (
            <CenterCard363>
                <div className='card'>
                <h4 className="card-header">
                    Sign In
                </h4>
                <div className="card-body">
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input
                            name="email"
                            type='email'
                            value={inputs.email}
                            className="form-control form-control-lg"
                            placeholder="sample@email.com"
                            onChange={onChange}
                            required/>
                    </div>
                    <div className="form-group">
                        <label>Password:</label>
                        <input
                            type='password'
                            name="password"
                            value={inputs.password}
                            className="form-control form-control-lg"
                            placeholder="your password"
                            onChange={onChange}
                            required/>
                    </div>
                    <div style={{'paddingTop': '30px'}}>
                        <button
                            type="submit"
                            className="btn btn-lg btn-light btn-block"
                            disabled={!dirty || submitting}>
                            Sign In
                        </button>
                    </div>
                </form>
                </div>
                </div>
            </CenterCard363>
    );
}

export default connect(null, {signUserIn})(Signin);