"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { toast } from "react-toastify";

export default function Login() {
  const [loginMethod, setLoginMethod] = useState("password");
  const [passwdHidden, setPassHidden] = useState(true);
  const [validEmailNotificationShown, setValidEmailNotificationShown] =
    useState(false);
  const [inputForm, setInputForm] = useState({
    email: "",
    password: "",
  });
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
    if (name === "email") {
      setValidEmailNotificationShown(true);
    }
  };
  const handleLogin = () => {
    if (!inputForm.email || !inputForm.password) {
      toast.dismiss();
      toast.error("Please enter both email and password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
      return;
    }
    if (!validateEmail(inputForm.email)) {
      toast.dismiss();
      toast.error("Enter Valid Email", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: false,
      });
      return;
    }
    console.log(
      `The email and password is: ${inputForm.email} and ${inputForm.password}`
    );
  };
  const handleLoginMethod = () => {
    if (loginMethod === "password") {
      setLoginMethod("phone");
    } else {
      setLoginMethod("password");
    }
  };
  return (
    <>
      {loginMethod === "password" ? (
        <div
          id="passwd-login"
          className=" w-[100%] h-[100%] flex items-center justify-center"
        >
          <div className="flex  flex-col gap-3 min-h-56 bg-red-400 m-auto p-10 w-[500]">
            <div className="flex gap-2 w-auto justify-center cursor-pointer">
              <div>
                <b>Email</b>
              </div>
              <div className="border-black border-[1px]"></div>
              <div onClick={handleLoginMethod}> Phone Number</div>
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
                    placeholder="Please Enter Email"
                  />

                  <div>
                    {!validateEmail(inputForm.email) &&
                    validEmailNotificationShown
                      ? "Input Valid Email"
                      : ""}
                  </div>
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
                <span className="mr-3">Dont have an account?</span>
                <Link className="text-blue-500 " href="/register">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div>Or, login with</div>
              <div className="flex gap-20">
                <div className="flex gap-2">
                  <Image
                    src="/Images/google.svg"
                    width={20}
                    height={20}
                    alt="Google_Logo"
                  />
                  <span>Google</span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/Images/facebook.svg"
                    width={20}
                    height={20}
                    alt="Google_Logo"
                  />
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          id="phone-login"
          className=" w-[100%] h-[100%] flex items-center justify-center"
        >
          <div className="flex flex-col gap-3 min-h-56 bg-red-400 m-auto p-10 w-[500]">
            <div className="flex gap-2 w-auto justify-center cursor-pointer">
              <div onClick={handleLoginMethod}>Email</div>
              <div className="border-black border-[1px]"></div>
              <div>
                <b>Phone Number</b>
              </div>
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
                    name="phone-number"
                    placeholder="Enter Phone Number"
                  />

                  <div>
                    {!validateEmail(inputForm.email) &&
                    validEmailNotificationShown
                      ? "Input Valid Email"
                      : ""}
                  </div>
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
                <span className="mr-3">Dont have an account?</span>
                <Link className="text-blue-500 " href="/register">
                  Sign up
                </Link>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div>Or, login with</div>
              <div className="flex gap-20">
                <div className="flex gap-2">
                  <Image
                    src="/Images/google.svg"
                    width={20}
                    height={20}
                    alt="Google_Logo"
                  />
                  <span>Google</span>
                </div>
                <div className="flex gap-2">
                  <Image
                    src="/Images/facebook.svg"
                    width={20}
                    height={20}
                    alt="Google_Logo"
                  />
                  <span>Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
