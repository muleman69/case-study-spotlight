import React from 'react';
import Header from '../components/Header/Header';
import { Activity, Database, Stethoscope, CheckSquare, ArrowRight } from 'lucide-react';
import InfoSection from '../components/InfoSection';
import KeyFeatures from '../components/KeyFeatures';
import CaseStudiesSlider from '../components/CaseStudiesSlider';
import ContactForm from '../components/ContactForm';

const HealthcareCaseStudy = () => {
  return (
    <div className="w-full">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-[#0A0B14] text-white min-h-[80vh] flex items-center overflow-hidden">
        {/* Add diagonal gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B14]/95 via-[#0A0B14]/70 to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="max-w-2xl">
              {/* Breadcrumbs */}
              <div className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
                <a href="/" className="hover:text-[#F8B42E]">HOME</a>
                <span className="text-gray-600">|</span>
                <a href="/case-studies" className="hover:text-[#F8B42E]">CASE STUDIES</a>
                <span className="text-gray-600">|</span>
                <span className="text-[#F8B42E]">HEALTHCARE</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Life-Saving Data: Revolutionizing Heart Failure Care Through Mobile Innovation
              </h1>
              <p className="text-xl text-gray-300 mb-12">
                Discover how we created a mobile app that empowers heart failure patients and their healthcare providers to better understand, manage, and improve treatment outcomes—guided by a systematic DMAIC approach.
              </p>
              
              <div className="space-y-6">
                {/* Stats */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-8">
                  <span>10M+ Daily Readings</span>
                  <span>•</span>
                  <span>53% Early Intervention Rate</span>
                  <span>•</span>
                  <span>99.9% Uptime</span>
                </div>
                <h3 className="text-[#F8B42E]">Services:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Activity className="w-5 h-5" />,
                      text: 'Data Collection & Visualization'
                    },
                    {
                      icon: <Database className="w-5 h-5" />,
                      text: 'EHR Integration via REDOX APIs'
                    },
                    {
                      icon: <Stethoscope className="w-5 h-5" />,
                      text: 'Remote Patient Monitoring & Health Surveys'
                    },
                    {
                      icon: <CheckSquare className="w-5 h-5" />,
                      text: 'Automated QA Processes & Quality Assurance'
                    }
                  ].map((service, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-[#F8B42E]">{service.icon}</div>
                      <span className="text-sm">{service.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:w-[45%] lg:-translate-y-1/2 lg:h-[80%]" data-aos="fade-left">
              <img
                src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                alt="Heart Failure App Interface"
                className="w-full h-full object-contain rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <InfoSection />

      {/* Timeline Section */}
      <section className="bg-[#0A0B14] text-white py-24">
        <div className="max-w-[1600px] mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-[180px] font-bold leading-none bg-gradient-to-r from-[#2DD4BF] to-[#F8B42E] bg-clip-text text-transparent">
              4
              <span className="text-6xl align-top">Months</span>
            </h2>
            <h3 className="text-5xl font-bold mt-6 mb-12">
              FROM CONCEPT TO LIFE SAVING SOLUTION
            </h3>
            <button className="inline-flex items-center px-8 py-3 border-2 border-[#2DD4BF] text-[#2DD4BF] rounded-full hover:bg-[#2DD4BF] hover:text-black transition-all duration-300">
              Let's connect
            </button>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent"></div>
        
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch relative">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                  <Activity className="w-6 h-6 text-[#2DD4BF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2DD4BF]">CHALLENGE</h2>
              </div>
              <div className="space-y-6 text-gray-600 flex-grow">
                <p className="mb-6">
                  Every minute counts when managing heart failure. Healthcare providers were drowning in data from patient monitoring devices, leading to delayed interventions and potential life-threatening situations. They needed a solution that could transform overwhelming data streams into clear, actionable insights for both medical staff and patients.
                </p>
                <p>
                  The key challenge wasn't just technical - it was human. How could we create a system that would help doctors save lives while making complex health monitoring simple enough for elderly patients to use confidently?
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                  <CheckSquare className="w-6 h-6 text-[#2DD4BF]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2DD4BF]">APPROACH & WORK DONE</h2>
              </div>
              <p className="text-gray-600 flex-grow">
                We approached this life-critical project using the DMAIC framework, ensuring every decision was driven by both medical necessity and user experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DMAIC Process Section */}
      <section className="bg-white py-24 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,...')] opacity-5"></div>
        
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="space-y-24">
            {/* Define Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1 transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/a79568ce-6285-4f87-978a-c01279a28d2d.jpeg?updatedAt=1734513084539"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                    <Activity className="w-6 h-6 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2DD4BF]">DEFINE</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our client had a visionary goal: to empower heart failure patients to take control of their health by connecting wearable OMRON wristbands, a mobile application, and an Electronic Health Record (EHR) system. They needed a solution that would:
                </p>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Continuously monitor patient vitals (blood pressure, symptoms, lab results)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Visualize critical health data in a simple, accessible way</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Integrate seamlessly with EHR systems (via REDOX APIs) to keep healthcare providers informed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-[#2DD4BF] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Provide daily and bi-monthly health surveys for patients, alongside medication reminders</span>
                  </li>
                </ul>
                <p className="text-gray-600">
                  With a tight development timeline of under four months, our challenge was to build a secure, user-friendly mobile tool that would foster trust, improve patient outcomes, and streamline communication between patients and their care teams.
                </p>
              </div>
            </div>

            {/* Measure Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1 transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/Tech%20Architecture.png?updatedAt=1734461546150"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                    <Activity className="w-6 h-6 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2DD4BF]">MEASURE</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  To ensure patient and provider needs were met, we established clear performance metrics:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Data Collection Accuracy</h3>
                    <p className="text-gray-600">The app had to reliably capture vital signs, medication adherence, and symptom reports from OMRON wristbands and patient inputs.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">User Engagement & Accessibility</h3>
                    <p className="text-gray-600">We measured the ease of accessing information—how quickly patients could view their data and how reliably healthcare providers could retrieve updated patient records.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Integration Speed & Stability</h3>
                    <p className="text-gray-600">We closely monitored how quickly and effectively the app communicated with the backend, EHR systems, and OMRON APIs, ensuring minimal downtime and swift response times.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  By maintaining a tight feedback loop with stakeholders, we adapted swiftly to evolving requirements, ensuring an empathetic user experience that supports vulnerable patients at a critical time in their healthcare journey.
                </p>
              </div>
            </div>

            {/* Analyze Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1 transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/f09ce1e7-f82f-4b36-9617-d10695b4ca35.jpeg?updatedAt=1734513256623"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                    <Activity className="w-6 h-6 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2DD4BF]">ANALYZE</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  Our analysis revealed several key insights and challenges:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Limited API Documentation</h3>
                    <p className="text-gray-600">The OMRON APIs were not well documented, requiring repeated communication with OMRON to resolve integration hurdles.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Complex Data Flows</h3>
                    <p className="text-gray-600">Synchronizing data between the wearable device, mobile app, EHR system, and backend demanded meticulous attention to data models and validation protocols.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Time Constraints</h3>
                    <p className="text-gray-600">Under a four-month schedule, we had to streamline our approach. We focused on an MVP (Minimum Viable Product) that delivered core value—surveys, vitals monitoring, medication reminders—while leaving room for iterative improvements.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  These findings guided us toward a solution that balanced complexity with clarity, ensuring patients and providers received the information they needed without technical friction.
                </p>
              </div>
            </div>

            {/* Improve Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1 transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/Screenshot%202024-12-17%20at%2010.03.12%E2%80%AFAM.png?updatedAt=1734458865418"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                    <Activity className="w-6 h-6 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2DD4BF]">IMPROVE</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  With clarity around the obstacles, we implemented targeted enhancements:
                </p>
                <div className="space-y-6 mb-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Refined User Experience</h3>
                    <p className="text-gray-600">We created intuitive interfaces that help patients easily interpret vital signs, symptom alerts, and medications. Built-in reminders and readable graphs foster patient confidence and engagement in their health journey.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Robust EHR Integration</h3>
                    <p className="text-gray-600">By leveraging REDOX APIs, we ensured data from the app flowed seamlessly into EHR systems, giving healthcare providers immediate access to updated patient information—reinforcing a sense of partnership and trust in the treatment process.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] mb-2">Iterative Prototyping & Collaboration</h3>
                    <p className="text-gray-600">Through close collaboration with the client, we prioritized user flows and content, ensuring the MVP delivered meaningful patient value first. As a result, patients can now quickly view their data, track their progress, and share insights with their care teams.</p>
                  </div>
                </div>
                <p className="text-gray-600">
                  At the heart of these improvements is a deep empathy for patients, who now have a clearer window into their health, and providers, who are better equipped to offer timely, personalized support.
                </p>
              </div>
            </div>

            {/* Control Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
              <div className="relative lg:col-span-1 transform hover:scale-105 transition-all duration-300">
                <img
                  src="https://ik.imagekit.io/buildable/Heart%20Failure%20App/2640ea5c-8295-482b-905c-13ddf942e6a0.png?updatedAt=1734464780289"
                  alt="Heart Failure App Interface"
                  className="w-full rounded-lg shadow-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
              </div>
              <div className="lg:col-span-2 bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-[#2DD4BF]/10 rounded-lg">
                    <Activity className="w-6 h-6 text-[#2DD4BF]" />
                  </div>
                  <h2 className="text-2xl font-bold text-[#2DD4BF]">CONTROL</h2>
                </div>
                <p className="text-gray-600 mb-6">
                  To maintain the integrity and effectiveness of the heart failure treatment app, we established a systematic quality assurance process:
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">Automated & Manual QA</h3>
                    <p className="text-gray-600 text-sm">Each sprint concluded with rigorous testing involving engineers, designers, and a dedicated QA team to ensure reliability and accuracy.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">UAT Environment for Client Validation</h3>
                    <p className="text-gray-600 text-sm">We deployed a production-ready application to a QA server, empowering the client to run User Acceptance Testing before going live.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0A0B14] text-sm mb-2">Ongoing Research Access</h3>
                    <p className="text-gray-600 text-sm">By delivering structured, accessible patient data, the solution supports ongoing heart failure research, enabling new insights and improved care protocols over time.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <KeyFeatures />

      {/* Case Studies Slider */}
      <CaseStudiesSlider />

      {/* CTA Section */}
      <ContactForm />
    </div>
  );
};

export default HealthcareCaseStudy;