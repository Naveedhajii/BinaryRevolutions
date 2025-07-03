'use client';

import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const portfolioItems = [
  {
    category: 'ecom',
    image: '/images/portfolio/moh.png',
    title: 'Ministry Of health',
    subtitle: 'Branded Ecommerce',
    delay: '.2s',
  },
  {
    category: 'branding',
    image: '/images/portfolio/spplucity.jpg',
    title: 'Spplycity',
    subtitle: 'Branded Ecommerce',
    delay: '.25s',
  },
  {
    category: 'digital',
    image: '/images/portfolio/skoolify.jpg',
    title: 'Skoolify',
    subtitle: 'Branded Ecommerce',
    delay: '.3s',
  },
  {
    category: 'ecom',
    image: '/images/portfolio/skycom.Png',
    title: 'Skycomex',
    subtitle: 'Branded Ecommerce',
    delay: '.35s',
  },
  {
    category: 'ecom',
    image: '/images/portfolio/saztex.jpg',
    title: 'Saztax',
    subtitle: 'Branded Ecommerce',
    delay: '.35s',
  },
  {
    category: 'ecom',
    image: '/images/portfolio/joyages.jpg',
    title: 'Joyages',
    subtitle: 'Branded Ecommerce',
    delay: '.35s',
  },
];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 4000,
  pauseOnHover: false,
  pauseOnFocus: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 600,
      settings: { slidesToShow: 1 }
    }
  ]
};

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="pt-14 sm:pt-20 lg:pt-[130px]">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16" data-wow-delay=".2s">
          <span className="title"> PORTFOLIO </span>
          <h2 className="font-heading text-dark mx-auto mb-5 max-w-[500px] text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
            Explore Our Latest Case Studies
          </h2>
          <p className="text-dark-text mx-auto max-w-[620px] text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus. Phasellus aliquam ante in maximus.
          </p>
        </div>
        <Slider {...sliderSettings}>
          {portfolioItems.map((item, idx) => (
            <div key={idx} className="px-4">
              <div className={`wow fadeInUp group relative mb-10 overflow-hidden rounded-sm`} data-wow-delay={item.delay}>
                <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-sm overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt="portfolio-image" 
                    fill
                    className="object-cover w-full h-full"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="absolute bottom-8 left-5 flex translate-y-8 items-center justify-between rounded-sm bg-black/30 px-4 py-5 opacity-0 backdrop-blur-[30px] transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:left-8 sm:px-6 lg:left-5 lg:px-4 xl:px-6 2xl:left-8">
                  <div className="border-r border-[#e9e9e9]/30 pr-4 sm:pr-5 lg:pr-4 xl:pr-5">
                    <h3 className="font-heading text-base font-medium text-white sm:text-xl lg:text-base xl:text-xl">{item.title}</h3>
                    <p className="text-sm text-[#d9d9d9] sm:text-base lg:text-sm xl:text-base">{item.subtitle}</p>
                  </div>
                  <div className="pl-4 sm:pl-5 lg:pl-4 xl:pl-5">
                    <a href="javascript:void(0)" className="dark:hover:bg-primary hover:bg-primary flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f8f8]/15 text-white hover:opacity-100 dark:hover:opacity-100">
                      <svg width="20" height="20" viewBox="0 0 20 20" className="fill-current">
                        <path d="M13.4767 9.16689L9.00671 4.69689L10.185 3.51855L16.6667 10.0002L10.185 16.4819L9.00671 15.3036L13.4767 10.8336H3.33337V9.16689H13.4767Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="wow fadeInUp w-full pt-10 text-center" data-wow-delay=".2s">
          <a href="/projects" className="bg-primary font-heading hover:bg-primary/90 inline-flex items-center rounded-sm px-8 py-[14px] text-base text-white">
            See More Projects
            <span className="pl-3">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.172 7L6.808 1.636L8.222 0.222L16 8L8.222 15.778L6.808 14.364L12.172 9H0V7H12.172Z" fill="white" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}