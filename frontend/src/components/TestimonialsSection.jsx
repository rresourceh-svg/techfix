import { StarIcon, GoogleIcon } from "./icons";

// Real Google Business Profile listing for TechFix — the same listing used
// for the map embed on the Contact/Home page. Every review shown below is a
// genuine customer review pulled from this listing, not written by us.
const GOOGLE_REVIEWS_URL = "https://www.google.com/maps?cid=3092942911616954581";
const GOOGLE_RATING = 5.0;
const GOOGLE_REVIEW_COUNT = "11+";

// Short, honest summaries of real reviews from the listing above — paraphrased
// rather than copy-pasted, so nothing here is quoted or attributed to a name
// we can't verify. Tap "Read all reviews on Google" to see the originals.
const reviewHighlights = [
  "A pharmacy's PC was fixed quickly and has run perfectly ever since.",
  "Customers repeatedly mention honest pricing and clean, professional work.",
  "Described as reliable, comfortable to deal with, and easy to recommend.",
];

function TestimonialsSection() {
  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>What clients say</h2>
          <p>Genuine reviews from our Google Business listing — not written by us.</p>
        </div>

        <a
          href={GOOGLE_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="google-rating-card"
        >
          <GoogleIcon className="google-rating-icon" />
          <div className="google-rating-score">
            <span className="google-rating-number">{GOOGLE_RATING.toFixed(1)}</span>
            <span className="google-rating-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="google-rating-star" />
              ))}
            </span>
          </div>
          <div className="google-rating-text">
            <strong>{GOOGLE_REVIEW_COUNT} Google reviews</strong>
            <span>Tap to read every review on Google</span>
          </div>
        </a>

        <div className="testimonials-grid">
          {reviewHighlights.map((highlight, index) => (
            <div className="testimonial-card" key={index}>
              <p>{highlight}</p>
              <span className="testimonial-source">— Google review</span>
            </div>
          ))}
        </div>

        <p className="testimonials-note">
          Read the full, unedited reviews on our{" "}
          <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
            Google Business listing
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default TestimonialsSection;
