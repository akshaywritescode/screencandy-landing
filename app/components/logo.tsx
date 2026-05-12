import Image from "next/image";

export default function Logo(){
    return <div>
        <Image src={"/assets/logos/screen-candy-logo.svg"} height={40} width={40} alt="" />
    </div>
}