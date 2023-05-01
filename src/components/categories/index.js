import Image from "next/image";

const categories = [
    { title: 'Category 1', image: '/category-1.jpg' },
    { title: 'Category 2', image: '/category-2.jpg' },
    { title: 'Category 3', image: '/category-3.jpg' },
    { title: 'Category 4', image: '/category-4.jpg' },
  ];
  
  const Category = ({ title, image }) => {
    return (
      <div className='relative overflow-hidden rounded-lg shadow-md'>
        <Image
          src={image}
          alt={title}
          width={1000}
          height={600}
        />
        <div className='absolute inset-0 flex items-center justify-center'>
          <h2 className='text-3xl font-bold text-white'>{title}</h2>
        </div>
      </div>
    );
  };
  
  const Categories = () => {
    return (
      <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
        {categories.map((category) => (
          <Category key={category.title} {...category} />
        ))}
      </div>
    );
  };
  