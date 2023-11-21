import Image from "next/image";
import igSvg from "@/utils/images/socialmedia/instagram.svg";
import linkedinSvg from "@/utils/images/socialmedia/linkedin.svg";
import githubSvg from "@/utils/images/socialmedia/github.svg";
const socialMedia = [
  { img: igSvg, url: "https://instagram.com/gonzaqepasa" },
  { img: linkedinSvg, url: "https://www.linkedin.com/in/gonzaqepasa/" },
  { img: githubSvg, url: "https://github.com/gonzaqepasa/" },
];

const SocialMediaButton = () => {
  return (
    <div className="flex gap-3">
      {socialMedia.map((item, i) => (
        <a
          className={`hover:scale-110 transition-transform`}
          key={i}
          target="_blank"
          href={item.url}
        >
          <Image height={20} src={item.img} alt="Err" />
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButton;
