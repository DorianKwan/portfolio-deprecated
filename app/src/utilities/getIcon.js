import BrandLogo from "../assets/icons/brand-logo.inline.svg";
import LinkedIn from "../assets/icons/linked-in.inline.svg";
import Github from "../assets/icons/github.inline.svg";
import Envelope from "../assets/icons/envelope.inline.svg";
import Document from "../assets/icons/document.inline.svg";

const getIcon = (iconName) => {
  let icon;

  switch (iconName) {
  case "brand-logo":
    icon = BrandLogo;
    break;
  case "linked-in":
    icon = LinkedIn;
    break;
  case "github":
    icon = Github;
    break;
  case "envelope":
    icon = Envelope;
    break;
  case "document":
    icon = Document;
    break;
  default:
    // TODO: Add 404 SVG
    break;
  }

  return icon;
};

export default getIcon;
