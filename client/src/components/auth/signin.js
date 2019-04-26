import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import {signUserIn} from '../../actions';
import CenterCard363 from '../centerCard363';
import useForm from './useForm';

const Signin = (props) => {
    // const renderAlert = () => {
    //     if(props.errorMsg) {
    //         return (
    //             <div className="alert alert-warning">
    //                 <strong>Oops! </strong>{this.props.errorMsg}
    //             </div>
    //         )
    //     }
    // }
    const { 
        onSubmit, onChange, inputs, dirty, submitting, reset,
        setInput
    } = useForm('signin', 
    {
        defaultValues: {
            'name1': '',
            'name2': ''
        },
        callback: () => {
            console.log('it works')
        },
        debug: true
    })
    useEffect(() => {
        if(inputs.name1!==inputs.name2) console.log('name is not match', inputs.name1, inputs.name2);
    });
    return (
            <CenterCard363>
                <div className='card'>
                <h4 className="card-header">
                    Sign In
                </h4>
                <button onClick={()=>{
                    reset()
                }}>Reset</button>
                <button onClick={()=>{
                    // reset()
                    setInput({'name1':'hello'})
                }}>Setup name1 hello</button>
                    <div className="card-body">
                    {dirty&&"it dirty"}
                    <form onSubmit={onSubmit}>
                        <div className="form-group">
                            <label>Name1:</label>
                            <input
                                type='name1'
                                name="name1"
                                value={inputs.name1}
                                className="form-control form-control-lg"
                                placeholder="Name 1"
                                required
                                onChange={onChange}
                                />
                        </div>
                        <div className="form-group">
                            <label>Name2:</label>
                            <input
                                type='name2'
                                name="name2"
                                value={inputs.name2}
                                className="form-control form-control-lg"
                                placeholder="Name 2"
                                required
                                onChange={onChange}
                                />
                        </div>
                        <div style={{'paddingTop': '30px'}}>
                            <button disabled={!dirty || submitting} type="submit" className="btn btn-lg btn-light btn-block">Sign in</button>
                        </div>
                    </form>
                    </div>
                </div>
            </CenterCard363>
    );
}

function mapStateToProps({auth}) {
    return {}
}

export default connect(mapStateToProps, {signUserIn})(Signin);