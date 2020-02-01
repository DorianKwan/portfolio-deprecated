import BrandLogo from "../assets/icons/brand-logo.inline.svg";
import LinkedIn from "../assets/icons/linked-in.inline.svg";
import Github from "../assets/icons/github.inline.svg";
import Envelope from "../assets/icons/envelope.inline.svg";
import Document from "../assets/icons/document.inline.svg";

const getIconSRC = (icon) => {
  let iconSRC = "";

  switch (icon) {
  case "brand-logo":
    iconSRC = BrandLogo;
    break;
  case "linked-in":
    iconSRC = LinkedIn;
    break;
  case "github":
    iconSRC = Github;
    break;
  case "envelope":
    iconSRC = Envelope;
    break;
  case "document":
    iconSRC = Document;
    break;
  default:
    // TODO: Add 404 SVG
    break;
  }

  return iconSRC;
};

export default getIconSRC;
