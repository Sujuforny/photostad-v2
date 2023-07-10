import { SIdeSettingNav } from '@/components/profile/SideSettingNav';
import React from 'react'
import {IoIosArrowDropleft} from "react-icons/io";


export default function page() {
    return (
        <div className='w-[90%] mx-auto rounded-[16px] dark:bg-slate-800 bg-white p-5'>
            <h1 className="font-semibold max-sm:hidden text-[32px] dark:text-white">More Information</h1>
            {/*drawer here*/}
       
            {/*end of drawer*/}
            <div class="my-6">
                <label
                    for="username"
                    class="block mb-2 text-sm  font-light  dark:text-white"
                >
                    Phone Number
                </label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    class="shadow-sm bg-[whitesmoke] md:w-1/2   text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
            </div>
            <div class="mb-6">
                <label
                    for="username"
                    class="block mb-2 text-sm  font-light text-gray-900 dark:text-white"
                >
                    date of birth
                </label>
                <input
                    type="date"
                    id="username"
                    name="username"
                    class="shadow-sm bg-[whitesmoke]  md:w-1/2 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                />
            </div>
            <label
                for="username"
                class="block mb-2 text-sm  font-light text-gray-900 dark:text-white "
            >
                Address
            </label>
            <textarea
                className="bg-[whitesmoke] h-[150px]  w-full md:w-1/2 rounded-[16px] dark:bg-slate-500"></textarea>
            <br/>
            <button className=" btn-util mt-6 text-white">save change</button>

        </div>
    )
}
