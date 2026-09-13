// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
	return (
		<div className="adaptive">
			<div id="home">
				<h2>
					Hi, <span></span>Im Nyseer, Welcome to my Website!
				</h2>
				<br style={{ lineHeight: 5 }} />
			</div>
			<div id="projects">
				<h2>Featured Web Applications:</h2>
				<Link to="/">
					<div style={{ textAlign: "center" }}>
						<ul className="roundedButton">
							<li>
								<button type="button">Touchpad Synth</button>
							</li>
						</ul>
					</div>
				</Link>
			</div>
			<div id="about">
				{/* test */}
				<h1>About Me:</h1>
				<p>
					I am a passionate software developer and computer science graduate
					with 1+ years developing full-stack web applications using React,
					Node, Express, and MongoDB. Experienced building and deploying
					production-ready applications.
				</p>
				<h3>Skills:</h3>
				<p id="">
					Full-Stack Web Development, Responsive UI, <br />
					<b>Languages:</b> JavaScript, TypeScript, HTML, CSS, SQL, Java, C++,
					Python
					<br />
					<b>Frontend:</b> React.js, Next.js, Responsive Web Design, HTML5,
					CSS3, State Management, Web APIs
					<br />
					<b>Backend:</b> Node.js, Express.js, RESTful API
					<br />
					<b>Databases:</b> MongoDB, Mongoose, PostgreSQL
					<br />
					<b>Dev Tools:</b> Git, GitHub, Docker, Slack
					<br />
					<b>Soft Skills:</b> Problem-Solving, Teamworking, Organization,
					Communication, Time Management, Critical Thinking
				</p>
				<br style={{ lineHeight: 1 }} />
			</div>
			<div id="contact">
				{/* test */}
				<h1>Contact Me Here:</h1>
				<p id="contact-p">
					(Email Preferred)
					<br></br>
					<br></br>
					<b>Phone:</b> <a href="tel:+1-347-579-9610">(347)-579-9610</a>
					<br />
					<b>Email:</b>{" "}
					<a
						href="mailto:nyseer.couse@gmail.com"
						aria-label="nyseer.couse@gmail.com"
					>
						nyseer.couse@gmail.com
					</a>
					<br />
				</p>
				{/* todo add back to top button here */}
				<br style={{ lineHeight: 10 }} />
			</div>
		</div>
	);
}
