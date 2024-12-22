import React, { useState } from "react";
import loginIcons from "../assets/signin.gif";
import { Link } from "react-router-dom";

const Login = () => {

    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const handleOnChange = (e) => {
        const {name, value} = e.target

        setData((preve) => {
            return{
                ...preve,
                [name] : value
            }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
    }

    console.log('Data logged in', data)

  return (
    <section id="login">
      <div className="mx-auto container p-4">

        <div className="bg-white p-8 my-6 w-full max-w-sm mx-auto rounded-xl ">
          <div className="w-20 h-20 mx-auto">
            <img className="rounded-full" src={loginIcons} alt="login icons" />
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>

            <div className="grid">
              <label>Email : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="email"
                  placeholder="enter email here..."
                  name="email"
                  value={data.email}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <div className="">
              <label>Password : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="password"
                  placeholder="enter password here..."
                  name="password"
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
              <Link
                to={"/forgot-password"}
                className="block w-fit ml-auto hover:underline hover:text-rose-600"
              >
                Forgot password
              </Link>
            </div>

            <button className="bg-rose-600 hover:bg-rose-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Login
            </button>
          </form>

          <p className="my-5">
            Dont't have account ? <Link to={"/signup"} className="text-rose-600 hover:text-rose-700 hover:underline">Sing up</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
