import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const OurTeam: React.FC = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      position: "CEO & Founder",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Visionary leader with 15+ years in IT industry, driving innovation and growth.",
      linkedin: "#",
      twitter: "#",
      email: "rajesh@rightserveinfotech.com"
    },
    {
      name: "Priya Sharma",
      position: "CTO",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Technology expert specializing in software architecture and emerging technologies.",
      linkedin: "#",
      twitter: "#",
      email: "priya@rightserveinfotech.com"
    },
    {
      name: "Amit Patel",
      position: "Head of Development",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Full-stack developer with expertise in modern web technologies and team leadership.",
      linkedin: "#",
      twitter: "#",
      email: "amit@rightserveinfotech.com"
    },
    {
      name: "Sneha Gupta",
      position: "Marketing Director",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Digital marketing strategist with proven track record in brand building and growth.",
      linkedin: "#",
      twitter: "#",
      email: "sneha@rightserveinfotech.com"
    },
    {
      name: "Vikram Singh",
      position: "Hardware Solutions Lead",
      image: "https://images.pexels.com/photos/2182975/pexels-photo-2182975.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Infrastructure expert with deep knowledge in networking and hardware solutions.",
      linkedin: "#",
      twitter: "#",
      email: "vikram@rightserveinfotech.com"
    },
    {
      name: "Kavya Reddy",
      position: "UI/UX Design Lead",
      image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Creative designer focused on user experience and innovative design solutions.",
      linkedin: "#",
      twitter: "#",
      email: "kavya@rightserveinfotech.com"
    },
    {
      name: "Arjun Mehta",
      position: "Project Manager",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "Agile project management expert ensuring timely delivery and client satisfaction.",
      linkedin: "#",
      twitter: "#",
      email: "arjun@rightserveinfotech.com"
    },
    {
      name: "Ritu Agarwal",
      position: "Quality Assurance Lead",
      image: "https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=300",
      bio: "QA specialist committed to delivering bug-free, high-quality software solutions.",
      linkedin: "#",
      twitter: "#",
      email: "ritu@rightserveinfotech.com"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Team</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Meet the talented professionals who make Right Serve Infotech a success
            </p>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              The People Behind Our Success
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Our diverse team of experts brings together years of experience, innovative thinking, 
              and a passion for technology. Each member contributes unique skills and perspectives 
              that drive our company's mission forward.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <a 
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href={member.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      aria-label={`${member.name} Twitter`}
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              What Unites Us
            </h2>
            <p className="text-xl text-gray-600">
              Our shared values and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600">
                We constantly push boundaries and explore new technologies to deliver 
                cutting-edge solutions for our clients.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-green-600">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork and open communication to achieve 
                extraordinary results together.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-purple-600">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in everything we do, from code quality 
                to customer service and project delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Want to Join Our Amazing Team?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion 
            for technology and innovation.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg">
            View Open Positions
          </button>
        </div>
      </section>
    </div>
  );
};

export default OurTeam;