import React from "react";
import "../styles/footer.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-cont">
				<div>
					<h2>Create Articles</h2>
					<p>
						Explore different Artcles
					</p>
				</div>
				<div>
					<h2>Contact us</h2>
					<p>
						Articles254@gmail.com
					</p>
				</div>
                <div>
                <p> &copy; 2023 Articles254@gmail.com</p>
                <p> &copy; 2023 techarticles.com</p>
                </div>
			</div>
		</div>
	);
}

export default Footer;