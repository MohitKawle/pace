import React from 'react'
import Navbar from '../components/Navbar'
import News from '../components/News'

const Homepage =() => {
    const getData=async()=>{
        let res = await fetch(
            `https://newsapi.org/v2/everything?q=${this.props.newsName}&apiKey=39c3025e706146f99c1db7b6e2295f6e`
          );
          let data = await res.json();
          console.log(data)
    }
  return (
    <>
    <Navbar/>
    
    <News newsName="featured"/>
    <News newsName="trending"/>
    </>
  )
}

export default Homepage