import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  // register - register every input for initialization state in form
  // handleSubmit - funkcija, kotoraja obrabativajet dannije vseh zaregestrirovannih input polej
  // formsState - dannije o kazdom zaregestrirovannom input polia
  // reset - funkcija kotoraja pri otpravke formi ocisiajet inputi
  let {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm(); //({ mode: 'all' }); // default onSubmit togda pri otpravke, onChange pri izmeneniji, onTouched dlia telefonov, onBlur kak tolko uberajem focus s inputa tolko togda viskakivajet osibka

  // console.log(register('test'));

  // Funckija kotoraja beriot v rabotu dannije posle uspesnoj proverki validaciji
  const onSubmit = data => {
    console.log(data);
    reset(); // ctobi ocistit kakoje to pole odno reset({fistname: ''})
  };

  const firstnameInp = register('firstname', {
    required: 'Firstname is required!',
    maxLength: {
      value: 5,
      message: 'Firstname length exceeded. (Max 5 characters)',
    },
  });

  const lastnameInp = register('lastname', {
    required: 'Lastname is required!',
    minLength: {
      value: 3,
      message: 'Lastname length is too short. (Min 3 characters)',
    },
  });

  const loginInp = register('login', {
    required: 'The field is not filled',
    pattern: {
      value:
        /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,

      message: 'Email written with errors',
    },
  });

  // console.log(errors); test

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Firstname:
            <input placeholder='Enter Firstname' {...firstnameInp} />
          </label>
        </div>
        {/* element kotorij otobrazajet vozmoznuju osibku pri otpravke formi */}
        {errors.firstname && (
          <p style={{ color: 'red' }}>{errors.firstname.message}</p>
        )}

        <div>
          <label>
            Lastname:
            <input placeholder='Enter Lastname' {...lastnameInp} />
          </label>
        </div>
        {errors.lastname && (
          <p style={{ color: 'red' }}>{errors.lastname.message}</p>
        )}

        <div>
          <label>
            Login:
            <input placeholder='Enter Login' {...loginInp} />
          </label>
        </div>
        {errors.login && <p style={{ color: 'red' }}>{errors.login.message}</p>}

        <div>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
};

export default App;
