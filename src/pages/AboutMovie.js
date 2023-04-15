import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Rating from '../components/Rating'
const defImg= require('../img/def.jpg')

export default function AboutMovie({subMovies}) {
    const {title} = useParams()
    const [targetMovie, setTargetMovie]= useState(subMovies)
    useEffect(()=>{
        setTargetMovie(targetMovie.find(movie=> movie.title === title))
    },[])
    
    
  return (
    
    <div className='row'>
            <h1>{targetMovie.title}</h1>
        <div className='col-4'>
            <img style={{width:'80%',height:400,objectFit:'cover'}} src={targetMovie.posterURL || defImg} alt={targetMovie.title} />
        </div>
        <div className='col-4'>
            <p >{targetMovie.description}</p>
        </div>
        <div className='col-4 border-start border-1 border-secondary'>
            <div className=' pb-4'>
            <p className='text-primary fs-5'>Rating :</p>
            <Rating movie={targetMovie} />
            </div>
            <div className='col-4 border-top border-2'>
                <p className='text-primary fs-5'>Genre :</p>
                <h5>{targetMovie.genres}</h5>
            </div>
            {targetMovie.trailer ?
            <a target='blanc' className='btn btn-success mt-4' href={targetMovie.trailer}>Movie trailer</a>:
            <p className='btn btn-danger'>No movie trailer</p>
            }
            </div>
    
    
    {/* 
      */}
    </div>
  )
}
