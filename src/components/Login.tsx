//login react component with inputs for username and password and a login button and a google login oauth button
export default function Login() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-2xl font-bold">Login</h1>
      <div className="flex flex-col items-center justify-center w-full h-full">
        <input
          type="text"
          className="w-80 h-10 border-2 border-gray-300 rounded-md"
          placeholder="Username"
        />
        <input
          type="password"
          className="w-80 h-10 border-2 border-gray-300 rounded-md"
          placeholder="Password"
        />
        <button className="w-80 h-10 border-2 border-gray-300 rounded-md">
          Login
        </button>
        <button className="w-80 h-10 border-2 border-gray-300 rounded-md">
          Login with Google
        </button>
      </div>
    </div>
  )
}
