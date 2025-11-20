import Header from "../components/Header";
import ContactImage from "../assets/contact/contact.jpg";
import ContactForm from "../components/Contact/ContactForm.jsx";
import ContactInfo from "../components/Contact/ContactInfo.jsx";

export default function Contact() {
    return (
        <div>
            <Header
                image={ContactImage}
                title="Estamos aquí para ayudarte"
                subtitle=""
            />

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
}
