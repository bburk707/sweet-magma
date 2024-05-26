import React from 'react';
import Image from "next/image";

const PulsingLogo = () => {
    return (
        <Image
            className="animate-logo-scale"
            src="/logo.svg"
            alt="Pepper Logo"
            width={250}
            height={75}
        />
    );
};

export default PulsingLogo;

