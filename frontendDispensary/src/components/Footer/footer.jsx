import React from 'react'
import './footer.css'
import PhoneIcon from '@mui/icons-material/Phone';
import LanguageIcon from '@mui/icons-material/Language';
import CloudIcon from '@mui/icons-material/Cloud';
const Footer = () => {

    const todayDate = new Date()
    return (
        <div className='footer'>
            <div className='foooter-left'>
                <img className='footer-logo' src='https://th.bing.com/th/id/OIP.fUG5VxNo5nc4vIhJrZIBwwAAAA?rs=1&pid=ImgDetMain' />
                <div className='footer-text-white'>National Institute of Technology,</div>
                <div className='footer-text-white'>Jamshedpur,</div>
                <div className='footer-text-smaller'> Jharkhand </div>
                <div className='footer-text-smaller'><PhoneIcon /> 0657-2373629</div>
                <div className='footer-text-smaller'><LanguageIcon /> www.nitjsr.ac.in</div>
            </div>

            <div className='foooter-center'>
                <div className='important-link'>Important Links</div>
                <a href='https://nitjsr.ac.in/Students/Anti-Ragging' target='_blank'>Anti-Ragging Initiative</a>
                <a href='https://www.nitjsr.ac.in/Students/Placements' target='_blank'>Career Counselling and Placement Section</a>
                <a href='https://rtionline.gov.in/RTIMIS/login/' target='_blank'>Right To Information</a>
                <a href='https://nitjsr.ac.in/' target='_blank'>Special Cell</a>
                <a href='https://nitjsr.ac.in/' target='_blank'>Grievance Cell</a>
                <a href='https://nitjsr.ac.in/' target='_blank'>Contact Us</a>
                <a href='https://nitjsr.ac.in/' target='_blank'>College Official Website</a>

            </div>

            <div className='footer-right'>
                <div className='footer-right-name'><CloudIcon/>Jamshedpur</div>
                <div className='today-date-footer'>{todayDate.toDateString()}</div>
            </div>
        </div>
    )
}

export default Footer