import Link from "next/link";

export const metadata = {
    title: 'Terms & Conditions – Zylo3D',
    description: 'Read the Zylo3D terms and conditions for using our platform and services.',
};

export default function TermsPage() {
    return (
        <section className="lg:pt-40 pt-32 lg:pb-24 pb-12">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-14 lg:px-14 xl:px-18 2xl:px-3">
                <div className="lg:w-7/12 mx-auto">
                    <h1 className="text-3xl md:text-4xl text-gray-900 dark:text-white font-bold mb-10">Terms & Conditions</h1>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold">1. Acceptance of Terms</h2>
                    <p className="py-6 text-gray-700 dark:text-gray-300 text-[17px] leading-7">By accessing or using the Zylo3D platform, website, or services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not use our services.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mt-10">2. Use of Services</h2>
                    <ul className="list-disc py-6 pl-5 mb-3 text-gray-700 dark:text-gray-300 text-[17px] leading-7">
                        <li>You agree to use our services for lawful purposes only</li>
                        <li>You must not misuse or attempt to disrupt our platform</li>
                        <li>Account credentials are your responsibility and must not be shared</li>
                    </ul>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">3. Intellectual Property</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">All content, trademarks, logos, and software associated with Zylo3D are the exclusive property of Zylo3D. Unauthorized reproduction or distribution is prohibited.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">4. Third-Party Services</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">Our platform may integrate with third-party services (e.g., payment processors, analytics providers). These services operate under their own terms and privacy policies. Zylo3D is not responsible for third-party practices.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">5. Limitation of Liability</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">Zylo3D shall not be liable for any indirect, incidental, or consequential damages arising from the use of our platform or services. We do not guarantee uninterrupted or error-free operation.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">6. Data & Privacy</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">Your use of our services is also governed by our <Link href="/privacy" className="text-[#df7b26] underline">Privacy Policy</Link>, which is incorporated into these Terms by reference.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">7. Changes to Terms</h2>
                    <p className="mb-8 text-gray-700 dark:text-gray-300 text-[17px] leading-7">We reserve the right to modify these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the updated Terms.</p>

                    <h2 className="text-2xl md:text-3xl text-gray-900 dark:text-white font-semibold mb-4 mt-10">8. Contact Us</h2>
                    <p className="text-gray-700 dark:text-gray-300 text-[17px] leading-7">For questions about these Terms, contact us at <Link href="mailto:contact@zylo3d.com" className="text-[#df7b26] underline">contact@zylo3d.com</Link>.</p>
                </div>
            </div>
        </section>
    );
}
