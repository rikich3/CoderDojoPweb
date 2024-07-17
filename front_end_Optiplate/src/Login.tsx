const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded shadow-md">
        <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese su correo electrónico"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
            <input 
              type="password" 
              id="password" 
              className="w-full px-3 py-2 mt-1 border rounded focus:outline-none focus:ring focus:border-blue-300" 
              placeholder="Ingrese su contraseña"
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input 
                type="checkbox" 
                id="remember_me" 
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" 
              />
              <label htmlFor="remember_me" className="ml-2 text-sm text-gray-900">Recordarme</label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">¿Olvidaste tu contraseña?</a>
            </div>
          </div>
          <div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
