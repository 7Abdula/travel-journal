

export default function Card(props) {
  const img = props.imageUrl
  return (
    <div className="flex flex-col items-center md:flex-row gap-[19px] py-[18px] border-b border-[#F5F5F5]">
      <div className="shrink-0">
        <img src={props.imageUrl} alt={props.title} className="w-[250px] md:w-[125px] h-[200px] md:h-[168px] rounded object-cover" />
      </div>
      <div className="py-4">
        <div className="flex items-center">
          <img src="./images/pin.svg" alt="pin" />
          <h3 className="ml-1 text-[10.24px] tracking-[0.17em] text-[#2B283A]">{props.location}</h3>
          <a href={props.googleMapsUrl} target="_blank" className="ml-auto md:ml-[12px] text-[#918E9B] text-[10.24px] underline underline-offset-[1px]">View on Google Maps</a>
        </div>
        <h1 className="font-bold mt-1 text-[#2B283A] text-[25px] leading-[30px]">{props.title}</h1>
        <p className="text-[#2B283A] text-[10.24px] font-bold mt-3">{`${props.startDate} - ${props.endDate}`}</p>
        <p className="mt-2 text-[10.24px] leading-[15.36px] text-[#2B283A]">{props.description}</p>
      </div>
    </div>
  )
}
