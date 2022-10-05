import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Component/Navbar";
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import Product from '../../Component/Product';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openTab: 1,
    };

    this.handleChangeOpenTab = this.handleChangeOpenTab.bind(this);
  }

  handleChangeOpenTab(value) {
    console.log("Open Tab ", this.state.openTab);
    console.log("Value ", value);
    this.setState({
      ...this.state,
      openTab: value,
    });
  }
  render() {
    return (
      <div className="bg-white">
        <Navbar />
        <div className="pt-20 bg-gray-400">
          <button class="ml-14 inline-flex text-white px-6 py-2 items-center bg-red-600 border-0 focus:outline-none hover:bg-red-700 rounded text-base mt-4 md:mt-0">
            Belanja
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        <div className="bg-white pl-14">
          <nav class="flex" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
              <li class="inline-flex items-center">
                <Link  to="/"class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-current="page">
                <div class="flex items-center">
                  <svg
                    class="w-6 h-6 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="ml-1 text-sm font-medium text-red-500 md:ml-2 dark:text-gray-400">
                    HARIO CAFE PRESS SLIM GREY 240ML
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* detail produk */}

        <section class="text-gray-600 bg-white body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="lg:w-4/5 mx-auto flex flex-wrap">
              <img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              />
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 class="text-gray-500 text-xl title-font font-medium mb-1">
                  HARIO CAFE PRESS SLIM GREY 240ML
                </h1>
                <h2 class="text-sm title-font text-gray-500 tracking-widest">
                  UbruKopi
                </h2>
                <div class="flex mb-2">
                  <span class="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      class="w-4 h-4 text-yellow-300"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span class="text-gray-600 ml-3">(4)</span>
                  </span>
                </div>

                <div class="flex flex-wrap justify-between">
                  <span class="title-font font-medium text-xl text-red-500">
                    Rp 480.000
                  </span>

                  <span class="title-font text-md flex flex-wrap text-blue-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    Tersedia
                  </span>
                </div>

                <div className="flex items-center">
                  <button className="px-4 border border-gray-400 py-1 text-lg">
                    -
                  </button>
                  <input
                    className="w-24 border h-9 border-gray-400 ml-1"
                    name="item"
                    id="item"
                    type="Number"
                  />
                  <button className="px-4 border border-gray-400 py-1 text-lg ml-1">
                    +
                  </button>

                  <button className="bg-red-600 px-5 py-2 text-white ml-3">
                    Tambah Ke Keranjang
                  </button>
                  <button className="px-2 bg-gray-200 py-2 text-lg ml-1 text-red-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                      />
                    </svg>
                  </button>
                </div>
                <p class="leading-relaxed mt-3">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry
                  +1 seitan poutine tumeric. Gastropub blue bottle austin
                  listicle pour-over, neutra jean shorts keytar banjo tattooed
                  umami cardigan.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* slider */}
        <div className=" w-2/4 ml-10">

        <OwlCarousel items={3}  
          className="owl-theme"  
          loop  
          nav  
          margin={8} >  
           <div ><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
           <div><img
                alt="ecommerce"
                class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src="https://ik.imagekit.io/o93orda5ze/image_61_uJsjntw8X.png?ik-sdk-version=javascript-1.4.3&updatedAt=1664911120618"
              /></div>  
      </OwlCarousel>  
        </div>
        {/*  */}

        {/* desc */}
        <section className="container mx-auto px-5 py-5 text-gray-600 body-font pt-36 sm:pt-28 md:pt-24 lg:pt-24">
          <div className="flex flex-wrap mt-2">
            <div className="w-full">
              <ul className="flex mb-0 list-none p-2 flex-wrap" role="tablist">
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 block leading-normal " +
                      (this.state.openTab === 1
                        ? "text-red-500 border-b-2 border-b-red-500"
                        : "text-gray-500 border-b-2 border-b-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleChangeOpenTab(1);
                    }}
                    data-toggle="tab"
                    href="#link1"
                    role="tablist"
                  >
                    DESKRIPSI
                  </a>
                </li>
                <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                  <a
                    className={
                      "text-xs font-bold uppercase my-1 px-1 py-1 sm:px-3 sm:py-2 md:px-5 md:py-3 lg:px-0-5 lg:py-3 block leading-normal " +
                      (this.state.openTab === 2
                        ? "text-red-500 border-b-2 border-b-red-500"
                        : "text-gray-500 border-b-2 border-b-white")
                    }
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleChangeOpenTab(2);
                    }}
                    data-toggle="tab"
                    href="#link2"
                    role="tablist"
                  >
                    INFORMASI
                  </a>
                </li>
              </ul>
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6">
                <div className="px-4 py-5 flex-auto">
                  <div className="tab-content tab-space">
                    <div
                      className={this.state.openTab === 1 ? "block" : "hidden"}
                      id="link1"
                    >
                      <div>
                        <p>
                          French Press dari Hario berbahan dasar kaca berwarna
                          abu-abu di desain dengan bentuk yang ramping dan
                          menarik. sangat cocok untuk membuat 1-2 gelas kopi.
                          French Press merupakan salah satu teknik seduh manual
                          yang simple, cukup untuk menyeduh air dan steep selama
                          empat menit sebelum kamu menekan knob agar ampas bisa
                          turun ke dasar.
                        </p>
                        <p>Spesifikasi :</p>
                        <p>Dimensi : 11x16.5x8cm</p>
                        <p>Berat : 350gr</p>
                        <p>Kapasitas : (240ml)</p>
                        <p>Warna : Abu-Abu/Gray</p>
                        <p>Brand : Hario</p>
                      </div>
                    </div>
                    <div
                      className={this.state.openTab === 2 ? "block" : "hidden"}
                      id="link2"
                    >
                      <div>
                        <p>
                          French Press dari Hario berbahan dasar kaca berwarna
                          abu-abu di desain dengan bentuk yang ramping dan
                          menarik. sangat cocok untuk membuat 1-2 gelas kopi.
                          French Press merupakan salah satu teknik seduh manual
                          yang simple, cukup untuk menyeduh air dan steep selama
                          empat menit sebelum kamu menekan knob agar ampas bisa
                          turun ke dasar.
                        </p>
                        <p>Spesifikasi :</p>
                        <p>Dimensi : 11x16.5x8cm</p>
                        <p>Berat : 350gr</p>
                        <p>Kapasitas : (240ml)</p>
                        <p>Warna : Abu-Abu/Gray</p>
                        <p>Brand : Hario</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*  */}

        {/* recomend */}

        <section class="text-gray-600 body-font overflow-hidden">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-10">
              <h1 class="text-xl font-medium title-font mb-2 text-gray-500">
                REKOMENDASI UNTUK ANDA
              </h1>
              <span className="border border-b-red-600 w-2/3 ml-48"></span>
            </div>
            <Product />
          </div>
        </section>
      </div>
    );
  }
}
