const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=3092942911616954581";

function TestimonialsSection() {
  const testimonials = [
    {
      name: "Muhammad Ikram",
      message:
        "Excellent service! My laptop is working perfectly now. Very professional, honest, and fast service with fair pricing. Highly recommended!",
      stars: 5,
    },
    {
      name: "Moosa Sam",
      message: "Good man! Highly recommend ❤️",
      stars: 5,
    },
    {
      name: "Ali Khan",
      message:
        "TechFix fixed my laptop in no time! Highly recommend for quick repairs.",
      stars: 5,
    },
    {
      name: "Sara Malik",
      message: "Professional and fast service. My PC runs like new again.",
      stars: 5,
    },
    {
      name: "Usman Iqbal",
      message: "Reliable, affordable, and quick. TechFix is my go-to repair shop.",
      stars: 5,
    },
  ];

  const renderStars = (count) => "⭐".repeat(count);

  return (
    <section className="testimonials">
      <div className="container">
        <div className="section-heading">
          <h2>What clients say</h2>
          <p>Real reviews from people whose laptops and PCs we've worked on.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div className="testimonial-card" key={index}>
              <p>"{t.message}"</p>
              <h4>{t.name}</h4>
              <p className="stars">{renderStars(t.stars)}</p>
            </div>
          ))}
        </div>

        <p className="testimonials-note">
          See more reviews on our{" "}
          <a href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
            Google Maps listing
          </a>
          .
        </p>
      </div>
    </section>
  );
}

export default TestimonialsSection;
