import img1 from '/casual.webp'
import img2 from '/formal.webp'
import img3 from '/outdoor.webp'
import img4 from '/party.webp'

const StyleCategoryList = () => {
    return (
        <div className='mb-10 mx-4'>
            <div className="max-w-xl lg:max-w-7xl mx-auto bg-[#F3F4F6] rounded-xl">
                <div className="p-10">
                    <h1 className="font-black text-4xl md:text-6xl uppercase text-center my-10">Browse by dress style</h1>
                    <div className="flex flex-wrap gap-5">
                        <div className='h-[288px] md:w-[calc(33.33%-10px)] w-full relative rounded-xl'>
                            <h1 className='relative top-0 left-0 translate-6 font-bold text-xl lg:text-3xl z-10'>Casual</h1>
                            <img src={img1} alt="" className='absolute inset-0 w-full h-full object-cover' />
                        </div>
                        <div className='h-[288px] md:w-[calc(66.66%-10px)] w-full relative rounded-xl'>
                            <h1 className='relative top-0 left-0 translate-6 font-bold text-xl lg:text-3xl z-10'>Formal</h1>
                            <img src={img2} alt="" className='absolute inset-0 w-full h-full object-cover' />
                        </div>
                        <div className='h-[288px] md:w-[calc(66.66%-10px)] w-full relative rounded-xl'>
                            <h1 className='relative top-0 left-0 translate-6 font-bold text-xl lg:text-3xl z-10'>Outdoor</h1>
                            <img src={img3} alt="" className='absolute inset-0 w-full h-full object-cover' />
                        </div>
                        <div className='h-[288px] md:w-[calc(33.33%-10px)] w-full relative rounded-xl'>
                            <h1 className='relative top-0 left-0 translate-6 font-bold text-xl lg:text-3xl z-10'>Party</h1>
                            <img src={img4} alt="" className='absolute inset-0 w-full h-full object-cover' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StyleCategoryList