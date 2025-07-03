'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { useState, useRef } from 'react';
import toast from 'react-hot-toast';

const Support: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const error = await response.json();
        setFormStatus('error');
        toast.error(error.message || 'Failed to send email');
        return;
      }

      const result = await response.json();
      setFormStatus('success');
      toast.success('Email sent successfully!');
      if (formRef.current) {
        setTimeout(() => formRef.current?.reset(), 500);
      }
    } catch (error) {
      setFormStatus('error');
      toast.error('Network error occurred. Please try again.');
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white dark:bg-dark pt-[56px] sm:pt-[64px] lg:pt-[80px] mb-12">
        <section id="support" className="pt-14 sm:pt-20 lg:pt-[130px] mb-12">
          <div className="container mx-auto px-4 xl:container">
            <div className="-mx-4 flex flex-wrap justify-center">
              <div className="w-full px-4 xl:w-10/12">
                <div className="flex flex-wrap items-center border-b pb-14 lg:pb-0 dark:border-[#2E333D]">
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="wow fadeInUp relative mb-12 max-w-[500px] pt-6 md:mb-14 lg:pt-16" data-wow-delay=".2s">
                      <span className="title left-0 translate-x-0"> SUPPORT </span>
                      <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                        Need Any Help? Say hello
                      </h2>
                    </div>
                  </div>
                  <div className="w-full px-4 lg:w-1/2">
                    <div className="wow fadeInUp flex items-center" data-wow-delay=".2s">
                      <span className="bg-dark mr-10 h-1 w-full max-w-[200px] dark:bg-white"></span>
                      <a
                        href="mailto:info@binaryrevolutions.com"
                        className="font-heading text-dark text-xl md:text-3xl lg:text-xl xl:text-3xl dark:text-white"
                      >
                        info@binaryrevolutions.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mx-auto max-w-[780px] pt-[130px]">
                  <form
                    className="wow fadeInUp"
                    data-wow-delay=".2s"
                    onSubmit={handleSubmit}
                    ref={formRef}
                  >
                    <style jsx>{`
                      .input-container {
                        position: relative;
                        width: 100%;
                      }
                      .input-container::after {
                        content: '';
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        width: 100%;
                        height: 2px;
                        background: linear-gradient(90deg, transparent, #2563eb, transparent);
                        opacity: 0;
                        transition: opacity 0.3s ease, transform 0.3s ease;
                        transform: scaleX(0);
                      }
                      .input-container:focus-within::after {
                        opacity: 1;
                        transform: scaleX(1);
                      }
                      .input-container input,
                      .input-container textarea {
                        transition: all 0.3s ease;
                      }
                      .input-container input:focus,
                      .input-container textarea:focus {
                        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.1);
                        transform: translateY(-2px);
                      }
                      .submit-button {
                        position: relative;
                        overflow: hidden;
                      }
                      .submit-button::after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        width: 0;
                        height: 0;
                        background: rgba(255, 255, 255, 0.2);
                        border-radius: 50%;
                        transform: translate(-50%, -50%);
                        transition: width 0.4s ease, height 0.4s ease;
                      }
                      .submit-button:hover::after {
                        width: 300px;
                        height: 300px;
                      }
                      .submit-button:disabled {
                        opacity: 0.6;
                        cursor: not-allowed;
                      }
                    `}</style>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4 sm:w-1/2">
                        <div className="mb-12">
                          <label
                            htmlFor="name"
                            className="font-heading text-dark mb-3 block text-base dark:text-white"
                          >
                            Your Name
                          </label>
                          <div className="input-container">
                            <input
                              type="text"
                              name="name"
                              id="name"
                              placeholder="Name"
                              className="text-dark placeholder-dark-text w-full bg-white/5 dark:bg-gray-800/50 rounded-md px-4 py-4 text-base font-medium outline-none transition-all duration-300 dark:text-white"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 sm:w-1/2">
                        <div className="mb-12">
                          <label
                            htmlFor="email"
                            className="font-heading text-dark mb-3 block text-base dark:text-white"
                          >
                            Email Address
                          </label>
                          <div className="input-container">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email Address"
                              className="text-dark placeholder-dark-text w-full bg-white/5 dark:bg-gray-800/50 rounded-md px-4 py-4 text-base font-medium outline-none transition-all duration-300 dark:text-white"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 sm:w-1/2">
                        <div className="mb-12">
                          <label
                            htmlFor="phone"
                            className="font-heading text-dark mb-3 block text-base dark:text-white"
                          >
                            Phone (Optional)
                          </label>
                          <div className="input-container">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              placeholder="Phone Number"
                              className="text-dark placeholder-dark-text w-full bg-white/5 dark:bg-gray-800/50 rounded-md px-4 py-4 text-base font-medium outline-none transition-all duration-300 dark:text-white"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4 sm:w-1/2">
                        <div className="mb-12">
                          <label
                            htmlFor="subject"
                            className="font-heading text-dark mb-3 block text-base dark:text-white"
                          >
                            Subject
                          </label>
                          <div className="input-container">
                            <input
                              type="text"
                              name="subject"
                              id="subject"
                              placeholder="Type Subject"
                              className="text-dark placeholder-dark-text w-full bg-white/5 dark:bg-gray-800/50 rounded-md px-4 py-4 text-base font-medium outline-none transition-all duration-300 dark:text-white"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <div className="mb-10">
                          <label
                            htmlFor="message"
                            className="font-heading text-dark mb-3 block text-base dark:text-white"
                          >
                            Message
                          </label>
                          <div className="input-container">
                            <textarea
                              rows={4}
                              name="message"
                              id="message"
                              placeholder="Type Message"
                              className="text-dark placeholder-dark-text w-full bg-white/5 dark:bg-gray-800/50 rounded-md px-4 py-4 text-base font-medium outline-none resize-none transition-all duration-300 dark:text-white"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="w-full px-4">
                        <button
                          type="submit"
                          className="submit-button bg-primary hover:bg-primary/90 font-heading text-white text-base px-4 py-4 rounded-md w-full flex items-center justify-center transition-all duration-200"
                          disabled={formStatus === 'submitting'}
                        >
                          {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="h-8" />
      <Footer />
    </>
  );
};

export default Support;