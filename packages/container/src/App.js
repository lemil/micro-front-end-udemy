import React, {lazy, Suspense, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

import Progress from './components/Progress';
import Header from './components/Header'
import {Switch, Route, Router} from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';


const generatedClassName = createGenerateClassName({
   productionPrefix:'co',
});

export default() => {
   const [isSignedIn,setIsSignedIn] = useState(false);

   return (
      <BrowserRouter>
         <StylesProvider generateClassName={generatedClassName}>
            <div>
               <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
               <Suspense fallback={<Progress />} >
               <Switch>
                  <Route path="/auth" ><AuthLazy onSignIn={() => setIsSignedIn(true)} /></Route>>
                  <Route path="/" ><MarketingLazy /></Route>
               </Switch>
               </Suspense>
               </div>
         </StylesProvider>
      </BrowserRouter>
   );

};

