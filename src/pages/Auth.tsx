type Props = { isRegister?: boolean };

const Auth = ({ isRegister }: Props) => {
  return <div>{isRegister ? "register" : "login"}</div>;
};
export default Auth;
