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
import { Dialog, Transition } from '@headlessui/react';
import { MagnifyingGlassCircleIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

/**
 * Import Media Image and Vector
 */
import PalcomLogo from '../medias/schools/palcomtech-institute.jpg';
import CevestLogo from '../medias/schools/bblkcevest-kemnaker.jpg';
import BSILogo from '../medias/schools/binasaranainformatika-university.jpg';
import VinamaLogo from '../medias/schools/bblkcevest-kemnaker.jpg';
import PalcomImage01 from '../medias/grades/palcomtech-value.jpg';
import PalcomImage02 from '../medias/grades/palcomtech-letter.jpg';
import CevestImage01 from '../medias/grades/bblkcevest-cert.jpg';
import CevestImage02 from '../medias/grades/bblkcevest-unitlist.jpg';
import VinamaImage01 from '../medias/grades/vinama-cert.jpg';
import VinamaImage02 from '../medias/grades/vinama-value.jpg';

/**
 * Global Variables
 */
const palcomtechCerts = [
    {
        title: 'Palcomtech Student Affairs Transcript',
        image: PalcomImage01
    },
    {
        title: 'Proof of Palcomtech Campus Studentship',
        image: PalcomImage02
    }
];

const bblkCevestCerts = [
    {
        title: 'Cevest Bekasi Training Completion Certification',
        image: CevestImage01
    },
    {
        title: 'List of Competency Units achieved during Training',
        image: CevestImage02
    }
];

const vinamaSchoolCerts = [
    {
        title: 'Vocational High School Student Graduation Certificate',
        image: VinamaImage01
    },
    {
        title: 'List of Vocational High School Students\' Graduation Scores',
        image: VinamaImage02
    }
];


interface GalleryModalProps {
    [index: number]: { title: string; image: string };
    length: number;
};

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Education = React.forwardRef<HTMLElement>((props, ref) => {
    let [indexGalleryModal, setIndexGalleryModal] = React.useState(0);
    let [totalGalleryModal, setTotalGalleryModal] = React.useState(0);
    let [isLoadingModal, setIsLoadingModal] = React.useState(false);
    let [isOpenGalleryModal, setIsOpenGalleryModal] = React.useState(false);
    let [captionGalleryModal, setCaptionGalleryModal] = React.useState('');
    let [itemsGalleryModal, setItemsGalleryModal] = React.useState<GalleryModalProps>([]);
    let [titleGalleryModal, setTitleGalleryModal] = React.useState('');
    let [imageGalleryModal, setImageGalleryModal] = React.useState('');

    const hideLoadingModal = () => { setIsLoadingModal(false); }
    const showLoadingModal = () => { setIsLoadingModal(true); }
    const closeGalleryModal = () => { setIsOpenGalleryModal(false); hideLoadingModal(); }
    const openGalleryModal = () => { setIsOpenGalleryModal(true); }

    const openPalcomtechCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Palcomtech Bachelor\'s Degree in Information Systems');
        loadGalleryModal(0, palcomtechCerts);
        openGalleryModal();
    }

    const openCevestCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Cevest Profession\'s Training in Client-Server Programming');
        loadGalleryModal(0, bblkCevestCerts);
        openGalleryModal();
    }

    const openVinamaCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Vinama2 Vocational High School in Computer Network Engineering');
        loadGalleryModal(0, vinamaSchoolCerts);
        openGalleryModal();
    }      

    const resetGaleryModal = () => {
        setTotalGalleryModal(0);
        setTitleGalleryModal('');
        setImageGalleryModal('');
        setIndexGalleryModal(0);
        setItemsGalleryModal([]);
    }

    const prevGalleryModal = () => {
        const currentIndex  = indexGalleryModal - 1;
        if (currentIndex >= 0 && currentIndex < totalGalleryModal) {
            loadGalleryModal(currentIndex, itemsGalleryModal);
        }
    }

    const nextGalleryModal = () => {
        const currentIndex  = indexGalleryModal + 1;
        if (currentIndex >= 0 && currentIndex < totalGalleryModal) {
            loadGalleryModal(currentIndex, itemsGalleryModal);
        }
    }

    const loadGalleryModal = (index: number, items: GalleryModalProps) => {
        showLoadingModal();
        if (items != null) {
            const totalImage = items.length;
            const imageName = items[index].title;
            const imageLink = items[index].image;
            setTimeout(() => {
                hideLoadingModal();
                setTotalGalleryModal(totalImage);
                setTitleGalleryModal(imageName);
                setImageGalleryModal(imageLink);
                setIndexGalleryModal(index);
                setItemsGalleryModal(items);
            }, 300);
        }
    }

    return (
        <>
            <section ref={ref} id="education" className="bg-white relative px-8 py-32 lg:px-16 min-h-screen z-10" {...props}>
                <div className="px-4 border-b-2 pb-1 border-gray-300">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Education</h1>
                    <p className="ml-1 mt-4 max-w-2xl lg:mt-6 text-lg leading-8 text-gray-600">Formal education that supports personal skills.</p>
                </div>
                <div className="mt-16 px-4 max-w-2xl mx-auto">
                    <ul className="list-none m-0 p-0 space-y-6" role="list">
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>                       
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <img 
                                    src={PalcomLogo}
                                    className="bg-gray-50/[1] rounded-full block flex-none align-middle max-w-full relative mt-3 w-full h-full text-white/[1] rounded-full ring-1 ring-gray-300/[1] ring-offset-0 p-0.5"
                                />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Information Systems</span>
                                        &nbsp;-&nbsp;Bachelor's degree
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2022<sup>th</sup> - 2024<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Palcomtech Palembang Institute <span className="text-gray-500 font-normal text-sm">( South Sumatera, Indonesia )</span></h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    IPK: 3.79<br />
                                </p>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Comprehensive coursework in Information Systems Analysis, Database Management, Programming Fundamentals, and Business Process Management.</li>
                                    <li>Hands-on experience with various technologies including PHP, Python, MySQL, and UI/UX.</li>
                                    <li>Developed proficiency in analyzing business requirements and designing practical solutions to enhance organizational efficiency.</li>
                                    <li>Completed projects focusing on systems analysis, database design, and process optimization, demonstrating strong problem-solving and analytical skills.</li>
                                    <li>Actively engaged in extracurricular activities such as Information Systems Club and participated in hackathons to apply classroom knowledge in real-world scenarios.</li>
                                    <li>Pursuing relevant certifications to complement academic studies and stay updated with emerging technologies in the field.</li>
                                </ul>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openPalcomtechCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Grade Transcript
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>                       
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <img 
                                    src={CevestLogo}
                                    className="bg-gray-50/[1] rounded-full block flex-none align-middle max-w-full relative mt-3 w-full h-full text-white/[1] rounded-full ring-1 ring-gray-300/[1] ring-offset-0 p-0.5"
                                />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Client-Server Programming</span>
                                        &nbsp;-&nbsp;Programmer Profession
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2017<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">BBLKN Cevest Bekasi <span className="text-gray-500 font-normal text-sm">( West Java, Indonesia )</span></h3>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Analyze software scalability</li>
                                    <li>Identify the required Library, Component or Framework</li>
                                    <li>Implementing Entity Design and Interconnection between Entities</li>
                                    <li>Designing the application architecture</li>
                                    <li>Use program specifications</li>
                                    <li>Implement network programming</li>
                                    <li>Implement Real Time programming</li>
                                    <li>Implement Parallel programming</li>
                                    <li>Implement the application logging feature</li>
                                    <li>Apply problem solving into subroutines</li>
                                    <li>Apply methods and practices of reusable subroutines</li>
                                    <li>Compile other functions, files or programming resources in a neat organization</li>
                                    <li>Implement object-oriented programming</li>
                                    <li>Using libraries or pre-existing components</li>
                                    <li>Using SQL</li>
                                    <li>Implement database access</li>
                                    <li>Create a program code document</li>
                                </ul>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openCevestCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Graduation Certificate
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-gray-200/[1]" />
                            </div>                       
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <img 
                                    src={BSILogo}
                                    className="bg-gray-50/[1] rounded-full block flex-none align-middle max-w-full relative mt-3 w-full h-full text-white/[1] rounded-full ring-1 ring-gray-300/[1] ring-offset-0 p-0.5"
                                />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Computer Engineering</span>
                                        &nbsp;-&nbsp;Associate Degree
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2012<sup>th</sup> - 2013<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Bina Sarana Informatika University <span className="text-gray-500 font-normal text-sm">( Central Jakarta, Indonesia )</span></h3>
                                <ul className="list-disc px-4 mt-1 mb-4 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Comprehensive coursework covering topics such as Computer Architecture, Embedded Systems, and Software Engineering.</li>
                                    <li>Proficient in programming languages including C, C++, and Java.</li>
                                    <li>Proficient in Linux operating system fundamentals, including file systems, user management, and shell scripting.</li>
                                    <li>Hands-on experience with securing Linux-based systems against common threats such as malware, unauthorized access, and data breaches.</li>
                                    <li>Completed projects involving the configuration and hardening of Linux servers and workstations, utilizing tools such as SELinux, iptables, and OpenSSH.</li>
                                </ul>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">          
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-white/[1]">
                                <img 
                                    src={VinamaLogo}
                                    className="bg-gray-50/[1] rounded-full block flex-none align-middle max-w-full relative mt-3 w-full h-full text-white/[1] rounded-full ring-1 ring-gray-300/[1] ring-offset-0 p-0.5"
                                />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-gray-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-gray-500/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-gray-900/[1] font-medium text-sm lg:text-base">Computer Network Engineering</span>
                                        &nbsp;-&nbsp;Vocational School Graduate's  Degree
                                    </div>
                                    <time className="text-gray-500/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2008<sup>th</sup> - 2011<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-gray-900">Vinama 2 Vocational High School <span className="text-gray-500 font-normal text-sm">( West Java, Indonesia )</span></h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    Average Value: 6.4
                                </p>
                                <ul className="list-disc px-4 mt-1 max-w-2xl text-sm leading-6 text-gray-500">
                                    <li>Specialized coursework in Computer Repair and Maintenance, Routing and Switching, Network Management and Security.</li>
                                    <li>Proficient in configuring and troubleshooting network devices such as routers, switches, and firewalls.</li>
                                    <li>Hands-on experience with simulation tools such as Cisco Packet Tracer and PC Building Simulator.</li>
                                    <li>Developed strong understanding of network protocols including TCP/IP, DHCP, DNS, and VPN.</li>
                                    <li>Completed projects involving the design and implementation of LAN/WAN infrastructures, demonstrating ability to analyze network requirements and propose scalable solutions.</li>
                                </ul>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openVinamaCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Graduation Certificate
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <Transition appear show={isOpenGalleryModal} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeGalleryModal}>
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md md:max-w-2xl lg:max-w-screen-lg transform overflow-hidden rounded-2xl bg-white py-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title as="div" className="px-6 border-b border-gray-100 pb-5">
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900 pr-8 mt-1">{captionGalleryModal}</h3>
                                        <button
                                            type="button"
                                            className="inline-flex justify-end text-sm rounded-full border border-transparent bg-gray-100 p-0 text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none hover:ring-2 hover:ring-gray-100 hover:ring-offset-2 absolute top-6 right-6"
                                            onClick={closeGalleryModal}
                                        >
                                            <XCircleIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                                        </button>
                                    </Dialog.Title>
                                    <Dialog.Description as="div" className="flex flex-wrap flex-row border-b border-gray-100 mx-auto w-full max-w-full">
                                        <div className="flex relative bg-black items-center justify-center box-border w-full lg:w-2/3 p-0" style={{maxHeight: 'calc(50vh + 176px)', flex:'0 0 auto'}}>
                                            <div className="bg-transparent align-baseline text-[100%] border-0 p-0 m-0">
                                                <div className="flex">
                                                    <img className="bg-cover max-w-full object-center object-cover" 
                                                        style={{maxHeight: 'calc(50vh + 176px)', backgroundPosition: '50%'}}
                                                        src={imageGalleryModal}
                                                        alt={titleGalleryModal}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col justify-between bg-transparent w-full lg:w-1/3 box-border p-6" style={{flex: '0 0 auto'}}>
                                            <div className="text-gray-700 font-semibold">
                                                {titleGalleryModal}
                                            </div>
                                            <div className={classNames(
                                                    totalGalleryModal<=1 ? 'hidden': 'flex',
                                                    'justify-between items-center bg-transparent align-baseline border-t border-gray-100/[1] p-0 m-0 pt-2 mt-4'
                                                )}
                                            >
                                                <span className="text-base font-semibold text-gray-500">{indexGalleryModal+1} from {totalGalleryModal}</span>
                                                <div className="flex grid-cols-2 gap-x-2">
                                                    <button onClick={prevGalleryModal} className={classNames(
                                                            indexGalleryModal==0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 cursor-pointer',
                                                            'inline-flex max-w-96 overflow-hidden align-middle text-center justify-center font-semibold box-border items-center rounded py-2 px-5'
                                                        )}
                                                    >
                                                        <ChevronLeftIcon className="-ml-0.5 mr-1 w-6 h-6 shrink-0 font-semibold" />
                                                        Prev
                                                    </button>
                                                    <button onClick={nextGalleryModal} className={classNames(
                                                            indexGalleryModal==(totalGalleryModal-1) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 cursor-pointer',
                                                            'inline-flex max-w-96 overflow-hidden align-middle text-center justify-center font-semibold box-border items-center rounded py-2 px-5'
                                                        )}
                                                    >
                                                        Next
                                                        <ChevronRightIcon className="-mr-0.5 ml-1 w-6 h-6 shrink-0 font-semibold" />                                                        
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </Dialog.Description>
                                    <div hidden={!isLoadingModal} className="absolute inset-0 items-center bg-gray-800/[0.5]">
                                        <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
});

export default Education;