'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('About Us');

  const tabs = ['About Us', 'Our Mission', 'Our Vision'];

  return (
    <section id="about" className="pt-14 sm:pt-20 lg:pt-[130px] fadeIn">
      <div className="container mx-auto px-4">
        <div className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center lg:mb-20 lg:pt-16" data-wow-delay=".2s">
          <span className="title">ABOUT US</span>
          <h2 className="font-heading text-dark mx-auto mb-5 max-w-[570px] text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
            Know Details About Our Company
          </h2>
          <p className="text-dark-text mx-auto max-w-[570px] text-base">
          Our highest priority at Binary Revolutions (BR) is to maintain your satisfaction and reliability because we are here to 'Turn Your Vision Into Reality'.
          </p>
        </div>
        <div className="wow fadeInUp relative z-10 overflow-hidden rounded-sm px-8 pt-0 pb-8 md:px-[70px] md:pb-[70px] lg:px-[60px] lg:pb-[60px] xl:px-[70px] xl:pb-[70px]" data-wow-delay=".3s">
          <div className="tabButtons flex w-full items-center justify-around">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`font-heading hover:border-primary hover:text-primary dark:hover:border-primary w-full border-b px-2 pt-8 pb-6 text-base font-medium lg:pt-9 lg:pb-7 dark:border-[#4B4E56] dark:text-white ${activeTab === tab ? 'border-primary text-primary' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="w-full">
            <div className="tabPanel">
              <div className="-mx-4 flex w-full flex-wrap items-center pt-[70px]">
                <div className="w-full px-4 lg:w-1/2">
                  <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
                    <div className="absolute top-0 left-0">
                      <Image src="/images/about/image-1.jpg" alt="about-image" width={300} height={245} />
                    </div>
                    <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
                      <Image src="/images/about/image-2.jpg" alt="about-image" width={300} height={245} />
                      <div className="border-primary/10 bg-primary/5 absolute -top-5 -left-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
                    </div>
                    <div className="absolute top-24 right-0 z-40">
                      <svg
                        pointerEvents="none"
                        width="72"
                        height="38"
                        viewBox="0 0 72 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path fillRule="evenodd" clipRule="evenodd" d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z" fill="#4A6CF7" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 lg:w-1/2">
                  <div className="max-w-[565px] lg:ml-auto">
                    {activeTab === 'About Us' && (
                      <>
                        <h2 className="font-heading text-dark mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                          We are Creative Digital Agency Based in Pakistan
                        </h2>
                        <p className="text-dark-text mb-6 text-base">
                          BR, is an IT services provider company in Pakistan, which has skills and expertise to facilitate complex business solutions. The company commenced its business with little resources and small team in 2012 and with the shortest passage of time it got a steep growth in terms of profits, intellectual capital, market access and team of professionals.
                        </p>
                      </>
                    )}
                    {activeTab === 'Our Mission' && (
                      <>
                        <h2 className="font-heading text-dark mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                          Our Mission
                        </h2>
                        <p className="text-dark-text mb-6 text-base">
                        At BR, our mission is to deliver innovative and reliable IT solutions that empower businesses to overcome complex challenges and achieve sustainable growth. We are committed to excellence, client satisfaction, and continuous improvement, leveraging our expertise to drive digital transformation for organizations of all sizes.
                        </p>
                      </>
                    )}
                    {activeTab === 'Our Vision' && (
                      <>
                        <h2 className="font-heading text-dark mb-8 text-2xl font-bold sm:text-[40px] sm:leading-[50px] dark:text-white">
                          Our Vision
                        </h2>
                        <p className="text-dark-text mb-6 text-base">
                        Our vision is to be a leading IT services provider recognized for delivering impactful technology solutions, building long-term client partnerships, and fostering a culture of innovation and professionalism. We aim to contribute to the global tech landscape while proudly representing Pakistan's growing digital capabilities.
                        </p>
                      </>
                    )}
                    {/* <a href="javascript:void(0)" className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-[10px] text-base text-white md:px-8 md:py-[14px]">
                      Learn More
                      <span className="pl-3">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="white" />
                        </svg>
                      </span>
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}