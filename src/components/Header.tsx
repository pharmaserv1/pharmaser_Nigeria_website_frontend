'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from './common/button';
// import { LanguageSwitcher } from './common/LanguageSwitcher';
import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Header = () => {
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [showUseCaseDropdown, setShowUseCaseDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const lang = useTranslations('Header');

  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);
  const dropdownRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        showProductDropdown
      ) {
        setShowProductDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showProductDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef2.current &&
        !dropdownRef2.current.contains(event.target as Node) &&
        showUseCaseDropdown
      ) {
        setShowUseCaseDropdown(false);
        return;
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showUseCaseDropdown]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef3.current &&
        !dropdownRef3.current.contains(event.target as Node) &&
        showLogin
      ) {
        setShowLogin(false);
        return;
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showLogin]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setShowProductDropdown(false);
    setShowUseCaseDropdown(false);
  }, [pathname]);

  return (
    <div className="inter">
      <div className=" lg:py-1 px-2 lg:px-4 xl:px-6 bg-white fixed w-full z-[1000]">
        <div className="max-w-[1152px] mx-auto flex justify-between items-center">
          <Link
            href="/"
            className="cursor-pointer flex gap-1.5 items-center mt-4"
          >
            <Image
              src="/assets/images/logos/pharmaserv_logo.svg"
              alt="pharmaserv logo"
              className="mb-5"
              width={156}
              height={156}
            />
          </Link>

          <div className="lg:hidden flex items-center gap-4">
            {/* <LanguageSwitcher /> */}

            <button
              onClick={() => {
                setMobileMenuOpen(true);
              }}
              id="openMenu"
              className="lg:!hidden"
            >
              <Image
                src="/assets/images/icons/openIcon.svg"
                alt="open menu"
                className="w-5"
                width={20}
                height={20}
              />
            </button>
          </div>
          <ul
            className={`max-lg:overflow-y-auto transition-all gap-6 xl:gap-8 duration-300 ease-in-out max-lg:h-full bg-white lg:bg-transparent flex flex-col lg:flex-row max-lg:fixed max-lg:w-[250px] max-lg:top-0 max-lg:border-l max-lg:border-[#EDEDED] max-lg:z-[100] max-lg:items-start max-lg:px-4 fixed lg:relative ${
              mobileMenuOpen ? 'max-lg:right-0' : 'max-lg:-right-[250px]'
            }`}
          >
            <li className="lg:hidden mt-[20px] ">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                id=""
                className=""
              >
                <Image
                  src="/assets/images/icons/closeIcon.svg"
                  alt="close menu"
                  className="w-5"
                  width={20}
                  height={20}
                />
              </button>
            </li>

            <li className="">
              <Link
                href="/"
                className={`text-sm  lg:text-base hover:text-blue max-lg:w-full max-lg: ${
                  pathname === '/' ? 'text-blue' : ''
                }`}
              >
                {lang('home')}
              </Link>
            </li>
            <div className="relative">
              <li
                className="text-sm  lg:text-base flex items-center gap-2 !cursor-pointer "
                onClick={() => setShowProductDropdown(!showProductDropdown)}
              >
                <p
                  className={`hover:text-blue !cursor-pointer ${
                    pathname.startsWith('/products') ? 'text-blue' : ''
                  }`}
                >
                  {lang('products')}
                </p>
                <Image
                  src="/assets/images/icons/dropdown-icon.svg"
                  alt="arrow down"
                  className={`w-3 !cursor-pointer transition-all duration-300 ease-in-out ${
                    !showProductDropdown ? 'rotate-0' : 'rotate-180'
                  }`}
                  width={12}
                  height={12}
                />
              </li>
              {showProductDropdown && (
                <div
                  className="lg:absolute lg:top-8 lg:left-0 w-full lg:w-[300px] lg:h-[100px] bg-white rounded-lg lg:p-4 space-y-4 lg:shadow-[0px_19px_38px_-7px_#10182824] transition-all duration-300 ease-in-out z-[100] max-lg:mt-3"
                  ref={dropdownRef}
                >
                  <div className="">
                    <Link
                      href="/products/copilot"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('productsDropdown.copilot')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/products/field-service-management"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('productsDropdown.fieldServiceManagement')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div className="relative">
              <li
                className="text-sm  lg:text-base flex items-center gap-2 !cursor-pointer"
                onClick={() => setShowUseCaseDropdown(!showUseCaseDropdown)}
              >
                <p
                  className={`hover:text-blue !cursor-pointer ${
                    pathname.startsWith('/use-case') ? 'text-blue' : ''
                  }`}
                >
                  {lang('useCase')}
                </p>
                <Image
                  src="/assets/images/icons/dropdown-icon.svg"
                  alt="arrow down"
                  className={`w-3 !cursor-pointer transition-all duration-300 ease-in-out ${
                    !showUseCaseDropdown ? 'rotate-0' : 'rotate-180'
                  }`}
                  width={12}
                  height={12}
                />
              </li>
              {showUseCaseDropdown && (
                <div
                  className="lg:absolute lg:top-8 lg:left-0 w-full lg:w-[300px] lg:h-[250px] bg-white rounded-lg lg:p-4 space-y-4 lg:shadow-[0px_19px_38px_-7px_#10182824] transition-all duration-300 ease-in-out z-[10] max-lg:mt-3"
                  ref={dropdownRef2}
                >
                  <div className="">
                    <Link
                      href="/use-case/pharma-sales-software"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.pharmaSalesSoftware')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/use-case/pharma-sales-ai-tool"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.pharmaSalesAiTool')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/use-case/e-detailing"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.eDetailing')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/use-case/crm"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.crm')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/use-case/conversation-intelligence"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.conversationIntelligence')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="/use-case/ai-scheduling"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('useCaseDropdown.aiScheduling')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <li className="">
              <Link
                href="/contact-us"
                className={`text-sm  lg:text-base hover:text-blue ${
                  pathname.startsWith('/contact-us') ? 'text-blue' : ''
                }`}
              >
                {lang('contactUs')}
              </Link>
            </li>
            <div className="relative lg:hidden">
              <li className=" flex items-center gap-2">
                <div
                  onClick={() => {
                    setShowLogin(true);
                  }}
                  className={`text-sm  lg:text-base hover:text-blue ${
                    pathname.startsWith('/contact-us') ? 'text-blue' : ''
                  }`}
                >
                  {lang('login')}
                </div>
                <Image
                  src="/assets/images/icons/dropdown-icon.svg"
                  alt="arrow down"
                  className={`w-3 !cursor-pointer transition-all duration-300 ease-in-out ${
                    !showLogin ? 'rotate-0' : 'rotate-180'
                  }`}
                  width={12}
                  height={12}
                />
              </li>
              {showLogin && (
                <div
                  className="lg:absolute lg:top-8 left-0 w-full lg:w-[280px] lg:h-[100px] bg-white rounded-lg lg:p-4 space-y-4 lg:shadow-[0px_19px_38px_-7px_#10182824] transition-all duration-300 ease-in-out z-[100] max-lg:mt-3"
                  ref={dropdownRef3}
                >
                  <div className="">
                    <Link
                      href="https://www.business.pharmaserv.co/"
                      target="_blank"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('loginDropdown.pharmaservCopilot')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('loginDropdown.fieldServiceManagement')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <li className="lg:hidden">
              <Link
                href="/register"
                className={`text-sm  lg:text-base hover:text-blue ${
                  pathname.startsWith('/register') ? 'text-blue' : ''
                }`}
              >
                {lang('register')}
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2 xl:gap-4 max-lg:hidden">
            {/* <LanguageSwitcher /> */}
            <div className="relative">
              <Button
                onClick={() => {
                  setShowLogin(true);
                }}
                btnText={lang('login')}
                className="text-sm border border-[#001C641A] !rounded-[6px] !py-[10px] !px-[25px] "
              />
              {showLogin && (
                <div
                  className="lg:absolute top-12 right-0 w-full lg:w-[300px] lg:h-[100px] bg-white rounded-lg lg:p-4 space-y-4 lg:shadow-[0px_19px_38px_-7px_#10182824] transition-all duration-300 ease-in-out z-[100] max-lg:mt-3"
                  ref={dropdownRef3}
                >
                  <div className="">
                    <Link
                      href="https://www.business.pharmaserv.co/"
                      target="_blank"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('loginDropdown.pharmaservCopilot')}
                    </Link>
                  </div>
                  <div className="">
                    <Link
                      href="#"
                      className="text-sm  lg:text-base cursor-pointer hover:text-blue lg:hover:font-medium"
                    >
                      {lang('loginDropdown.fieldServiceManagement')}
                    </Link>
                  </div>
                </div>
              )}
            </div>
            <Button
              btnText={lang('register')}
              btnType="secondary"
              className="text-sm !rounded-[6px] !py-[10px] !px-[25px]"
              onClick={() => {
                router.push('/register');
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
