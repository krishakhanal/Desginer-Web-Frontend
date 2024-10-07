import React from 'react'
import FooterTop from '../footer/FooterTop'
import { Heading } from '../Heading'
import './explore.css'
import bedImage from '../images/explore-item-01.jpg'
import catImage from '../images/explore-item-02.jpg'
import girlImage from '../images/explore-item-03.jpg'
import greysofaImage from '../images/pagination-left-image.jpg'
import yellowofaImage from '../images/pagination-right-image.jpg'

const ExploreWork = () => {
  return (
    <div>
        <div className="explore-work-section">
        <Heading redtext="EXPLORE" whitetext="OUR WORK" />
      </div>
      <div className='explore-work-middle'>
        <div className='image-section'>
      <h1>Minimalistic Design for 2 bedrooms</h1>
      <img src={bedImage}></img>
      </div>
<div className='image-below-text'></div>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
      <p>This is an Interior Designer HTML5 Template that is 100% totally free to download, edit and use for your commercial or business websites. You are NOT allowed to redistribute the downloadable ZIP file of this template on any other website. Please contact TemplateMo website for more information. Thank you. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
<div className='explore-work-image'>
<img src={catImage}></img>
<img src={girlImage}></img>
</div>
<div className='text-explore'>
<h1>Incredible Work</h1>
<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto toril beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequida nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt.
</p>
</div>
</div>
<div className='text-image'>
<div className='small-image-text'>
    <img src={greysofaImage} ></img>
    <div className='small-text'>
        <h3>Minimalistic Living Room</h3>
         <p> Interior Design</p>
    </div>

</div>
<div className='small-image-text'>
    <img src={yellowofaImage} ></img>
    <div className='small-text'>
        <h3>Minimalistic Living Room</h3>
         <p> Interior Design</p>
    </div>

</div>
</div>



      <FooterTop/>
  
    </div>
  )
}

export default ExploreWork