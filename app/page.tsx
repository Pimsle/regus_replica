'use client';
import Image from 'next/image'
import styles from '../styles/styles.module.scss'
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faPhone, faSearch, faUser, faChevronDown } from "@fortawesome/free-solid-svg-icons";


export default function Home() {
  
  interface Props {
    image: string
    alt: string
    title: string
    desc: string
  }

  const Card: React.FC<Props> = ({image, alt, title, desc}) => {
    return (
      <div className={styles.card+" basis-full md:basis-1/6 border-2 rounded-2xl bg-white p-6 flex md:block"}>
        <div className="">
          <img src={image} width="48" alt={alt}/>
        </div>
        <div className="pl-5 md:pl-0">
          <h3 className={styles.box_title+" "+"text-sm pb-4 md:py-4"}>
            <span className={styles.primary_underline}>
            {title}
            </span>
          </h3>
          <p className="text-xs leading-6">
          {desc}
          </p>
        </div>
      </div>
    )
  }

  function blurEffectIn() {
    const target = document.getElementById('main');
    if (target!=null) {
      target.style.filter = 'blur(6px)';
      target.style.transition = 'filter 0.3s ease';
    }
  }
  function blurEffectOut() {
    const target = document.getElementById('main');
    if (target!=null) {
      target.style.filter = 'none';
      target.style.transition = 'filter 0.3s ease';
    }
  }

  function phoneTabShow() {
    blurEffectIn()
    const target = document.getElementById('phone-tab');
    if (target!=null) {
      target.style.opacity = '1';
      target.style.transform = 'translateY(0)';
    }
  }

  function phoneTabHide() {
    blurEffectOut()
    const target = document.getElementById('phone-tab');
    if (target!=null) {
      target.style.opacity = '0';
      target.style.transform = 'translateY(15%)';
    }
  }

  return (
    <div id="root">
      <div>

        <div id="covid19-banner" className={styles.covid19_banner+" "+"bg-zinc-800 px-10 py-2"}>
          <p className="">
            <a className="text-white leading-8">
              Spazi di lavoro impareggiabili. Ottimi sconti. Paghi il 25% in meno. *Si applicano Termini e condizioni&nbsp;
              <FontAwesomeIcon icon={faAngleRight} className={styles.arrow_icon} size="sm"></FontAwesomeIcon>
            </a>
          </p>
        </div>

        <div id="main-navigation" className="bg-white relative z-40">
          <div className="container mx-auto">

            <div id="desktop-nav" className={styles.width_adjustment+" "+"flex justify-between mx-auto hidden md:flex"}>

              <div className={styles.mainnav+" "+"flex items-center my-7"}>
                <div className="pr-6">
                  <svg width="78" height="40" viewBox="0 0 78 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.4478 21.2149C25.4478 19.6442 24.2495 17.8674 22.2264 17.8674C19.5426 17.8674 18.6736 20.2072 18.6736 21.2149H25.4478ZM36.3522 32.2984L38.957 32.3802C40.86 32.4217 41.809 33.0675 41.809 34.4785C41.809 36.0916 40.1142 37.0599 37.6786 37.0599C35.0329 37.0599 33.3811 36.0097 33.3811 34.2774C33.3811 32.9452 34.0819 32.3802 34.6625 32.1377C35.199 32.2195 35.7776 32.26 36.3522 32.2984ZM37.4714 17.8674C39.5766 17.8674 40.899 19.2794 40.899 21.1361C40.899 23.0696 39.6187 24.4785 37.5115 24.4785C35.5304 24.4785 34.1669 23.0696 34.1669 21.1361C34.1669 19.2804 35.4053 17.8674 37.4714 17.8674ZM7.18856 19.1167C9.62513 19.1167 10.7003 17.5056 10.7003 15.7732C10.7003 13.9186 9.502 12.4692 7.18856 12.4692H3.59378V19.1177H7.18856V19.1167ZM63.7451 25.9319C64.655 26.8193 66.2667 27.4247 67.9175 27.4247C69.5702 27.4247 70.5212 26.8587 70.5212 25.9319C70.5212 25.002 70.0247 24.5189 66.8864 23.9994C64.5289 23.5941 62.1764 22.546 62.1764 19.7241C62.1764 16.701 65.3558 15.2092 68.1647 15.2092C70.5632 15.2092 72.5443 15.6934 73.9918 16.7415L72.213 18.9984C71.4722 18.4738 70.1068 17.8684 68.2888 17.8684C66.512 17.8684 65.6881 18.5143 65.6881 19.3208C65.6881 20.4478 66.4699 20.7308 68.5391 21.0966C71.8025 21.6212 74.3642 22.4651 74.3642 25.6509C74.3642 28.2707 71.6364 30.3265 67.9184 30.3265C65.2757 30.3265 63.0023 29.6816 61.6809 28.2707L63.7451 25.9319ZM46.5179 15.4902H50.1968V24.2774C50.1968 26.0916 51.2689 27.1003 52.9227 27.1003C55.154 27.1003 56.3923 25.2032 56.3923 23.3526V15.4902H60.0662V29.8403H56.5555L56.4734 28.2697C55.6475 29.2753 54.2831 30.1637 52.0948 30.1637C48.4159 30.1637 46.5169 27.7825 46.5169 24.3178V15.4902H46.5179ZM28.7102 27.7027C28.3809 28.108 26.605 30.3255 22.3095 30.3255C18.2592 30.3255 14.9567 27.6653 14.9567 22.6269C14.9567 18.7154 17.7637 15.2082 22.1843 15.2082C26.7692 15.2082 29.0856 18.392 29.0856 22.7451C29.0856 23.0696 29.0856 23.395 29.0426 23.7124H18.6736C18.8388 25.6499 20.1612 27.3004 22.5567 27.3004C24.7891 27.3004 25.9863 26.4565 26.8963 25.6509L28.7102 27.7027ZM0 9.68366H7.35274C12.4341 9.68366 14.5003 12.9917 14.5003 15.6924C14.5003 18.1898 13.302 20.3285 10.6572 21.2553L15.0789 29.8413H10.8634L7.06243 21.8991H3.59378V29.8413H0V9.68366ZM37.5535 15.2082C33.7936 15.2082 30.8184 17.545 30.8184 21.1361C30.8184 22.9099 31.398 24.3178 32.3881 25.286C31.3159 26.0522 30.7353 27.1003 30.7353 28.3091C30.7353 29.5583 31.1918 30.4468 31.9356 31.0522C30.5301 31.7758 29.7043 33.2677 29.7043 34.6776C29.7043 38.3071 33.0508 40 37.3052 40C41.5187 40 45.4859 37.9442 45.4859 34.152C45.4859 31.0097 43.2135 29.5189 39.7458 29.437L36.6466 29.3552C35.0769 29.3178 34.208 28.8721 34.208 27.8644C34.208 27.4227 34.3722 27.0204 34.7876 26.696C35.6135 26.98 36.5625 27.1397 37.5966 27.1397C41.4826 27.1397 44.2886 24.7605 44.2886 21.1735C44.2886 20.0051 43.9582 19.0368 43.4637 18.1888L45.4458 16.699L43.5448 14.5199L41.2734 16.1755C40.1142 15.5296 38.7918 15.2082 37.5535 15.2082Z" fill="black"/>
                    <path d="M41.7979 6.6119C41.7979 8.3614 43.2093 9.77721 44.9552 9.77721C46.698 9.77721 48.1125 8.3614 48.1125 6.6119C48.1125 4.8624 46.698 3.44243 44.9552 3.44243C43.2093 3.44243 41.7979 4.8624 41.7979 6.6119Z" fill="#CE181E"/>
                    <path d="M35.9619 1.31191V8.30807C34.167 7.97857 32.5303 7.03254 31.0227 4.3491L28.0326 5.94805C31.1539 11.5029 35.3062 11.8061 38.5116 11.8061H39.3625V0L35.9619 1.31191Z" fill="black"/>
                    <path d="M74.7205 15.1032H75.0158V13.3536H75.7496V13.1009H73.9857V13.3536H74.7205V15.1032ZM76.0018 15.1032H76.2771L76.3472 13.578L76.9168 14.5109H77.064L77.6426 13.5669L77.7116 15.1032H77.9999L77.9038 13.1009H77.6286L77.0029 14.143L76.3782 13.1009H76.0959L76.0018 15.1032Z" fill="black"/>
                  </svg>
                </div>
                <div className={styles.header_grey_sep}></div>
                <div className="ml-4">
                  <ul className="flex items-stretch">
                    <li className="">
<<<<<<< HEAD
                      <button 
                        className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium"
                        onMouseOver={() => blurEffectIn()}
                        onMouseLeave={() => blurEffectOut()}>
=======
                      <button className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium">
>>>>>>> fee99f4779d5ba45b7aaec30bf5a2f7b56c1b1b2
                        Che cosa facciamo
                      </button>
                    </li>
                    <li>
<<<<<<< HEAD
                      <button 
                        className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium"
                        onMouseOver={() => blurEffectIn()}
                        onMouseLeave={() => blurEffectOut()}>
=======
                      <button className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium">
>>>>>>> fee99f4779d5ba45b7aaec30bf5a2f7b56c1b1b2
                        Inizia
                      </button>
                    </li>
                    <li>
<<<<<<< HEAD
                      <button 
                        className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium"
                        onMouseOver={() => blurEffectIn()}
                        onMouseLeave={() => blurEffectOut()}>
=======
                      <button className="border border-solid border-gray-200 rounded py-1 px-3 mr-6 font-medium">
>>>>>>> fee99f4779d5ba45b7aaec30bf5a2f7b56c1b1b2
                        Scopri Regus
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={styles.toolbox+" "+"flex"}>
                <div className="flex my-7">


                  <div className="relative">

                    <button 
                      className={styles.anim+" p-2 rounded-full text-center relative z-20"}
                      onMouseOver={() => phoneTabShow()}>
                      <FontAwesomeIcon 
                      icon={faPhone} 
                      className="icon fas fa-phone mx-auto"
                      />
                    </button>

                    <div 
                      id="phone-tab" 
                      aria-hidden="true" 
                      className={styles.phone_box+" "+"flex grid-cols-2 bg-white pt-8 px-4 pb-10 rounded-2xl z-10"}
                      onMouseLeave={() => phoneTabHide()}
                      >

                      <div className="md:basis-1/2 px-4">
                        <p className="text-gray-700 font-bold mb-4">
                          Contatta esperto
                        </p>
                        <p className="text-gray-700 text-sm leading-6 mb-4">
                          Il nostro team di specialisti è disponibile 24/7 per aiutarti a trovare la soluzione più adatta al tuo business.
                        </p>
                        <p className="text-2xl font-extralight" style={{color: '#008385'}}>
                          +39 02 8962 6156
                        </p>
                      </div>

                      <div className="md:basis-1/2 px-4">
                        <p className="text-gray-700 font-bold mb-4">
                          Richiedi una chiamata
                        </p>
                        <form>
                          <div className={styles.input_wrapper+" "+"flex justify-between items-center rounded border border-1 border-zinc-200 bg-white py-3 px-4 mb-4"}>
                            <p className={styles.input_info+" "+"align-middle text-sm"}>
                              <span className={styles.flag+" "+"rounded-full mr-3"}></span>
                              <FontAwesomeIcon icon={faChevronDown} className="text-gray-700 mr-2" size="sm"></FontAwesomeIcon>
                              <span className="inline-block align-middle">+39</span>
                            </p>
                            <input type="text" placeholder='Numero di telefono*' className={styles.input+" "+"text-sm"}></input>
                          </div>
                          <button className={styles.call_cta+" "+"w-full rounded-lg text-white py-5 px-10 uppercase font-medium text-sm uppercase block"}>
                            Chiamami
                          </button>
                        </form>
                      </div>

                    </div>
                  </div>

                  <div className="ml-5 pl-5 border-l border-solid border-gray-200">
                    <button className="p-2 rounded-full text-center">
                      <FontAwesomeIcon 
                      icon={faSearch} 
                      className="icon fas fa-search mx-auto"
                      />
                    </button>
                    <p className="inline-block align-middle text-sm">Cerca una sede</p>
                  </div>
                  <div 
                      className="ml-5 pl-5 border-l border-solid border-gray-200"
                      onMouseOver={() => blurEffectIn()}
                      onMouseLeave={() => blurEffectOut()}>
                    <button className={styles.anim+" p-2 rounded-full text-center"}>
                      <FontAwesomeIcon 
                      icon={faUser} 
                      className="icon fas fa-user mx-auto"
                      />
                    </button>
                  </div>
                </div>

              </div>

            </div>
            
            <div id="mobile-nav" className="flex w-full justify-between mx-auto md:hidden">
              
              <div className="flex justify-between items-center w-full my-3 px-3">
                
                <div className="flex items-center">
                  <div className="menu-toggle py-2 px-3">
                    <button className={styles.mobile_nav_menu_toggle_icon}>
                      <img src="https://www.regus.com/-/media/regus/redesign/navigation-icons/top-nav-icons/mobile-nav-icons/navv3icon.ashx"/>
                    </button>
                  </div>
                  <div className="search-icon py-2 px-3 ml-5">
                    <button className={styles.mobile_nav_icon}>
                      <FontAwesomeIcon icon={faSearch} className="icon fas fa-search"></FontAwesomeIcon>
                    </button>
                  </div>
                </div>

                <div>
                  <svg width="78" height="40" viewBox="0 0 78 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.mobile_logo}>
                    <path d="M25.4478 21.2149C25.4478 19.6442 24.2495 17.8674 22.2264 17.8674C19.5426 17.8674 18.6736 20.2072 18.6736 21.2149H25.4478ZM36.3522 32.2984L38.957 32.3802C40.86 32.4217 41.809 33.0675 41.809 34.4785C41.809 36.0916 40.1142 37.0599 37.6786 37.0599C35.0329 37.0599 33.3811 36.0097 33.3811 34.2774C33.3811 32.9452 34.0819 32.3802 34.6625 32.1377C35.199 32.2195 35.7776 32.26 36.3522 32.2984ZM37.4714 17.8674C39.5766 17.8674 40.899 19.2794 40.899 21.1361C40.899 23.0696 39.6187 24.4785 37.5115 24.4785C35.5304 24.4785 34.1669 23.0696 34.1669 21.1361C34.1669 19.2804 35.4053 17.8674 37.4714 17.8674ZM7.18856 19.1167C9.62513 19.1167 10.7003 17.5056 10.7003 15.7732C10.7003 13.9186 9.502 12.4692 7.18856 12.4692H3.59378V19.1177H7.18856V19.1167ZM63.7451 25.9319C64.655 26.8193 66.2667 27.4247 67.9175 27.4247C69.5702 27.4247 70.5212 26.8587 70.5212 25.9319C70.5212 25.002 70.0247 24.5189 66.8864 23.9994C64.5289 23.5941 62.1764 22.546 62.1764 19.7241C62.1764 16.701 65.3558 15.2092 68.1647 15.2092C70.5632 15.2092 72.5443 15.6934 73.9918 16.7415L72.213 18.9984C71.4722 18.4738 70.1068 17.8684 68.2888 17.8684C66.512 17.8684 65.6881 18.5143 65.6881 19.3208C65.6881 20.4478 66.4699 20.7308 68.5391 21.0966C71.8025 21.6212 74.3642 22.4651 74.3642 25.6509C74.3642 28.2707 71.6364 30.3265 67.9184 30.3265C65.2757 30.3265 63.0023 29.6816 61.6809 28.2707L63.7451 25.9319ZM46.5179 15.4902H50.1968V24.2774C50.1968 26.0916 51.2689 27.1003 52.9227 27.1003C55.154 27.1003 56.3923 25.2032 56.3923 23.3526V15.4902H60.0662V29.8403H56.5555L56.4734 28.2697C55.6475 29.2753 54.2831 30.1637 52.0948 30.1637C48.4159 30.1637 46.5169 27.7825 46.5169 24.3178V15.4902H46.5179ZM28.7102 27.7027C28.3809 28.108 26.605 30.3255 22.3095 30.3255C18.2592 30.3255 14.9567 27.6653 14.9567 22.6269C14.9567 18.7154 17.7637 15.2082 22.1843 15.2082C26.7692 15.2082 29.0856 18.392 29.0856 22.7451C29.0856 23.0696 29.0856 23.395 29.0426 23.7124H18.6736C18.8388 25.6499 20.1612 27.3004 22.5567 27.3004C24.7891 27.3004 25.9863 26.4565 26.8963 25.6509L28.7102 27.7027ZM0 9.68366H7.35274C12.4341 9.68366 14.5003 12.9917 14.5003 15.6924C14.5003 18.1898 13.302 20.3285 10.6572 21.2553L15.0789 29.8413H10.8634L7.06243 21.8991H3.59378V29.8413H0V9.68366ZM37.5535 15.2082C33.7936 15.2082 30.8184 17.545 30.8184 21.1361C30.8184 22.9099 31.398 24.3178 32.3881 25.286C31.3159 26.0522 30.7353 27.1003 30.7353 28.3091C30.7353 29.5583 31.1918 30.4468 31.9356 31.0522C30.5301 31.7758 29.7043 33.2677 29.7043 34.6776C29.7043 38.3071 33.0508 40 37.3052 40C41.5187 40 45.4859 37.9442 45.4859 34.152C45.4859 31.0097 43.2135 29.5189 39.7458 29.437L36.6466 29.3552C35.0769 29.3178 34.208 28.8721 34.208 27.8644C34.208 27.4227 34.3722 27.0204 34.7876 26.696C35.6135 26.98 36.5625 27.1397 37.5966 27.1397C41.4826 27.1397 44.2886 24.7605 44.2886 21.1735C44.2886 20.0051 43.9582 19.0368 43.4637 18.1888L45.4458 16.699L43.5448 14.5199L41.2734 16.1755C40.1142 15.5296 38.7918 15.2082 37.5535 15.2082Z" fill="black"/>
                    <path d="M41.7979 6.6119C41.7979 8.3614 43.2093 9.77721 44.9552 9.77721C46.698 9.77721 48.1125 8.3614 48.1125 6.6119C48.1125 4.8624 46.698 3.44243 44.9552 3.44243C43.2093 3.44243 41.7979 4.8624 41.7979 6.6119Z" fill="#CE181E"/>
                    <path d="M35.9619 1.31191V8.30807C34.167 7.97857 32.5303 7.03254 31.0227 4.3491L28.0326 5.94805C31.1539 11.5029 35.3062 11.8061 38.5116 11.8061H39.3625V0L35.9619 1.31191Z" fill="black"/>
                    <path d="M74.7205 15.1032H75.0158V13.3536H75.7496V13.1009H73.9857V13.3536H74.7205V15.1032ZM76.0018 15.1032H76.2771L76.3472 13.578L76.9168 14.5109H77.064L77.6426 13.5669L77.7116 15.1032H77.9999L77.9038 13.1009H77.6286L77.0029 14.143L76.3782 13.1009H76.0959L76.0018 15.1032Z" fill="black"/>
                  </svg>
                </div>
                
                <div className="flex items-center">
                  <div className="phone-icon py-2 px-3 mr-5">
                    <button className={styles.mobile_nav_icon}>
                      <FontAwesomeIcon icon={faPhone} className="icon fas fa-phone"></FontAwesomeIcon>
                    </button>
                  </div>
                  <div className="user-icon py-2 px-3">
                    <button className={styles.mobile_nav_icon}>
                      <FontAwesomeIcon icon={faUser} className="icon fas fa-user"></FontAwesomeIcon>
                    </button>
                  </div>
                </div>

              </div>

            </div>


          </div>
        </div>
        
        <main id="main" className="relative z-10">
          <section id="slideshow" className={styles.slideshow}>
            <div className="container mx-auto">

              <div className={styles.slide+" "+styles.width_adjustment+" mx-auto"}>
                <div className={styles.slide_image+" "+styles.slide_1}>
                </div>
                <div className={styles.slide_caption}>
                  <p className="text-white text-center px-4 text-xs md:text-base mb-2">
                    Da una singola postazione a un intero edificio. A te la scelta.
                  </p>
                  <h1 className="text-white text-center text-4xl md:text-5xl font-bold leading-relaxed">
                    Uffici a modo tuo<span className={styles.red_dot}>.</span>
                  </h1>
                </div>
              </div>

              <div id="slider-extended-controls-upper" className={styles.slider_extended_controls_upper+" "+"rounded-t-2xl bg-white mx-auto"}>
                <ul className="py-7 px-6 md:pt-8 md:px-11 md:pb-6 flex md:justify-center">
                  <li className={styles.active+" "+"text-xs mr-8 md:pb-4 border-b-2 border-b-transparent font-semibold"}>
                    <img src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionofficespace.ashx" className={styles.slider_controls_icon+" "+"inline-block mr-4"}/>
                    Uffici
                  </li>
                  <li className="text-xs mr-8 md:pb-4 border-b-2 border-b-transparent font-semibold hidden md:block">
                    <img src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutioncoworking.ashx" className={styles.slider_controls_icon+" "+"inline-block mr-4"}/>
                    Coworking
                  </li>
                  <li className="text-xs mr-8 md:pb-4 border-b-2 border-b-transparent font-semibold hidden md:block">
                    <img src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionvirtualoffice.ashx" className={styles.slider_controls_icon+" "+"inline-block mr-4"}/>
                    Uffici virtuali
                  </li>
                  <li className="text-xs mr-8 md:pb-4 border-b-2 border-b-transparent font-semibold hidden md:block">
                    <img src="https://www.regus.com/-/media/regus/redesign/secondary-level-icons/solutionmeetingrooms.ashx" className={styles.slider_controls_icon+" "+"inline-block mr-4"}/>
                    Sale riunioni
                  </li>
                </ul>
              </div>

              <div id="slider-extended-controls-lower" className={styles.slider_extended_controls_lower+" "+"rounded-b-2xl mx-auto p-4 md:px-8 md:py-6 shadow-2xl"}>
                <form>
                  <div className="flex">
                    <div className={styles.input_wrapper+" "+"flex justify-between items-center rounded-lg border border-1 border-zinc-200 mr-4 bg-white py-4 md:py-1.5 px-4"}>
                      <input type="text" placeholder='Cerca qui' className={styles.input+" "+"text-sm"}></input>
                      <p className={styles.input_info+" "+"align-middle text-sm"}>
                        <span className="underline">Cerca nelle vicinanze</span>&nbsp;
                        <img src="https://www.regus.com/dist/regus/static/media/location-icon.e59dd10f.svg" className="inline-block"/>
                      </p>
                    </div>
                    <button className={styles.search_cta+" "+"rounded-lg text-white py-5 px-10 uppercase font-medium text-sm hidden md:block"}>
                      <FontAwesomeIcon icon={faSearch} className="icon fas fa-search inline-block mr-1"></FontAwesomeIcon>&nbsp;
                      Cerca
                    </button>
                  </div>
                </form>
              </div>

            </div>
          </section>

          <section id="cards">
            <div className="container mx-auto">
              <div className={styles.width_adjustment+" mx-auto flex flex-wrap md:flex-nowrap grid-cols-1 md:grid-cols-6 items-stretch gap-8 mb-8 px-6 md:px-0"}>

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/platform_icon.ashx"
                  alt="Regus solutions icon"
                  title="Le nostre soluzioni"
                  desc="Esplora la nostra gamma di prodotti e servizi"
                />

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/expert_icon.ashx"
                  alt="Regus enquiry icon"
                  title="Parla con noi"
                  desc="Richiedi consigli ai nostri esperti, 24/7"
                />

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/workspace_icon.ashx"
                  alt="Regus meeting rooms booking icon"
                  title="Prenota spazi di lavoro"
                  desc="Prenota subito sale riunioni e uffici temporanei"
                />

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/virtual_icon.ashx"
                  alt="Regus virtual office icon"
                  title="Configura un ufficio virtuale"
                  desc="Inizia oggi a sviluppare una presenza reale"
                />

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/membership_icon.ashx"
                  alt="Regus membership icon"
                  title="Acquista una membership"
                  desc="Accedi on demand a migliaia di sedi nel mondo"
                />

                <Card 
                  image="https://www.regus.com/-/media/regus/redesign/primary-level-icons/app_icons.ashx"
                  alt="Regus APP icon"
                  title="Esplora la nostra app"
                  desc="Scarica l'app e inizia subito"
                />

              </div>
            </div>
          </section>

        </main>
        
      </div>
    </div>
  )
}
