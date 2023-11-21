import SocialMediaButton from "../globals/SocialMediaButton";
import Wave from "../globals/Wave/Wave";

const FooterMain = () => {
  return (
    <>
      <Wave />
      <footer className="flex min-h-[20vh] flex-col text-neutral-900  pb-6  items-center relative bg-white">
        <div className=" flex py-2  flex-col text-sm">
          <p className="text-base">Contacto:</p>

          <a
            href="mailto:gonzalovam@hotmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-blue-600 transition-colors"
          >
            gonzalovam@hotmail.com
          </a>

          <a
            href="https://wa.me/+541153741713"
            target="_blank"
            rel="noopener noreferrer"
            className=" text-neutral-500 hover:text-green-600 transition-colors"
          >
            +54 11-53741713
          </a>
        </div>
        <div className=" w-11/12 flex">
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
