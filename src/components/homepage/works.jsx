import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">Hero Digital</div>
							<div className="work-subtitle">
								Front-end Developer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>
						<div className="work">
							<div className="work-title">TradeHelm</div>
							<div className="work-subtitle">
								Front-end Developer
							</div>
							<div className="work-duration">2020 - 2021</div>
						</div>
						<div className="work">
							<div className="work-title">Cencosud S.A.</div>
							<div className="work-subtitle">
								Front-end Developer & UX/UI Designer
							</div>
							<div className="work-duration">2018 - 2020</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
