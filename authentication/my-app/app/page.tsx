import React from 'react'
import Signin from './componentes/login/Signin'
import SessionWrapper from './componentes/seccionWrapper'

const page = () => {
  return (
<>
<SessionWrapper>

    <Signin/>
</SessionWrapper>

</>
  )
}

export default page