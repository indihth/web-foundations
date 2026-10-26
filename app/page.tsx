import Link from "next/link";
import exampleSite from "@/assets/example-site.png";
import { steps } from "@/content/steps";
import {
  CS50_URL,
  EXAMPLE_PATH,
  P5_EXAMPLES_URL,
  SKETCH_URL,
} from "@/lib/workshop-urls";
import { Arrow, ExternalIcon } from "@/components/workshop/icons";

export default function Home() {
  const total = steps.length;
  const firstStep = steps[0];

  return (
    <main className="home">
      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span /> Student workshop
          </div>
          <h1>Code a meme creation app</h1>
          <p className="hero-intro">
            A practical introduction to HTML and JavaScript in the p5.js editor,
            using a provided stylesheet and helper functions, built to follow
            during today’s session and return to whenever you need it.
          </p>
          <div className="hero-meta">
            <span>
              <b>{total}</b> guided steps
            </span>
            <span>
              <b>≈2</b> hours in class
            </span>
            <span>Available after the session</span>
          </div>
        </div>

        <div className="home-cards">
          <a
            className="home-card example-card"
            href={EXAMPLE_PATH}
            target="_blank"
            rel="noreferrer"
          >
            <div className="card-topline">
              <span>
                <b>01</b> See where you’re heading
              </span>
              <em>
                Open site <ExternalIcon />
              </em>
            </div>
            <div className="example-placeholder">
              <div className="placeholder-browser">
                <div className="placeholder-bar">
                  <i />
                  <i />
                  <i />
                </div>
                <img
                  className="placeholder-shot"
                  src={exampleSite.src}
                  width={exampleSite.width}
                  height={exampleSite.height}
                  alt="Finished Meme-ify website"
                />
              </div>
            </div>
            <div className="card-caption">
              <div>
                <span>Finished example</span>
                <h2>Explore Meme-ify</h2>
              </div>
              <p>
                See the page you’ll build and compare your work with it at any
                point.
              </p>
            </div>
          </a>

          <Link className="home-card guide-card" href={`/guide/${firstStep.slug}`}>
            <div className="card-topline">
              <span>
                <b>02</b> Build it step by step
              </span>
              <em>
                Start guide <Arrow />
              </em>
            </div>
            <div className="guide-preview">
              <div className="mini-rail">
                <small>WORKSHOP STEPS</small>
                {[1, 2, 3, 4, 5].map((number) => (
                  <i className={number === 1 ? "active" : undefined} key={number}>
                    {number}
                    <span />
                  </i>
                ))}
              </div>
              <div className="mini-lesson">
                <span>
                  STEP 1 OF {total}
                </span>
                <div className="mini-progress">
                  <i />
                </div>
                <h3>{firstStep.title}</h3>
                <p>{firstStep.summary}</p>
                <div className="mini-code">
                  File → Save
                  <br />
                  template sketch
                </div>
              </div>
            </div>
            <div className="card-caption">
              <div>
                <span>{total} clear steps</span>
                <h2>Follow the guide</h2>
              </div>
              <p>
                Use it beside your editor today, then jump back to any step
                after the session.
              </p>
            </div>
          </Link>
        </div>

        <div className="workshop-note">
          <span>How we’ll work</span>
          <p>
            You’ll build the page in the online <b>p5.js editor</b>: type HTML
            in index.html, call helper functions from sketch.js, and use class
            names from the provided stylesheet.
          </p>
          <a href={SKETCH_URL} target="_blank" rel="noreferrer">
            Visit the p5.js editor <ExternalIcon />
          </a>
        </div>
      </section>

      <section className="resource-strip">
        <div className="resource-note">
          <span>Go further</span>
          <p>
            A full course, and a set of small projects, for when you want more
            than today’s page.
          </p>
        </div>
        <a className="resource-link" href={CS50_URL} target="_blank" rel="noreferrer">
          <span className="resource-number">01</span>
          <span>
            <b>Harvard CS50</b>
            <small>
              A well-rounded intro to computing that’s actually interesting, and
              great prep for any computing course.
            </small>
          </span>
          <ExternalIcon />
        </a>
        <a
          className="resource-link"
          href={P5_EXAMPLES_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span className="resource-number">02</span>
          <span>
            <b>p5.js examples</b>
            <small>Smaller starter projects you can open and change.</small>
          </span>
          <ExternalIcon />
        </a>
      </section>
    </main>
  );
}
