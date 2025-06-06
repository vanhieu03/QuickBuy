import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import img1 from '/acronym.svg'
import img2 from '/arcteryx.svg'
import img3 from '/cp-company.svg'
import img4 from '/krakatau.svg'
import img5 from '/the-north-face.svg'
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1280 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1280, min: 684 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 684, min: 0 },
        items: 2
    }
};

const Brand = () => {
    return (
        <div className='bg-black'>
            <Carousel responsive={responsive} className='max-w-xl lg:max-w-7xl mx-auto'>
                <div className='py-10'>
                    <img src={img1} alt="img1" className='w-[144px] h-[40px]'/>
                </div>
                <div className=' py-10'>
                    <img src={img2} alt="img2" className='w-[144px] h-[40px]'/>
                </div>
                <div className='py-10'>
                    <img src={img4} alt="img3" className='w-[144px] h-[40px]'/>
                </div>
                <div className='py-10'>
                    <img src={img5} alt="img4" className='w-[144px] h-[40px]'/>
                </div>
                <div className='py-10'>
                    <img src={img3} alt="img5" className='w-[144px] h-[40px]'/>
                </div>
            </Carousel>
        </div>
    )
}

export default Brand