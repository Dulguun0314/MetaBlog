import { Facebook } from "@/assets/icon/Facebook";
import { Instagram } from "@/assets/icon/Instagram";
import { Linkedin } from "@/assets/icon/Linkedin";
import { Twitter } from "@/assets/icon/Twitter";
import { BLogo } from "@/assets/icon/bLogo";

export const About = () => {
  return (
    <div className="bg-gray-50 w-full h-full pt-[64px] ">
      <div className="mx-4  bg-white mb-0 grid gap-4 md:bg-gray-50 md:flex md:justify-evenly md:gap-4">
        <div className=" md:grid md:gap-2">
          <h1 className="text-gray-800 font-semibold text-lg ">About</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit, sed
            do <br />
            eiusmod tempor incididunt ut <br /> labore et dolore magna aliqua.
            Ut <br /> enim ad minim veniam
          </p>
          <p>Email : info@jstemplate.net</p>
          <p>Phone : 880 123 456 789</p>
        </div>

        <div className="flex gap-3 md:grid md:gap-0">
          <button>Home</button>
          <button>Blog</button>
          <button>Contact</button>
        </div>
        <div className="flex gap-3 mb-4">
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Instagram />
          </button>
          <button>
            <Linkedin />
          </button>
        </div>
      </div>
      <div className="bg-white mx-4 mt-1 pt-10 grid md:flex gap-10 md:bg-gray-50 md:justify-between md:mx-[450px] md:pb-20">
        <div className="flex gap-3 ">
          <div>
            <BLogo />
          </div>
          <div cla>
            <div className="flex">
              <p>Meta</p>
              <p className="text-gray-800 font-extrabold">Blog</p>
            </div>
            <div>
              <p className="text-gray-600">© All Rights Reserved.</p>
            </div>
          </div>
        </div>

        <div className="grid justify-start gap-4 md:flex ">
          <button>Terms of Use</button>
          <button>Privacy Policy</button>
          <button>Cookie Policy</button>
        </div>
      </div>
    </div>
  );
};