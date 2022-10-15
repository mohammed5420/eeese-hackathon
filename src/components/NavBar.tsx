import React from "react";

import Image from "next/image";

import Logo from '../../public/Logo.svg';
import Link from "next/link";

const Input = ({ }) => {
    return (
        <>
            <div className="h-24 w-full">
                <Link href={"/"}>
                    <Image src={Logo} alt={"logo"} width={100} height={100} />
                </Link>
            </div>
        </>
    );
};

export default Input;
