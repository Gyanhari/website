"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [loginMethod, setLoginMethod] = useState("password");
  const [passwdHidden, setPassHidden] = useState(true);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
  const [validEmail, setValidEmail] = useState(false);
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };
  const passwdInput = useRef(null);
  const passwordStateToggle = () => {
    setPassHidden(!passwdHidden);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInputForm((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleLogin = () => {
    if (!inputForm.email || !inputForm.password) {
      toast.error("Please enter both email and password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    console.log(
      `The email and password is: ${inputForm.email} and ${inputForm.password}`
    );
  };
  return (
    <>
      <div className="flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex-col gap-3 min-h-56 bg-red-400 m-auto p-10 w-[500]">
        <div className="flex gap-2 w-auto justify-center">
          <div>Password</div>
          <div className="border-black border-[1px]"></div>
          <div> Phone Number</div>
        </div>
        <div className="flex gap-3 flex-col">
          <form className="flex flex-col gap-5" action="">
            <div>
              <input
                className="w-[100%] h-[40px]  pl-[10px] rounded-[13px]"
                id="email-signin"
                type="text"
                value={inputForm.email}
                onChange={handleInputChange}
                name="email"
                placeholder="Please Enter Phone Number or Email"
              />
              {validateEmail(inputForm.email) ? (
                <div></div>
              ) : (
                <div>Please Enter Valid Email</div>
              )}
            </div>
            <div className="relative">
              <input
                className="w-[100%] h-[40px] pl-[10px] rounded-[13px] "
                type={passwdHidden ? "password" : "text"}
                value={inputForm.password}
                onChange={handleInputChange}
                ref={passwdInput}
                id="password-signin"
                name="password"
                placeholder="Please Enter your password"
              />
              <div className="absolute top-1.5 right-2.5">
                <Image
                  src={
                    passwdHidden
                      ? "/Images/eye-close.svg"
                      : "/Images/eye-open.svg"
                  }
                  width={30}
                  height={30}
                  alt={passwdHidden ? "Block Password" : "Show Password"}
                  onClick={passwordStateToggle}
                />
              </div>
            </div>
          </form>
          <div className="text-right">
            <Link href="">Forgot Password?</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div>
            <button
              onClick={handleLogin}
              className="w-[100%] h-[45px] bg-orange-400 rounded-[15px]"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            Dont have an account?
            <Link className="text-blue-500 " href="/register">
              Sign up
            </Link>
          </div>
        </div>
        <div>
          <div>Or, login with</div>
          <div>
            <div>Google</div>
            <div>Facebook</div>
          </div>
        </div>
      </div>
    </>
  );
}
