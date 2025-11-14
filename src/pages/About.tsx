import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Heart, Sparkles, BookOpen, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="hero-gradient py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="font-poppins text-4xl sm:text-5xl font-bold mb-4">
              About DevoteYourSoul
            </h1>
            <p className="text-lg text-muted-foreground">
              A sanctuary for spiritual seekers and mindful hearts
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="prose prose-lg max-w-none">
              <h2 className="font-poppins text-3xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="h-8 w-8 text-primary" />
                Our Story
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                DevoteYourSoul was born from a simple yet profound belief: that in our fast-paced, 
                often chaotic world, we all need a space to pause, reflect, and reconnect with our 
                inner wisdom. This platform is more than just a blog—it's a sanctuary for spiritual 
                seekers, a guide for those on their journey toward inner peace, and a community for 
                souls yearning for authentic connection.
              </p>

              <h2 className="font-poppins text-3xl font-bold mb-6 mt-12 flex items-center gap-2">
                <Heart className="h-8 w-8 text-primary" />
                Our Vision
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                We envision a world where spirituality is not separate from daily life but woven 
                into every moment. Where people trust their inner guidance, live with purpose, and 
                approach each day with mindfulness and compassion. Through our writings, we aim to:
              </p>
              <ul className="space-y-3 text-foreground/80 mb-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Inspire inner peace and spiritual awakening in everyday moments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Provide practical guidance for mindfulness and self-growth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Create a judgment-free space for exploring faith and spirituality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>Build a compassionate community of like-minded souls</span>
                </li>
              </ul>

              <h2 className="font-poppins text-3xl font-bold mb-6 mt-12 flex items-center gap-2">
                <BookOpen className="h-8 w-8 text-primary" />
                What We Offer
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Our content spans various aspects of spiritual growth and mindful living:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Mindfulness</h3>
                  <p className="text-sm text-foreground/70">
                    Practical techniques for present-moment awareness and inner calm
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Faith & Spirituality</h3>
                  <p className="text-sm text-foreground/70">
                    Universal spiritual wisdom that transcends religious boundaries
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Healing</h3>
                  <p className="text-sm text-foreground/70">
                    Guidance for emotional healing and self-compassion
                  </p>
                </div>
                <div className="bg-muted/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-primary mb-2">Purpose</h3>
                  <p className="text-sm text-foreground/70">
                    Discovering and living your authentic life purpose
                  </p>
                </div>
              </div>

              <h2 className="font-poppins text-3xl font-bold mb-6 mt-12 flex items-center gap-2">
                <Users className="h-8 w-8 text-primary" />
                Looking Ahead
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-6">
                While we currently focus on sharing wisdom through our blog, we have exciting plans 
                for the future. We're working on creating digital eBooks that dive deeper into 
                specific aspects of spiritual growth and mindfulness practices. Our goal is to build 
                a comprehensive spiritual resource library that serves seekers at every stage of 
                their journey.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We also dream of fostering a vibrant community where like-minded souls can connect, 
                share experiences, and support each other's growth. Stay tuned as we expand and evolve!
              </p>

              <div className="mt-12 p-8 spiritual-gradient rounded-lg text-center">
                <p className="font-lora text-xl italic text-foreground/90">
                  "सर्वे भवन्तु सुखिनः"
                </p>
                <p className="text-sm text-muted-foreground mt-2">(sarve bhavantu sukhinaḥ) — May all be happy; may all be free from suffering.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
