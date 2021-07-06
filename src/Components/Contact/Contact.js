import "./Contact.scss";

function Contact(){

    return(
        <div className="contact-main">
            <div className="contact-main__header">
                <h1>Contact Me</h1>
            </div>
        <div className="contact-content">
                <div className="contact-content__info">
                    <form target="_blank" action="https://formsubmit.co/johnnie.l.hicks8@gmail.com" method="POST">
                        <div className="name">
                            <input type="text" name="name" class="name-text" placeholder="Full Name" required/>
                        </div>
                        <div className="email">
                            <input type="email" name="email" class="email-text" placeholder="Email Address" required/>
                        </div>

                        <div className="text">
                            <textarea placeholder="Your Message" class="text-area" name="message" rows="10" required></textarea>
                        </div>

                        <div className="btn">
                            <button type="submit">Submit</button>
                        </div>

                    </form>
                </div>
        </div>

        </div>
    )
}

export default Contact;