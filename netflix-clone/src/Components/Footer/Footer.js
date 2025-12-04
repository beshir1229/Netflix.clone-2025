import React from 'react'
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./footer.css";


const Footer = () => {
  return (
    <div className='footer_outer_container'>
        <div className='footer_inner_container'>
            <div className='footer_icons'>
                <FacebookOutlinedIcon/>
                <InstagramIcon/>
                <YouTubeIcon/>

            </div>
            <div className='footer_data'>
                <ul>
                <li> Audio Description</li>
                <li>Investor Relations</li>
                <li>Legal Notice</li>
                </ul>
            </div>
            <div>
            <ul>
            <li>Help Center</li>
            <li>Term of Uses</li>
            <li>Corporate Information</li>
            </ul>
            </div>
            <div>
            <ul>
            <li>Media center</li>
            <li>privacy</li>
            <li>contact us</li>
            </ul>
            </div>
            <div className='service_code'>
            <p>Service Code</p>
            </div>
            <div className='copy-write'>
                &copy; 1997-2024 Netflix, Inc.

            </div>

        </div>

    </div>
  )
}

export default Footer