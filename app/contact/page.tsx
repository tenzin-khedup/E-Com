// app/contact/page.tsx

export default function ContactPage() {
  return (
    <div className="container mx-auto py-16 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Contact Us
        </h1>
        

        {/* Contact Info Sections */}
        <div className="space-y-12">
          
          {/* Email Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Email</h2>
            <p className="text-gray-600">Drop us a mail at</p>
            <a href="mailto:info@samtenscarpet.com" className="text-blue-600 hover:underline">
              sam10carpet@gmail.com
            </a>
          </div>

          {/* Call Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Call</h2>
            <p className="text-gray-600">Call us at</p>
            <a href="tel:+911145678901" className="text-blue-600 hover:underline">
              +977 14914837
            </a>
          </div>

          {/* Address Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Address</h2>
            <p className="text-gray-600">
              Boudha Tinchuli, Kathmandu, Nepal
            </p>
          </div>

          {/* Timings Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Timings</h2>
            <p className="text-gray-600">
              We are open 7 days a week from 11:00 am to 07:00 pm
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}