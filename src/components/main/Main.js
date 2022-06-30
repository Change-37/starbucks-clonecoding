import Banner from "./Banner";
import SmallBanner from "./SmallBanner";
import MobileBanner from "./MobileBanner";
import React from 'react';
import { useMediaQuery } from "react-responsive";

export default function Main() {
  const isMiddleScreen = useMediaQuery({
    query: "(max-width : 980px) and (min-width : 641px)"
  });
  const Mobile = useMediaQuery({
    query: "(min-width : 0px) and (max-width:640px)"
  });

  const isPc = useMediaQuery({
    query: "(min-width:981px)"
  });
  return (
    <>
      {isPc && <Banner />};{isMiddleScreen && <SmallBanner />}
      {Mobile && <MobileBanner />}
    </>
  );
}
