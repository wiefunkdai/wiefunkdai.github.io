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
import { PaperClipIcon, ArrowTopRightOnSquareIcon, RocketLaunchIcon, XCircleIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';

/**
 * Import Media Image and Vector
 */
import Yii2BadgeImage from '../medias/skills/yii2.svg';

/**
 * Global Variables
 */
const PORTO_VIEW = 0;
const PORTO_LIVE = 1;
const PORTO_SOURCE = 2;

const absenceClubCodingPalcomItems = {
    caption: 'Palcomtech Club Coding Absence',
    galleries: [
        'https://i.imgur.com/tZIcUXQ.png'
    ],
    descriptions: { 
        'Title\'s Project': 'Palcomtech Club Coding Absence',
        'Programming Language': 'Laravel Framework + Vue 2.0 Javascript + PHP Language',
        'Type\'s Packages': 'Real Web Application',
        'About Application': 'Website-based attendance application for the Palcomtech Institute Coding Club. The aim is to record the student\'s attendance schedule in the Coding Club activity room.',
    },
    attachments: [
        { type: PORTO_LIVE, title: 'Running on Hosting', link: 'https://palcomtech.sdailover.com/clubabsence' },
        { type: PORTO_SOURCE, title: 'Source on GitHub', link: 'https://github.com/ClubCodingPalcomtech/CCPAbsence' }
    ]
}

const dbsessionyiiItems = {
    caption: 'DB Session Yii2 Plugin',
    galleries: [
        'https://i.imgur.com/bJwy4H7.png'
    ],
    descriptions: { 
        'Title\'s Project': 'DB Session Yii2 Plugin',
        'Programming Language': 'Yii2 Framework + PHP Language',
        'Type\'s Packages': 'Web App Sample & PHP Library',
        'About Application': 'The SDaiLover demo site for the PhpSessConnector Extension and SDaiLover Widget runs using the Yii 2.0 Framework. With a beautiful website display equipped with Bootstrap & jQuery.',
    },
    attachments: [
        { type: PORTO_VIEW, title: 'Running on Vercel', link: 'https://phpdbsessionyii2.stephanusdai.web.id' },
        { type: PORTO_SOURCE, title: 'Source on GitHub', link: 'https://github.com/wiefunkdai/PhpDbSessionYii2' }
    ]
}

const facerecognitionItems = {
    caption: 'Face Recognition (Machine Learning)',
    galleries: [
        'https://i.imgur.com/sZZ5gM4.jpeg'
    ],
    descriptions: { 
        'Title\'s Project': 'Face Recognition (Machine Learning)',
        'Programming Language': 'NextJS + ReactJS + TypeScript JavaScript',
        'Type\'s Packages': 'Web App Sample & Javascript Library',
        'About Application': 'Quickly and easily get started with machine learning technology that enables identifying and verifying individuals by analyzing and comparing patterns in their facial features.',
    },
    attachments: [
        { type: PORTO_VIEW, title: 'Running on Vercel', link: 'https://facerecognitionnextjs.stephanusdai.web.id' },
        { type: PORTO_SOURCE, title: 'Source on GitHub', link: 'https://github.com/wiefunkdai/FaceRecognitionNextJS' }
    ]
}

interface PortofolioModalProps {
    caption: string,
    galleries: string[];
    descriptions: object;
    attachments?: {type: number, title: string, link: string}[];
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ')
}

export const Portofolio = React.forwardRef<HTMLElement>((props, ref) => {
    let [isDesktopScreen, setIsDesktopScreen] = React.useState(false);

    let [isLoadingModal, setIsLoadingModal] = React.useState(false);
    let [isOpenPortoDialog, setIsOpenPortoDialog] = React.useState(false);
    let [indexPortoItem, setIndexPortoItem] = React.useState(0);
    let [totalPortoItem, setTotalPortoItem] = React.useState(0);
    let [thumbPortoDialog, setThumbPortoDialog] = React.useState('');
    let [itemPortoDialogList, setItemPortoDialogList] = React.useState<PortofolioModalProps>({
            caption: '',
            galleries: [],
            descriptions: {},
            attachments: []
        });

    const hideLoadingModal = () => { setIsLoadingModal(false); }
    const showLoadingModal = () => { setIsLoadingModal(true); }
    const closePortoDialog = () => { setIsOpenPortoDialog(false); }
    const openPortoDialog = (items: PortofolioModalProps) => {
        resetPortoModal();
        setIsOpenPortoDialog(true);
        loadPortoModal(0, items);
    }

    
    const openAbsenceClubPalcomModal = () => { openPortoDialog(absenceClubCodingPalcomItems); }
    const openDbSessionYiiModal = () => { openPortoDialog(dbsessionyiiItems); }
    const openFaceRecognitionModal = () => { openPortoDialog(facerecognitionItems); }

    const prevPortoItem = () => {
        const currentIndex  = indexPortoItem - 1;
        if (currentIndex >= 0 && currentIndex < totalPortoItem) {
            loadPortoModal(currentIndex, itemPortoDialogList);
        }        
    }

    const nextPortoItem = () => {
        const currentIndex  = indexPortoItem + 1;
        if (currentIndex >= 0 && currentIndex < totalPortoItem) {
            loadPortoModal(currentIndex, itemPortoDialogList);
        }        
    }

    const resetPortoModal = () => {
        setTotalPortoItem(0);
        setIndexPortoItem(0);
        setThumbPortoDialog('');
        setItemPortoDialogList({
            caption: '',
            galleries: [],
            descriptions: {},
            attachments: []
        });
    }

    const loadPortoModal = (index: number, items: PortofolioModalProps) => {
        showLoadingModal();
        if (items != null) {
            const totalImage = items.galleries.length;
            const imageLink = items.galleries[index].toString();
            setTimeout(() => {
                hideLoadingModal();
                setTotalPortoItem(totalImage);
                setIndexPortoItem(index);
                setThumbPortoDialog(imageLink);
                setItemPortoDialogList(items);
            }, 300);
        }
    }

    React.useEffect(() => {
        setIsDesktopScreen(window.matchMedia('(min-width: 1024px)').matches);
    });

    return (
        <>
            <section ref={ref} id="portofolio" className="bg-white relative px-8 py-32 lg:px-16 min-h-screen z-10" {...props}>
                <div className="max-w-2xl mx-auto px-4 border-b-2 pb-1 border-slate-300 text-center">
                    <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Portofolio</h1>
                    <p className="mt-4 lg:mt-6 text-lg leading-8 text-gray-500">Sample / Demo / Project of Web or Desktop Application.</p>
                </div>
                <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-2xl sm:max-w-none mx-auto lg:mx-0 mt-16 md:mt-24 auto-rows-fr list-none" role="list">
                    <li onClick={openFaceRecognitionModal} className="pt-80 md:pt-48 pb-8 px-8 border border-gray-300/[1] bg-gray-900/[1] rounded-2xl overflow-hidden justify-end flex-col flex isolate relative cursor-pointer h-96 md:h-[32rem]">
                        <img className="-z-10 object-cover rounded-2xl aspect-[3/4] w-full h-full absolute inset-0 block" 
                            src={'https://i.imgur.com/sZZ5gM4.jpeg'}
                            alt="Face Recognition (Machine Learning)"
                         />
                        <div className="-z-10 bg-gradient-to-t from-gray-900 inset-0 absolute" />
                        <div className="-z-10 ring-gray-900/[0.1] ring-inset shadow-gray-900/[0.1] shadow-inner inset-0 absolute" />
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-gray-300/[1] text-sm leading-6 overflow-hidden">
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/NextJS-334155?style=for-the-badge&logo=nextdotjs&labelColor=000000'}
                            />
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/React-0088CC?style=for-the-badge&logo=react&logoColor=000000&labelColor=61DAFB'}
                            />
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/Javascript-A16207?style=for-the-badge&logo=javascript&logoColor=422006&labelColor=F7DF1E'}
                            />
                        </div>
                        <h3 className="text-white/[1] text-lg leading-6 font-semibold m-0 mt-3">
                            Face Recognition (Machine Learning)
                        </h3>
                        <p className="text-slate-300/[1] text-sm m-0">
                            Web App Sample &amp; Javascript Library
                        </p>
                    </li>
                    <li onClick={openDbSessionYiiModal} className="pt-80 md:pt-48 pb-8 px-8 border border-gray-300/[1] bg-gray-900/[1] rounded-2xl overflow-hidden justify-end flex-col flex isolate relative cursor-pointer h-96 md:h-[32rem]">
                        <img className="-z-10 object-fill rounded-2xl aspect-[3/4] w-full h-full absolute inset-0 block" 
                            src={'https://i.imgur.com/bJwy4H7.png'}
                            alt="DB Session Yii2 Plugin"
                         />
                        <div className="-z-10 bg-gradient-to-t from-gray-900 inset-0 absolute" />
                        <div className="-z-10 ring-gray-900/[0.1] ring-inset shadow-gray-900/[0.1] shadow-inner inset-0 absolute" />
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-gray-300/[1] text-sm leading-6 overflow-hidden">
                            <img className="h-5 rounded" 
                                src={Yii2BadgeImage}
                            />
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/PHP-2A2F3D?style=for-the-badge&logo=php&logoColor=000000&labelColor=777BB4'}
                            />
                        </div>
                        <h3 className="text-white/[1] text-lg leading-6 font-semibold m-0 mt-3">
                            DB Session Yii2 Plugin
                        </h3>
                        <p className="text-slate-300/[1] text-sm m-0">
                            Web App Sample &amp; PHP Library
                        </p>
                    </li>
                    <li onClick={openAbsenceClubPalcomModal} className="pt-80 md:pt-48 pb-8 px-8 border border-gray-300/[1] bg-gray-900/[1] rounded-2xl overflow-hidden justify-end flex-col flex isolate relative cursor-pointer h-96 md:h-[32rem]">
                        <img className="-z-10 object-cover rounded-2xl aspect-[3/4] w-full h-full absolute inset-0 block" 
                            src={'https://i.imgur.com/tZIcUXQ.png'}
                            alt="Palcomtech Club Coding Absence"
                         />
                        <div className="-z-10 bg-gradient-to-t from-gray-900 inset-0 absolute" />
                        <div className="-z-10 ring-gray-900/[0.1] ring-inset shadow-gray-900/[0.1] shadow-inner inset-0 absolute" />
                        <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-gray-300/[1] text-sm leading-6 overflow-hidden">
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/Laravel-DD0700?style=for-the-badge&logo=laravel&logoColor=000C1F&labelColor=FF2D20'}
                            />
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/VueJS-4B5E40?style=for-the-badge&logo=vuedotjs&logoColor=000C1F&labelColor=4FC08D'}
                            />
                            <img className="h-5 rounded" 
                                src={'https://img.shields.io/badge/PHP-2A2F3D?style=for-the-badge&logo=php&logoColor=000000&labelColor=777BB4'}
                            />
                        </div>
                        <h3 className="text-white/[1] text-lg leading-6 font-semibold m-0 mt-3">
                            Palcomtech Club Coding Absence
                        </h3>
                        <p className="text-slate-300/[1] text-sm m-0">
                            Real Web Application
                        </p>
                    </li>
                </ul>
            </section>

            <Transition appear show={isOpenPortoDialog} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closePortoDialog}>
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
                                        <h3 className="text-lg font-semibold leading-6 text-gray-900 pr-8 mt-1">{itemPortoDialogList.caption}</h3>
                                        <button
                                            type="button"
                                            className="inline-flex justify-end text-sm rounded-full border border-transparent bg-gray-100 p-0 text-sm font-medium text-gray-900 hover:bg-gray-300 focus:outline-none hover:ring-2 hover:ring-gray-100 hover:ring-offset-2 absolute top-6 right-6"
                                            onClick={closePortoDialog}
                                        >
                                            <XCircleIcon className="h-6 w-6 flex-shrink-0 text-gray-400" />
                                        </button>
                                    </Dialog.Title>
                                    <Dialog.Description as="div" className="flex flex-col">
                                        <div className="flex flex-wrap flex-row border-b border-gray-100 mx-auto w-full max-w-full">
                                            <div className="flex relative bg-black items-center justify-center box-border w-full lg:w-2/3 p-0" style={{height: 'calc(50vh + 176px)', flex:'0 0 auto'}}>
                                                <div className="bg-transparent align-baseline text-[100%] border-0 p-0 m-0" style={{}}>
                                                    <div className="flex">
                                                        <img className="bg-cover max-w-full object-center object-cover" 
                                                            style={{maxHeight: 'calc(50vh + 176px)', backgroundPosition: '50%'}}
                                                            src={thumbPortoDialog}
                                                            alt={itemPortoDialogList.caption}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex flex-col justify-between bg-transparent w-full lg:w-1/3 box-border overflow-hidden" style={{maxHeight: isDesktopScreen ? 'calc(50vh + 176px)' : 'none', flex: '0 0 auto'}}>
                                                <div className="overflow-x-hidden overflow-y-auto p-6">
                                                    <div className="px-4 sm:px-0">
                                                        <h3 className="text-gray-900/[1] leading-7 text-base font-semibold m-0">Application Information</h3>
                                                        <p className="max-w-2xl text-gray-500/[1] leading-6 text-sm mt-1 m-0">Detail regarding the application.</p>
                                                    </div>
                                                    <div className="mt-6">
                                                        <dl className="grid grid-cols-1 sm:grid-cols-2 m-0">
                                                            {Object.entries(itemPortoDialogList.descriptions).map((items, index) => 
                                                                items.reduce((title, value) => (
                                                                    <div key={index} className="px-4 sm:px-0 py-6 sm:col-span-2 border-t border-gray-100/[1]">
                                                                        <dt className="text-gray-900/[1] leading-6 text-sm font-medium">{title} :</dt>
                                                                        <dd className="text-gray-700/[1] leading-6 text-sm m-0">{value}</dd>
                                                                    </div>
                                                                )) 
                                                            )}
                                                            <div className="px-4 sm:px-0 py-6 border-t sm:col-span-2 border-t border-gray-100/[1]" hidden={itemPortoDialogList.attachments?.length==0}>
                                                                <dt className="text-gray-900/[1] leading-6 text-sm font-medium">View / Source Application :</dt>
                                                                <dd className="text-gray-900/[1] text-sm m-0 mt-2">
                                                                    <ul className="divide-y divide-gray-100 border border-gray-200/[1] list-none rounded-md m-0 p-0" role="list">
                                                                        {itemPortoDialogList.attachments?.map((items, index) => (
                                                                            <li key={index} className="flex items-center justify-between leading-6 text-sm text-gray-900/[1] pl-4 pr-5 py-4 box-border border-0 border-solid border-gray-200/[1]">
                                                                                <div className="items-center flex-1 w-0 flex">
                                                                                    {(items.type==PORTO_SOURCE) ? (
                                                                                        <PaperClipIcon key={index} className="text-gray-400/[1] shrink-0 w-5 h-5 block align-middle" />
                                                                                    ) : (items.type==PORTO_VIEW) ? (
                                                                                        <RocketLaunchIcon key={index} className="text-gray-400/[1] shrink-0 w-5 h-5 block align-middle" />
                                                                                    ) : (
                                                                                        <ArrowTopRightOnSquareIcon key={index} className="text-gray-400/[1] shrink-0 w-5 h-5 block align-middle" />
                                                                                    )}
                                                                                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                                                                                        <span className="truncate font-medium">{items.title}</span>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="ml-4 flex-shrink-0">
                                                                                    <Link to={items.link} className="font-medium text-indigo-600 hover:text-indigo-500">
                                                                                        {(items.type==PORTO_SOURCE) ? 'Download' : (items.type==PORTO_VIEW) ? 'Visit Live' : 'Get View'}
                                                                                    </Link>
                                                                                </div>
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                </dd>                                      
                                                            </div>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className={classNames(
                                                        totalPortoItem<=1 ? 'hidden': 'flex',
                                                        'justify-between items-center bg-transparent align-baseline border-t border-gray-300/[1] m-0 py-4 px-6'
                                                    )}
                                                >
                                                    <span className="text-base font-semibold text-gray-500">{indexPortoItem+1} from {totalPortoItem}</span>
                                                    <div className="flex grid-cols-2 gap-x-2">
                                                        <button onClick={prevPortoItem} className={classNames(
                                                                indexPortoItem==0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 cursor-pointer',
                                                                'inline-flex max-w-96 overflow-hidden align-middle text-center justify-center font-semibold box-border items-center rounded py-2 px-5'
                                                            )}
                                                        >
                                                            <ChevronLeftIcon className="-ml-0.5 mr-1 w-6 h-6 shrink-0 font-semibold" />
                                                            Prev
                                                        </button>
                                                        <button onClick={nextPortoItem} className={classNames(
                                                                indexPortoItem==(totalPortoItem-1) ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:bg-gray-100 cursor-pointer',
                                                                'inline-flex max-w-96 overflow-hidden align-middle text-center justify-center font-semibold box-border items-center rounded py-2 px-5'
                                                            )}
                                                        >
                                                            Next
                                                            <ChevronRightIcon className="-mr-0.5 ml-1 w-6 h-6 shrink-0 font-semibold" />                                                        
                                                        </button>
                                                    </div>
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

export default Portofolio;