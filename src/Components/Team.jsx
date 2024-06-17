import React from 'react';
import mem1 from '../images/sid.jpeg';
import mem2 from '../images/yuvraj.jpg';
import mem3 from '../images/sahil.jpg';
import mem4 from '../images/jayam.jpg';
import mem5 from '../images/mandakani.jpeg';
import mem6 from '../images/ankit.jpeg';
import otani from '../images/otani.png';
import kiit from '../images/kiit.png';
import Lottie from 'lottie-react';
import team from '../images/team.json';
import { Link } from 'react-router-dom';

function Team() {
    const style = {
        width: '100px',
    };
    const membersUrl = {
        Sahil : 'https://res.cloudinary.com/dvg0eo991/image/upload/v1718645144/collaborators/sahil_yqvcy0.jpg',
        Siddhartha:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718645144/collaborators/sid_o2jloo.jpg',
        Yuvraj:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718646214/collaborators/yuvraj_ohu1jv.jpg',
        jayam:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718645145/collaborators/jayam_hqcksf.jpg', 
        mandakani:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718645145/collaborators/mandakani_xhbh72.jpg',
        ankit:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718645146/collaborators/ankit_ukoqtc.jpg',
        Siddhant:'https://res.cloudinary.com/dvg0eo991/image/upload/v1718646468/collaborators/sidhant_fl0seu.jpg'
    }
    const teamMembers = [
        { img: membersUrl.Yuvraj, link: 'https://www.linkedin.com/in/yuvraj229/' },
        { img: membersUrl.Siddhartha, link: 'https://www.linkedin.com/in/siddhartha-kumar-748751223/' },
        { img: membersUrl.Sahil, link: 'https://www.linkedin.com/in/sahil-kumar-522322249/' },
        { img: membersUrl.jayam, link: 'https://www.linkedin.com/in/jayam-gupta-806a2b242/' },
        { img: membersUrl.mandakani, link: 'https://www.linkedin.com/in/mandakani-mishra-8617771a8/' },
        { img: membersUrl.ankit , link: 'https://www.linkedin.com/in/iamsoankitt/' },
        { img: membersUrl.Siddhant, link:'https://www.linkedin.com/in/sidhant-raj'}
    ];

    return (
        <div className='flex flex-col gap-5 p-5'>
            <div className='flex flex-col h-1/4'>
                <div className='flex justify-center mb-6'>
                    <Lottie style={style} animationData={team} />
                </div>
                <div className='flex justify-center text-2xl md:text-4xl font-semibold'>
                    Our Team is like no other.
                </div>
                <div className='flex justify-center items-center mt-8 text-center'>
                    <span className='w-full sm:w-3/4 lg:w-2/3'>
                        The success of this project is a testament to the dedication, expertise, and synergy of our dynamic team. Comprising diverse professionals, each member brought unique skills and perspectives, contributing to a well-rounded and innovative approach. Here's a glimpse into the team that made this project possible:
                    </span>
                </div>
            </div>
            <div className='mt-10 h-3/4 flex flex-col items-center'>
                <div className='flex h-auto items-center justify-center'>
                    <div className='flex flex-wrap justify-center w-full sm:w-4/5'>
                        {teamMembers.map((member, index) => (
                            <div
                                key={index}
                                className={`w-1/2 md:w-1/4 xl:w-1/7 flex justify-center p-2 ${
                                    index % 2 === 0 ? 'translate-y-12' : ''
                                }`}
                            >
                                <Link to={member.link} target='_blank' rel='noopener noreferrer'>
                                    <div className='h-full border-2 w-full flex justify-center items-center rounded-2xl hover:scale-105 hover:shadow-lg duration-200'>
                                        <img
                                            src={member.img}
                                            alt={`Team member ${index + 1}`}
                                            className='w-full h-full object-cover  rounded-2xl'
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex flex-col mt-20'>
                    <div className='flex justify-center items-center mb-5'>
                        <span className='text-2xl md:text-4xl font-semibold'>
                            Collaborators
                        </span>
                    </div>
                    <div className='flex flex-wrap justify-evenly gap-10'>
                        <div className='h-full flex justify-center items-center'>
                            <img width={150} md-width={200} src={kiit} alt='KIIT' />
                        </div>
                        <div className='h-full flex justify-center items-center'>
                            <img width={200} md-width={300} src={otani} alt='Otani' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
