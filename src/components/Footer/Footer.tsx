import SocialMediaButton from "../globals/SocialMediaButton";
import Wave from "../globals/Wave/Wave";
import { MdEmail, MdPhone } from "react-icons/md";

const FooterMain = () => {
  return (
    <>
      <Wave />
      <footer className="flex min-h-[50vh] flex-col text-neutral-900  pb-6  items-center justify-evenly relative bg-white">
        <div className=" flex py-2  flex-col text-base">
          <p className="">Contacto:</p>

          <a
            href="mailto:gonzalovam@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2  text-neutral-500 hover:text-blue-600 transition-colors"
          >
            <MdEmail />
            gonzalovam@hotmail.com
          </a>

          <a
            href="https://wa.me/+541153741713"
            target="_blank"
            rel="noopener noreferrer"
            className=" flex items-center gap-2  text-neutral-500 hover:text-green-600 transition-colors"
          >
            <MdPhone />
            +54 11-53741713
          </a>
        </div>
        <div className=" lg:w-11/12 my-5 flex justify-end">
          <SocialMediaButton background />
        </div>
        <div className="absolute bottom-0">
          <p className="text-sm font-light">Gonzalo Martinez ~ 2024.</p>
        </div>
      </footer>
    </>
  );
};

export default FooterMain;
