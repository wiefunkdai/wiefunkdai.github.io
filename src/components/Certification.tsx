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
import { FireIcon, MagnifyingGlassCircleIcon, AcademicCapIcon, TrophyIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

/**
 * Import Media Image and Vector
 */
import BNSPImage01 from '../medias/certs/bnsp-certificate.jpg';
import GameLabImage01 from '../medias/certs/gamelab-basicjavaprogramming.jpg';
import GameLabImage02 from '../medias/certs/gamelab-skilledinusingvisualcode.jpg';
import DicodingImage01 from '../medias/certs/dicoding-gettingstartedprogramminginpython.jpg';
import DicodingImage02 from '../medias/certs/dicoding-learnbasicdatavisualization.jpg';
import DicodingImage03 from '../medias/certs/dicoding-learnbasicdatascience.jpg';
import DicodingImage04 from '../medias/certs/dicoding-learnmachinelearningforbeginners.jpg';
import PatalImage01 from '../medias/certs/palembangdigital-createawebsitewithoutcodingusingframerandwordpress.jpg';

/**
 * Global Variables
 */
const bnspCerts = [
    {
        title: 'Certificate of Competence in Client-Server Programmer',
        image: BNSPImage01
    }
];

const gameLabCerts = [
    {
        title: 'Pemograman Dasar Java ( Basic Java Programming )',
        image: GameLabImage01
    },
    {
        title: 'Terampil Menggunakan Visual Code ( Skilled in Using Visual Code )',
        image: GameLabImage02
    }
];

const dicodingCerts = [
    {
        title: 'Memulai Pemrograman dengan Python ( Getting Started Programming in Python )',
        image: DicodingImage01
    },
    {
        title: 'Belajar Dasar Visualisasi Data ( Learn Basic Data Visualization )',
        image: DicodingImage02
    },
    {
        title: 'Belajar Dasar Data Science ( Learn Basic Data Science )',
        image: DicodingImage03
    },
    {
        title: 'Belajar Machine Learning untuk Pemula ( Learn Machine Learning for Beginners )',
        image: DicodingImage04
    }
];

const palembangDigitalCerts = [
    {
        title: 'Membuat Website Tanpa Coding Dengan Menggunakan Framer dan Wordpress (Create a Website Without Coding Using Framer and Wordpress )',
        image: PatalImage01
    }
];

interface GalleryModalProps {
    [index: number]: { title: string; image: string };
    length: number;
};

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Certification = React.forwardRef<HTMLElement>((props, ref) => {
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

    const openBNSPCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Professional Certificate');
        loadGalleryModal(0, bnspCerts);
        openGalleryModal();
    }
    
    const openGameLabCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Course Participant of GameLab');
        loadGalleryModal(0, gameLabCerts);
        openGalleryModal();
    }
    
    const openDicodingCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Course Participant of Dicoding');
        loadGalleryModal(0, dicodingCerts);
        openGalleryModal();
    }

    const openPatalCert = () => {
        resetGaleryModal();
        setCaptionGalleryModal('Speaker at the Tech MeetUp Event on Palembang Digital');
        loadGalleryModal(0, palembangDigitalCerts);
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
            <section ref={ref} id="certification" className="bg-slate-900 relative px-8 py-32 lg:px-16 min-h-screen z-10" {...props}>
                <div className="px-4 border-b-2 pb-1 border-slate-500">
                    <h1 className="text-4xl font-semibold tracking-tight text-slate-100 sm:text-6xl">Certification</h1>
                    <p className="mt-4 max-w-2xl lg:mt-6 text-lg leading-8 text-slate-300">Professional Award title and Training Certification.</p>
                </div>
                <div className="mt-16 px-4 max-w-2xl mx-auto">
                    <ul className="list-none m-0 p-0 space-y-6" role="list">
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-slate-100/[1]" />
                            </div>                            
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-slate-900/[1]">
                                <TrophyIcon className="w-full h-full text-white/[1] rounded-full ring-1 ring-slate-100/[1] ring-offset-0 p-1.5" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-slate-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-slate-300/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-white/[1] font-medium text-sm lg:text-base">Client-Server Programmer</span>
                                        &nbsp;-&nbsp;Professional Certificate
                                    </div>
                                    <time className="text-slate-300/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2017<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-white">BNSP - BBLKN Cevest Bekasi</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                                    Location: West Java, Indonesia<br />
                                    No. BNSP: 62090-3122-3-0006250-2017<br />
                                    No. Reg. ICT: 294-0006250-2017
                                </p>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openBNSPCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Certification
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-slate-100/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-slate-900/[1]">
                                <AcademicCapIcon className="w-full h-full text-white/[1] rounded-full ring-1 ring-slate-100/[1] ring-offset-0 p-1" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-slate-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-slate-300/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-white/[1] font-medium text-sm lg:text-base">Course Participants</span>
                                        &nbsp;-&nbsp;Education Certificate
                                    </div>
                                    <time className="text-slate-300/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2023<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-white">GameLab Indonesia</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                                    Online-site: gamelab.id<br />
                                    <span className="italic"><span className="font-semibold not-italic">- Pemograman Dasar Java</span> ( Basic Java Programming )</span><br />
                                    <span className="italic"><span className="font-semibold not-italic">- Terampil Menggunakan Visual Code</span> ( Skilled in Using Visual Code )</span>
                                </p>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openGameLabCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Certification
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center w-6 flex absolute left-0 top-0" style={{bottom: '-1.5rem'}}>
                                <div className="w-px bg-slate-100/[1]" />
                            </div>
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-slate-900/[1]">
                                <AcademicCapIcon className="w-full h-full text-white/[1] rounded-full ring-1 ring-slate-100/[1] ring-offset-0 p-1" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-slate-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-slate-300/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-white/[1] font-medium text-sm lg:text-base">Course Participant</span>
                                        &nbsp;-&nbsp;Education Certificate
                                    </div>
                                    <time className="text-slate-300/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2023<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-white">Dicoding Indonesia</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                                    Online-site: dicoding.com<br />
                                    <span className="italic"><span className="font-semibold not-italic">- Memulai Pemrograman dengan Python</span> ( Getting Started Programming in Python )</span><br />
                                    <span className="italic"><span className="font-semibold not-italic">- Belajar Dasar Visualisasi Data</span> ( Learn Basic Data Visualization )</span><br />
                                    <span className="italic"><span className="font-semibold not-italic">- Belajar Dasar Data Science</span> ( Learn Basic Data Science )</span><br />
                                    <span className="italic"><span className="font-semibold not-italic">- Belajar Machine Learning untuk Pemula</span> ( Learn Machine Learning for Beginners )</span>
                                </p>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openDicodingCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Certification
                                        <MagnifyingGlassCircleIcon className="-mr-0.5 w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        </li>
                        <li className="gap-x-4 flex relative">
                            <div className="justify-center items-center flex flex-none relative w-6 h-6 bg-slate-900/[1]">
                                <FireIcon className="w-full h-full text-white/[1] rounded-full ring-1 ring-slate-100/[1] ring-offset-0 p-1" />
                            </div>
                            <div className="rounded-md w-full min-h-24 flex-auto p-3 ring-1 ring-slate-300/[1] ring-offset-0">
                                <div className="flex gap-x-4 justify-between py-0.5 flex flex-col lg:flex-row">
                                    <div className="text-slate-300/[1] leading-6 text-xs lg:text-sm order-2 lg:order-1">
                                        <span className="text-white/[1] font-medium text-sm lg:text-base">Speaker at the Tech MeetUp Event</span>
                                        &nbsp;-&nbsp;Award Certification
                                    </div>
                                    <time className="text-slate-300/[1] leading-6 text-xs lg:text-sm py-0.5 flex-none order-1 lg:order-2">2024<sup>th</sup></time>
                                </div>
                                <h3 className="text-base font-semibold leading-7 text-white">Palembang Digital</h3>
                                <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
                                    Location: South Sumatera<br />
                                    <span className="italic"><span className="font-semibold not-italic">- Membuat Website Tanpa Coding Dengan Menggunakan Framer dan Wordpress</span> ( Create a Website Without Coding Using Framer and Wordpress )</span>
                                </p>
                                <div className="flex justify-center lg:justify-end">
                                    <button onClick={openPatalCert} type="button" className="bg-indigo-600/[1] my-4 shadow-sm shadow-inherit text-white/[1] font-semibold text-sm py-1.5 px-2.5 rounded-md gap-x-1.5 items-center inline-flex bg-none cursor-pointer">
                                        View Certification
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

export default Certification;