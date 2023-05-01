import { Component } from "react";
class customerHome extends Component {
  render() {
    return (
      <div class="">
        <section class="">
          <div class="text-center bg-white text-gray-800 py-20 px-6">
            <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight uppercase mb-8 drop-shadow-md ">HOTELS IN SRI LANKA<br />
              <span class="text-blue-950 font-serif font-light  ">JETWING HOTELS </span>
              {/* <span class="text-orange-500 animate-pulse "> PizzaMania </span> */}
            </h1>
          </div>
        </section>

        <div class=" container mx-auto px-5 py-2 lg:px-32 lg:pt-12 mb-5 grid grid-cols-3 content-center">
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/16232.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/6498.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="shadow-xl card w-96 bg-base-100">
            <figure><img src="https://wallpapershome.com/images/pages/pic_h/336.jpg" alt="Shoes" /></figure>
            <div className="card-body">
              <h2 className="justify-center card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="justify-center card-actions">
                <button className="btn btn-primary ">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
        
        <div class="mb-24 container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/colombo-hotel-category-744x653.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2018/07/mermaid-hotel-kalutara.jpg"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2017/10/Colombo-7-categorythumbnail.jpg" />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQceBMogAcpWxMh3HK4QGYZrGPKlIwN-Tximyd0rj8c-4sDIWZ7EGdrKe_G6jaFPIE_iSs&usqp=CAU"
                />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/wp-content/uploads/2019/06/bentota-hotels-category-744x653-1.jpg" />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src="https://www.jetwinghotels.com/jetwinglake/wp-content/uploads/sites/8/2017/11/lake-Gallery2.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default customerHome;