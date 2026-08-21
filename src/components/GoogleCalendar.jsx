const BOOKING_URL = "https://calendar.app.google/kyZPL52E7BXRqRgx9";

function GoogleCalendar() {
  return (
    <section className="calendar-section" id="availability">
      <div className="section-intro">
        <div>
          <p className="eyebrow">BOOK A CONSULTATION</p>
          <h2>Pick a time that<br /><span>works for you.</span></h2>
        </div>
        <p className="intro-copy">Consultations are KSh 1,000. Choose an available time from my booking calendar and I’ll confirm the session details with you.</p>
      </div>
      <div className="calendar-card booking-calendar-card">
        <div className="calendar-card-copy">
          <span className="calendar-kicker">CONSULTATION / KSH 1,000</span>
          <h3>Ready when you are.</h3>
          <p>Use the calendar to select your preferred date and time. For fabrication, engineering, machine work and digital projects beyond the consultation, request a quote.</p>
          <div className="calendar-actions">
            <a className="primary-button" href={BOOKING_URL} target="_blank" rel="noreferrer">Open booking calendar <span>↗</span></a>
            <a className="secondary-button dark-secondary" href="tel:+254740967882">Call instead</a>
          </div>
        </div>
        <div className="calendar-visual" aria-hidden="true"><div className="calendar-orbit orbit-a" /><div className="calendar-orbit orbit-b" /><div className="calendar-grid"><span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>✓</span><span>✓</span><span>✓</span><span>•</span><span>✓</span><span>✓</span><span>•</span><span>✓</span><span>✓</span><span>•</span></div></div>
      </div>
    </section>
  );
}
export default GoogleCalendar;
