import React from 'react';
import LoginComponet from './componets/login/LoginComponet';
import SignoutComponents from './componets/login/Signoutcomponent';
import SessionWrapper from './componets/SessionWrapper';

const Page = () => {
  return (
    <SessionWrapper>
      <div>Home Page</div>
      <LoginComponet/>
      {/* <SignoutComponents/> */}
    </SessionWrapper>
  );
};

export default Page;
