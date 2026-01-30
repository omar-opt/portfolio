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
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex  items-center justify-start gap-4  ">
        <Image src={props.logoUrl} alt={props.company} width={40} height={40} />
        <div>
          <p className="heading-3">{props.company}</p>
          <p className="">{props.title}</p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row gap-2">
        <p className="text-sm ">{props.start}</p>
        <p className="hidden sm:block ">-</p>{" "}
        <p className="text-sm ">{props.end}</p>
      </div>
    </div>
  );
}

export default WorkCard;
