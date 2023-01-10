import { Props } from "./types";

function Arrow({ activeIndex, items }: Props) {
  const isLastItem = activeIndex === items?.length - 1;
  return (
    <svg
      className={`w-6 h-6 text-gray-600 transition-transform duration-500 ease-in-out transform-origin-center ${
        isLastItem ? "rotate-180" : ""
      }`}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M19 14l-7 7m0 0l-7-7m7 7V3'
      />
    </svg>
  );
}

export default Arrow;
