'use client'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';
    

export default function Carousel (){

    const images = [
        {original:'/politeh/1_1_2.jpg',
        originalHeight:500,
        originalWidth:500   
    },
        {original:'/politeh/21767458.jpg',
        originalHeight:500,
        originalWidth:500  
    },
        {original:'/politeh/273265558_247281990798547_4658736952873659627_n-1024x684.jpg',
        originalHeight:500 ,
        originalWidth:500   
    },
        {original:'/politeh/thumb-big-420x305-8724.jpg',
        originalHeight:500,
        originalWidth:500   
   
    },

        {original:'/politeh/u2.jpg',
        originalHeight:500,
        originalWidth:500   
    },  

      

        {original:'/politeh/u1.jpg',
        originalHeight:500 ,
        originalWidth:500   
    },
       
    {original:'/politeh/longname.png}',
        originalHeight:500,
        originalWidth:500   
    },
    {original:'/politeh/long2.jpg}',
    originalHeight:500,
    originalWidth:500   
},

    ]



    return(

        <div className='flex-1'>
            <ImageGallery
                    slideDuration={2000}
                    slideInterval={5000}
                    items={images}
                    infinite={true}
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                    showPlayButton={false}
                    autoPlay={true}
                    showNav={false}
                    lazyLoad={true}

                    ></ImageGallery>
        </div>
    )
}


  // {original:'/politeh/68747470733a2f2f69696c692e696f2f487344787564472e706e67.png}',
        // originalHeight:500    },



    //     {original:'/politeh/296138398_10224988639798095_3100299478318628079_n.jpg}',
    //     originalHeight:500 ,
    //     originalWidth:500   
    // },