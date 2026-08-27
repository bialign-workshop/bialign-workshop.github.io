import { Email, Group } from "@material-ui/icons";
import { ReactElement } from "react";
import { useLocation } from "react-router-dom";
import { Iclr2025 } from "../../stores/iclr2025";
import { CHI2026 } from "../../stores/chi2026";
import { NeurIPS2026 } from "../../stores/neurips2026";
import "./styles.scss";

export default function Footer(): ReactElement {
  const location = useLocation();

  // Extract year/venue slug from current pathname (e.g., "/2025/about" -> "2025",
  // "/2026/about" -> "2026", "/neurips2026/about" -> "neurips2026")
  const getYearFromPath = () => {
    const match = location.pathname.match(/^\/(\d{4}|neurips2026)/);
    return match ? match[1] : "2025";
  };

  const year = getYearFromPath();
  const getMetadata = () => {
    if (year === "neurips2026") return NeurIPS2026;
    if (year === "2026") return CHI2026;
    return Iclr2025;
  };

  const meta = getMetadata();
  const contact = meta.overview.contact;
  const slack = meta.overview.slack;

  return (
    <footer className="footer">
      <span className="info-title">Slack: </span>
      <Group style={{marginLeft: 5, fontStyle: "normal"}} className="icon" fontSize="small" color="primary" />{" "}
      <a href={slack} style={{fontStyle: "italic"}}>Join our Slack</a>!
      <span className="info-title" style={{marginLeft: 10}}>Contact Us: </span>
      {contact ? (
        <>
          If you have any questions, please contact us at:{" "}
          <Email className="icon" fontSize="small" color="primary" />{" "}
          <a href={`mailto:${contact}`}>{contact}</a>!
        </>
      ) : (
        <>If you have any questions, please contact us!</>
      )}
    </footer>
  );
}
