
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/20/solid';

interface Props {
    name: string;
    role: string;
    image: string;
}
const ClientReview = ({name, role, image}:Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <Image
        src={image}
        alt={name}
        width={100}
        height={100}
        style={{ objectFit: "contain" }}
        className="mx-auto mb-[2rem] rounded-full"
      />
      <div className="flex items-center mx-auto">
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
        <StarIcon className="w-[2rem] h-[2rem] text-yellow-500" />
      </div>
      <h1 className="text-[25px] text-white mt-[1rem]">{name}</h1>
      <p className="text-[10px] text-white opacity-75 mt-[0.5rem] mb-[1.4rem]">
        {role}
      </p>
      <p className="text-[16px] text-white opacity-50 w-[90%] md:w-[50%] mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        blanditiis inventore recusandae animi voluptatibus neque qui ullam
        quidem, natus dolor? Eveniet quam non placeat sunt, nulla enim
        aspernatur porro earum?
      </p>
    </div>
  );
}

export default ClientReview
