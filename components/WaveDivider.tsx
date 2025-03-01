interface WaveDividerProps {
  position: 'top' | 'bottom';
}

const WaveDivider = ({ position }: WaveDividerProps) => {
  return (
    <div className={`w-full overflow-hidden ${position === 'top' ? 'rotate-180' : ''}`}>
      <svg 
        viewBox="0 0 1200 120" 
        preserveAspectRatio="none" 
        className="w-full h-16 sm:h-24"
        fill={position === 'top' ? 'white' : '#0891b2'} // white for top, cyan-600 for bottom
      >
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C0,0,0,0,0,0z"></path>
      </svg>
    </div>
  );
};

export default WaveDivider;