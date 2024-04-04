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

export const Contact = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} id="contact" className="bg-gray-900/[1] isolate relative px-8 lg:px-16 min-h-screen border-t-2 border-gray-900 shadow-2xl shadow-gray-900 z-10" {...props}>
                <div className="max-w-7xl mx-auto">
                    <div className="static px-6 pt-24 pb-20 sm:pt-32 lg:py-48 lg:px-8">
                        <div className="max-w-2xl lg:max-w-none mx-auto lg:m-0">
                            <div className="-z-10 left-0 inset-y-0 absolute ring-white/[0.2] ring ring-offset-1 ring-offset-black w-full overflow-hidden">
                                <svg className="absolute block align-middle inset-0 w-full h-full stroke-gray-700" style={{'WebkitMaskImage': 'radial-gradient(100% 100% at top right,white,transparent)', 'maskImage': 'radial-gradient(100% 100% at top right,white,transparent)'}} aria-hidden="true"><defs><pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1" patternUnits="userSpaceOnUse"><path d="M130 200V.5M.5 .5H200" fill="none"></path></pattern></defs><svg x="100%" y="-1" className="overflow-visible fill-gray-800/[0.2]"><path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path></svg><rect width="100%" height="100%" strokeWidth="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"></rect></svg>
                                <div className="blur-3xl absolute" aria-hidden="true">
                                    <div className="mi te amj amp ano bay" style={{'clipPath': 'polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)'}} />
                                </div>
                            </div>
                            <div className="max-w-2xl mx-auto lg:mx-0">
                                <h2 className="text-slate-100/[1] tracking-tight font-semibold text-3xl m-0">Contact Person</h2>
                                <p className="ml-1 mt-4 max-w-2xl lg:mt-6 text-lg leading-8 text-slate-300">Thank you for visiting my website and considering my services! Whether you have a project in mind, a question about my work, hiring requests to work, or just want to say hello, I'd love to hear from you. Please feel free to reach out using any of the methods below:</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-none lg:mx-0 sm:gap-y-16 leading-7 text-base gap-8 max-w-2xl mt-16 mx-auto">
                                <div>
                                    <h3 className="text-slate-100/[1] font-semibold pl-6 border-l border-amber-600/[1] m-0">
                                        Location
                                    </h3>
                                    <address className="not-italic text-slate-300/[1] pl-6 pt-2 pl-6 font-normal border-l border-gray-500/[1] m-0">
                                        <p className="m-0">Palembang City 30164</p>
                                        <p className="m-0">South Sumatera, Indonesia</p>
                                    </address>
                                </div>
                                <div>
                                    <h3 className="text-slate-100/[1] font-semibold pl-6 border-l border-amber-600/[1] m-0">
                                        Email
                                    </h3>
                                    <div className="text-slate-300/[1] pl-6 pt-2 pl-6 font-normal border-l border-gray-500/[1] m-0">
                                        <p className="m-0">wiefunk[at]stephanusdai.web.id</p>
                                        <p className="m-0">For business or work messages</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-slate-100/[1] font-semibold pl-6 border-l border-amber-600/[1] m-0">
                                        Phone
                                    </h3>
                                    <div className="text-slate-300/[1] pl-6 pt-2 pl-6 font-normal border-l border-gray-500/[1] m-0">
                                        <p className="m-0">(+62) 896-27-88-66-99</p>
                                        <p className="m-0">Only Whatsapp Messenger</p>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-slate-100/[1] font-semibold pl-6 border-l border-amber-600/[1] m-0">
                                        Sosmed
                                    </h3>
                                    <div className="text-slate-300/[1] pl-6 pt-2 pl-6 font-normal border-l border-gray-500/[1] m-0">
                                        <p className="m-0">@wiefunkdai</p>
                                        <p className="m-0">Telegram, Facebook, etc..</p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-slate-300/[1] mt-8">I look forward to hearing from you and discussing how I can help bring your project to life!</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
});

export default Contact;