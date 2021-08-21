import React, { Component } from "react";
import githubLogo from "../assets/GitHub-Mark-Light-32px.png";
// import gif from "./eye-icon-animate.gif";

export class Cat extends Component {
	state = {
		type: this.props.line.type,
		value: this.props.line.value
	};

	style = {
		align: "middle"
	};

	information = {
		about:
			"passionate software developer in test",
		experience:[
			"GrandParade - Software Developer in Test Intern , 2021",
			"SoftServe - WebUI trainee, 2020",
		],
		education:
			"WSIiZ Rzeszów, Economy",
		skills: [
				"Testing",
				"Selenium",	
				"Git",
				"Jira",
				"Agile/Scrum",
				"WebdriverIO",				
				"JavaScript/NodeJS",
				"HTML/CSS",
				"React/Redux",
				"Java",
		],
		social: [
			{
				platform: "Github",
				link: "https://github.com/vasylshpak"
			},

			{
				platform: "Linkedin",
				link: "https://www.linkedin.com/in/vasyl-shpak/"
			}
		]
	};
	render() {
		return (
			<React.Fragment>
				<p className="prompt"> {this.props.line.value} </p>
				{this.handelCd()}
			</React.Fragment>
		);
	}

	handelCd = () => {
		const navigation = this.state.value.split(" ")[1];
		if (navigation) {
			const lower = navigation.toLowerCase();
			if (lower === "about") {
				return <p className="result">{this.information.about}</p>;
			} else if (lower === "experience") {
				return(
				<React.Fragment>
						{this.information.experience.map(experience => {
							return (
								<p className="result">
									{experience}
								
								</p>
							);
						})}
					</React.Fragment>
				)
			}else if (lower === "education") {
				return <p className="result">{this.information.education}</p>;
			} else if (lower === "education") {
			} else if (lower === "skills" || lower === "skills") {
				return (
					<React.Fragment>
						{this.information.skills.map(everyProject => {
							return (
								<p className="result">
									{everyProject}
								
								</p>
							);
						})}
					</React.Fragment>
				);
			} else if (
				lower === "socials" ||
				lower === "social" ||
				lower === "contact me" ||
				lower === "contactme" ||
				lower === "contact_me"
			) {
				return (
					<React.Fragment>
						{this.information.social.map(everySocial => {
							return (
								<p className="result">
									<a href={everySocial.link} target="_blank">
										{everySocial.platform}
									</a>
									<a href="https://github.com/shloksomani" target="_blank">
										<img src={githubLogo} alt="GithubLink to Code" />
									</a>
								</p>
							);
						})}
					</React.Fragment>
				);
			} else {
				return <p className="result">Opps wrong input</p>;
			}
		} else {
			return <p className="result">Opps wrong input</p>;
		}
	};
}

export default Cat;
