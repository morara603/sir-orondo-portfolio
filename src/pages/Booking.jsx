import { useState } from "react";
import PaymentMethods from "../components/PaymentMethods";
import GoogleCalendar from "../components/GoogleCalendar";

function Booking() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    setSending(true);

    const form = event.target;
    const formData = new FormData(form);

    formData.append("_subject", "New Booking Request - Abednego Portfolio");
    formData.append("_replyto", formData.get("email"));

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/morara603@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        alert(
          "Something went wrong while sending your request. Please try again."
        );
      }
    } catch (error) {
      console.error(error);

      alert(
        "Unable to send the request. Please check your internet connection and try again."
      );
    } finally {
      setSending(false);
    }
  }

  return (
    <main>

      <section className="booking-section">

        <div className="booking-intro">

          <p className="section-label">
            START A PROJECT
          </p>

          <h2>
            Let's turn your idea into
            <span> something useful.</span>
          </h2>

          <p>
            Tell me what you are trying to design, build, repair or improve. Give me the context and I’ll help define the right next step.
          </p>

          <div className="booking-price-card">
            <span>CONSULTATION</span>
            <strong>KSh 1,000</strong>
            <small>Other engineering, fabrication, machine and digital services are quoted according to the project.</small>
          </div>

          <a className="calendar-direct-link" href="https://calendar.app.google/kyZPL52E7BXRqRgx9" target="_blank" rel="noreferrer">
            Prefer to choose a time first? <strong>Open my booking calendar ↗</strong>
          </a>

          <div className="booking-options">

            <div>
              <strong>01</strong>
              <span>Tell me the challenge</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Choose how we work</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Pick a preferred time</span>
            </div>

          </div>

        </div>


        <div className="booking-form-container edge-box">

          {submitted ? (

            <div className="booking-success">

              <div className="success-icon">
                ✓
              </div>

              <h3>
                Request received.
              </h3>

              <p>
                Thank you for contacting me. I have received your
                booking request and will get back to you to confirm
                the session.
              </p>

              <button
                onClick={() => setSubmitted(false)}
                className="booking-again"
              >
                Submit another request
              </button>

            </div>

          ) : (

            <form
              className="booking-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}

              <div className="form-group">

                <label htmlFor="name">
                  Your Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />

              </div>


              {/* EMAIL + PHONE */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="email">
                    Email
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@example.com"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="phone">
                    Phone / WhatsApp
                  </label>

                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+254..."
                    required
                  />

                </div>

              </div>


              {/* SERVICE */}

              <div className="form-group">

                <label htmlFor="service">
                  What are you trying to achieve?
                </label>

                <select
                  id="service"
                  name="service"
                  required
                >

                  <option value="">
                    Select a service
                  </option>

                  <option value="CAD Design">
                    CAD Design
                  </option>

                  <option value="CNC Troubleshooting">
                    CNC Troubleshooting
                  </option>

                  <option value="Machine Servicing and Repair">
                    Machine Servicing & Repair
                  </option>

                  <option value="Web Design">
                    Web Design
                  </option>

                </select>

              </div>


              {/* SESSION TYPE */}

              <div className="form-group">

                <label>
                  Session Type
                </label>

                <div className="session-options">

                  <label className="session-option">

                    <input
                      type="radio"
                      name="sessionType"
                      value="Online Session"
                      required
                    />

                    <span>
                      <strong>
                        Online Session
                      </strong>

                      <small>
                        Remote consultation via video call
                      </small>
                    </span>

                  </label>


                  <label className="session-option">

                    <input
                      type="radio"
                      name="sessionType"
                      value="Physical Session"
                    />

                    <span>
                      <strong>
                        Physical Session
                      </strong>

                      <small>
                        In-person consultation
                      </small>
                    </span>

                  </label>

                </div>

              </div>


              {/* DATE + TIME */}

              <div className="form-row">

                <div className="form-group">

                  <label htmlFor="date">
                    Preferred Date
                  </label>

                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                  />

                </div>


                <div className="form-group">

                  <label htmlFor="time">
                    Preferred Time
                  </label>

                  <input
                    type="time"
                    id="time"
                    name="time"
                    required
                  />

                </div>

              </div>


              {/* PROJECT DESCRIPTION */}

              <div className="form-group">

                <label htmlFor="message">
                  Project brief
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="What is happening now, what should happen instead, and any useful constraints, drawings or context."
                ></textarea>

              </div>


              {/* SUBMIT */}

              <button
                type="submit"
                className="booking-submit"
                disabled={sending}
              >
                {sending
                  ? "Sending Request..."
                  : "Send Project Brief →"}
              </button>

              <p className="booking-note">
                Consultation: KSh 1,000. Other services are quoted after reviewing your project requirements. Your request will be reviewed before the session is confirmed.
              </p>

            </form>

          )}

        </div>

      </section>

      <GoogleCalendar />
      <PaymentMethods />

    </main>
  );
}

export default Booking;