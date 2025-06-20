import { useState } from "react";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    parentGuardian: "",
    dob: "",
    gender: "",
    phone: "",
    altPhone: "",
    email: "",
    address: "",
    sessionMode: "",
    workedWithCoach: "",
    consent1: false,
    consent2: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const scriptURL = import.meta.env.VITE_SHEETS_URL;

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Form submitted successfully!");
        setForm({
          name: "",
          parentGuardian: "",
          dob: "",
          gender: "",
          phone: "",
          altPhone: "",
          email: "",
          address: "",
          sessionMode: "",
          workedWithCoach: "",
          consent1: false,
          consent2: false,
          date: "",
          signature: "",
        });
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 px-6 bg-gradient-to-b from-blue-50 to-blue-100">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Book Your Session</h2>
        <form
          onSubmit={handleFormSubmit}
          className="bg-white rounded-xl shadow-lg p-8 md:p-10 space-y-6"
        >
          {/* Name & Guardian */}
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg"
          />

          <label htmlFor="parentGuardian" className="block text-gray-700 font-medium mb-2">
            Parent's / Guardian's Name (if minor)
          </label>
          <input
            type="text"
            name="parentGuardian"
            value={form.parentGuardian}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg"
          />

          {/* DOB & Gender */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                required
                value={form.dob}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="gender" className="block text-gray-700 font-medium mb-2">
                Gender
              </label>
              <select
                name="gender"
                required
                value={form.gender}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          {/* Contacts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                Primary Contact
              </label>
              <input
                type="tel"
                name="phone"
                required
                pattern="[0-9]{10}"
                maxLength={10}
                value={form.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              />
            </div>

            <div>
              <label htmlFor="altPhone" className="block text-gray-700 font-medium mb-2">
                Alt Contact
              </label>
              <input
                type="tel"
                name="altPhone"
                pattern="[0-9]{10}"
                maxLength={10}
                value={form.altPhone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-blue-200 rounded-lg"
              />
            </div>
          </div>

          {/* Email & Address */}
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg"
          />

          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-blue-200 rounded-lg"
          />

          {/* Communication Mode */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">Session Mode Preference:</label>
            <div className="flex gap-4">
              <label className="border border-transparent p-1.5 hover:border-blue-300 hover:cursor-pointer rounded-md">
                <input
                  type="radio"
                  name="sessionMode"
                  value="Offline"
                  checked={form.sessionMode === "Offline"}
                  onChange={handleChange}
                />{" "}
                Offline
              </label>
              <label className="border border-transparent p-1.5 hover:border-blue-300 hover:cursor-pointer rounded-md">
                <input
                  type="radio"
                  name="sessionMode"
                  value="Online"
                  checked={form.sessionMode === "Online"}
                  onChange={handleChange}
                />{" "}
                Online
              </label>
            </div>
          </div>

          {/* Prior Coach/Therapist */}
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Have you worked with a coach or therapist before?
            </label>
            <div className="flex gap-4">
              <label className="border border-transparent p-1.5 hover:border-blue-300 hover:cursor-pointer rounded-md">
                <input
                  type="radio"
                  name="workedWithCoach"
                  value="Yes"
                  checked={form.workedWithCoach === "Yes"}
                  onChange={handleChange}
                />{" "}
                Yes
              </label>
              <label className="border border-transparent p-1.5 hover:border-blue-300 hover:cursor-pointer rounded-md">
                <input
                  type="radio"
                  name="workedWithCoach"
                  value="No"
                  checked={form.workedWithCoach === "No"}
                  onChange={handleChange}
                />{" "}
                No
              </label>
            </div>
          </div>

          {/* Consent */}
          <div>
            <label>
              <input
                type="checkbox"
                name="consent1"
                checked={form.consent1}
                onChange={handleChange}
              />{" "}
              I understand that Prarona Bordoloi provides support and this is not a substitute for
              therapy.
            </label>
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                name="consent2"
                checked={form.consent2}
                onChange={handleChange}
              />{" "}
              I consent to the use of my information for the session.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={!form.consent1 || !form.consent2}
            className={`relative overflow-hidden w-full text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ${
              !form.consent1 || !form.consent2
                ? " bg-gray-300 hover:bg-gray-200 cursor-not-allowed"
                : " bg-blue-500 hover:bg-blue-600 cursor-pointer"
            }`}
          >
            <span
              className={`absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold flex items-center justify-center ${
                isLoading ? "block" : "hidden"
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animate-spin h-5 w-5 mr-3 text-white"
              >
                <circle
                  strokeWidth="4"
                  stroke="currentColor"
                  r="10"
                  cy="12"
                  cx="12"
                  className="opacity-25"
                ></circle>
                <path d="M4 12a8 8 0 018-8v8H4z" fill="currentColor" className="opacity-75"></path>
              </svg>
              Loading...
            </span>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
