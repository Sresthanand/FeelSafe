import React from 'react';
import {setLocalStorageTokens} from '../../utils/localStorage';
import {useHistory} from 'react-router-dom';
import LOGO from '../../assets/images/logo.svg';

function Navbar() {
    const history=useHistory();
    const handleLogout=async () => {
        await setLocalStorageTokens({accessToken: ""});
        history.push('/');
    }
    return (
        <div className="relative bg-white">
            <div className=" mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Workflow</span>
                            <img
                                src={LOGO}
                                style={{width: 30,height: 'auto'}}
                            />
                        </a>
                    </div>
                    <div className="-mr-2 -my-2 md:hidden">
                    </div>
                    <nav className="hidden md:flex space-x-10">
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0" onClick={handleLogout}>
                        <a
                            href="#"
                            className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
                        >
                            Sign Out
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div>
                                FeelSafe
                            </div>
                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8">
                            </nav>
                        </div>
                    </div>
                    <div className="py-6 px-5 space-y-6">
                        <div>
                            <a
                                href="#"
                                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                            >
                                Sign Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;