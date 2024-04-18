import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo/logo-short.svg";
import logoW from "../../assets/images/logo/logo-short-white.svg";

function SidebarV2() {
  const { pathname: location } = useLocation();

  return (
    <aside className="relative hidden w-[96px] bg-white  dark:bg-darkblack-600 sm:block">
      <div className="sidebar-wrapper-collapse relative top-0 z-30 w-full">
        <div className="sidebar-header sticky top-0 z-20 flex h-[108px] w-full items-center justify-center border-b border-r border-b-[#F7F7F7] border-r-[#F7F7F7] bg-white dark:border-darkblack-500 dark:bg-darkblack-600">
          <Link to="/">
            <img src={logo} className="block dark:hidden" alt="logo" />
            <img src={logoW} className="hidden dark:block" alt="logo" />
          </Link>
        </div>
        <div className="sidebar-body w-full pt-[14px]">
          <div className="flex flex-col items-center">
            <div className="nav-wrapper mb-[36px]">
              <div className="item-wrapper mb-5">
                <ul className="mt-2.5 flex flex-col items-center justify-center">
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/dashboard"
                      className={`${location.includes("home")
                        ? "nav-active"
                        : location === "/"
                          ? "nav-active"
                          : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="21"
                          viewBox="0 0 18 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            className="path-1"
                            d="M0 8.84719C0 7.99027 0.366443 7.17426 1.00691 6.60496L6.34255 1.86217C7.85809 0.515019 10.1419 0.515019 11.6575 1.86217L16.9931 6.60496C17.6336 7.17426 18 7.99027 18 8.84719V17C18 19.2091 16.2091 21 14 21H4C1.79086 21 0 19.2091 0 17V8.84719Z"
                            fill="#1A202C"
                          />
                          <path
                            className="path-2"
                            d="M5 17C5 14.7909 6.79086 13 9 13C11.2091 13 13 14.7909 13 17V21H5V17Z"
                            fill="#22C55E"
                          />
                        </svg>
                      </span>
                    </Link>

                  </li>
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/transaction"
                      className={`${location === "/transaction" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="item px-[43px] py-[11px]">
                    <span className="item-ico">
                      <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 16V6C18 3.79086 16.2091 2 14 2H4C1.79086 2 0 3.79086 0 6V16C0 18.2091 1.79086 20 4 20H14C16.2091 20 18 18.2091 18 16Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 8C4.25 7.58579 4.58579 7.25 5 7.25H13C13.4142 7.25 13.75 7.58579 13.75 8C13.75 8.41421 13.4142 8.75 13 8.75H5C4.58579 8.75 4.25 8.41421 4.25 8Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 12C4.25 11.5858 4.58579 11.25 5 11.25H13C13.4142 11.25 13.75 11.5858 13.75 12C13.75 12.4142 13.4142 12.75 13 12.75H5C4.58579 12.75 4.25 12.4142 4.25 12Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M4.25 16C4.25 15.5858 4.58579 15.25 5 15.25H9C9.41421 15.25 9.75 15.5858 9.75 16C9.75 16.4142 9.41421 16.75 9 16.75H5C4.58579 16.75 4.25 16.4142 4.25 16Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                        <path
                          d="M11 0H7C5.89543 0 5 0.895431 5 2C5 3.10457 5.89543 4 7 4H11C12.1046 4 13 3.10457 13 2C13 0.895431 12.1046 0 11 0Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">

                      <li>
                        <Link
                          to="/gamehistory?gamename=Sorat"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/gamehistory?gamename=Sorat" ? "nav-active" : ""
                            } `}
                        >
                          Game History
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gamelogic?gamename=SORAT"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/gamelogic?gamename=SORAT" ? "nav-active" : ""
                            } `}
                        >
                          Game Logic
                        </Link>
                      </li>

                    </ul>
                  </li>


                  <li className="item px-[43px] py-[11px]">
                    <span className="item-ico">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 11C18 15.9706 13.9706 20 9 20C4.02944 20 0 15.9706 0 11C0 6.02944 4.02944 2 9 2C13.9706 2 18 6.02944 18 11Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          d="M19.8025 8.01277C19.0104 4.08419 15.9158 0.989557 11.9872 0.197453C10.9045 -0.0208635 10 0.89543 10 2V8C10 9.10457 10.8954 10 12 10H18C19.1046 10 20.0209 9.09555 19.8025 8.01277Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">

                      <li>
                        <Link
                          to="/depositList?status=Pendding"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/depositList?status=Pendding" ? "nav-active" : ""
                            } `}
                        >
                          Pendding List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/depositList?status=Rejected"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/depositList?status=Rejected" ? "nav-active" : ""
                            } `}
                        >
                          Rejected List
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/depositList?status=Success"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/depositList?status=Success" ? "nav-active" : ""
                            } `}
                        >
                          Success List
                        </Link>
                      </li>

                    </ul>
                  </li>


                  
                  <li className="item px-[43px] py-[11px]">
                    <span className="item-ico">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18 11C18 15.9706 13.9706 20 9 20C4.02944 20 0 15.9706 0 11C0 6.02944 4.02944 2 9 2C13.9706 2 18 6.02944 18 11Z"
                          fill="#1A202C"
                          className="path-1"
                        />
                        <path
                          d="M19.8025 8.01277C19.0104 4.08419 15.9158 0.989557 11.9872 0.197453C10.9045 -0.0208635 10 0.89543 10 2V8C10 9.10457 10.8954 10 12 10H18C19.1046 10 20.0209 9.09555 19.8025 8.01277Z"
                          fill="#22C55E"
                          className="path-2"
                        />
                      </svg>
                    </span>
                    <ul className="sub-menu min-w-[200px] rounded-lg border-l border-success-100 bg-white px-5 py-2 shadow-lg">

                      <li>
                        <Link
                          to="/payoutpendding?status=Pendding"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/payoutpendding?status=Pendding" ? "nav-active" : ""
                            } `}
                        >
                          Pendding List
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/payoutpendding?status=Rejected"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/payoutpendding?status=Rejected" ? "nav-active" : ""
                            } `}
                        >
                          Rejected List
                        </Link>
                      </li>

                      <li>
                        <Link
                          to="/payoutpendding?status=Success"
                          className={`text-md inline-block py-1.5 font-medium text-bgray-600 hover:text-bgray-800 ${location === "/payoutpendding?status=Success" ? "nav-active" : ""
                            } `}
                        >
                          Success List
                        </Link>
                      </li>

                    </ul>
                  </li>


                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/socialurl"
                      className={`${location === "/socialurl" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0 4C0 1.79086 1.79086 0 4 0H16C18.2091 0 20 1.79086 20 4V16C20 18.2091 18.2091 20 16 20H4C1.79086 20 0 18.2091 0 16V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M14 9C12.8954 9 12 9.89543 12 11L12 13C12 14.1046 12.8954 15 14 15C15.1046 15 16 14.1046 16 13V11C16 9.89543 15.1046 9 14 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            d="M6 5C4.89543 5 4 5.89543 4 7L4 13C4 14.1046 4.89543 15 6 15C7.10457 15 8 14.1046 8 13L8 7C8 5.89543 7.10457 5 6 5Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>


                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/noticetext"
                      className={`${location === "/noticetext" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="20"
                          height="18"
                          viewBox="0 0 20 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20 4C20 1.79086 18.2091 0 16 0H4C1.79086 0 0 1.79086 0 4V14C0 16.2091 1.79086 18 4 18H16C18.2091 18 20 16.2091 20 14V4Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M6 9C6 7.34315 4.65685 6 3 6H0V12H3C4.65685 12 6 10.6569 6 9Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/commission"
                      className={`${location === "/commission" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="16"
                          height="18"
                          viewBox="0 0 16 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 18C9.38503 18 10.5633 17.1652 11 16H5C5.43668 17.1652 6.61497 18 8 18Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.6896 0.754028C9.27403 0.291157 8.67102 0 8 0C6.74634 0 5.73005 1.01629 5.73005 2.26995V2.37366C3.58766 3.10719 2.0016 4.85063 1.76046 6.97519L1.31328 10.9153C1.23274 11.6249 0.933441 12.3016 0.447786 12.8721C-0.649243 14.1609 0.394434 16 2.22281 16H13.7772C15.6056 16 16.6492 14.1609 15.5522 12.8721C15.0666 12.3016 14.7673 11.6249 14.6867 10.9153L14.2395 6.97519C14.2333 6.92024 14.2262 6.86556 14.2181 6.81113C13.8341 6.93379 13.4248 7 13 7C10.7909 7 9 5.20914 9 3C9 2.16744 9.25436 1.3943 9.6896 0.754028Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="13"
                            cy="3"
                            r="3"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="item px-[43px] py-[11px]">
                    <Link
                      to="/security"
                      className={`${location === "/security" ? "nav-active" : ""
                        }`}
                    >
                      <span className="item-ico">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.57666 3.61499C1.57666 2.51042 2.47209 1.61499 3.57666 1.61499H8.5C9.60456 1.61499 10.5 2.51042 10.5 3.61499V8.53833C10.5 9.64289 9.60456 10.5383 8.49999 10.5383H3.57666C2.47209 10.5383 1.57666 9.64289 1.57666 8.53832V3.61499Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            d="M13.5 15.5383C13.5 14.4338 14.3954 13.5383 15.5 13.5383H20.4233C21.5279 13.5383 22.4233 14.4338 22.4233 15.5383V20.4617C22.4233 21.5662 21.5279 22.4617 20.4233 22.4617H15.5C14.3954 22.4617 13.5 21.5662 13.5 20.4617V15.5383Z"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <circle
                            cx="6.03832"
                            cy="18"
                            r="4.46166"
                            fill="#1A202C"
                            className="path-1"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M18 2C18.4142 2 18.75 2.33579 18.75 2.75V5.25H21.25C21.6642 5.25 22 5.58579 22 6C22 6.41421 21.6642 6.75 21.25 6.75H18.75V9.25C18.75 9.66421 18.4142 10 18 10C17.5858 10 17.25 9.66421 17.25 9.25V6.75H14.75C14.3358 6.75 14 6.41421 14 6C14 5.58579 14.3358 5.25 14.75 5.25H17.25V2.75C17.25 2.33579 17.5858 2 18 2Z"
                            fill="#22C55E"
                            className="path-2"
                          />
                        </svg>
                      </span>
                    </Link>
                  </li>
                  
                </ul>
              </div>
             
            </div>
           
          </div>
        </div>
      </div>
    </aside>
  );
}

export default SidebarV2;
