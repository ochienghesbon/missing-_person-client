import React from 'react'

export default function About() {
  return (
    <div>
        <h1 className='about_us'>About Us</h1>
        <div>
            <section className='mission_vision'>
              <div className='mission_container'>
                <p className='mission'>MISSION</p>
                <p>To promote security by use of communial responsibility.</p>
              </div>
              <div className='mission_container'>
                <p className='mission'>VISION</p>
                <p>To address the crisis of missing persons and human tarficking.</p>
              </div>
            </section>
            <section className='image_values' >
                <div>
                    <img src={"https://image.shutterstock.com/image-vector/old-ripped-missing-paper-poster-260nw-1446885989.jpg"}default height={300} width={360} />
                </div>
                <div className='vision_container'>
                    <p className='vision'>INCASE SOMEONE GOES MISSING!</p>
                    <ul>
                        <li> Call 100 to inform our team. </li>
                        <li>Report to the nearest police station.</li>
                        <li>Get the person,s most recent photo.</li>
                        <li>Login to Missing person application.</li>
                        <li>Report that the person is missing.</li>
                        <li>Provide the neccessary deatails.</li>
                    </ul>
                </div>
            </section>

        </div>
    </div>
  )
}