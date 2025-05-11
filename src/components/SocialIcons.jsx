import React from "react";
import {
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa6";

const SocialIcons = () => {
  const socialLinks = [
    {
      icon: <FaXTwitter />,
      url: "https://x.com/aparachiqui",
      color: "#1DA1F2",
    },
    {
      icon: <FaFacebookF />,
      url: "https://facebook.com/mopongoworld",
      color: "#4267B2",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/extremo_centro_/",
      color: "#E1306C",
    },
    {
      icon: <FaYoutube />,
      url: "https://www.youtube.com/@ExtremoCentroLive",
      color: "#FF0000",
    },
    { icon: <FaWhatsapp />, url: "https://wa.me/tunumero", color: "#25D366" },
    {
      icon: <FaTwitch />,
      url: "https://www.twitch.tv/pedroherreromestre",
      color: "#9146FF",
    },
  ];

  return (
    <div className="social-icons">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`social-icon ${
            social.url.includes("x.com")
              ? "twitter"
              : social.url.includes("facebook")
              ? "facebook"
              : social.url.includes("instagram")
              ? "instagram"
              : social.url.includes("youtube")
              ? "youtube"
              : social.url.includes("wa.me")
              ? "whatsapp"
              : social.url.includes("twitch")
              ? "twitch"
              : ""
          }`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
