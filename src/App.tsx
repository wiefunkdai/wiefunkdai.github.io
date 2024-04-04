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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DocumentMeta from 'react-document-meta';
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import NotFoundPage from './pages/NotFoundPage';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Portofolio', href: '/portofolio' },
  { name: 'Certification', href: '/certification' },
  { name: 'Education', href: '/education' },
  { name: 'Organization', href: '/organization' },
  { name: 'Experience', href: '/experience' },
  { name: 'Contact', href: '/contact' }
];

function getBaseUrl() {
  if (import.meta.env.BASE_URL != './') {
    return import.meta.env.BASE_URL;
  }
  return '/';
}

const App = () => {
  const baseUrl = getBaseUrl();
  const meta = {
    title: 'SDaiLover - StephanusDai Developer',
    description: 'My name is Stephanus Bagus Saputra, I am a Full-Stack Developer based in Palembang, Indonesia. My expertise primarily consists of Programming Development using technical skill languages such as Laravel/Yii Framework PHP, React/Vue Javascript, C# .Net Framework, Python, and Kotlin/Java Android.',
    canonical: baseUrl,
    meta: {
      charset: 'utf-8',
      name: {
        keywords: 'programmer, itprofesional, webprogrammer, desktopprogrammer, mobileprogrammer, stephanusbagussaputra, stephanusdai, sdailover'
      }
    }
  };
  
  return (
    <DocumentMeta {...meta}>
      <BrowserRouter basename={baseUrl}>
        <Routes>
          <Route path={'/'} element={<MainLayout />}>
            <Route index element={<LandingPage />} />
            {navigation.map((item) => (
              <Route key={item.name} path={item.href} element={<LandingPage />} />
            ))}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </DocumentMeta>
  );
}

export default App;