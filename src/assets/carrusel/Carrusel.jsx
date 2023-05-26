import "carrusel.scss";
import { useEffect, useState } from 'react';
// import './App.css';
import axios from 'axios';
import { Autoplay, Pagination } from 'swiper';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import Card from './assets/Card'


export const Carrusel = () => {
    const[pokemons, setPokemons] = useState([])

    useEffect(()=> {
      const getPokemons = async () => {
        const url = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=64';
        const res = await axios.get(url)
        console.log(res.data)
        setPokemons(res.data.results)
        }

        getPokemons()
    }, [])

    console.log({pokemons})
  return (
    <div className='app'>
    <div className='container'>
      <div className='swiperContainer'>
        <Swiper
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: "pagination",
          clickable: true,
        }}
        slidesPerView={4}
        breakpoints={{
          "@0.00":{
            slidesPerView: 1,
            spaceBetween: 25,
          },
          "0.50": {
            slidesPerView: 1.25,
            spaceBetween: 25,
          },
          "1.00": {
            slidesPerView: 2,
            spaceBetween: 25,
          },
          "1.25":{
            slidesPerView: 2.5,
            spaceBetween: 20,
          },
          "1.50":{
            slidesPerView: 3,
            spaceBetween: 30,
          },
          "1.75":{
            slidesPerView: 4,
            spaceBetween: 20,
          }
        }}
        >
          {pokemons?.map((pokemon)=>(
            <SwiperSlide key={pokemon?.url}>
              <Card url={pokemon?.url}/>
            </SwiperSlide>
          ))}

        </Swiper>
      </div>
    </div>
    <div className='pagination'/>
   </div>
  
  )
}
