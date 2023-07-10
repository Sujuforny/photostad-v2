import Image from "next/image";
import Link from "next/link"; 
import React from "react";

const AsideBar = () => {
  return (
    <aside style={{width:'300px'}} className="sidebar m-0 h-screen bg-black dark:bg-secondary justify-start">
      <section className="sidebar-title items-center ">
        <div className="w-full h-[130px] flex justify-center items-center">
          <Image
            src={"/assets/image/mainlogov2.png"}
            width={170}
            height={80}
            alt="logo"
          />
        </div>
      </section>
      <hr className="bg-white w-11/12 mx-auto dark:bg-primary" />

      <section className="sidebar-content h-fit min-h-[20rem]  overflow-auto">
        <nav className="menu rounded-md">
          <section className="menu-section px-4">
            <ul className="menu-items ">
              <Link href={"/admin/dashboard"}>
                <li className="menu-item text-white hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 opacity-75"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Dashboard</span>
                </li>
              </Link>

              <li className="text-white hover:text-black">
                <input
                  type="checkbox"
                  id="menu-1"
                  className="menu-toggle text-white hover:text-black"
                />
                <label
                  className="menu-item justify-between text-white hover:text-black "
                  htmlFor="menu-1"
                >
                  <div className="flex gap-2 text-white hover:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Statistic</span>
                  </div>

                  <span className="menu-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <div className="menu-item-collapse text-white hover:text-black">
                  <div className="min-h-0 text-white hover:text-black">
                    <Link href={"/admin/dashboard/reportandstatistic"}>
                      <label className="menu-item ml-6 text-white hover:text-black">
                        Overview
                      </label>
                    </Link>
                    <Link
                      href={
                        "/admin/dashboard/reportandstatistic/certificateoverview"
                      }
                    >
                      <label className="menu-item ml-6 text-white hover:text-black">
                        Certificate
                      </label>
                    </Link>
                    <Link
                      href={"/admin/dashboard/reportandstatistic/watermarkoverview"}
                    >
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Watermark
                    </label>
                    </Link>
                  </div>
                </div>
              </li>
              <Link  href={"/admin/dashboard/usermanagement"}>
              <li className="menu-item text-white hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span>User Management</span>
              </li>
              </Link>

              <li className="text-white hover:text-black">
                <input
                  type="checkbox"
                  id="menu-2"
                  className="menu-toggle text-white hover:text-black"
                />
                <label
                  className="menu-item justify-between text-white hover:text-black "
                  htmlFor="menu-2"
                >
                  <div className="flex gap-2 text-white hover:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Tutorial Management</span>
                  </div>

                  <span className="menu-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <div className="menu-item-collapse text-white hover:text-black">
                  <div className="min-h-0 text-white hover:text-black">
                    <Link href={"/admin/dashboard/tutorialmanagement"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Tutorial
                    </label>
                    </Link>
                    <Link  href={"/admin/dashboard/tutorialmanagement/listofrequest"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Client Requests
                    </label>
                    </Link>
                    <Link  href={"/admin/dashboard/tutorialmanagement/readedrequest"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Reviewed Request
                    </label>
                    </Link>
                    <Link   href={"/admin/dashboard/tutorialmanagement/unread"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Unread Request
                    </label>
                    </Link>
                  </div>
                </div>
              </li>
              <Link  href={"/admin/dashboard/seoconfiguration"}>
              <li className="menu-item text-white hover:text-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 opacity-75"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                <span>SEO Configuration</span>
              </li>
              </Link>
              <li className="text-white hover:text-black">
                <input
                  type="checkbox"
                  id="menu-3"
                  className="menu-toggle text-white hover:text-black"
                />
                <label
                  className="menu-item justify-between text-white hover:text-black "
                  htmlFor="menu-3"
                >
                  <div className="flex gap-2 text-white hover:text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 opacity-75"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>Setting</span>
                  </div>

                  <span className="menu-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </label>

                <div className="menu-item-collapse text-white hover:text-black">
                  <div className="min-h-0 text-white hover:text-black">
                    <Link href={"/admin/dashboard/setting/profile"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      User Profile
                    </label>
                    </Link>

                    <Link href={"/admin/dashboard/setting/changepassword"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Change Password
                    </label>
                    </Link>

                    <Link  href={"/admin/dashboard/tutorialmanagement/readedrequest"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Reviewed Request
                    </label>
                    </Link>

                    <Link  href={"#"}>
                    <label className="menu-item ml-6 text-white hover:text-black">
                      Log Out
                    </label>
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </nav>
      </section>
    </aside>
  );
};

export default AsideBar;
