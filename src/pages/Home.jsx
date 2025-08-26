
// import { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import dubaiListings from '../components/dubaiListings';
// import ListingItem from '../components/ListingItem';

// export default function Home() {
//   const [offers, setOffers] = useState([]);
//   const [rentals, setRentals] = useState([]);
//   const [sales, setSales] = useState([]);
//   const navigate = useNavigate();

//   const images = [
//     '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg',
//     '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg'
//   ];

//   useEffect(() => {
//     setOffers(dubaiListings.filter(listing => listing.offer));
//     setRentals(dubaiListings.filter(listing => listing.type === 'rent'));
//     setSales(dubaiListings.filter(listing => listing.type === 'sale'));
//   }, []);

//   const first3 = (listings) => listings.slice(0, 3);

//   // ✅ navigate to listing details
//   const handleCardClick = (listingId) => {
//     navigate(`/listing/${listingId}`);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-6 flex flex-col gap-10">
//       {/* Top text section */}
//       <div className="flex flex-col gap-4 text-left">
//         <h1 className="text-6xl lg:text-7xl font-bold text-slate-700 leading-snug">
//           Find your next{" "}
//           <span className="text-5xl lg:text-5xl font-extrabold tracking-wide text-transparent 
//               bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
//             perfect
//           </span>
//           <br />
//           place with ease
//         </h1>

//         <p className="text-lg lg:text-xl text-gray-500">
//           Sahand Estate is the best place to find your next perfect place to live.<br />
//           We have a wide range of properties for you to choose from.
//         </p>
//         <button
//           onClick={() => navigate('/search')}
//           className="mt-7 px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400 w-40"
//         >
//           Let's get started...
//         </button>
//       </div>

//       {/* Image carousel below text */}
//       <div>
//         <Swiper
//           modules={[Navigation, Pagination, Autoplay]}
//           navigation
//           pagination={{ clickable: true }}
//           autoplay={{ delay: 2500, disableOnInteraction: false }}
//           spaceBetween={10}
//           slidesPerView={2}
//           breakpoints={{
//             640: { slidesPerView: 2 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 4 }
//           }}
//         >
//           {images.map((img, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={img}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-80 object-cover rounded-lg shadow-lg"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Recent Offers */}
//       {offers.length > 0 && (
//         <section>
//           <div className="flex flex-col items-start gap-1 mb-4">
//             <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
//             <Link to="/search?type=offer" className="text-blue-600 hover:underline text-sm">
//               Show more offers
//             </Link>
//           </div>
//           <div className="flex flex-wrap gap-6">
//             {first3(offers).map(listing => (
//               <div
//                 key={listing.id}
//                 onClick={() => handleCardClick(listing.id)}
//                 className="cursor-pointer w-full sm:w-80"
//               >
//                 <ListingItem listing={listing} cardHeight="h-80" />
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Recent Rentals */}
//       {rentals.length > 0 && (
//         <section>
//           <div className="flex flex-col items-start gap-1 mb-4">
//             <h2 className="text-2xl font-semibold text-slate-700">Recent Places for Rent</h2>
//             <Link to="/search?type=rent" className="text-blue-600 hover:underline text-sm">
//               Show more places for rent
//             </Link>
//           </div>
//           <div className="flex flex-wrap gap-6">
//             {first3(rentals).map(listing => (
//               <div
//                 key={listing.id}
//                 onClick={() => handleCardClick(listing.id)}
//                 className="cursor-pointer w-full sm:w-80"
//               >
//                 <ListingItem listing={listing} cardHeight="h-80" />
//               </div>
//             ))}
//           </div>
//         </section>
//       )}

//       {/* Recent Sales */}
//       {sales.length > 0 && (
//         <section>
//           <div className="flex flex-col items-start gap-1 mb-4">
//             <h2 className="text-2xl font-semibold text-slate-700">Recent Places for Sale</h2>
//             <Link to="/search?type=sale" className="text-blue-600 hover:underline text-sm">
//               Show more places for sale
//             </Link>
//           </div>
//           <div className="flex flex-wrap gap-6">
//             {first3(sales).map(listing => (
//               <div
//                 key={listing.id}
//                 onClick={() => handleCardClick(listing.id)}
//                 className="cursor-pointer w-full sm:w-80"
//               >
//                 <ListingItem listing={listing} cardHeight="h-80" />
//               </div>
//             ))}
//           </div>
//         </section>
//       )}
//     </div>
//   );
// }


// src/pages/Home.jsx
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import dubaiListings from '../components/dubaiListings';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offers, setOffers] = useState([]);
  const [rentals, setRentals] = useState([]);
  const [sales, setSales] = useState([]);
  const navigate = useNavigate();

  const images = [
    '/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg',
    '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg'
  ];

  useEffect(() => {
    setOffers(dubaiListings.filter(listing => listing.offer));
    setRentals(dubaiListings.filter(listing => listing.type === 'rent'));
    setSales(dubaiListings.filter(listing => listing.type === 'sale'));
  }, []);

  const first3 = (listings) => listings.slice(0, 3);

  // Navigate to listing details page
  const handleCardClick = (id) => {
    navigate(`/listing/${id}`);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 flex flex-col gap-10">
      {/* Top text section */}
      <div className="flex flex-col gap-4 text-left">
        <h1 className="text-6xl lg:text-7xl font-bold text-slate-700 leading-snug">
          Find your next{" "}
          <span className="text-5xl lg:text-5xl font-extrabold tracking-wide text-transparent 
              bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 drop-shadow-lg">
            perfect
          </span>
          <br />
          place with ease
        </h1>

        <p className="text-lg lg:text-xl text-gray-500">
          Sahand Estate is the best place to find your next perfect place to live.<br />
          We have a wide range of properties for you to choose from.
        </p>
        <button
          onClick={() => navigate('/search')}
          className="mt-7 px-3 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-400 w-40"
        >
          Let's get started...
        </button>
      </div>

      {/* Image carousel below text */}
      <div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={10}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 }
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Recent Offers */}
      {offers.length > 0 && (
        <section>
          <div className="flex flex-col items-start gap-1 mb-4">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Offers</h2>
            <Link to="/search?type=offer" className="text-blue-600 hover:underline text-sm">
              Show more offers
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {first3(offers).map(listing => (
              <div
                key={listing.id}
                onClick={() => handleCardClick(listing.id)}
                className="cursor-pointer w-full sm:w-80"
              >
                <ListingItem listing={listing} cardHeight="h-80" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent Rentals */}
      {rentals.length > 0 && (
        <section>
          <div className="flex flex-col items-start gap-1 mb-4">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Places for Rent</h2>
            <Link to="/search?type=rent" className="text-blue-600 hover:underline text-sm">
              Show more places for rent
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {first3(rentals).map(listing => (
              <div
                key={listing.id}
                onClick={() => handleCardClick(listing.id)}
                className="cursor-pointer w-full sm:w-80"
              >
                <ListingItem listing={listing} cardHeight="h-80" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Recent Sales */}
      {sales.length > 0 && (
        <section>
          <div className="flex flex-col items-start gap-1 mb-4">
            <h2 className="text-2xl font-semibold text-slate-700">Recent Places for Sale</h2>
            <Link to="/search?type=sale" className="text-blue-600 hover:underline text-sm">
              Show more places for sale
            </Link>
          </div>
          <div className="flex flex-wrap gap-6">
            {first3(sales).map(listing => (
              <div
                key={listing.id}
                onClick={() => handleCardClick(listing.id)}
                className="cursor-pointer w-full sm:w-80"
              >
                <ListingItem listing={listing} cardHeight="h-80" />
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
