import React from 'react';
import {Outlet} from "react-router-dom";
import TopNav from "../components/navigation/TopNav.jsx";
import BotNav from "../components/navigation/BotNav.jsx";
import {Facebook, Instagram} from "lucide-react";
import FooterStatic from "../components/footerStatic.jsx";
import {PhoneIcon} from "@heroicons/react/24/solid/index.js";

const Layout = () => {
    return (
        <div>
            <nav className="bg-[#012152] lg:px-10 px-5 py-2 flex  items-center justify-between gap-5  lg:h-[56px] h-[80px]">
                <div
                    className="flex flex-col  md:flex-row md:items-center w-full md:justify-between"
                >
                    <div className="flex gap-5 flex-col md:flex-row  justify-between w-full md:w-auto">
                         <span className="popup_opener text-white flex items-center text-sm "
                               style={{whiteSpace: "nowrap"}}>
  <span>Located in</span>
  <svg
      className="control__loc"
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
  >
    <path
        d="M19.0063 9.49477C19.005 8.32393 18.7297 7.16965 18.2025 6.12424C17.6752 5.07884 16.9106 4.17135 15.9698 3.47434C15.029 2.77734 13.9382 2.31018 12.7846 2.11022C11.6309 1.91027 10.4465 1.98308 9.32602 2.32282C8.20556 2.66256 7.18015 3.25981 6.33182 4.06679C5.48349 4.87376 4.8358 5.86808 4.44054 6.97018C4.04528 8.07229 3.91343 9.25161 4.05553 10.4138C4.19764 11.576 4.60975 12.6888 5.25892 13.6632C5.40239 13.8804 5.55827 14.0892 5.72578 14.2884L11.5032 22L17.2723 14.2884C17.439 14.0884 17.5974 13.8799 17.7391 13.6715C18.5661 12.4356 19.0072 10.9818 19.0063 9.49477ZM11.5032 12.8295C10.8436 12.8295 10.1989 12.6339 9.65052 12.2675C9.10213 11.9011 8.6747 11.3803 8.42231 10.7709C8.16991 10.1616 8.10387 9.49108 8.23254 8.8442C8.36121 8.19733 8.67881 7.60314 9.14518 7.13677C9.61155 6.6704 10.2057 6.3528 10.8526 6.22412C11.4995 6.09545 12.17 6.16149 12.7793 6.41389C13.3887 6.66629 13.9095 7.09371 14.2759 7.6421C14.6423 8.19049 14.8379 8.83523 14.8379 9.49477C14.8379 10.3792 14.4866 11.2274 13.8612 11.8528C13.2358 12.4782 12.3876 12.8295 11.5032 12.8295Z"
        fill="currentColor"
    />
  </svg>
  <span>Bukhara</span>
</span>
                        <a href="tel:55 305 00 09" className="flex text-white text-sm gap-2 items-center">
                            <PhoneIcon className="w-5 h-5"/>
                            +998 55 305 00 09</a>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row  justify-between w-full md:w-auto mt-2 md:mt-0 items-end  divide-x divide-[hsla(0,0%,100%,.15)] gap-5">

                    <a href="mailto:info@oxu.uz" className="flex gap-2 pl-3 text-white text-sm items-center">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512"
                             height="20"
                             width="20" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z"></path>
                            <path
                                d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z"></path>
                            </svg>
                            info@oxu.uz</a>
                        <div className="flex items-center  divide-x divide-[hsla(0,0%,100%,.15)] "><a data-v-4b8a97f0=""
                                                                                                      target="_blank"
                                                                                                      href="https://www.facebook.com/people/Osiyo-Xalqaro-Universiteti/100088012691808/?sk=about"><i
                            data-v-4b8a97f0="">
                            <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path data-v-4b8a97f0=""
                                      d="M19.554 8.8756H21.5015V5.4836C21.1655 5.43737 20.01 5.33337 18.6642 5.33337C15.8562 5.33337 13.9327 7.0996 13.9327 10.3458V13.3334H10.834V17.1254H13.9327V26.6667H17.7318V17.1263H20.7051L21.1771 13.3343H17.7309V10.7218C17.7318 9.62582 18.0269 8.8756 19.554 8.8756Z"
                                      fill="white"></path>
                            </svg>
                        </i></a> <a data-v-4b8a97f0="" target="_blank" href="https://www.instagram.com/aiu_uzbekistan/"><i
                            data-v-4b8a97f0="">
                            <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path data-v-4b8a97f0=""
                                      d="M16.0031 10.5226C12.9782 10.5226 10.5293 12.9741 10.5293 15.9964C10.5293 19.0213 12.9809 21.4702 16.0031 21.4702C19.028 21.4702 21.4769 19.0186 21.4769 15.9964C21.4769 12.9715 19.0253 10.5226 16.0031 10.5226V10.5226ZM16.0031 19.5493C14.0395 19.5493 12.4502 17.959 12.4502 15.9964C12.4502 14.0337 14.0404 12.4435 16.0031 12.4435C17.9657 12.4435 19.556 14.0337 19.556 15.9964C19.5569 17.959 17.9666 19.5493 16.0031 19.5493V19.5493Z"
                                      fill="white"></path>
                                <path data-v-4b8a97f0=""
                                      d="M20.3971 5.40136C18.4345 5.30981 13.5731 5.31425 11.6087 5.40136C9.88246 5.48225 8.35979 5.89914 7.13223 7.12669C5.08068 9.17825 5.3429 11.9427 5.3429 15.9969C5.3429 20.1462 5.11179 22.8467 7.13223 24.8671C9.19179 26.9258 11.9962 26.6565 16.0025 26.6565C20.1127 26.6565 21.5313 26.6591 22.9847 26.0965C24.9607 25.3294 26.4522 23.5631 26.598 20.3907C26.6905 18.4271 26.6851 13.5667 26.598 11.6022C26.422 7.85736 24.4122 5.58625 20.3971 5.40136V5.40136ZM23.5038 23.5098C22.1589 24.8547 20.2931 24.7347 15.9767 24.7347C11.5322 24.7347 9.75001 24.8005 8.44957 23.4965C6.95179 22.0058 7.2229 19.612 7.2229 15.9827C7.2229 11.0716 6.7189 7.53469 11.6478 7.28225C12.7802 7.24225 13.1136 7.22892 15.9642 7.22892L16.0042 7.25558C20.7411 7.25558 24.4576 6.75958 24.6807 11.6876C24.7313 12.812 24.7429 13.1498 24.7429 15.996C24.742 20.3889 24.8256 22.1818 23.5038 23.5098V23.5098Z"
                                      fill="white"></path>
                                <path data-v-4b8a97f0=""
                                      d="M21.6951 11.5859C22.4016 11.5859 22.9742 11.0133 22.9742 10.3068C22.9742 9.60039 22.4016 9.02771 21.6951 9.02771C20.9887 9.02771 20.416 9.60039 20.416 10.3068C20.416 11.0133 20.9887 11.5859 21.6951 11.5859Z"
                                      fill="white"></path>
                            </svg>
                        </i></a> <a data-v-4b8a97f0="" target="_blank"
                                    href="https://t.me/Asiainternationaluniversity_uz"><i
                            data-v-4b8a97f0="">
                            <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path data-v-4b8a97f0=""
                                      d="M13.7048 18.8275L13.3519 23.7911C13.8568 23.7911 14.0755 23.5742 14.3377 23.3137L16.7048 21.0515L21.6097 24.6435C22.5093 25.1449 23.143 24.8809 23.3857 23.816L26.6053 8.72975L26.6061 8.72886C26.8915 7.39908 26.1253 6.87908 25.2488 7.2053L6.32436 14.4506C5.03281 14.952 5.05236 15.672 6.10481 15.9982L10.943 17.5031L22.1813 10.4711C22.7101 10.1209 23.191 10.3146 22.7955 10.6649L13.7048 18.8275Z"
                                      fill="white"></path>
                            </svg>
                        </i></a> <a data-v-4b8a97f0="" target="_blank"
                                    href="https://www.youtube.com/@Osiyo.Xalqaro.Universiteti" className="pl-1">
                            <svg className="mx-1" data-v-4b8a97f0="" width="24" height="24" viewBox="0 0 24 24"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path data-v-4b8a97f0=""
                                      d="M19.0155 3.50851H4.98449C2.23163 3.50851 0 5.74015 0 8.49301V15.507C0 18.2599 2.23163 20.4915 4.98449 20.4915H19.0155C21.7684 20.4915 24 18.2599 24 15.507V8.49301C24 5.74015 21.7684 3.50851 19.0155 3.50851ZM15.6445 12.3413L9.08177 15.4713C8.9069 15.5547 8.7049 15.4272 8.7049 15.2335V8.77778C8.7049 8.5813 8.91221 8.45396 9.08744 8.54278L15.6502 11.8685C15.8453 11.9673 15.8419 12.2472 15.6445 12.3413Z"
                                      fill="white"></path>
                            </svg>
                        </a></div>
                    </div>
            </nav>
            <TopNav/>
            <BotNav/>
            <div className="relative">
            <Outlet/>
            </div>
            <FooterStatic/>
        </div>
    );
};

export default Layout;
