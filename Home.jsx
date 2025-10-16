import React from 'react'
import "./home.css"

const Home = () => {
  return (
   <>
   <header>
    <h2>AleX</h2>
    <ol>
        <li className='li'>Home</li>
        <li className='li'>About me</li>
        <li className='li'>Services</li>
        <li className='li'>Portfolio</li>
        <li className='li'>Contact</li>
    </ol>
    <button id='button'>connect with me</button>
   </header>
<div className="box">
   <img id='i' src="./img1.jpg" alt="" />
</div>
<h1 id='h1'> <samp>Iam Alex Bennett</samp>, frontend<br />  developer based in USA.</h1>
<p id='p'>I am a web developer from cromfonria,USA in 10 years of experience in multiple <br /> companies like Microsoft,Tesla and Apple </p>
<div className="bo">
<button className="bt">connect with me </button>
<button className="b4"> My resume</button>
</div>

<h1>About me</h1>
<div className="main">
    <div className="sec">
        <img id='img' src="./img2.jpg" alt="" />
    </div>
    <div className="sec">
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore perspiciatis ex, <br /> consequuntur totam voluptas pariatur minus odit. Quod, dolore soluta. Excepturi fugiat aspernatur suscipit nemo, <br /> minus quo quos asperiores adipisci!</p>
    <p style={{color:"white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Saepe quibusdam beatae, a aperiam dolorum quasi ab debitis esse, provident ipsa recusandae.</p>
    <ul>
        <div className="d">
        <li className='o'>Html&Css</li>
        <h3 className='h3'></h3>
        </div>
        <div className="d">

        <li className='o'>React js</li>
        <h3  className='h3'></h3>
        </div>

        <div className="d">

        <li className='o'>Javascript</li>
        <h3  className='h3'></h3>
        </div>

        <div className="d">

        <li className='o'>Node js</li>
        <h3  className='h3'></h3>
        </div>

    </ul>
    </div>
</div>
   
   </>
  )
}

export default Home