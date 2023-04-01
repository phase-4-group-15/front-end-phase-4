import React from "react";

const Footer = () => {
	return (
		<div className="bg-blue-300 py-6">
			<div className="flex justify-between items-center mx-16">
				<div className="text-lg font-bold">
					<h2>Create Articles</h2>
					<p>
						Explore different Artcles
					</p>
				</div>
				<div className="text-lg font-bold">
					<h2>Contact us</h2>
					<p>
						Articles254@gmail.com
					</p>
				</div>
                <div className="text-lg">
                    <p>&copy; 2023 Articles254@gmail.com</p>
                    <p>&copy; 2023 techarticles.com</p>
                </div>
			</div>
		</div>
	);
}

export default Footer;
