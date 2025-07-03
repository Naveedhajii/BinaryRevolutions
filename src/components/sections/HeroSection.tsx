'use client';

import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter } from '@/hooks/useTypewriter';

export default function HeroSection() {
  const text = useTypewriter(['Business', 'Startup', 'SaaS', 'Agency'], 1500);

  return (
    <section id="home" className="relative z-40 pt-28 pb-24 sm:pt-36 lg:pt-[170px] lg:pb-[120px] bg-gray-2 dark:bg-dark-bg overflow-hidden">
      {/* Background container */}
      <div className="absolute inset-0 -z-10 h-full w-full pointer-events-none">
        <div className="bg-noise-pattern absolute bottom-0 left-0 h-full w-full bg-cover bg-center opacity-10 dark:opacity-40"></div>
        <div className="absolute top-0 right-0">
          <svg width="1356" height="860" viewBox="0 0 1356 860" fill="none">
            <g opacity="0.5" filter="url(#filter0_f_201_2181)">
              <rect
                x="450.088"
                y="-126.709"
                width="351.515"
                height="944.108"
                transform="rotate(-34.6784 450.088 -126.709)"
                fill="url(#paint0_linear_201_2181)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2181"
                x="0.0878906"
                y="-776.711"
                width="1726.24"
                height="1876.4"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2181"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2181"
                x1="417.412"
                y1="59.4717"
                x2="966.334"
                y2="603.857"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0">
          <svg width="1469" height="498" viewBox="0 0 1469 498" fill="none">
            <g opacity="0.3" filter="url(#filter0_f_201_2182)">
              <rect
                y="450"
                width="1019"
                height="261"
                fill="url(#paint0_linear_201_2182)"
              />
            </g>
            <defs>
              <filter
                id="filter0_f_201_2182"
                x="-450"
                y="0"
                width="1919"
                height="1161"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="225"
                  result="effect1_foregroundBlur_201_2182"
                />
              </filter>
              <linearGradient
                id="paint0_linear_201_2182"
                x1="-94.7239"
                y1="501.47"
                x2="-65.8058"
                y2="802.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ABBCFF" />
                <stop offset="0.859375" stopColor="#4A6CF7" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-3 lg:w-1/2">
            <div className="mx-auto mb-12 max-w-[530px] text-center lg:mb-0 lg:ml-0 lg:text-left">
              <span className="bg-primary/5 font-heading text-primary mb-8 inline-block rounded-full px-5 py-[10px] text-base dark:bg-white/10 dark:text-white">
                <span className="bg-primary mr-2 inline-block h-2 w-2 rounded-full"></span>
                Binary Revolutions
              </span>
              <h1 className="font-heading mb-5 text-2xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                Digital Solutions for Your{' '}
                <span className="text-primary underline decoration-primary underline-offset-4">
                  <Typewriter
                    words={['Business', 'Startup', 'SaaS', 'Agency']}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </span>
              </h1>
              <p className="text-dark-text mb-12 text-base font-body">
              Our online platform delivers tailored eCommerce solutions, enabling rapid development and seamless deployment to meet your specific business requirements.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start">
                <a href="#features" className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-6 py-[10px] text-base text-white md:px-8 md:py-[14px]">
                  Get Started
                  <span className="pl-3">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="white" />
                    </svg>
                  </span>
                </a>
                <a href="#about" className="font-heading text-dark hover:text-primary dark:hover:text-primary inline-flex items-center rounded-sm px-8 py-[14px] text-base dark:text-white">
                  <span className="pr-3">
                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                      <path d="M19.376 12.416L8.777 19.482C8.70171 19.5321 8.61423 19.5608 8.52389 19.5652C8.43355 19.5695 8.34373 19.5492 8.264 19.5065C8.18427 19.4639 8.1176 19.4003 8.07111 19.3228C8.02462 19.2452 8.00005 19.1564 8 19.066V4.934C8.00005 4.84356 8.02462 4.75482 8.07111 4.67724C8.1176 4.59966 8.18427 4.53615 8.264 4.49346C8.34373 4.45077 8.43355 4.43051 8.52389 4.43483C8.61423 4.43915 8.70171 4.46789 8.777 4.518L19.376 11.584C19.4445 11.6297 19.5006 11.6915 19.5395 11.7641C19.5783 11.8367 19.5986 11.9177 19.5986 12C19.5986 12.0823 19.5783 12.1633 19.5395 12.2359C19.5006 12.3085 19.4445 12.3703 19.376 12.416Z" />
                    </svg>
                  </span>
                  How it Work
                </a>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative z-30 mx-auto h-[560px] w-full max-w-[700px] lg:ml-0">
              <div className="absolute top-0 right-0 lg:w-11/12">
                <Image src="/images/hero/image-2.jpg" alt="hero-image" width={700} height={560} />
              </div>
              <div className="absolute bottom-0 left-0 z-10">
                <Image src="/images/hero/image-1.jpg" alt="hero-image" width={350} height={280} />
                <div className="border-primary/10 bg-primary/5 absolute -top-6 -right-6 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"></div>
              </div>
              <div className="absolute bottom-0 left-0">
                <svg width="72" height="38" viewBox="0 0 72 38" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M62.0035 2.04985C59.6808 1.76671 57.4524 2.70929 55.1508 4.68209C51.3631 7.92863 44.7908 9.54366 38.8668 4.69678C36.329 2.6204 34.117 2.29213 32.2894 2.59672C30.3972 2.91209 28.8057 3.92088 27.5547 4.75487C25.5734 6.07577 23.3915 7.46379 20.8786 7.78953C18.2847 8.12577 15.515 7.32034 12.3598 4.69105C9.71804 2.48955 7.45748 2.0661 5.72104 2.33325C3.94436 2.6066 2.56003 3.6273 1.76341 4.56877C1.40666 4.99037 0.775686 5.04295 0.354079 4.68621C-0.0675277 4.32946 -0.120109 3.69849 0.236635 3.27688C1.27334 2.05168 3.0643 0.71846 5.41692 0.356509C7.80979 -0.0116349 10.6326 0.648246 13.6402 3.1546C16.485 5.52529 18.7154 6.05321 20.6215 5.80612C22.6086 5.54854 24.4266 4.43657 26.4453 3.09078L27 3.92282L26.4453 3.09078C27.6943 2.25809 29.6028 1.0169 31.9606 0.623935C34.383 0.220203 37.1711 0.725274 40.1333 3.14886C45.1548 7.25733 50.6369 5.9169 53.8492 3.16356C56.3795 0.994798 59.1512 -0.312658 62.2455 0.0645503C65.3089 0.43799 68.4333 2.43425 71.7557 6.26783C72.1174 6.68518 72.0723 7.31674 71.655 7.67845C71.2376 8.04015 70.606 7.99504 70.2443 7.57769C67.0668 3.91125 64.3571 2.33677 62.0035 2.04985Z" fill="#4A6CF7" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-1/2">
                <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                  <path opacity="0.9" d="M120 60C120 93.1371 93.1371 120 60 120C26.8629 120 0 93.1371 0 60C0 26.8629 26.8629 0 60 0C93.1371 0 120 26.8629 120 60Z" fill="url(#paint0_angular_300_926)" />
                  <defs>
                    <radialGradient id="paint0_angular_300_926" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(90) scale(60)">
                      <stop stopColor="#4A6CF7" />
                      <stop offset="1" stopColor="#111722" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}