export default function ContactPage() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            Have a question, feedback, or need support?
            Our team is always ready to help you.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form className="space-y-8">
            {/* Purpose */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Purpose
              </label>
              <select className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none">
                <option>Bus</option>
                <option>Launch</option>
                <option>Air</option>
                <option>Train</option>
                <option>Event</option>
                <option>Park</option>
              </select>
            </div>

            {/* Name & City */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name <span className="text-green-600">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Mahmud Hasan"
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  City <span className="text-green-600">*</span>
                </label>
                <select className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none">
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Rangpur</option>
                  <option>Sylhet</option>
                  <option>Dinajpur</option>
                </select>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number <span className="text-green-600">*</span>
                </label>
                <input
                  type="tel"
                  maxLength={11}
                  placeholder="01XXXXXXXXX"
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email <span className="text-green-600">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="w-full h-14 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Message <span className="text-green-600">*</span>
              </label>
              <textarea
                rows={6}
                placeholder="Write your message here..."
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:outline-none resize-none"
              />
            </div>

            {/* Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-lg bg-green-600 hover:bg-green-500 text-white font-semibold shadow-lg transition duration-300"
              >
                Send Message
                <span aria-hidden>→</span>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-10">
          We usually respond within 24 hours.
        </p>
      </div>
    </section>
  );
}
