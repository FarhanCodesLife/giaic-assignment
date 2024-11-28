import React, { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface Props {
  children: ReactNode;
}

const SessionWrapper = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionWrapper;
