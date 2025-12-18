import { Email, Group } from "@material-ui/icons";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Iclr2025 } from "../../stores/iclr2025";
import { CHI2026 } from "../../stores/chi2026";
import "./styles.scss";

export default function Footer(): ReactElement {
  const location = useLocation();
  
  // Extract year from current pathname (e.g., "/2025/about" -> "2025")
  const getYearFromPath = () => {
    const match = location.pathname.match(/^\/(\d{4})/);
    return match ? match[1] : "2025";
  };

  const year = getYearFromPath();
  const meta = year === "2026" ? CHI2026 : Iclr2025;
  const contact = meta.overview.contact;
  const slack = meta.overview.slack;

  return (
    <footer className="footer">
      <span className="info-title">Slack: </span>
      <Group style={{marginLeft: 5, fontStyle: "normal"}} className="icon" fontSize="small" color="primary" />{" "}
      <a href={slack} style={{fontStyle: "italic"}}>Join our Slack</a>!
      <span className="info-title" style={{marginLeft: 10}}>Contact Us: </span>
      If you have any questions, please contact us at{" "}
      <Email className="icon" fontSize="small" color="primary" />{" "}
      <a href={`mailto:${contact}`}>{contact}</a>.  

    </footer>
  );
}
