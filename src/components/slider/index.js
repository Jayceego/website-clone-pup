import Image from 'next/image';

function Slider() {
  return (
    <div className='relative'>
        <Image 
            className='w-full h-auto '
            src="/slide.jpg"
            alt="Slide 1" 
            width={1800}
            height={700}
        />
    </div>
  )
}

export default Slider