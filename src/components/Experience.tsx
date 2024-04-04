/**
 * Portofolio StephanusDai Web packages.
 * 
 * @author    : Stephanus Bagus Saputra,
 *              ( 戴 Dai 偉 Wie 峯 Funk )
 * @email     : wiefunk@stephanusdai.web.id
 *              teams@sdailover.com
 * @contact   : https://t.me/wiefunkdai
 * @support   : https://opencollective.com/wiefunkdai
 * @link      : https://www.stephanusdai.web.id
 *              https://www.sdailover.com
 * @copyright : Copyright (c) ID 2024 Stephanus Bagus Saputra. All rights reserved.
 * @license   : https://www.sdailover.com/license.html
 * This software using React JS Framework has released under the terms of the BSD License.
 */
import React from 'react';

export const Experience = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} id="experience" className="bg-white relative px-8 py-32 lg:px-16 min-h-screen z-10" {...props}>
                <div className="px-4 border-b-2 pb-1 border-gray-300">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Experience</h1>
                    <p className="ml-1 mt-4 max-w-2xl lg:mt-6 text-lg leading-8 text-gray-600">Work History with experience in the IT field.</p>
                </div>
                <div className="mt-16 px-4 max-w-2xl mx-auto">
                    <ul className="list-none m-0 p-0 space-y-6" role="list">
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <div className="w-1.5 h-1.5 rounded-full ring-1 ring-gray-300/[1] bg-gray-100/[1] ring-offset-0" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Full-Stack Developer</span>
                                        &nbsp;-&nbsp;South Sumatera
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2024<sup>th</sup> - present</time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Freelancer</h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Successfully completed multiple freelance projects specializing in PHP web development for clients across various industries, 
                                        delivering high-quality solutions tailored to clients' needs, and delivering end-to-end solutions from concept to deployment.</li>
                                    <li>Developed custom web applications, websites, content management systems (CMS), e-commerce platforms tailored to clients' specific requirements using a wide range of technologies, 
                                        including HTML5, CSS3, JavaScript, Vue.js, React and Next.js, and dynamic websites using PHP frameworks such as Laravel and Yii2.</li>
                                    <li>Worked closely with clients to understand their business needs, goals, and user requirements, and translated them into technical specifications, wireframes, and mockups.</li>
                                    <li>Designed and implemented scalable and maintainable PHP code and implemented responsive and user-friendly user interfaces (UI) and user experiences (UX) 
                                        to enhance usability and engagement, adhering to coding standards, design patterns, and security practices.</li>
                                    <li>Integrated third-party APIs and services, including payment gateways, social media platforms, and APIs for data retrieval and processing, and content management systems (CMS), to extend the functionality of web applications and websites.</li>
                                    <li>Implemented authentication and authorization mechanisms, user management systems, and role-based access controls (RBAC) to ensure data security and user privacy.</li>
                                    <li>Implemented backend services, RESTful APIs, and databases MySQL to support frontend functionality, data storage, and retrieval.</li>
                                    <li>Developed database-driven applications, leveraging MySQL and other relational databases for data storage, retrieval, and manipulation.</li>
                                    <li>Utilized version control systems (Git, GitHub) for source code management, collaboration, and version tracking, ensuring transparency and accountability throughout the development process.</li>
                                    <li>Followed agile/scrum methodologies for project management, including iterative development, sprint planning, backlog grooming, and regular client communication and updates.</li>
                                    <li>Managed project timelines, budgets, and deliverables, ensuring projects were completed on time and within budget while maintaining high-quality standards and client satisfaction.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <div className="w-1.5 h-1.5 rounded-full ring-1 ring-gray-300/[1] bg-gray-100/[1] ring-offset-0" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">IT Officer</span>
                                        &nbsp;-&nbsp;South Sumatera
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2017<sup>th</sup> - 2022<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">PT Sinar Megah Sentosa</h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Designed and developed scalable and efficient backend solutions for web applications, focusing on performance, reliability, and security.</li>
                                    <li>Implemented RESTful APIs and web services using languages such as Yii2 Framework of PHP to facilitate communication between frontend and backend systems.</li>
                                    <li>Utilized relational and non-relational databases MySQL and Firebird to store and manage data, optimizing database queries and schema designs for improved performance.</li>
                                    <li>Managed the organization's IT infrastructure, including servers, networks, and workstations, to ensure smooth operation and optimal performance.</li>
                                    <li>Provided technical support to employees, resolving hardware, software, and network issues in a timely manner to minimize downtime and disruptions.</li>
                                    <li>Installed, configured, and maintained hardware and software systems, including operating systems, productivity software, and security tools.</li>
                                    <li>Conducted regular backups of critical data and implemented disaster recovery procedures to safeguard against data loss and system failures.</li>
                                    <li>Monitored network traffic, security logs, and system alerts to identify and address potential security threats and vulnerabilities.</li>
                                    <li>Assisted in the planning and implementation of IT projects, including system upgrades, migrations, and deployments, to support business objectives.</li>
                                    <li>Liaised with subsidiaries and external service providers for procurement, maintenance, and support of IT equipment and services.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <div className="w-1.5 h-1.5 rounded-full ring-1 ring-gray-300/[1] bg-gray-100/[1] ring-offset-0" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">IT Support Specialist</span>
                                        &nbsp;-&nbsp;Central Jakarta
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2015<sup>th</sup> - 2016<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">PT Dutaswara Berkah Pratama (Masterpiece KTV)</h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Provided technical support and troubleshooting for karaoke systems, audiovisual equipment, and computer hardware and software.</li>
                                    <li>Ensured the smooth operation of karaoke systems, including managing song libraries, updating software, and resolving technical issues during customer sessions.</li>
                                    <li>Conducted routine maintenance and upgrades of karaoke machines and audiovisual equipment to optimize performance and reliability.</li>
                                    <li>Assisted customers with setting up and using karaoke systems, troubleshooting technical problems, and providing guidance on song selection and operation.</li>
                                    <li>Collaborated with karaoke hosts, DJs, and venue staff to coordinate technical setup for events and parties, ensuring a seamless entertainment experience for customers.</li>
                                    <li>Maintained inventory of IT equipment and accessories, and liaised with vendors for procurement and repairs as needed.</li>
                                    <li>Provided training and technical guidance to staff members on operating karaoke systems and troubleshooting common issues.</li>
                                    <li>Supported cross-working teams in the field of graphic design to increase insight and knowledge.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <div className="w-1.5 h-1.5 rounded-full ring-1 ring-gray-300/[1] bg-gray-100/[1] ring-offset-0" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Network Administrator</span>
                                        &nbsp;-&nbsp;South Jakarta
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2014<sup>th</sup> - 2015<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">PT Mahadika Putra Mahkota</h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Managed and maintained the company's network infrastructure, including routers, switches, firewalls, and wireless access points.</li>
                                    <li>Configured and optimized network devices to ensure high performance, reliability, and security.</li>
                                    <li>Monitored network traffic, performance, and security alerts by operating the Mikrotik router network system.</li>
                                    <li>Implemented and maintained network security measures, including firewalls, mangle structure settings, and VPN.</li>
                                    <li>Conducted regular backups and disaster recovery planning to safeguard critical network data and ensure business continuity.</li>
                                    <li>Collaborated with cross-functional teams to troubleshoot network issues and implement solutions in a timely manner.</li>
                                    <li>Documented network configurations, procedures, and troubleshooting steps for knowledge sharing and future reference.</li>
                                    <li>Supported cross-working teams in the field of graphic design to increase insight and knowledge.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <div className="w-1.5 h-1.5 rounded-full ring-1 ring-gray-300/[1] bg-gray-100/[1] ring-offset-0" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">CEO & Founder</span>
                                        &nbsp;-&nbsp;Central Jakarta
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2012<sup>th</sup> - 2013<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">CV Garuda Permata Saputra</h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Co-founded and led a startup specializing in the development and distribution of innovative computer software and hardware solutions for businesses and consumers.</li>
                                    <li>Established strategic partnerships with hardware manufacturers, software vendors, and distribution channels to expand product reach and market presence.</li>
                                    <li>Managed all aspects of business operations, including product management, sales and marketing, finance, human resources, and customer support.</li>
                                    <li>Developed and implemented comprehensive business strategies and growth plans, aligning with company vision, goals, and market trends.</li>
                                    <li>Maintained strong relationships with customers, partners, and stakeholders, gathering feedback, addressing concerns, and identifying opportunities for product improvement and innovation.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
});

export default Experience;