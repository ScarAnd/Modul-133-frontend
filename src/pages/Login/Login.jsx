/*----------------------------------------------------------------------------*/
/* IMPORTS                                                                    */
/*----------------------------------------------------------------------------*/

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../state/user/userThrunk.js';

/*----------------------------------------------------------------------------*/
/* Login                                                                      */
/*----------------------------------------------------------------------------*/

const Login = () => {
  const dispatch = useDispatch();

  const [mail, setMail] = useState('');
  const [passw, setPassw] = useState('');

  const handleOnClick = () => {
    dispatch(login());
  };

  return (
    <div className='d-flex'>
      <input
        type='text'
        name='email'
        id='email'
        onChange={(e) => setMail(e.target)}
      />
      <input
        type='text'
        name='password'
        id='passw'
        onChange={(e) => setPassw(e.target)}
      />
      <button onClick={(e) => handleOnClick()}>Login</button>
    </div>
  );
};

/*----------------------------------------------------------------------------*/
/* EXPORTS                                                                    */
/*----------------------------------------------------------------------------*/
export default Login;
