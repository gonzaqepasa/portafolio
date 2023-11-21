import SocialMediaButton from "../globals/SocialMediaButton";
import Wave from "../globals/Wave/Wave";

const FooterMain = () => {
  return (
    <>
      <footer className=" relative bg-white">
        {/* <Wave /> */}
        <section
          //   style={{ clipPath: " polygon(0 5%, 100% 0, 100% 100%, 0% 100%)" }}
          className={`h-52 pt-10 flex flex-col items-center bg-neutral-800  shadow-inner shadow-neutral-800/50 rounded-t-3xl`}
        >
          <div className="flex">
            <SocialMediaButton />
          </div>
          <div className="absolute bottom-0">
            <p className="text-sm font-light">Gonzalo Martinez ~ 2024.</p>
          </div>
        </section>
      </footer>
    </>
  );
};

export default FooterMain;
