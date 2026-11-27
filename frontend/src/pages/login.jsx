import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Login() {
  //const[email, setEmail] = useState("")
  //const[pass, setPass] = useState("")
  const navigate = useNavigate();
  const location = useLocation();
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

  function handlechange(e) {
    e.preventDefault();
    setLogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  }

  const handlesubmit = (event) => {
    event.preventDefault();
    const registerdata = location.state;
    console.log("register data", registerdata);
    console.log("login data", logindata);
    if (
      logindata.username === registerdata.name &&
      logindata.password === registerdata.password
    ) {
      console.log("if success");
      navigate("/dashboard", {
        state: logindata,
      });
    } else {
      console.log("invalid crede");
    }
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen bg-gray-400">
        <div className="text-blue-950 font-bold text-3xl mb-2">Login</div>
        {/*}
      <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <input type="password" required placeholder="Enter your password" value={pass} onChange={(e)=>{setPass(e.target.value)} }/>
      <button type="submit" onClick={()=>console.log(email,pass)}>Submit</button>
      <button type="submit" onClick={()=>print()}>Submit</button>
      */}

        <form onSubmit={handlesubmit} className="flex flex-col gap-3 bg-white p-4 rounded-2xl w-fit items-center">
          
          <label htmlFor="username" className="font-bold text-xl">User Name</label>
          <label htmlFor="password" className="font-bold text-xl">Password</label>

          <input
            type="text"
            required
            id="username"
            placeholder="Enter your username"
            name="username"
            onChange={handlechange}
            className="p-2 border border-gray-400 w-80 rounded-2xl mb-5"
          />
          <input
            type="password"
            required
            id="password"
            placeholder="Enter your password"
            name="password"
            onChange={handlechange}
            className="p-2 border border-gray-400 w-80 rounded-2xl"
          />

          <button type="submit" className="mt-10 bg-green-500 w-fit px-10 py-3 rounded-4xl">Submit</button>
        </form>
      </div>
    </>
  );
}

export default Login;
