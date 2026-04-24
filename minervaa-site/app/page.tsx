const highlights = [
  'Nearly 300 students',
  'English-medium instruction',
  'CBSE-oriented curriculum pattern',
  'Experienced and trained faculty',
  'Continuous academic monitoring',
  'Balanced class strength ensuring individual attention'
];

const safety = [
  'CCTV-monitored campus',
  'Secure entry and exit control',
  'Verified transport staff and supervised travel',
  'Clean and hygienic facilities',
  'Structured supervision throughout the school day'
];

const facilities = [
  'Smart classrooms',
  'Science laboratories',
  'Well-stocked library',
  'Sports ground and physical education programs',
  'Music and arts activities',
  'Safe and well-managed transportation system'
];

const edge = [
  'Structured discipline model',
  'Concept mastery over rote learning',
  'Optimal student strength for personal attention',
  'Strong communication culture',
  'Cultural grounding with modern pedagogy'
];

const events = [
  'Annual Day celebrations showcasing student talent and cultural programs',
  'Sports Day promoting physical fitness and competitive spirit',
  'Science exhibitions encouraging innovation and practical learning',
  'Literary competitions and language development activities',
  'National and cultural festival celebrations',
  'Participation in inter-school competitions and academic events'
];

export default function HomePage() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-wrap">
            <div className="brand-left">
              <img src="/images/logo.png" className="logo" />

              <div>
                <p className="eyebrow">Minervaa Vidhya Mandhir</p>
                <p className="brand-subtitle">Pollachi</p>
              </div>
             </div>
          <nav>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#facilities">Facilities</a>
            <a href="#admissions">Admissions</a>
            <a href="#contact" className="nav-cta">Enquire Now</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="section-tag">Admissions Open</p>
            <h1>Rooted in Values. Driven by Excellence.</h1>
            <p className="hero-text">
              A trusted matriculation school in Pollachi delivering structured academic
              excellence through a CBSE-oriented curriculum approach, strong discipline,
              and individual attention.
            </p>
            <div className="hero-actions">
              <a href="#admissions" className="btn btn-primary">Admissions Open</a>
              <a href="#contact" className="btn btn-secondary">Book an Enquiry</a>
            </div>
            <div className="stats">
              <div>
                <strong>Since 2001</strong>
                <span>Established institution</span>
              </div>
              <div>
                <strong>300+</strong>
                <span>Students entrusted to our care</span>
              </div>
              <div>
                <strong>Values + Discipline</strong>
                <span>Safe and structured environment</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
          <div className="portrait-placeholder">
          <img 
                src="/images/founder-poster.jpg" 
                alt="Founder - Suganthi Jambulingam"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "12px" }}
          />
          </div>
          </div>
        </div>
      </section>

      <section id="about" className="section light-section">
        <div className="container two-col">
          <div>
            <p className="section-tag">About Us</p>
            <h2>A nurturing school built on academic structure and strong values</h2>
          </div>
          <div>
            <p>
              Minervaa Vidhya Mandhir is an established matriculation institution in
              Pollachi committed to nurturing confident, responsible and future-ready
              learners in a safe and structured environment.
            </p>
            <p>
              Our approach combines structured academic practices with cultural values
              and modern learning methodologies, while maintaining personal attention,
              strong communication, and consistent academic standards for every student.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="section-tag">Founder&apos;s Message</p>
          <div className="founder-message">
            <div>
              <h2>Suganthi Jambulingam</h2>
              <p className="muted">Founder &amp; Correspondent</p>
            </div>
            <div>
              <p>
                At Minervaa Vidhya Mandhir, our mission is to provide quality education
                that builds strong academic foundations while shaping character and
                discipline. We believe that education must prepare children not only
                for examinations, but for life.
              </p>
              <p>
                Our commitment is to combine structured academic practices with cultural
                values and modern learning methodologies. As we continue to grow, our
                focus remains on maintaining personal attention, strong communication,
                and consistent academic standards for every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="academics" className="section light-section">
        <div className="container">
          <p className="section-tag">Academic Structure</p>
          <h2>Concept-driven learning at every stage</h2>
          <div className="card-grid three-up">
            <article className="info-card">
              <h3>Foundational Stage</h3>
              <ul>
                <li>Literacy and numeracy mastery</li>
                <li>Phonics-based English development</li>
                <li>Activity-based and experiential learning</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Primary Stage</h3>
              <ul>
                <li>Concept-driven instruction</li>
                <li>Structured assessments and regular progress tracking</li>
                <li>Strong focus on English fluency and comprehension</li>
              </ul>
            </article>
            <article className="info-card">
              <h3>Upper Primary Stage</h3>
              <ul>
                <li>Analytical thinking and problem-solving skills</li>
                <li>Strong Mathematics and Science foundation</li>
                <li>Study discipline and exam preparedness</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split-cards">
          <article className="panel">
            <p className="section-tag">Institutional Highlights</p>
            <ul className="check-list">
              {highlights.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
          <article className="panel">
            <p className="section-tag">Safety &amp; Infrastructure</p>
            <ul className="check-list">
              {safety.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section id="facilities" className="section light-section">
        <div className="container">
          <p className="section-tag">Facilities</p>
          <h2>Designed to support learning, safety, and all-round development</h2>
          <div className="card-grid three-up">
            {facilities.map((item) => (
              <article className="facility-card" key={item}>
                <h3>{item}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <p className="section-tag">Our Distinct Edge</p>
            <h2>Why parents trust Minervaa</h2>
            <ul className="check-list">
              {edge.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div className="testimonial-wrap">
            <article className="testimonial-card">
              <p>
                “Minervaa Vidhya Mandhir has provided a strong academic foundation for
                our child. The teachers are disciplined, caring and focused on concept
                clarity.”
              </p>
              <span>Parent of Primary Grade Student</span>
            </article>
            <article className="testimonial-card">
              <p>
                “The school maintains excellent discipline and communication. We
                appreciate the individual attention given to students and the
                structured academic approach followed throughout the year.”
              </p>
              <span>Parent of Upper Primary Student</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <p className="section-tag">Events &amp; Achievements</p>
          <h2>Learning extends beyond the classroom</h2>
          <p className="section-intro">
            We actively organize academic, cultural and sports events that foster
            confidence, leadership, teamwork, and communication skills.
          </p>
          <div className="event-list">
            {events.map((item) => (
              <div className="event-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="admissions" className="section admissions-section">
        <div className="container admissions-box">
          <div>
            <p className="section-tag">Admissions</p>
            <h2>Admissions open for eligible students</h2>
            <p>
              Admissions are open based on age criteria and interaction-based
              evaluation. We encourage parents to visit our campus, understand our
              academic framework, and interact with our faculty.
            </p>
            <p>
              For admission enquiries and campus visits, please contact the school
              office.
            </p>
          </div>
          <div className="admission-card">
            <h3>Enquiry Details</h3>
            <p><strong>Phone:</strong> +91 96004 17171</p>
            <p><strong>Phone:</strong> +91 99449 72100</p>
            <p><strong>Phone:</strong> +91 99949 59484</p>
            <p><strong>Email:</strong> admin@minervaaschool.com</p>
            <p><strong>Location:</strong> Pollachi, Tamil Nadu</p>
            <a href="#contact" className="btn btn-primary">Book a Campus Visit</a>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <div className="container two-col">
          <div>
            <p className="section-tag">Contact</p>
            <h2>Connect with Minervaa Vidhya Mandhir</h2>
            <p>
              We welcome parents to visit the campus and learn more about our academic
              approach, student care, and admissions process.
            </p>
          </div>
          <form className="contact-form">
            <input type="text" placeholder="Parent Name" />
            <input type="tel" placeholder="Phone Number" />
            <input type="email" placeholder="Email Address" />
            <textarea placeholder="Message / Enquiry" rows={5} />
            <button type="submit" className="btn btn-primary">Send Enquiry</button>
          </form>
        </div>
      </section>

    <footer className="site-footer">
  <div className="container footer-grid">
    <div className="footer-left">
      <div className="footer-brand">
        <img
          <img src="/images/logo.png" className="footer-logo" />
          alt="Minervaa Vidhya Mandhir logo"
          className="footer-logo"
        />
        <div>
          <h3>Minervaa Vidhya Mandhir</h3>
          <p className="footer-tagline">Rooted in Values. Driven by Excellence.</p>
        </div>
      </div>
    </div>

    <div className="footer-right">
      <p>Jothi Nagar, Pollachi - 642001</p>
      <p>
        <a href="mailto:admission@minervaaschool.com">admission@minervaaschool.com</a>
      </p>
      <p>
        <a href="tel:+919600417171">+91 96004 17171</a>
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}
