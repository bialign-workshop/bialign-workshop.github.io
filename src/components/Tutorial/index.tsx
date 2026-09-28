import { ReactElement } from "react";
import { Description, GetApp, OpenInNew, Slideshow } from "@material-ui/icons";
import { CHIPeople, Tutorial } from "../../stores/Interfaces";
import "./styles.scss";

const img = (path: string) => `${process.env.PUBLIC_URL}/images/${path}`;

// Minutes from a duration label such as "15 min", used to size the agenda bars.
const minutes = (duration: string) => parseInt(duration, 10) || 0;

const SectionHeading = ({ eyebrow, title }: { eyebrow: string; title: string }) => (
  <div className="tp-heading">
    <div className="tp-eyebrow">{eyebrow}</div>
    <h2>{title}</h2>
  </div>
);

const PersonCard = ({ person }: { person: CHIPeople }) => (
  <a
    href={person.webpage}
    target="_blank"
    rel="noopener noreferrer"
    className="tp-person"
    title={person.description || undefined}
  >
    <img src={img(person.img)} alt={person.name} />
    <span>
      <strong>{person.name}</strong>
      <em>{person.affliation}</em>
    </span>
  </a>
);

const TutorialPage = ({ tutorial }: { tutorial: Tutorial }): ReactElement => {
  const sessions = tutorial.sessions ?? [];
  const longest = Math.max(1, ...sessions.map((s) => minutes(s.duration)));
  const total = sessions.reduce((sum, s) => sum + minutes(s.duration), 0);

  return (
    <div className="tp">
      <header className="tp-hero">
        <div className="tp-wrap">
          <div className="tp-hero-top">
            <div className="tp-kicker">{tutorial.kicker}</div>
            {tutorial.logos && (
              <div className="tp-logos">
                {tutorial.logos.map((logo) => (
                  <a key={logo.url} href={logo.url} target="_blank" rel="noopener noreferrer" title={logo.alt}>
                    <img src={img(logo.img)} alt={logo.alt} />
                  </a>
                ))}
              </div>
            )}
          </div>
          <h1>
            {/* Break after the first colon so a "Title: Subtitle" heading sits on two lines. */}
            {tutorial.heading.split(/(?<=:)\s+/, 2).map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
          {tutorial.host && (
            <div className="tp-host">
              Hosted by the{" "}
              <a href={tutorial.host.url} target="_blank" rel="noopener noreferrer">
                {tutorial.host.label}
              </a>
              {tutorial.event && (
                <>
                  {" "}at the{" "}
                  <a href={tutorial.event.url} target="_blank" rel="noopener noreferrer">
                    {tutorial.event.label}
                  </a>
                </>
              )}
            </div>
          )}
          {tutorial.title && <p className="tp-hero-title">{tutorial.title}</p>}

          <div className="tp-chips">
            {tutorial.facts.map((fact) =>
              fact.url ? (
                <a key={fact.label} className="tp-chip" href={fact.url} target="_blank" rel="noopener noreferrer">
                  <span className="tp-chip-icon">{fact.icon}</span>
                  {fact.value}
                </a>
              ) : (
                <span key={fact.label} className="tp-chip">
                  <span className="tp-chip-icon">{fact.icon}</span>
                  {fact.value}
                </span>
              )
            )}
          </div>

          {tutorial.slides && (
            <div className="tp-actions">
              <a className="tp-btn primary" href={tutorial.slides.viewUrl} target="_blank" rel="noopener noreferrer">
                <Slideshow /> View Slides
              </a>
              {tutorial.slides.pdfUrl && (
                <a className="tp-btn ghost" href={tutorial.slides.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <GetApp /> Download PDF
                </a>
              )}
              {tutorial.heroLinks?.map((link) => (
                <a key={link.url} className="tp-btn ghost" href={link.url} target="_blank" rel="noopener noreferrer">
                  <Description /> {link.label}
                </a>
              ))}
            </div>
          )}

          <div className="tp-hero-people">
            <div className="tp-people-label">{tutorial.presentersTitle}</div>
            <div className="tp-people-grid">
              {tutorial.presenters.map((p) => (
                <PersonCard key={p.name} person={p} />
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="tp-main">
        <section className="tp-section tp-wrap">
          <SectionHeading eyebrow="About" title="The Tutorial" />
          <div className="tp-about">
            <div className="tp-abstract">
              {tutorial.abstract?.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            {tutorial.objectives && (
              <aside className="tp-card tp-objectives">
                <h3>Learning Objectives</h3>
                <ol>
                  {tutorial.objectives.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ol>
              </aside>
            )}
          </div>
        </section>

        {tutorial.slides && (
          <section className="tp-section tp-wrap">
            <SectionHeading eyebrow="Materials" title="Tutorial Slides" />
            <div className="tp-slides-frame">
              <iframe
                src={tutorial.slides.embedUrl}
                title="Tutorial slides"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="tp-slides-links">
              <a href={tutorial.slides.viewUrl} target="_blank" rel="noopener noreferrer">
                <OpenInNew /> Open in Google Slides
              </a>
              {tutorial.slides.pdfUrl && (
                <a href={tutorial.slides.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <GetApp /> Download PDF
                </a>
              )}
            </div>
          </section>
        )}

        {sessions.length > 0 && (
          <section className="tp-section tp-dark">
            <div className="tp-wrap">
              <SectionHeading eyebrow={`${total} minutes`} title="Agenda" />
              <ol className="tp-agenda">
                {sessions.map((s) => (
                  <li key={s.title}>
                    <span className="tp-agenda-badge">{s.number}</span>
                    <div className="tp-agenda-body">
                      <div className="tp-agenda-title">{s.title}</div>
                      <div className="tp-agenda-speaker">{s.speaker}</div>
                      <div className="tp-agenda-bar">
                        <span style={{ width: `${(minutes(s.duration) / longest) * 100}%` }} />
                      </div>
                    </div>
                    <span className="tp-agenda-time">{s.duration}</span>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {tutorial.highlights && (
          <section className="tp-section tp-wrap">
            <SectionHeading eyebrow="From the slides" title="Highlights" />
            <div className="tp-highlights">
              {tutorial.highlights.map((h) => (
                <a
                  key={h.img}
                  className="tp-card tp-highlight"
                  href={img(h.img)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={img(h.img)} alt={h.title} loading="lazy" />
                  <div className="tp-highlight-text">
                    <h3>{h.title}</h3>
                    <p>{h.caption}</p>
                  </div>
                </a>
              ))}
            </div>
          </section>
        )}

        {tutorial.journey && (
          <section className="tp-section tp-wrap">
            <SectionHeading eyebrow="Community" title="The BiAlign Journey" />
            <ol className="tp-journey">
              {tutorial.journey.map((m) => {
                const inner = (
                  <>
                    <span className="tp-journey-date">{m.date}</span>
                    <strong>{m.title}</strong>
                    {m.detail && <span className="tp-journey-detail">{m.detail}</span>}
                  </>
                );
                return (
                  <li key={m.title} className={m.current ? "current" : undefined}>
                    {m.url ? (
                      <a href={m.url} target="_blank" rel="noopener noreferrer">
                        {inner}
                      </a>
                    ) : (
                      <div>{inner}</div>
                    )}
                  </li>
                );
              })}
            </ol>
            {tutorial.journeyStats && (
              <div className="tp-stats">
                {tutorial.journeyStats.map((stat) => (
                  <span key={stat}>{stat}</span>
                ))}
              </div>
            )}
          </section>
        )}

        {tutorial.links && (
          <section className="tp-section tp-wrap">
            <SectionHeading eyebrow="Learn more" title="Related Resources" />
            <div className="tp-links">
              {tutorial.links.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label} <OpenInNew />
                </a>
              ))}
            </div>
          </section>
        )}
        {tutorial.acknowledgements && (
          <section className="tp-section tp-dark tp-thanks">
            <div className="tp-wrap">
              <SectionHeading eyebrow="With gratitude" title={tutorial.acknowledgements.title} />
              <p className="tp-thanks-intro">{tutorial.acknowledgements.intro}</p>
              <div className="tp-people-grid">
                {tutorial.acknowledgements.people.map((p) => (
                  <PersonCard key={p.name} person={p} />
                ))}
              </div>
              {/* The participants photo belongs to the same thank-you. */}
              {tutorial.groupPhoto && (
                <figure className="tp-photo">
                  <a href={img(tutorial.groupPhoto.img)} target="_blank" rel="noopener noreferrer">
                    <img src={img(tutorial.groupPhoto.img)} alt={tutorial.groupPhoto.caption} loading="lazy" />
                  </a>
                  <figcaption>{tutorial.groupPhoto.caption}</figcaption>
                </figure>
              )}
            </div>
          </section>
        )}

        {tutorial.groupPhoto && !tutorial.acknowledgements && (
          <section className="tp-section tp-wrap">
            <SectionHeading eyebrow="Thank you" title="Tutorial Participants" />
            <figure className="tp-photo">
              <a href={img(tutorial.groupPhoto.img)} target="_blank" rel="noopener noreferrer">
                <img src={img(tutorial.groupPhoto.img)} alt={tutorial.groupPhoto.caption} loading="lazy" />
              </a>
              <figcaption>{tutorial.groupPhoto.caption}</figcaption>
            </figure>
          </section>
        )}
      </main>
    </div>
  );
};

export default TutorialPage;
