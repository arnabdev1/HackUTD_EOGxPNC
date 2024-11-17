"use client"
import { useRef } from "react";

const Documentation = () => {
  const sectionRefs = {
    introduction: useRef(null),
    installation: useRef(null),
    usage: useRef(null),
    features: useRef(null),
    faq: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <aside className="w-64 bg-transparent text-white p-6 sticky top-0 h-screen">
        <h2 className="text-2xl font-bold mb-4">Documentation</h2>
        <nav className="space-y-4">
          {Object.keys(sectionRefs).map((key) => (
            <button
              key={key}
              onClick={() => scrollToSection(key)}
              className="block w-full text-left px-4 py-2 rounded-lg hover:bg-red-700 transition-all duration-100"
            >
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 space-y-12 text-white">
        {/* Introduction Section */}
        <section ref={sectionRefs.introduction} id="introduction">
          <h1 className="text-4xl font-bold mb-4">Introduction</h1>
          <p className="text-lg text-white opacity-70">
            Welcome to the documentation for our web application. This guide
            provides detailed insights on installation, usage, and features to
            help you make the most of the app.
          </p>
          <hr className="my-8 border-gray-300" />
        </section>

        {/* Installation Section */}
        <section ref={sectionRefs.installation} id="installation">
          <h1 className="text-4xl font-bold mb-4">Installation</h1>
          <p className="text-lg  text-white opacity-70">
            Follow these steps to install the application:
          </p>
          <ol className="list-decimal ml-8 space-y-2  text-white opacity-70">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Set up your environment variables and dependencies.</li>
          </ol>
          <p className="text-lg  text-white opacity-70">
            Follow these steps to install the application:
          </p>
          <ol className="list-decimal ml-8 space-y-2  text-white opacity-70">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Set up your environment variables and dependencies.</li>
          </ol>
          <p className="text-lg  text-white opacity-70">
            Follow these steps to install the application:
          </p>
          <ol className="list-decimal ml-8 space-y-2  text-white opacity-70">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Set up your environment variables and dependencies.</li>
          </ol>
          <p className="text-lg  text-white opacity-70">
            Follow these steps to install the application:
          </p>
          <ol className="list-decimal ml-8 space-y-2  text-white opacity-70">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Set up your environment variables and dependencies.</li>
          </ol>
          <p className="text-lg  text-white opacity-70">
            Follow these steps to install the application:
          </p>
          <ol className="list-decimal ml-8 space-y-2  text-white opacity-70">
            <li>Download the installer from the official website.</li>
            <li>Run the installer and follow the on-screen instructions.</li>
            <li>Set up your environment variables and dependencies.</li>
          </ol>
          <hr className="my-8 border-gray-300" />
        </section>

        {/* Usage Section */}
        <section ref={sectionRefs.usage} id="usage">
          <h1 className="text-4xl font-bold mb-4">Usage</h1>
          <p className="text-lg  text-white opacity-70">
            The app is designed to be user-friendly. Here's how to get started:
          </p>
          <p className="text-lg  text-white opacity-70">
            After logging in, navigate to the dashboard to access key features
            like real-time analytics, data uploads, and more.
          </p>
          <hr className="my-8 border-gray-300" />
        </section>

        {/* Features Section */}
        <section ref={sectionRefs.features} id="features">
          <h1 className="text-4xl font-bold mb-4">Features</h1>
          <ul className="list-disc ml-8 space-y-2  text-white opacity-70">
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
            <li>Real-time analytics</li>
            <li>Predictive insights</li>
            <li>Customizable dashboards</li>
            <li>Seamless integrations</li>
          </ul>
          <hr className="my-8 border-gray-300" />
        </section>

        {/* FAQ Section */}
        <section ref={sectionRefs.faq} id="faq">
          <h1 className="text-4xl font-bold mb-4">FAQ</h1>
          <div className="space-y-4">
            <div>
              <h2 className="text-2xl font-semibold">What is this app for?</h2>
              <p className=" text-white opacity-70">
                This app helps users monitor and optimize their workflows with
                powerful analytics and tools.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">How do I get support?</h2>
              <p className=" text-white opacity-70">
                Reach out to us via the support page or email us at support@app.com.
              </p>
            </div>
          </div>
          <hr className="my-8 border-gray-300" />
        </section>
      </main>
    </div>
  );
};

export default Documentation;
