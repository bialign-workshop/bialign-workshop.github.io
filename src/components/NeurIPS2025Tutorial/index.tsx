import { ReactElement } from "react";
import { Slideshow, Videocam } from "@material-ui/icons";
import { CHIPeople, Tutorial } from "../../stores/Interfaces";
import "./styles.scss";

// Reproduces https://hai-alignment-course.github.io/tutorial/ (source:
// github.com/hai-alignment-course/tutorial) inside the BiAlign site, keeping
// the site header and footer around it.

const ProfileGrid = ({ people, className }: { people: CHIPeople[]; className: string }) => (
  <div className={`profile-grid ${className}`}>
    {people.map((person) => (
      <a
        key={person.name}
        href={person.webpage}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-card profile-card"
      >
        <img src={`${process.env.PUBLIC_URL}/images/${person.img}`} alt={`Headshot of ${person.name}`} />
        <h3>{person.name}</h3>
        <p>{person.affliation}</p>
      </a>
    ))}
  </div>
);

const NeurIPS2025Tutorial = ({ tutorial }: { tutorial: Tutorial }): ReactElement => {
  const [videoLink, slidesLink] = tutorial.heroLinks ?? [];

  return (
    <div className="hai-tutorial">
      <div className="hai-container">
        <header className="hai-header">
          <a className="hai-kicker" href={tutorial.kickerUrl} target="_blank" rel="noopener noreferrer">
            {tutorial.kicker}
          </a>
          <h1>
            <a href={tutorial.headingUrl} target="_blank" rel="noopener noreferrer">
              {tutorial.heading}
            </a>
          </h1>
          <p className="hai-lead">
            <a href={tutorial.headingUrl} target="_blank" rel="noopener noreferrer">
              {tutorial.subheading}
            </a>
          </p>
          <p className="hai-lead hai-hero-links">
            {videoLink && (
              <a href={videoLink.url} target="_blank" rel="noopener noreferrer">
                <Videocam /> [{videoLink.label}]
              </a>
            )}
            {slidesLink && (
              <a href={slidesLink.url} target="_blank" rel="noopener noreferrer">
                <Slideshow /> [{slidesLink.label}]
              </a>
            )}
          </p>
        </header>

        <section className="hai-section">
          <ProfileGrid people={tutorial.presenters} className="speakers" />
        </section>

        <section className="hai-section">
          <div className="details-grid">
            {tutorial.facts.map((fact) => (
              <div className="glass-card detail-card" key={fact.label}>
                <div className="detail-icon">{fact.icon}</div>
                <div>
                  <h3>{fact.label}</h3>
                  <p>{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="hai-section">
          <h2>Tutorial Outline</h2>
          <div className="outline-grid">
            {(tutorial.parts ?? []).map((part) => (
              <div className="glass-card outline-card" key={part.title}>
                <span className="outline-emoji">{part.emoji}</span>
                <h3>{part.title}</h3>
                <p>{part.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {tutorial.sessions && (
          <section className="hai-section">
            <div className="glass-card schedule-card">
              <ul className="timeline">
                {tutorial.sessions.map((session) => {
                  const isPanel = session.number === "Panel";
                  return (
                    <li key={session.title}>
                      <span className="timeline-line" aria-hidden="true" />
                      <div className="timeline-row">
                        <span className={`timeline-badge${isPanel ? " panel" : ""}`}>
                          {isPanel ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.056 3 12s4.03 8.25 9 8.25Z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75V17.25M12 8.25V9" />
                            </svg>
                          ) : (
                            session.number
                          )}
                        </span>
                        <div className="timeline-content">
                          <p>
                            {session.title}
                            {session.speaker && <> | {session.speaker}</>}
                            {session.note && <span className="accent"> | {session.note}</span>}
                            {session.slides && (
                              <>
                                {" "}
                                <a className="accent" href={session.slides} target="_blank" rel="noopener noreferrer">
                                  <Slideshow /> [Slides]
                                </a>
                              </>
                            )}
                          </p>
                          <time>{session.duration}</time>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {tutorial.panelists && (
          <section className="hai-section">
            <h2>Panelists</h2>
            <ProfileGrid people={tutorial.panelists} className="panelists" />
          </section>
        )}

        {tutorial.cta && (
          <section className="hai-cta">
            <h2>{tutorial.cta.title}</h2>
            <p>{tutorial.cta.text}</p>
            <a href={tutorial.cta.url} target="_blank" rel="noopener noreferrer">
              {tutorial.cta.label}
            </a>
          </section>
        )}
      </div>

      <div className="hai-footer">
        <p>&copy; 2025 NeurIPS. All rights reserved.</p>
      </div>
    </div>
  );
};

export default NeurIPS2025Tutorial;
