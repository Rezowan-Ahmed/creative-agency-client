import React from 'react';

const Footer = () => {
    return (
        <div className="container-fluid footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-1 pt-5">
                        <h2 className="mb-3">Let us handle your <br/> project, professionally.</h2>
                        <p>With well writte codes, we build amazing apps for all plarforms, mobile and web apps in general.</p>
                    </div>
                    <div className="col-md-6 offset-md-1">
                        <form action="" className="contact-form">
                            <input className="email-text" type="email" name="" id="" placeholder="Your email address"/><br/><br/>
                            <input className="email-text company-name" type="text" name="" id="" placeholder="Your company's name"/><br/>
                            <textarea className="text-area" name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea><br/>
                            <button className="send-btn">Send</button>
                        </form>
                    </div>
                </div>
                <p className="text-center mb-5 mt-5">copyright Orange labs {(new Date()).getFullYear()}</p>
            </div>
        </div>
    );
};

export default Footer;

// <section className="container-fluid footer_top">
// 			<div className="container">
// 				<div className="row">
// 					<div className="col-md-5 pt-5">
// 						<h2>Let us handle your project, professionally.</h2>
// 						<p>With well writte codes, we build amazing apps for all plarforms, mobile and web apps in general.</p>
// 					</div>
// 					<div className="col-md-7">
// 						<form className="contact_form">
// 							<input className="eamil_text" type="Emial" placeholder="Your email address"/><br><br>
// 							<input className="eamil_text company_name" type="text" placeholder="Your name/ company's name"/><br>
// 							<textarea className="text_area">Your message</textarea>
// 							<button className="send_btn">Send</button>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</section>