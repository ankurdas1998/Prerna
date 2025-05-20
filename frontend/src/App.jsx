import { useState } from "react";

import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const scriptURL = import.meta.env.VITE_SHEETS_URL;

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Booking submitted successfully!");
        setForm({ name: "", phone: "", date: "", time: "", message: "" });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Navbar />
      <main>
        <section id="home" className="pt-32 pb-20 px-6 bg-gradient-to-b from-blue-100 to-blue-50">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0 fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
                Find Your Path to Inner Peace
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Empathetic guidance and life support to help you navigate challenges and grow with
                confidence.
              </p>
              <a
                href="#booking"
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 inline-block"
              >
                Book a Session
              </a>
            </div>
            <div className="md:w-1/2 fade-in delay-1">
              <div className="bg-white p-8 rounded-xl shadow-lg relative quote-container max-w-lg mx-auto">
                <p className="text-xl italic text-gray-700 mb-4">
                  "Mental health is not a destination, but a process. It's about how you drive, not
                  where you're going."
                </p>
                <p className="text-right text-blue-400 font-medium">— Noam Shpancer</p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Flash Cards Section --> */}
        <section id="flashcards" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Wellness Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* <!-- Card 1 --> */}
              <div className="flash-card bg-green-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-1">
                <div className="text-green-500 text-3xl mb-4">
                  <i className="fas fa-brain"></i>
                </div>
                <h3 className="text-xl font-semibold text-green-800 mb-3">Mindfulness Matters</h3>
                <p className="text-gray-700">
                  Practicing just 10 minutes of mindfulness daily can reduce stress and improve
                  focus. Try focusing on your breath or a simple activity like drinking tea.
                </p>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* <!-- Card 2 --> */}
              <div className="flash-card bg-blue-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-2">
                <div className="text-blue-500 text-3xl mb-4">
                  <i className="fas fa-moon"></i>
                </div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Sleep Hygiene</h3>
                <p className="text-gray-700">
                  Quality sleep is foundational for mental health. Maintain a consistent sleep
                  schedule and create a calming bedtime routine for better rest.
                </p>
                <button className="mt-4 text-blue-600 hover:text-blue-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* <!-- Card 3 --> */}
              <div className="flash-card bg-purple-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-3">
                <div className="text-purple-500 text-3xl mb-4">
                  <i className="fas fa-people-arrows"></i>
                </div>
                <h3 className="text-xl font-semibold text-purple-800 mb-3">Social Connections</h3>
                <p className="text-gray-700">
                  Meaningful relationships are vital for mental wellbeing. Reach out to loved ones
                  regularly, even with a quick message or call.
                </p>
                <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* <!-- Card 4 --> */}
              <div className="flash-card bg-yellow-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-1">
                <div className="text-yellow-500 text-3xl mb-4">
                  <i className="fas fa-heart-pulse"></i>
                </div>
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">Physical Activity</h3>
                <p className="text-gray-700">
                  Exercise releases endorphins that improve mood. A 30-minute walk can be as
                  effective for mild depression as medication.
                </p>
                <button className="mt-4 text-yellow-600 hover:text-yellow-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* <!-- Card 5 --> */}
              <div className="flash-card bg-pink-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-2">
                <div className="text-pink-500 text-3xl mb-4">
                  <i className="fas fa-pen-nib"></i>
                </div>
                <h3 className="text-xl font-semibold text-pink-800 mb-3">Journaling Benefits</h3>
                <p className="text-gray-700">
                  Writing about your thoughts and feelings for 15 minutes daily can help process
                  emotions and reduce anxiety.
                </p>
                <button className="mt-4 text-pink-600 hover:text-pink-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>

              {/* <!-- Card 6 --> */}
              <div className="flash-card bg-indigo-50 rounded-xl p-6 shadow-md transition duration-300 fade-in delay-3">
                <div className="text-indigo-500 text-3xl mb-4">
                  <i className="fas fa-hand-holding-heart"></i>
                </div>
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">Self-Compassion</h3>
                <p className="text-gray-700">
                  Treat yourself with the same kindness you'd offer a friend. Self-criticism often
                  exacerbates mental health challenges.
                </p>
                <button className="mt-4 text-indigo-600 hover:text-indigo-700 font-medium flex items-center">
                  Learn more <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Booking Form Section --> */}
        <section id="booking" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
              Book Your Session
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <form onSubmit={handleFormSubmit} id="bookingForm" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone no
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="date" className="block text-gray-700 font-medium mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="date"
                      name="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="time" className="block text-gray-700 font-medium mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="time"
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    What would you like to discuss?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-300"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    className="w-4 h-4 text-blue-600 border-blue-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="consent" className="ml-2 text-gray-700">
                    I consent to 'Prerna' contacting me via the provided email address.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
                >
                  Submit Booking Request
                </button>
              </form>

              <div
                id="successMessage"
                className="hidden mt-6 p-4 bg-green-100 text-green-800 rounded-lg"
              >
                <div className="flex items-center">
                  <i className="fas fa-check-circle text-green-500 text-2xl mr-3"></i>
                  <div>
                    <h3 className="font-bold">Thank you for your booking request!</h3>
                    <p>We'll contact you within 24 hours to confirm your appointment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
