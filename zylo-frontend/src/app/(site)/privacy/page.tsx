import Link from "next/link";

export const metadata = {
    title: 'Privacy Policy – Zylo3D',
    description: 'Read the Zylo3D privacy policy to understand how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
    return (
        <section className="lg:pt-40 pt-32 lg:pb-24 pb-12">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className="lg:w-7/12 mx-auto">
                    <h1 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold mb-10">Privacy Policy</h1>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold">1. Introduction</h2>
                    <ul className="list-disc py-6 pl-5 mb-3 text-gray-700 dark:text-gray-300 text-[17px] leading-7">
                        <li><strong>Personal Information:</strong> Name, email address, phone number, etc. (only if provided via forms)</li>
                        <li><strong>Usage Data:</strong> IP address, browser type, device information, and pages visited</li>
                        <li><strong>Cookies:</strong> We may use cookies to enhance your experience on our site</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mt-10">2. How We Use Your Information</h2>
                    <ul className="list-disc py-6 pl-5 mb-3 text-gray-700 dark:text-gray-300 text-[17px] leading-7">
                        <li>To respond to inquiries or customer service requests</li>
                        <li>To improve our website functionality and user experience</li>
                        <li>To send occasional updates, if you opt-in to our mailing list</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">3. Sharing Your Information</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">We do not sell, trade, or share your personal information with third parties except as necessary to provide our services or comply with the law.</p>
                    <p className="mb-8 text-gray-700 dark:text-gray-300 text-[17px] leading-7 mt-4">Third parties who perform services on your behalf (e.g., hosting, payment processing, analytics, email delivery, customer support) are bound by confidentiality agreements and only use data for specified purposes.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">4. Third-Party Services</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">We may use third-party tools like Google Analytics or email providers. These tools may collect data in accordance with their own privacy policies.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">5. Your Rights</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">You can request to review, update, or delete your personal data by contacting us directly at <Link href="mailto:contact@zylo3d.com" className="text-[#df7b26] underline">contact@zylo3d.com</Link>.</p>
                    <ul className="list-disc py-6 pl-5 mb-3 text-gray-700 dark:text-gray-300 text-[17px] leading-7">
                        <li>Complying with applicable laws, regulations, and legal processes.</li>
                        <li>Responding to lawful requests from public authorities.</li>
                        <li>Enforcing our terms and conditions.</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">6. Data Security</h2>
                    <p className="mb-8 text-gray-700 dark:text-gray-300 text-[17px] leading-7">We implement reasonable security measures to protect your data from unauthorized access, disclosure, or misuse including encryption, access controls, and secure servers.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">7. Changes to This Policy</h2>
                    <p className="mb-8 text-gray-700 dark:text-gray-300 text-[17px] leading-7">We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with a new effective date.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">8. Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">If you have any questions about this Privacy Policy, please contact us at <Link href="mailto:contact@zylo3d.com" className="text-[#df7b26] underline">contact@zylo3d.com</Link>.</p>
                </div>
            </div>
        </section>
    );
}
