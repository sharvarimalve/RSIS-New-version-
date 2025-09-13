import React, { useEffect, useState, useRef } from 'react';
import { Target, Eye, Users, Award, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs: React.FC = () => {
  const values = [
    {
      icon: <Target size={32} />,
      title: 'Innovation',
      description: 'We constantly embrace new technologies and methodologies to deliver cutting-edge solutions.',
    },
    {
      icon: <Users size={32} />,
      title: 'Collaboration',
      description: 'We believe in working together with our clients as partners to achieve shared success.',
    },
    {
      icon: <Award size={32} />,
      title: 'Excellence',
      description: 'We strive for perfection in every project, ensuring the highest quality standards.',
    },
    {
      icon: <CheckCircle size={32} />,
      title: 'Integrity',
      description: 'We maintain honesty, transparency, and ethical practices in all our business dealings.',
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  }, []);

  const milestones = [
    { year: '2019', event: 'Company Founded', description: 'Started with a vision to transform businesses through technology' },
    { year: '2020', event: 'First Major Client', description: 'Successfully delivered our first enterprise-level solution' },
    { year: '2021', event: '100+ Projects', description: 'Reached the milestone of 100 completed projects' },
    { year: '2022', event: 'Team Expansion', description: 'Expanded our team to 50+ skilled professionals' },
    { year: '2023', event: 'Industry Recognition', description: 'Received multiple awards for innovation and excellence' },
    { year: '2024', event: '500+ Happy Clients', description: 'Serving over 500 satisfied clients across various industries' },
  ];

  const heroImages = [
    '/about1.jpg',
    '/about4.jpg',
    '/about3.jpg',
    '/about7.jpg',
    '/about6.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  /* --------- Stats Animation Logic --------- */
  const stats = [
    { icon: <TrendingUp size={24} className="stat-icon" />, value: 500, label: 'Happy Clients' },
    { icon: <Award size={24} className="stat-icon" />, value: 250, label: 'Projects Delivered' },
    { icon: <Users size={24} className="stat-icon" />, value: 50, label: 'Expert Team Members' },
  ];

  const [visible, setVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) observer.unobserve(statsRef.current);
    };
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="about-hero fade-in-up">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
        <div className="container hero-content-wrapper">
          <div className="about-hero-content">
            <h1>About Right Serve Infotech Systems</h1>
            <p>Transforming businesses through innovative technology solutions since 2019</p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section">
        <div className="container">
          <div className="overview-grid">
            <div className="overview-content fade-in-up">
              <h2>Our Story</h2>
              <p className='text-story'>
                Right Serve Infotech Systems Private Limited is a leading provider of comprehensive software and hardware solutions, dedicated to empowering businesses across diverse industries.
                We've grown into a trusted name, offering both custom-tailored and product-based solutions to meet the unique needs of our clients.
                With a focus on innovation, quality, and customer satisfaction, we are committed to delivering reliable and efficient technology solutions that drive growth and enhance operational efficiency.
              </p>
              <p>
                Our journey began with a small team of passionate technologists who believed that the right technology, when properly implemented, could transform any business.
                Today, we have grown into a trusted partner for over 500 clients across various industries, delivering solutions that not only meet current needs but also prepare businesses for future challenges.
              </p>

              {/* Stats Section */}
              <div className="stats-grid" ref={statsRef}>
                {stats.map((stat, index) => (
                  <StatCard
                    key={index}
                    icon={stat.icon}
                    value={stat.value}
                    label={stat.label}
                    visible={visible}
                    delay={index * 200}
                  />
                ))}
              </div>
            </div>

            <div className="overview-visual fade-in-up">
              <div className="rounded-image-wrapper">
                <img
                  src="/about-us.png" // Replace with your uploaded image path
                  alt="Our Team"
                  className="overview-image-rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section section-alt">
        <div className="container mv-container">
          <div className="section-header text-center mb-12 fade-in-up">
            <h2>Our Purpose</h2>
          </div>

          {/* Mission Section */}
          <div className="mv-row fade-in-left">
            <div className="mv-image-container">
              <img src="/mission.jpg" alt="Mission" className="mv-image" />
            </div>
            <div className="mv-text">
              <h3>Our Mission</h3>
              <h5 className='subheading-mission'>Empowering Success Through Quality Solutions</h5>
              <p className='mission-vision-text'>
                Our mission is to be a leading provider of innovative software solutions and reliable hardware products,
                tailored to meet diverse industry needs. We aim to enhance business efficiency through cutting-edge technology,
                and a commitment to continuous improvement, ensuring our clients achieve their goals with confidence and ease.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="mv-row fade-in-right">
            <div className="mv-text">
              <h3>Our Vision</h3>
              <h5 className='subheading-mission'>Driving Innovation and Excellence</h5>
              <p className='mission-vision-text'>
                Our vision is to deliver high-quality, customized software and robust hardware solutions that meet the evolving demands of our clients.
                We strive to achieve superior customer satisfaction and drive business growth by staying ahead of technological trends,
                fostering innovation, and maintaining a strong commitment to excellence in every aspect of our services.
              </p>
            </div>
            <div className="mv-image-container">
              <img src="/visions.jpg" alt="Vision" className="mv-image" />
            </div>
          </div>
        </div>
      </section>



      {/* Core Values */}

      <section className="py-16 bg-[#e4e7ea]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-[#002147]">Our Core Values</h2>
            <p className="text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
            {values.map((value, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 10}
                data-aos-duration="800"
                className="bg-white border-2 border-[#002147] rounded-xl p-5 shadow-md transition-all duration-300 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:border-[#004aad] active:scale-105"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#002147] to-[#004aad] text-white flex items-center justify-center text-xl shadow hover:shadow-[0_0_15px_rgba(0,74,173,0.6)] hover:scale-110 transition-all">
                    {value.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-[#002147]">
                    {value.title}
                  </h4>
                </div>
                <p className="text-sm text-gray-600 leading-6">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>




      {/* Timeline */}
      <section className="section section-alt  timeline-bg">
        <div className="container">
          <div className="section-header text-center mb-12 fade-in-up">
            <h2>Our Journey</h2>
            <p>Key milestones in our growth story</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.event}</h4>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section launch-section">
        <div className="container launch-container">
          {/* Left Side - Rocket Image */}
          <div className="launch-image fade-in-left">
            <img
              src="https://www.cyberoptik.net/wp-content/uploads/2023/08/rocket.svg"
              alt="Rocket Launch"
              className="rocket-img"
            />
          </div>

          {/* Right Side - Text */}
          <div className="launch-content fade-in-right">
            <h2>Need a reliable website partner for your business?</h2>
            <p>
              For the very best in web design, branding, and digital marketing,
              call <strong>Right Serve Infotech System </strong> at
              <a href="tel:6302966932" className="call-link"> (630) 296-6932</a>.
            </p>
            <a href="/ontact">
              <button className="proposal-btn">Get A Proposal</button>
            </a>

          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          {/* Section Header */}
          <div className="section-header text-center mb-12 fade-in-up">
            <h2>Why Choose RSIS?</h2>
            <p>What makes us the right partner for your business transformation</p>
          </div>

          {/* Grid Layout */}
          <div className="why-choose-grid">
            {/* Left Content */}
            <div className="why-choose-content slide-in-left">
              <div className="why-choose-item">
                <div className="why-icon">
                  <Award size={28} />
                </div>
                <div>
                  <h3>Experience & Expertise</h3>
                  <p>
                    With over 5 years of experience in the IT industry, our team brings
                    deep technical expertise and business acumen to every project.
                    We have successfully delivered solutions across various domains
                    including healthcare, finance, retail, manufacturing, and more.
                  </p>
                </div>
              </div>

              <div className="why-choose-item">
                <div className="why-icon">
                  <Users size={28} />
                </div>
                <div>
                  <h3>Client-Centric Approach</h3>
                  <p>
                    We believe that every client is unique, and so are their challenges.
                    Our approach is to understand your business goals, analyze your specific
                    requirements, and deliver tailored solutions that align with your
                    objectives and budget.
                  </p>
                </div>
              </div>

              <div className="why-choose-item">
                <div className="why-icon">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <h3>Quality Assurance</h3>
                  <p>
                    Quality is not just a buzzword for us; it's embedded in our DNA.
                    We follow industry best practices, rigorous testing methodologies,
                    and continuous improvement processes to ensure that our solutions
                    meet the highest standards of quality and reliability.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="why-choose-visual slide-in-right">
              <img
                src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Why Choose Us"
                className="why-choose-image"
              />
            </div>
          </div>
        </div>
      </section>;

      {/* CSS */}
      <style jsx>{`
 
        /* Hero Section Slider */
        .about-hero {
          position: relative;
          height: 620px;
          overflow: hidden;
        }

        .hero-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          opacity: 0;
          transition: opacity 1.5s ease-in-out;
          z-index: 0;
        }

        .hero-slide.active {
          opacity: 1;
          z-index: 1;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          color: white;
          text-align: center;
        }

        .about-hero-content h1 {
          font-size: 3rem;
          font-weight: 700;
          animation: fadeUp 1s forwards 0.3s;
          opacity: 0;
        }

        .about-hero-content p {
          font-size: 1.3rem;
          margin-top: 10px;
          animation: fadeUp 1s forwards 0.6s;
          opacity: 0;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        /* ======================our story Section ====================*/
        .overview-grid {
      display: flex;
      gap: 40px;
      align-items: center;
      flex-wrap: wrap;
    }

    .overview-content {
      flex: 1;
      min-width: 300px;
    }
    .text-story{
      text-align: justify;
      line-height: 2.8;
      font-size: 1.1rem;
      }
    .overview-visual {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 300px;
    }

    /* Rounded image with blue border */
    .rounded-image-wrapper {
      padding: 5px;
      border-radius: 50%;
      background: linear-gradient(135deg, #004aad, #3278cdff); /* Blue gradient border */
      display: inline-block;
    }

    .overview-image-rounded {
      border-radius: 50%;
      width: 550px; /* adjust as needed */
      height: 550px;
      object-fit: cover;
      display: block;
      border: 10px solid #fff; /* inner border for contrast */
    }

    @media (max-width: 768px) {
      .overview-grid {
        flex-direction: column;
        text-align: center;
      }

      .overview-image-rounded {
        width: 250px;
        height: 250px;
      }
    }
        /* Stats Section */
        .stats-grid {
          display: flex;
          gap: 25px;
          margin-top: 40px;
          justify-content: center;
        }

        .stat-card {
          background: #d4d8dcff;
          color: white;
          padding: 20px;
          border-radius: 16px;
          width: 160px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .stat-card.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stat-icon {
          margin-bottom: 8px;
        }

        .stat-card h3 {
          font-size: 2.8rem;
          font-weight: 700;
        }

        .stat-card p {
          font-size: 0.95rem;
        }
   
/* ==================mission & vision section================= */
.mv-row {
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.mv-image-container {
  flex: 1;
  min-width: 300px;
}

.mv-image {
  width: 100%;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.5s ease;
}

/* Optional subtle zoom on hover */
.mv-image:hover {
  transform: scale(1.05);
}

.mv-text {
  flex: 1;
  min-width: 300px;
}
.mission-vision-text{
  text-align: justify;  
  line-height: 1.8;
  font-size: 2.1rem;
  color: #111;}

.mv-text h3 {
  margin-bottom: 0.75rem;
  font-size: 2.2rem; /* increased from 1.8rem */
  font-weight: 700;
  color: #111;
  margin-left: 16px;
}

.mv-text h5 {
  margin-bottom: 1.25rem;
  font-size: 1.4rem; /* increased from default */
  color: #555;
  font-weight: 500;
  margin-left: 16px;
}

.mv-text p {
  line-height: 1.8;
  font-size: 1.1rem; /* increased from default */
  color: #333;
}


/* Animations */
.fade-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: fadeInLeft 1s forwards;
}

.fade-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: fadeInRight 1s forwards;
}

@keyframes fadeInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .mv-row {
    flex-direction: column;
    text-align: center;
  }
  .mv-text {
    margin-top: 1.5rem;
  }
}

        //============= our values section================ */
  
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  padding: 10px;
}

/* ====== Individual Card Styling ====== */
.value-card {
  background: #fff;
  border: 2px solid #002147; /* Navy blue border */
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 33, 71, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

/* Hover Effect - Lift up slightly */
.value-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 25px rgba(0, 33, 71, 0.25);
  border-color: #004aad; /* brighter shade on hover */
}

/* Click Animation */
.value-card:active {
  transform: scale(1.05);
}

/* ====== Icon Styling ====== */
.value-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.value-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #002147, #004aad);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 33, 71, 0.3);
  transition: all 0.3s ease;
}

/* Icon glow effect on card hover */
.value-card:hover .value-icon {
  box-shadow: 0 0 15px rgba(0, 74, 173, 0.6);
  transform: scale(1.1);
}

/* ====== Title and Description ====== */
.value-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #002147;
  margin: 0;
}

.value-description {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  margin-top: 5px;
}

/* ====== Fade-in Animation ====== */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

/* ====== Responsive Design ====== */
@media (max-width: 768px) {
  .values-grid {
    gap: 15px;
  }
}


        // ====================image rocket================================================//
       
// .launch-section {
//   padding: 80px 20px;
//   background: #ffffff;
// }

.launch-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  max-width: 2000px;
  margin: 0 auto;
  background: #0b2e5b; /* Navy Blue */
  border-radius: 20px;
  padding: 50px;
  color: #fff;
}

/* Left Image Styling */
.launch-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.rocket-img {
  max-width: 450px;
  height: 900px; 
  transition: transform 0.5s ease;
  position: absolute;
}

.rocket-img:hover {
  transform: translateY(-10px);
}

/* Right Content Styling */
.launch-content {
  flex: 1;
}

.launch-content h2 {
  font-size: 2rem;
  font-weight: bold;
  color: #fff; /* Green */
  margin-bottom: 20px;
}

.launch-content p {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 20px;
}

.call-link {
  color: #fff;    //green
  text-decoration: none;
  font-weight: bold;
}

/* Button Styling */
.proposal-btn {
  background-color: #3278cdff;
  color: #fff;
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.proposal-btn:hover {
  background-color: #3278cdff;
  transform: scale(1.05);
}

/* Animations */
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fade-in-left {
  animation: fadeInLeft 0.8s ease forwards;
}

.fade-in-right {
  animation: fadeInRight 0.8s ease forwards;
}

/* Responsive Design */
@media (max-width: 768px) {
  .launch-container {
    flex-direction: column;
    text-align: center;
    padding: 30px;
  }

  .rocket-img {
    max-width: 250px;
    margin-bottom: 20px;
  }
}

          /* ==================why choose Section =============================*/
.section {
  padding: 60px 20px;
  background: #f8f9fa;
}

.section-header h2 {
  font-size: 2rem;
  color: #002147; /* Navy Blue */
  margin-bottom: 10px;
}

.section-header p {
  font-size: 1rem;
  color: #555;
}

/* Grid Layout */
.why-choose-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

@media (max-width: 768px) {
  .why-choose-grid {
    grid-template-columns: 1fr;
  }
}

/* Each Content Item */
.why-choose-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 25px;
  padding: 15px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.why-choose-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

/* Icon Style */
.why-icon {
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #002147, #004080); /* Navy Blue Gradient */
  border-radius: 50%;
  color: #fff;
  flex-shrink: 0;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}

/* Heading & Paragraph */
.why-choose-item h3 {
  font-size: 1.2rem;
  color: #002147;
  margin-bottom: 5px;
}

.why-choose-item p {
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
}

/* Image */
.why-choose-image {
  width: 100%;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.why-choose-image:hover {
  transform: scale(1.05);
}

/* New Slide Animations */
.slide-in-left {
  opacity: 0;
  transform: translateX(-50px);
  animation: slideLeft 1s ease forwards;
}

.slide-in-right {
  opacity: 0;
  transform: translateX(50px);
  animation: slideRight 1s ease forwards;
}

@keyframes slideLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideRight {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

      `}</style>
    </div>
  );
};

/* -----------------------------
   StatCard Component
------------------------------ */
const StatCard = ({
  icon,
  value,
  label,
  visible,
  delay,
}: {
  icon: JSX.Element;
  value: number;
  label: string;
  visible: boolean;
  delay: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const end = value;
      const duration = 1500;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        } else {
          setCount(Math.ceil(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [visible, value]);

  return (
    <div
      className={`stat-card ${visible ? 'visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {icon}
      <h3>{count}+</h3>
      <p>{label}</p>
    </div>
  );
};

export default AboutUs;
