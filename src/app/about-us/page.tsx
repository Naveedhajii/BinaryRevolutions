'use client';

import Image from 'next/image';
import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import Link from 'next/link';

export default function About() {
    return (
        <>
            <div>
                <Navbar />
                <main className="min-h-screen bg-white dark:bg-dark pt-[56px] sm:pt-[64px] lg:pt-[80px]">
                    <section id="about" className="pt-14 sm:pt-16 lg:pt-20">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            {/* Section Title */}
                            
                                
                            

<div className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16" data-wow-delay=".2s">
          <span className="title"> ABOUT US </span>
                <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                Get to Know Who We Are
                </h2>
                <p className="text-dark-text mt-2 sm:mt-3 mx-auto max-w-[90%] sm:max-w-[570px] text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                    Our highest priority at Binary Revolutions (BR) is to maintain your satisfaction and reliability because we are here to 'Turn Your Vision Into Reality'.
                                </p>
              </div>

                            <section className="py-12 sm:py-16 relative">
                                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                                    <div className="border border-primary/10 dark:border-white/10 rounded-xl shadow-sm hover:border-primary/20 transition-all duration-300 p-4 sm:p-6">
                                        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 lg:gap-12">
                                            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
                                                <div className="w-full flex flex-col justify-start items-center lg:items-start gap-4 sm:gap-6">
                                                    <h2
                                                        className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight text-center lg:text-left dark:text-white"
                                                    >
                                                        The Tale of Our Achievement Story
                                                    </h2>
                                                    <p
                                                        className="text-dark-text text-sm sm:text-base leading-relaxed text-center lg:text-left dark:text-gray-400"
                                                    >
                                                        Our achievement story is a testament to teamwork and perseverance. Together, we've
                                                        overcome challenges, celebrated victories, and created a narrative of progress and
                                                        success.
                                                    </p>
                                                </div>
                                                <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                                    <div
                                                        className="p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2 dark:border-[#4B4E56] dark:hover:border-primary"
                                                    >
                                                        <h4 className="text-dark text-xl sm:text-2xl font-bold font-heading leading-9 dark:text-white">12+ Years</h4>
                                                        <p className="text-dark-text text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                                            Influencing Digital Landscapes Together
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2 dark:border-[#4B4E56] dark:hover:border-primary"
                                                    >
                                                        <h4 className="text-dark text-xl sm:text-2xl font-bold font-heading leading-9 dark:text-white">50+ Projects</h4>
                                                        <p className="text-dark-text text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                                            Excellence Achieved Through Success
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2 dark:border-[#4B4E56] dark:hover:border-primary"
                                                    >
                                                        <h4 className="text-dark text-xl sm:text-2xl font-bold font-heading leading-9 dark:text-white">26+ Awards</h4>
                                                        <p className="text-dark-text text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                                            Our Dedication to Innovation Wins Understanding
                                                        </p>
                                                    </div>
                                                    <div
                                                        className="p-3 sm:p-4 rounded-xl border border-gray-200 hover:border-primary transition-all duration-700 ease-in-out flex flex-col justify-start items-start gap-2 dark:border-[#4B4E56] dark:hover:border-primary"
                                                    >
                                                        <h4 className="text-dark text-xl sm:text-2xl font-bold font-heading leading-9 dark:text-white">99% Happy Clients</h4>
                                                        <p className="text-dark-text text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                                            Mirrors our Focus on Client Satisfaction
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-1/2 flex justify-center items-center">
                                                <div
                                                    className="w-full max-w-[90%] sm:max-w-[564px] h-auto sm:h-[500px] bg-gray-100 rounded-3xl border border-gray-200 relative dark:bg-dark dark:border-[#4B4E56]"
                                                >
                                                    <div className="w-full h-full relative">
                                                        <Image
                                                            src="/images/about/images-1.jpg"
                                                            alt="about-image"
                                                            width={564}
                                                            height={500}
                                                            className="w-full h-full rounded-3xl object-cover"
                                                        />
                                                        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2 sm:-translate-x-4">
                                                            <Image
                                                                src="/images/about/images-2.jpg"
                                                                alt="about-image"
                                                                width={200}
                                                                height={200}
                                                                className="rounded-3xl object-cover w-[150px] sm:w-[200px]"
                                                            />
                                                            <div
                                                                className="border-primary/10 bg-primary/5 absolute -top-3 sm:-top-5 -left-3 sm:-left-5 -z-10 h-full w-full border backdrop-blur-[6px] dark:border-white/10 dark:bg-white/10"
                                                            ></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="py-12 sm:py-16 relative">
                                <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
                                    <div className="border border-primary/10 dark:border-white/10 rounded-xl shadow-sm hover:border-primary/20 transition-all duration-300 p-4 sm:p-6">
                                        <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-6 sm:gap-8 lg:gap-12">
                                            <div className="w-full lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-last lg:order-first">
                                                <div className="flex justify-center sm:justify-end items-start">
                                                    <Image
                                                        className="rounded-xl object-cover w-full max-w-[200px] sm:max-w-[300px]"
                                                        src="/images/about/image-1.jpg"
                                                        alt="about Us image"
                                                        width={300}
                                                        height={300}
                                                    />
                                                </div>
                                                <div className="flex justify-center sm:justify-start items-start">
                                                    <Image
                                                        className="rounded-xl object-cover w-full max-w-[200px] sm:max-w-[300px]"
                                                        src="/images/about/image-2.jpg"
                                                        alt="about Us image"
                                                        width={300}
                                                        height={300}
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start gap-6 sm:gap-8">
                                                <div className="w-full flex flex-col justify-start items-center lg:items-start gap-3 sm:gap-4">
                                                    <h2
                                                        className="text-dark text-2xl sm:text-3xl lg:text-4xl font-bold font-heading leading-tight text-center lg:text-left dark:text-white"
                                                    >
                                                        Building Stronger Communities through Collaboration and Empowerment
                                                    </h2>
                                                    <p
                                                        className="text-dark-text text-sm sm:text-base leading-relaxed text-center lg:text-left dark:text-gray-400"
                                                    >
                                                        BR, is an IT services provider company in Pakistan, which has skills and expertise to facilitate complex business solutions. The company commenced its business with little resources and small team in 2012 and with the shortest passage of time it got a steep growth in terms of profits, intellectual capital, market access and team of professionals.
                                                    </p>
                                                </div>
                                                <button
                                                    className="w-full sm:w-fit px-4 sm:px-6 py-2 bg-primary hover:bg-primary/80 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] flex justify-center items-center dark:bg-primary dark:hover:bg-primary/80"
                                                >
                                                    <Link href="/support">
                                                        <span className="text-white text-sm sm:text-base font-medium leading-6">Get Started</span>
                                                    </Link>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="team" className="pt-14 sm:pt-16 lg:pt-20">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="wow fadeInUp relative mx-auto mb-8 sm:mb-10 lg:mb-12 text-center" data-wow-delay=".2s">
                                        <span className="title text-lg sm:text-xl font-semibold text-primary">OUR TEAM</span>
                                        <h2 className="font-heading text-dark mt-2 sm:mt-3 mx-auto max-w-[90%] sm:max-w-[570px] text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight dark:text-white">
                                            Meet Our Expert Team
                                        </h2>
                                        <p className="text-dark-text mt-2 sm:mt-3 mx-auto max-w-[90%] sm:max-w-[570px] text-sm sm:text-base leading-relaxed dark:text-gray-400">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis tortor eros. Donec vitae tortor lacus.
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                                        {[
                                            { name: "MUHAMMAD WAQAR", role: "CHIEF EXECUTIVE OFFICER", img: "/images/team/man.jpg", delay: ".2s" },
                                            { name: "ABDUL SAMI QURESHI", role: "CHIEF TECHNOLOGY OFFICER", img: "/images/team/man1.jpg", delay: ".25s" },
                                            { name: "SHAHERYAR MAHMOOD", role: "SOFTWARE ENGINEER", img: "/images/team/man3.jpg", delay: ".3s" },
                                            { name: "ASAD KHAN", role: "SOFTWARE ENGINEER", img: "/images/team/man4.jpg", delay: ".3s" },
                                            { name: "MUHAMMAD SHEHROZ", role: "SOFTWARE ENGINEER", img: "/images/team/man5.jpg", delay: ".3s" },
                                            { name: "WAQAR ALI", role: "SOFTWARE ENGINEER", img: "/images/team/man7.jpg", delay: ".3s" },
                                            { name: "ZUHAIR KHAN", role: "SOFTWARE ENGINEER", img: "/images/team/zuhairkhan.jpeg", delay: ".3s" },
                                            { name: "FAIZAN AHMED KHAN", role: "UI/UX DESIGNER", img: "/images/team/man8.jpg", delay: ".3s" },
                                        ].map((member, index) => (
                                            <div key={index} className="wow fadeInUp text-center" data-wow-delay={member.delay}>
                                                <div className="relative rounded-sm overflow-hidden aspect-square">
                                                    <Image
                                                        src={member.img}
                                                        alt="team member"
                                                        width={400}
                                                        height={400}
                                                        className="w-full h-full object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                                                </div>
                                                <h3 className="font-heading text-dark mt-3 sm:mt-4 text-lg sm:text-xl font-medium dark:text-white">{member.name}</h3>
                                                <p className="text-dark-text text-sm sm:text-base">{member.role}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}