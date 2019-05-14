import { useState } from 'react';

const forms = {};
const useForm = (name, config) => {
  forms[name] = useSpecificForm(name, config)
  return forms[name];
}

const useSpecificForm = (name, {initialValues={},debug=false, callback=(inputs)=>console.log('form submitted', inputs)}) => {
  const [inputs, setInputs] = useState(initialValues);
  const [dirty, setDirty] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setInputs(initialValues);
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
      currentInputs = {...inputs, [event.target.name]: event.target.value};
      if(isEquivalent(currentInputs, initialValues)) setDirty(false);
      return currentInputs
    });
    if(debug) console.log({name, event: 'onChange', field: event.target.name, value: event.target.value, currentInputs});
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
    setInputs,
  };
}

const isEquivalent = (a, b) => {
  // Create arrays of property names
  var aProps = Object.getOwnPropertyNames(a);
  var bProps = Object.getOwnPropertyNames(b);

  // If number of properties is different,
  // objects are not equivalent
  if (aProps.length != bProps.length) {
      return false;
  }

  for (var i = 0; i < aProps.length; i++) {
      var propName = aProps[i];

      // If values of same property are not equal,
      // objects are not equivalent
      if (a[propName] !== b[propName]) {
          return false;
      }
  }

  // If we made it this far, objects
  // are considered equivalent
  return true;
}

export default useForm;
