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
import { useLocation } from 'react-router-dom';
import { About as AboutPage } from '../components/About';
import { Skill as SkillPage } from '../components/Skill';
import { Portofolio as PortofolioPage } from '../components/Portofolio';
import { Certification as CertificationPage } from '../components/Certification';
import { Education as EducationPage } from '../components/Education';
import { Organization as OrganizationPage } from '../components/Organization';
import { Experience as ExperiencePage } from '../components/Experience';
import { Contact as ContactPage } from '../components/Contact';

const LandingPage = () => {
    let aboutRef = React.useRef<HTMLElement>(null);
    let portofolioRef = React.useRef<HTMLElement>(null);
    let certificationRef = React.useRef<HTMLDivElement>(null);
    let educationRef = React.useRef<HTMLElement>(null);
    let organizationRef = React.useRef<HTMLElement>(null);
    let experienceRef = React.useRef<HTMLElement>(null);
    let contactRef = React.useRef<HTMLElement>(null);
    const location = useLocation();
    const pageName = location.pathname.slice(1);
    
    const handlePageScroll = () => {
        if (contactRef.current != null && 
            ((document.body.scrollTop >= contactRef.current.offsetTop ||
            document.documentElement.scrollTop >= contactRef.current.offsetTop) &&
            (document.body.scrollTop <= (contactRef.current.offsetTop + contactRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (contactRef.current.offsetTop + contactRef.current.offsetHeight)))) {
            document.title = 'Contact Me - SDaiLover';  
        } else if (experienceRef.current != null && 
            ((document.body.scrollTop >= experienceRef.current.offsetTop ||
            document.documentElement.scrollTop >= experienceRef.current.offsetTop) &&
            (document.body.scrollTop <= (experienceRef.current.offsetTop + experienceRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (experienceRef.current.offsetTop + experienceRef.current.offsetHeight)))) {
            document.title = 'Work Experience - SDaiLover';  
        } else if (organizationRef.current != null && 
            ((document.body.scrollTop >= organizationRef.current.offsetTop ||
            document.documentElement.scrollTop >= organizationRef.current.offsetTop) &&
            (document.body.scrollTop <= (organizationRef.current.offsetTop + organizationRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (organizationRef.current.offsetTop + organizationRef.current.offsetHeight)))) {
            document.title = 'Organizational Activities - SDaiLover';
        } else if (educationRef.current != null && 
            ((document.body.scrollTop >= educationRef.current.offsetTop ||
            document.documentElement.scrollTop >= educationRef.current.offsetTop) &&
            (document.body.scrollTop <= (educationRef.current.offsetTop + educationRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (educationRef.current.offsetTop + educationRef.current.offsetHeight)))) {
            document.title = 'Skill Education - SDaiLover';
        } else if (certificationRef.current != null && 
            ((document.body.scrollTop >= certificationRef.current.offsetTop ||
            document.documentElement.scrollTop >= certificationRef.current.offsetTop) &&
            (document.body.scrollTop <= (certificationRef.current.offsetTop + certificationRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (certificationRef.current.offsetTop + certificationRef.current.offsetHeight)))) {
            document.title = 'Awards or Certifications - SDaiLover';
        } else if (portofolioRef.current != null && 
            ((document.body.scrollTop >= portofolioRef.current.offsetTop ||
            document.documentElement.scrollTop >= portofolioRef.current.offsetTop) &&
            (document.body.scrollTop <= (portofolioRef.current.offsetTop + portofolioRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (portofolioRef.current.offsetTop + portofolioRef.current.offsetHeight)))) {
            document.title = 'Project / Explore History - SDaiLover';
        } else if (aboutRef.current != null && 
            ((document.body.scrollTop >= aboutRef.current.offsetTop + 100 ||
            document.documentElement.scrollTop >= aboutRef.current.offsetTop + 100) &&
            (document.body.scrollTop <= (aboutRef.current.offsetTop + aboutRef.current.offsetHeight) ||
            document.documentElement.scrollTop <= (aboutRef.current.offsetTop  + aboutRef.current.offsetHeight)))) {
            document.title = 'About Me - SDaiLover';
        } else {
            document.title = 'SDaiLover - StephanusDai Developer';
        }
    };

    React.useLayoutEffect(() => {
        window.addEventListener("scroll", handlePageScroll);
        return () => {
          window.removeEventListener("scroll", handlePageScroll);
        };        
    }, []);

    React.useEffect(() => {
        if (pageName == 'contact') {
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'experience') {
            experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'organization') {
            organizationRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'education') {
            educationRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'certification') {
            certificationRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'portofolio') {
            portofolioRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (pageName == 'portofolio') {
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo(0, 0);
        }
    });

    return (
        <>
            <AboutPage ref={aboutRef} />
            <SkillPage />
            <PortofolioPage ref={portofolioRef} />
            <CertificationPage ref={certificationRef} />
            <EducationPage ref={educationRef} />
            <OrganizationPage ref={organizationRef} />
            <ExperiencePage ref={experienceRef} />
            <ContactPage ref={contactRef} />
        </>
    );
}

export default LandingPage;