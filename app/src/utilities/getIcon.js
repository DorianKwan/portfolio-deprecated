import BrandLogo from "../../content/assets/icons/brand-logo.svg";
import LinkedIn from "../../content/assets/icons/linked-in.svg";
import Github from "../../content/assets/icons/github.svg";
import Envelope from "../../content/assets/icons/envelope.svg";
import Document from "../../content/assets/icons/document.svg";

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
