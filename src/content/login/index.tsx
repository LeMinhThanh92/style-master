import React from 'react';
import LgPage from './loginpage';

const username = 'Thành Thành Thành';

function LoginPage() {
  return (
    <>
      {/*<Button*/}
      {/*  disableRipple*/}
      {/*  component={RouterLink}*/}
      {/*  to="/masteritemgroup/masteritemgrouphome"*/}
      {/*  state={{ username: username }}*/}
      {/*  startIcon={<AccountCircleTwoToneIcon />}*/}
      {/*>*/}
      {/*  Login*/}
      {/*</Button>*/}
      <LgPage />
    </>
  );
}

export { username };
export default LoginPage;
