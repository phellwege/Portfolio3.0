import github from '../static/github.png';
import linkedin from '../static/linkedin.png';

const Contact = () => {
    return (
        <>
        <div className="page_wrap">
        <h2 id="Contact">Contact</h2>
        <br/>
            <p>
                Phone: <a href="tel:2086973323">(208) 697-3323</a>
                <br/>
                Email: <a href="mailto:phellwege1@gmail.com">Email</a>
            </p>
                <a href="https://github.com/phellwege" target="_blank" rel="noreferrer">
                    <img id="contact_github" src={github} alt="github logo"/>
                    <br/>Github
                </a>
                <br/>
                <a href="https://www.linkedin.com/in/peter-hellwege/" target="_blank" rel="noreferrer">
                    <img id="contact_linkedin" src={linkedin} alt="linkedin logo"/>
                    <br/>
                    LinkedIn
                </a>
        </div>
        </>
    )
}
export default Contact;