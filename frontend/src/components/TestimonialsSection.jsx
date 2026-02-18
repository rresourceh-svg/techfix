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

  // Helper function to render gold stars
  const renderStars = (count) => {
    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push("⭐");
    }
    return stars.join("");
  };

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div className="testimonial-card" key={index}>
            <p>"{t.message}"</p>
            <h4>- {t.name}</h4>
            <p className="stars">{renderStars(t.stars)}</p>
          </div>
        ))}
      </div>
      <p style={{ marginTop: "20px", fontSize: "14px", textAlign: "center" }}>
        See more reviews on our{" "}
        <a
          href="YOUR_GOOGLE_MAP_URL"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Map listing
        </a>
        .
      </p>
    </section>
  );
}

export default TestimonialsSection;
