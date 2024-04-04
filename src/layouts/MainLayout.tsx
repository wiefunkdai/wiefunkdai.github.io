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
import { Outlet, Link, NavLink } from 'react-router-dom';
import { Dialog, Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDoubleUpIcon } from '@heroicons/react/20/solid';

/**
 * Import Media Image and Vector
 */
import AppLogo from '../medias/stephanusdailogo.svg';

/**
 * Global Variables
 */
const navigationBasics = [
    { name: 'Portofolio', href: '/portofolio#portofolio' },
    { name: 'Certification', href: '/certification#certification' }
];
  
  
const navigationExtends = [
    { name: 'Education', href: '/education#education' },
    { name: 'Organization', href: '/organization#organization' },
    { name: 'Experience', href: '/experience#experience' },
];

const navigation = [
    { name: 'About', href: '/about#about' },
    { name: 'Portofolio', href: '/portofolio#portofolio' },
    { name: 'Certification', href: '/certification#certification' },
    { name: 'Education', href: '/education#education' },
    { name: 'Organization', href: '/organization#organization' },
    { name: 'Experience', href: '/experience#experience' },
    { name: 'Contact', href: '/contact#contact' },
];

function linkAsset(urlLink: string) {
    if (!urlLink.startsWith('http') && !urlLink.startsWith('ftp') && !urlLink.startsWith('data')) {
        if (import.meta.env.BASE_URL == './') {
            return import.meta.env.BASE_URL + urlLink;
        } else if (import.meta.env.BASE_URL != '/') {
            return new URL(urlLink, import.meta.env.BASE_URL).href;
        }
    }
    return urlLink;
}

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(' ');
}

const MainLayout = () => {
    let toTopButtonRef = React.useRef<HTMLDivElement>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const onNavClick = () => {
        setMobileMenuOpen(false);
    }
    
    const handleScroll = () => {
      if (toTopButtonRef.current !== null) {
        if (document.body.scrollTop > 1000 ||
          document.documentElement.scrollTop > 1000) {
            toTopButtonRef.current.style.display = "block";  
        } else {      
          toTopButtonRef.current.style.display = "none";    
        }
      }
    };
    
    const backToTop = () => {
      document.documentElement.style.scrollBehavior = "smooth";
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    };
  
    React.useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
        <div className="bg-white">
            <header className="absolute inset-x-0 top-0 z-50">
                <nav className="flex items-center justify-between p-6 sm:px-8" aria-label="Global">
                    <div className="flex sm:flex-1">
                        <Link to={'/'} className="-m-1.5 p-1.5">
                            <span className="sr-only">SDaiLover</span>
                            <img
                                className="h-16 w-auto"
                                src={linkAsset(AppLogo)}
                                alt="SDaiLover Stephanus Dai Developer"
                            />
                        </Link>
                    </div>
                    <div className="flex sm:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden sm:flex sm:gap-x-2 sm:justify-end">
                        <div className="relative inline-block text-left">
                            <NavLink key="menuabout" to={'/about#about'}
                                className={({ isActive }) => {
                                    return classNames(
                                    isActive ? 'rounded-md bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold leading-6'
                                )}}
                             >
                                About
                            </NavLink>
                        </div>
                        <Menu key={'menuBasics'}>
                            <div className="relative inline-block text-left">
                                <div>
                                    <Menu.Button as="a" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold leading-6 text-gray-700 cursor-pointer">
                                        Basics
                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {navigationBasics.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <NavLink key={`menu${item.name}`} to={item.href}
                                                            className={({ isActive }) => {
                                                                return classNames(
                                                                    active || isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    isActive ? 'font-semibold' : 'font-normal',
                                                                    'block px-4 py-2 text-sm'
                                                                )
                                                            }}
                                                        >
                                                            {item.name}
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                        <Menu key={'menuExtends'}>
                            <div className="relative inline-block text-left">
                                <div>
                                    <Menu.Button as="a" className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold leading-6 text-gray-700 cursor-pointer">
                                        Extends
                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={React.Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {navigationExtends.map((item) => (
                                                <Menu.Item key={item.name}>
                                                    {({ active }) => (
                                                        <NavLink key={`menu${item.name}`} to={item.href}
                                                            className={({ isActive }) => {
                                                                return classNames(
                                                                    active || isActive ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                    isActive ? 'font-semibold' : 'font-normal',
                                                                    'block px-4 py-2 text-sm'
                                                                )
                                                            }}
                                                        >
                                                            {item.name}
                                                        </NavLink>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </div>
                        </Menu>
                        <div className="relative inline-block text-left">
                            <NavLink key="menucontact" to={'/contact#contact'}
                                className={({ isActive }) => {
                                    return classNames(
                                    isActive ? 'rounded-md bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold leading-6'
                                )}}
                             >
                                Contact
                            </NavLink>
                        </div>
                    </div>
                </nav>
                <Dialog as="div" className="sm:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link to={'/'} className="-m-1.5 p-1.5">
                                <span className="sr-only">SDaiLover</span>
                                <img
                                className="h-8 w-auto"
                                src={AppLogo}
                                alt="SDaiLover Stephanus Dai Developer"
                                />
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <NavLink
                                            onClick={onNavClick}
                                            key={`nav${item.name}`}
                                            to={item.href}
                                            className={({ isActive }) => {
                                                return classNames(
                                                    isActive ? 'bg-gray-100 font-semibold text-gray-900' : 'text-gray-700',
                                                    '-mx-3 block rounded-lg px-3 py-2 text-base leading-7 hover:text-gray-900 hover:bg-gray-100'
                                                )
                                            }}
                                        >
                                            {item.name}
                                        </NavLink>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
            <Outlet />
            <footer className="bg-gray-900/[1] z-10">
                <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between px-4">
                        <p className="text-base text-gray-400 sm:text-center">ID &copy; 2024 <a href="https://stephanusdai.web.id/" className="hover:underline">Stephanus Bagus Saputra</a>. All Rights Reserved.</p>
                        <div className="flex mt-4 sm:justify-center sm:mt-0">
                            <a href="https://wa.me/6289627886699" className="text-gray-500 hover:text-white">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                <span className="sr-only">Chat via Telegram</span>
                            </a>
                            <a href="https://t.me/wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                                <span className="sr-only">Chat via Whatsapp</span>
                            </a>
                            <a href="https://github.com/wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                                <span className="sr-only">StephanusDai on GitHub</span>
                            </a>
                            <a href="https://vercel.com/wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Vercel</title><path d="M24 22.525H0l12-21.05 12 21.05z"/></svg>
                                <span className="sr-only">StephanusDai on Vercel</span>
                            </a>
                            <a href="https://figma.com/@wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Figma</title><path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"/></svg>
                                <span className="sr-only">StephanusDai on Figma</span>
                            </a>
                            <a href="https://facebook.com/wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>
                                <span className="sr-only">StephanusDai on Facebook</span>
                            </a>
                            <a href="https://youtube.com/@wiefunkdai" className="text-gray-500 hover:text-white ms-5">
                                <svg className="w-6 h-6" fill="currentColor" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                                <span className="sr-only">StephanusDai on Youtube</span>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <div ref={toTopButtonRef} className="fixed bottom-[40px] right-[40px] w-4 h-4 z-50" style={{display: 'none'}}>
                <button onClick={backToTop} className="p-3 bg-indigo-600/[1] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-indigo-500/[1] hover:shadow-lg focus:bg-indigo-500/[1] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800/[1] active:shadow-lg transition duration-150 ease-in-out cursor-pointer">
                    <ChevronDoubleUpIcon  className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
}

export default MainLayout;