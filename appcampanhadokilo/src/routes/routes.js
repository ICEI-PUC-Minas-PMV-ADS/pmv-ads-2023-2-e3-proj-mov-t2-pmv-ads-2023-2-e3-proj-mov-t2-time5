import React from 'react';

import {useUser} from '../contexts/UserContext';

import Auth from './auth.routes';
import Main from './drawer.routes';

const Route = () => {

  const {signed} = useUser();

  return (
    <>
    {
      signed 
      ? <Main />
      : <Auth />
    }
    </>
  )
}

export default Route;