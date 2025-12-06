import DownloadImage from "../assets/Download/download-background.jpeg";
import DownloadHeader from "../components/Download/DownloadHeader.jsx";

export default function Download() {
    return (
        <main className="flex flex-col">
            <DownloadHeader
                image={DownloadImage}
                title="Descargá Medicalshift App"
                label1="Google Play"
                button1="https://play.google.com/store/apps/details?id=com.tuapp.medicalshift"
                label2="App Store"
                button2="https://apps.apple.com/app/id1234567890"
            />
        </main>
    );
}