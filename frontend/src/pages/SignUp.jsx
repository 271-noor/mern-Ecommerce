import React, { useState } from "react";
import loginIcons from "../assets/signin.gif";
import { Link, useNavigate } from "react-router-dom";
import imageTobase64 from "../helpers/imageTobase64";
import SummaryApi from "../common";
import { toast } from "react-toastify";

const SignUp = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
    profilePic: "",
  });

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve, //previous value restored
        [name]: value,
      };
    });
  };


  const handleUploadPic = async (e) => {
    const file = e.target.files[0];

    const imagePic = await imageTobase64(file);

    setData((preve) => {
      return {
        ...preve, //previous value restored
        profilePic: imagePic,
      };
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password === data.confirmPassword) {
      
      const dataResponse = await fetch(SummaryApi.signUp.url,{
        method : SummaryApi.signUp.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const dataApi = await dataResponse.json()

    if (dataApi.success) {
        toast.success(dataApi.message)
        navigate("/login")
    }
    if (dataApi.error) {
        toast.error(dataApi.message)
    }
  
    
    }else{
      console.log("please check password and confirm password!")
    }


  };


  return (
    <section id="signup">
      <div className="mx-auto container p-4">
        <div className="bg-white p-8 my-6 w-full max-w-sm mx-auto rounded-xl ">
          <div className="w-20 h-20 mx-auto relative overflow-hidden rounded-full">
            <div className="">
              <img
                className="rounded-full"
                src={ data.profilePic || loginIcons}
                alt="login icons"
              />
            </div>

            <form>
              <label>
                <div className="text-xs bg-opacity-80 bg-slate-200 pb-4 pt-2 cursor-pointer text-center absolute bottom-0 w-full">
                  Upload Photo
                </div>
                <input
                  type="file"
                  className="hidden"
                  onChange={handleUploadPic}
                />
              </label>
            </form>
          </div>

          <form className="pt-6 flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="grid">
              <label>Name : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="text"
                  placeholder="enter your name here..."
                  name="name"
                  value={data.name}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

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
            </div>

            <div className="">
              <label>Confirm Password : </label>
              <div className="bg-slate-100 p-2">
                <input
                  type="password"
                  placeholder="enter confirm password here..."
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleOnChange}
                  required
                  className="w-full h-full outline-none bg-transparent"
                />
              </div>
            </div>

            <button className="bg-rose-600 hover:bg-rose-700 text-white w-full px-6 py-2 max-w-[150px] rounded-full hover:scale-110 transition-all mx-auto block mt-6">
              Sign Up
            </button>
          </form>

          <p className="my-5">
            Already have account ?{" "}
            <Link
              to={"/login"}
              className="text-rose-600 hover:text-rose-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
