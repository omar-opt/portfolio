import Image from "next/image";
import React from "react";
interface WorkCardProps {
  company: string;
  href: string;
  badges: string[];
  location: string;
  title: string;
  logoUrl: string;
  start: string;
  end: string;
  description: string;
}

type Props = WorkCardProps & { key?: number };

function WorkCard(props: Props) {
  console.log(props);
  return (
    <div className="flex justify-between items-center ">
      <Image src={props.logoUrl} alt={props.company} width={40} height={40} />
      <div>
        <p className="heading-3">{props.company}</p>
      </div>
    </div>
  );
}

export default WorkCard;
