import { Email, Group } from "@material-ui/icons";
import { ReactElement } from "react";
import "./styles.scss";

export default function Footer({ contact, slack}:{ contact: string, slack:string}): ReactElement {
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
