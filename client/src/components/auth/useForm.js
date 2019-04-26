import { useState } from 'react';

const useForm = (name, config) => {
  const forms = {};
  forms[name] = useSpecificForm(name, config)
  return forms[name];
}

const useSpecificForm = (name, {defaultValues={},debug=false, callback=()=>console.log('form submitted'), validation={}}) => {
  const [error, setError] = useState([]);
  const [inputs, setInputs] = useState(defaultValues);
  const [dirty, setDirty] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  
  // useEffect(() => {
  //   const validations = Object.keys(validation);
  //   if(validations!==0){
  //     validations.forEach(v=>{
  //       const check = validation[v];
  //       if(!check.validator()) setError(errors=>{
  //         if(errors.indexOf(check.errorMsg) == -1 ) return [...errors, check.errorMsg];
  //         return errors;
  //       })
  //       if(check.validator()) setError(errors=>{
  //         const index = errors.indexOf(check.errorMsg);
  //         if(index > -1) errors.splice(index, 1);
  //         return [...errors];
  //       })
  //     });
  //   }
  // })

  const reset = () => {
    setError([])
    setInputs(defaultValues);
    setDirty(false);
    setSubmitting(false);
    if(debug) console.log({name, event: 'reset', inputs})
  }

  const onChange = (event) => {
    event.persist();
    setDirty(true);
    setSubmitting(false);
    let currentInputs = inputs;
    setInputs(inputs => {
      currentInputs = {...inputs, [event.target.name]: event.target.value}
      // if(!event.target.value) delete currentInputs[event.target.name]
      if(Object.keys(currentInputs).length === 0){ setDirty(false) }
      return currentInputs
    });
    if(debug) console.log({name, event: 'onChange', field: event.target.name, value: event.target.value, currentInputs});
  }
  
  const setInput = (values) => {
    setInputs(inputs => ({...inputs, ...values}));
    if(debug) console.log({name, event: 'setInput', values});
  }

  const onSubmit = (event) => {
    setSubmitting(true);
    if (event) {
      event.preventDefault();
    }
    if(debug) console.log({name, event: 'onSubmit', values: inputs});
    return callback(inputs);
  }

  return {
    onSubmit,
    onChange,
    inputs,
    submitting,
    dirty,
    reset,
    setInput,
    error
  };
}

export default useForm;