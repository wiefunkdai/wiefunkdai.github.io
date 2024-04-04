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
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

/**
 * Import Media Image and Vector
 */
import PatalLogo from '../medias/groups/palembangdigital.jpg';
import CCPalcomLogo from '../medias/groups/clubcodingpalcom.jpg';
import DPAGBILogo from '../medias/groups/dpagbi.png';

export const Organization = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <>
            <section ref={ref} id="organization" className="bg-orange-700 relative px-8 py-32 lg:px-16 min-h-screen z-10" {...props}>
                <div className="max-w-2xl mx-auto px-4 border-b-2 pb-1 border-amber-600 text-center">
                    <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">Organization</h1>
                    <p className="mt-4 lg:mt-6 pb-2 leading-8 text-2xl text-slate-100">Activities of community service organizations.</p>
                </div>
                <div className="mt-16 px-4 max-w-4xl mx-auto">
                    <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 max-w-4xl sm:max-w-none mx-auto lg:mx-0 mt-16 md:mt-24 auto-rows-fr list-none" role="list">
                        <li className="w-full p-6 bg-amber-500/[1] border border-amber-700 rounded-lg shadow">
                            <div className="flex flex-nowrap flex-cols grid-cols-2 items-start justify-between">
                                <img src={PatalLogo} className="w-10 h-10 text-lime-900/[1] mb-3 shrink-0 rounded-full" />
                                <time className="text-lime-900/[1] leading-6 text-xs lg:text-sm p-0 flex-none order-1 lg:order-2">2024<sup>th</sup> - present</time>
                            </div>
                            <h5 className="mb-0 text-base font-normal text-lime-900/[1]">Web Programmer</h5>
                            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-lime-900/[1]">Palembang Digital</h3>
                            <Link to={'https://palembangdigital.org'} className="inline-flex font-medium items-center text-gray-700/[1] hover:underline">
                                Visit site to details
                                <ArrowTopRightOnSquareIcon className="mt-1 w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
                            </Link>
                        </li>
                        <li className="w-full p-6 bg-amber-500/[1] border border-amber-700 rounded-lg shadow">
                            <div className="flex flex-nowrap flex-cols grid-cols-2 items-start justify-between">
                                <img src={CCPalcomLogo} className="w-10 h-10 text-lime-900/[1] mb-3 shrink-0 rounded-full" />
                                <time className="text-lime-900/[1] leading-6 text-xs lg:text-sm p-0 flex-none order-1 lg:order-2">2024<sup>th</sup> - present</time>
                            </div>
                            <h5 className="mb-0 text-base font-normal text-lime-900/[1]">Leader of Club</h5>
                            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-lime-900/[1]">Club Coding Palcomtech</h3>
                            <Link to={'https://palcomtech.ac.id'} className="inline-flex font-medium items-center text-gray-700/[1] hover:underline">
                                by Palembang Palcomtech Institute
                                <ArrowTopRightOnSquareIcon className="-ml-0.5 mt-1 w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
                            </Link>
                        </li>
                        <li className="w-full p-6 bg-amber-500/[1] border border-amber-700 rounded-lg shadow">
                            <div className="flex flex-nowrap flex-cols grid-cols-2 items-start justify-between">
                                <img src={DPAGBILogo} className="w-10 h-10 text-lime-900/[1] mb-3 shrink-0 rounded-full" />
                                <time className="text-lime-900/[1] leading-6 text-xs lg:text-sm p-0 flex-none order-1 lg:order-2">2014<sup>th</sup> - 2015<sup>th</sup></time>
                            </div>
                            <h5 className="mb-0 text-base font-normal text-lime-900/[1]">Humas & Media DPA GBI</h5>
                            <h3 className="mb-3 text-2xl font-semibold tracking-tight text-lime-900/[1]">Departemen Pemuda & Anak GBI</h3>
                            <Link to={'https://www.dpagbi.net'} className="inline-flex font-medium items-center text-gray-700/[1] hover:underline">
                                by Gereja Bethel Indonesia
                                <ArrowTopRightOnSquareIcon className="-ml-0.5 mt-1 w-4 h-4 ms-2.5 rtl:rotate-[270deg]" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    );
});

export default Organization;