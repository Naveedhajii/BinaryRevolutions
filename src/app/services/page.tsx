'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';

interface Service {
    id: number;
    title: string;
    description: string;
    color: string; // Tailwind color class for the background and border
}

export default function Services() {
    const services: Service[] = [
        {
            id: 1,
            title: 'Custom Web-Based Product Development',
            description:
                'Deliver tailored online solutions that extend your reach, generate new revenue streams, and enhance customer engagement.',
            color: 'indigo-500',
        },
        {
            id: 2,
            title: 'Business Process Automation',
            description:
                'Transform manual or legacy workflows into streamlined, web-based systems to improve operational efficiency and accuracy.',
            color: 'purple-500',
        },
        {
            id: 3,
            title: 'Legacy System Modernization',
            description:
                'Rebuild or upgrade outdated software systems using modern technologies for better performance, scalability, and integration.',
            color: 'blue-400',
        },
        {
            id: 4,
            title: 'Information Websites & Portals',
            description:
                'Design and develop dynamic, user-friendly websites and portals that elevate your online presence and meet evolving user expectations.',
            color: 'yellow-400',
        },
        {
            id: 5,
            title: 'Online Community & Portal Solutions',
            description:
                'Build engaging digital platforms for users to interact, collaborate, and stay connected—tailored for forums, support systems, or niche communities.',
            color: 'green-500',
        },
    ];

    return (
        <>
            <div>
                <Navbar />
                <main className="min-h-screen bg-white dark:bg-dark pt-[56px] sm:pt-[64px] lg:pt-[80px] fadeIn">
                    <section id="features" className="pt-14 sm:pt-20 lg:pt-[130px] fadeIn">
                        <div className="container mx-auto px-4 xl:container">
                            <div
                                className="wow fadeInUp relative mx-auto mb-12 pt-6 text-center md:mb-20 lg:pt-16"
                                data-wow-delay=".2s"
                            >
                                <span className="title">SERVICES</span>
                                <h2 className="font-heading text-dark mb-5 text-3xl font-semibold sm:text-4xl md:text-[50px] md:leading-[60px] dark:text-white">
                                    Explore Our Services
                                </h2>
                            </div>
                            <div className="relative overflow-hidden bg-white dark:bg-dark pt-16 pb-32 space-y-24">
                                <div className="relative">
                                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
                                            <div>
                                                <div className="mt-6">
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
                                                        Developing high performance applications since 2012.
                                                    </h2>
                                                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                                                        Whether you seek to optimize your business by automation, or open new revenue streams by creating something completely new.
                                                        Whether it is an innovative idea changing the world or craving a new niche in a crowded marketplace competing against established players. We are here to help you to make it happen.
                                                        Our team has a cross-platform, multi-industry experience of building products that work on different devices.
                                                        We develop, upgrade, maintain and support web-based applications and database-driven websites
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-12 sm:mt-16 lg:mt-0">
                                            <div className="pl-0 md:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                                <img
                                                    loading="lazy"
                                                    width="647"
                                                    height="486"
                                                    className="w-full rounded-xl shadow-2xl lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                                                    style={{ color: 'transparent' }}
                                                    src="/images/services/image-2.jpg"
                                                    alt="img1"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
                                        <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
                                            <div>
                                                <div className="mt-6">
                                                    <h2 className="text-3xl font-bold tracking-tight text-gray-800 dark:text-white">
                                                        We can help you to:
                                                    </h2>
                                                    <ul className="mt-4 text-lg text-gray-600 dark:text-gray-300 list-disc list-inside">
                                                        <li>Build new systems from scratch.</li>
                                                        <li>Maintain, extend, and improve existing databases, software, or web applications.</li>
                                                        <li>Rebuild legacy software systems using modern technologies for greater reliability and flexibility.</li>
                                                        <li>Migrate paper-based or disjointed processes into a single, integrated web-based application.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-12 sm:mt-16 lg:mt-0">
                                            <div className="pl-0 md:pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
                                                <img
                                                    loading="lazy"
                                                    width="647"
                                                    height="486"
                                                    className="w-full rounded-xl shadow-xl lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                                                    style={{ color: 'transparent' }}
                                                    src="/images/services/image-3.jpg"
                                                    alt="Sentiment Analysis"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="services" className="py-16 fadeIn">
                        <div className="container mx-auto px-4 xl:container">
                            <div className="w-full">
                                <h2 className="mb-12 text-center text-2xl text-gray-800 dark:text-gray-100 font-semibold">
                                    We can deliver a wide range of web and mobile solutions
                                </h2>
                                <div className="flex flex-col w-full mb-10 sm:flex-row sm:gap-6">
                                    {services.slice(0, 2).map((service, index) => (
                                        <div
                                            key={service.id}
                                            className="w-full mb-10 sm:mb-0 sm:w-1/2"
                                            data-wow-delay={`.${2 + index * 0.05}s`}
                                        >
                                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                                <span
                                                    className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${service.color} rounded-lg`}
                                                ></span>
                                                <div
                                                    className={`relative h-full p-5 bg-white dark:bg-gray-900 border-2 border-${service.color} rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                                                >
                                                    <div className="flex items-center -mt-1">
                                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white font-heading">
                                                            {service.title}
                                                        </h3>
                                                    </div>
                                                    <p className={`mt-3 mb-1 text-xs font-medium text-${service.color} uppercase`}>
                                                        ------------
                                                    </p>
                                                    <p className="mb-2 text-gray-600 dark:text-gray-300 text-base">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col w-full mb-5 sm:flex-row sm:gap-6">
                                    {services.slice(2).map((service, index) => (
                                        <div
                                            key={service.id}
                                            className="w-full mb-10 sm:mb-0 sm:w-1/2"
                                            data-wow-delay={`.${2 + (index + 2) * 0.05}s`}
                                        >
                                            <div className="relative h-full ml-0 mr-0 sm:mr-10">
                                                <span
                                                    className={`absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-${service.color} rounded-lg`}
                                                ></span>
                                                <div
                                                    className={`relative h-full p-5 bg-white dark:bg-gray-900 border-2 border-${service.color} rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                                                >
                                                    <div className="flex items-center -mt-1">
                                                        <h3 className="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white font-heading">
                                                            {service.title}
                                                        </h3>
                                                    </div>
                                                    <p className={`mt-3 mb-1 text-xs font-medium text-${service.color} uppercase`}>
                                                        ------------
                                                    </p>
                                                    <p className="mb-2 text-gray-600 dark:text-gray-300 text-base">
                                                        {service.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </>
    );
}