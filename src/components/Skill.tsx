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
import ReactStatusLogo from '../medias/reactjs.svg';
import LavarelStatusLogo from '../medias/laravelphp.svg';
import CSharpStatusLogo from '../medias/csharpnetvs.svg';
import AndroidStatusLogo from '../medias/androidstudio.svg';
import PythonStatusLogo from '../medias/python.svg';

export const Skill = () => {
    return (
        <>
            <section id="skill" className="bg-slate-900 pt-4 sm:pt-8 pb-8 sm:pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={ReactStatusLogo}
                            alt="React JS"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={LavarelStatusLogo}
                            alt="Laravel PHP"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                            src={CSharpStatusLogo}
                            alt="C Sharp"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                            src={AndroidStatusLogo}
                            alt="Android Studio"
                            width={158}
                            height={48}
                        />
                        <img
                            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                            src={PythonStatusLogo}
                            alt="Python"
                            width={158}
                            height={48}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Skill