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
import ProfilePicture from '../medias/stephanusdai_profile.png';

export const About = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} id="about" className="border-y-2 border-slate-300 shadow-lg shadow-slate-500 relative isolate px-6 pt-20 lg:px-8 z-30" {...props}>
                <div
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-7xl px-8 pt-8 pb-32 lg:pt-0 lg:pb-0">
                    <div className="items-center max-w-none mx-0 flex flex-col lg:flex-row">
                        <div className="relative shrink-0 max-w-xl lg:max-w-2xl w-full order-2 lg:order-1 mt-16 lg:mt-0">
                            <h3 className="text-lg font-medium tracking-tight text-gray-600 sm:text-2xl">
                                I'm Full-Stack Developer
                            </h3>
                            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                                Stephanus Bagus Saputra
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                My name is Stephanus Bagus Saputra (mandarin: Dai戴 Wie偉 Funk峯). I am a Full-Stack Developer based in Palembang, Indonesia. I've worked in this field since 2017. My expertise primarily consists of Server Management by operating Linux systems in managing Networks (HTTP/FTP/SSH Protocol, OSI and TCP/IP Models, Mail SMTP/IMAP, SOA/Bind and Firewall, etc) and Programming Development using technical skill languages such as Laravel/Yii Framework PHP, React/Vue Javascript, C# .Net Framework, Python, and Kotlin/Java Android.
                            </p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Currently I'm working as Freelancer. However, I am available to be hired to work at The Company.
                            </p>
                        </div>
                        <div className="justify-start mt-0 order-1 lg:order-2">
                            <img src={ProfilePicture} className="max-w-sm lg:max-w-full w-100" />
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                        clipPath:
                            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </section>
        </>
    );
});

export default About;