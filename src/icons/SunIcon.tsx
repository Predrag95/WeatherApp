import React from 'react';

type SunIconProps = {
  stroke?: string; 
} & React.SVGProps<SVGSVGElement>;

const SunIcon = ({ stroke, ...props }: SunIconProps) => (
  <svg width='28' height='28' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M14.6285 22.0519C18.8373 22.0519 22.2492 18.64 22.2492 14.4312C22.2492 10.2224 18.8373 6.81055 14.6285 6.81055C10.4197 6.81055 7.00781 10.2224 7.00781 14.4312C7.00781 18.64 10.4197 22.0519 14.6285 22.0519Z' stroke={stroke || '#223450'} strokeWidth='2.44678' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M23.0014 22.8022L22.849 22.6498M22.849 6.21255L23.0014 6.06013L22.849 6.21255ZM6.25935 22.8022L6.41177 22.6498L6.25935 22.8022ZM14.6304 2.80082V2.70703V2.80082ZM14.6304 26.1553V26.0615V26.1553ZM3.00004 14.4312H2.90625H3.00004ZM26.3545 14.4312H26.2607H26.3545ZM6.41177 6.21255L6.25935 6.06013L6.41177 6.21255Z' stroke={stroke || '#223450'} strokeWidth='2.44678' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);

export default SunIcon;