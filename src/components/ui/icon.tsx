type IconTypes = {
  name: string
  width?: string
  height?: string
  alt?: string
  color?: string
  className?: string
}

export default function Icon({ name, width, height, className, color, alt }: IconTypes){
  return <img 
    src={`/icons/${name}.svg`} 
    alt={`${alt} icon`} 
    width={width} 
    height={height} 
    className={className} 
    style={{ fill: color }} 
  />
}