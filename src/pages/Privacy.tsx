import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

const Privacy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: May 2024
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl prose prose-lg">
            <h2 className="font-poppins text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              At DevoteYourSoul, we are committed to protecting your privacy and ensuring you have a 
              positive experience on our website. This policy outlines our data collection and usage practices.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Information We Collect</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We collect information in the following ways:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li><strong>Information You Provide:</strong> When you contact us through our forms, we collect your name, email address, and any information you choose to share in your message.</li>
              <li><strong>Automatically Collected Information:</strong> We use cookies and similar technologies to collect information about your browsing behavior, including pages visited, time spent on the site, and referring websites.</li>
              <li><strong>Analytics:</strong> We use analytics services to understand how visitors use our site, which helps us improve your experience.</li>
            </ul>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">How We Use Your Information</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Improve our website content and user experience</li>
              <li>Send you updates about new content (only if you've opted in)</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Cookies and Tracking</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We use cookies to enhance your browsing experience. Cookies are small text files stored 
              on your device that help us understand how you use our site. You can control cookies through 
              your browser settings, though disabling them may affect site functionality.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Third-Party Services</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We may use third-party services such as:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li><strong>Google Analytics:</strong> To analyze website traffic and user behavior</li>
              <li><strong>Google AdSense:</strong> To display relevant advertisements (future implementation)</li>
              <li><strong>Social Media Platforms:</strong> For sharing content and community building</li>
            </ul>
            <p className="text-foreground/80 leading-relaxed mb-6">
              These services have their own privacy policies, and we encourage you to review them.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Advertising</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We plan to display advertisements through Google AdSense. These ads may be personalized 
              based on your browsing history. You can opt out of personalized advertising by visiting 
              Google's Ad Settings.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Data Security</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We implement appropriate security measures to protect your personal information from 
              unauthorized access, alteration, disclosure, or destruction. However, no internet 
              transmission is completely secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Your Rights</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-6">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Disable cookies through your browser settings</li>
            </ul>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Children's Privacy</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              Our website is not directed to children under 13. We do not knowingly collect personal 
              information from children. If you believe we have collected information from a child, 
              please contact us immediately.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Changes to This Policy</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              We may update this privacy policy from time to time. We will notify you of significant 
              changes by posting the new policy on this page with an updated revision date.
            </p>

            <h2 className="font-poppins text-2xl font-bold mb-4 mt-8">Contact Us</h2>
            <p className="text-foreground/80 leading-relaxed mb-6">
              If you have questions about this privacy policy or our data practices, please contact 
              us through our contact form or via email at privacy@devoteyoursoul.com.
            </p>

            <div className="mt-8 p-6 bg-muted/30 rounded-lg">
              <p className="text-sm text-muted-foreground text-center">
                By using DevoteYourSoul, you consent to the collection and use of information as 
                described in this privacy policy.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
