import { IoLogInOutline } from "react-icons/io5";

const LoginButton = () => {
  // const { loginWithRedirect } = useAuth0();

  return(
    <a>
      <div className="flex items-center justify-center h- w-
      bg-gray-700 text-yellow-600 rounded-3xl hover:text-yellow-200
      hover:bg-slate-900">
        <IoLogInOutline size="120" />
      </div>;
    </a>);
}
export default LoginButton