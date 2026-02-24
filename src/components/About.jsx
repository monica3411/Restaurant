import React from 'react'
import { Link } from 'react-router-dom';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">About Us</h1>
                    <p>The only thing we're serious about is food.</p>
                 </div>
        <p className='mid'>
            We are a family-owned restaurant that has been serving delicious meals for over 20 years. Our passion is creating memorable dining experiences for our customers.</p>   
<Link to={"/"}>Explore Menu <span>
    <HiOutlineArrowNarrowRight/>
    </span></Link>
</div>
<div className="banner">
    <img src="/about.png" alt="about"/>
</div>
</div>
    </section>
  )
}

export default About