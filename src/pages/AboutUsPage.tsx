import React from 'react';
import { Users, Lightbulb, Shield } from 'lucide-react';

const AboutUsPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About SummarEase</h1>
          <p className="text-xl mb-8">Revolutionizing education through AI-powered video learning</p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            At SummarEase, we're on a mission to make learning more accessible, efficient, and engaging. 
            By harnessing the power of artificial intelligence, we aim to transform educational videos into 
            comprehensive learning experiences, empowering students and educators alike.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Users className="w-16 h-16 text-blue-500" />}
              title="User-Centric"
              description="We put our users first, constantly innovating to meet their evolving needs and enhance their learning experience."
            />
            <ValueCard
              icon={<Lightbulb className="w-16 h-16 text-blue-500" />}
              title="Innovation"
              description="We're committed to pushing the boundaries of what's possible in education technology, always staying ahead of the curve."
            />
            <ValueCard
              icon={<Shield className="w-16 h-16 text-blue-500" />}
              title="Integrity"
              description="We uphold the highest standards of ethics and transparency in all our operations, ensuring trust and reliability."
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Emily Chen"
              role="Founder & CEO"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <TeamMember
              name="Michael Rodriguez"
              role="CTO"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
            />
            <TeamMember
              name="Sarah Thompson"
              role="Head of AI Research"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl mb-8">Have questions or want to learn more about SummarEase? We'd love to hear from you!</p>
          <a href="mailto:contact@summarease.com" className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

const ValueCard = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const TeamMember = ({ name, role, image }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default AboutUsPage;