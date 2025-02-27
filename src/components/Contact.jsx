import React, { useState } from 'react';
import { Send, Loader2 } from 'lucide-react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const emailSubject = encodeURIComponent(formData.subject);
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    window.location.href = `mailto:nishchaykksinha@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="w-full">
      <div className="relative">
        {/* Responsive blur effect */}
        <div className="bg-gradient-to-br from-black to-violet-900 absolute -z-10 right-[10%] sm:right-[20%] top-[10%] sm:top-[20%] h-[15rem] sm:h-[20rem] md:h-[30rem] w-[15rem] sm:w-[20rem] md:w-[30rem] rounded-full bg-gray-700 opacity-20 blur-[50px] sm:blur-[100px]" />
        
        <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-300">
              Get in Touch
            </h2>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-gray-400 px-4">
              Have a question or want to work together? Drop me a message!
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="rounded-xl border border-gray-800 bg-gray-900/50 backdrop-blur-xl p-4 sm:p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-colors duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-colors duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-colors duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800/50 px-3 sm:px-4 py-2 sm:py-2.5 text-sm sm:text-base text-gray-300 focus:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/20 transition-colors duration-200 resize-y min-h-[100px]"
                    placeholder="Your message..."
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center rounded-full bg-gray-700 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-white hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500/20 disabled:opacity-50 transition-colors duration-200"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}