export default function Info() {
  return (
    <div className="info-page">
      <section className="info-section">
        <h2>Booking Procedure</h2>
        <div className="cards">
          <article className="card">
            <h3>Choose Sport</h3>
            <p>Select your preferred game.</p>
          </article>
          <article className="card">
            <h3>Select Slot</h3>
            <p>Choose date and slot timing.</p>
          </article>
          <article className="card">
            <h3>Confirm Booking</h3>
            <p>Book your slot instantly online.</p>
          </article>
        </div>
      </section>

      <section className="info-section">
        <h2>Sports Classes</h2>
        <div className="cards">
          <article className="card">
            <h3>Swimming</h3>
            <p>Professional swimming coaching available.</p>
          </article>
          <article className="card">
            <h3>Skating</h3>
            <p>Beginner and advanced skating classes.</p>
          </article>
          <article className="card">
            <h3>Fitness</h3>
            <p>Daily fitness and sports training programs.</p>
          </article>
        </div>
      </section>

      <section className="terms-section">
        <h2>Terms & Conditions</h2>
        <ul>
          <li>Players should arrive 15 minutes early.</li>
          <li>Booking cancellation allowed before 2 hours.</li>
          <li>Maintain discipline inside sports arena.</li>
          <li>Management is not responsible for personal items.</li>
          <li>Extra time depends on slot availability.</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          PlayZone is an outdoor sports academy portal where users can book sports slots and join academy classes easily. We
          provide professional sports training, modern sports facilities, and a smooth booking experience.
        </p>
      </section>

      <footer className="footer">
        <p>© 2026 PlayZone - Outdoor Sports Academy Portal</p>
      </footer>
    </div>
  );
}
