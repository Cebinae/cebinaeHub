'use client'
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from 'react-image-gallery';
    

export default function Carousel (){

    const images = [
    {original:'/politeh/entrance.jpg',
    originalHeight:500,
    originalWidth:500   
    },
    // {original:'/politeh/libr.jpg',
    // originalHeight:500,
    // originalWidth:500  
    // },
    {original:'/politeh/libr2.jpg',
    originalHeight:500 ,
    originalWidth:500   
    },
    {original:'/politeh/park3.jpg',
    originalHeight:500,
    originalWidth:500   
    },
    {original:'/politeh/park.jpg',
    originalHeight:500,
    originalWidth:500   
    },
    {original:'/politeh/u1_2.jpg',
    originalHeight:500,
    originalWidth:500   
    },
    // {original:'/politeh/u2.jpg',
    // originalHeight:500,
    // originalWidth:500   
    // },
    {original:'/politeh/winter.jpg',
    originalHeight:500,
    originalWidth:500   
    },
    // {original:'/politeh/winter2.jpg',
    // originalHeight:500,
    // originalWidth:500   
    // },
    {original:'/politeh/winter3.jpg',
    originalHeight:500,
    originalWidth:500   
    }
        

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