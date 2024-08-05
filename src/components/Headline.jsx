import React from "react";
import {
  SiTwitch,
  SiUnrealengine,
  SiValorant,
  SiEpicgames,
  SiAdobephotoshop,
  SiDiscord,
  SiRockstargames,
  SiSteam,
  SiXbox,
  SiPlaystation,
  SiGogdotcom,
  SiNvidia,
  SiPubg,
  SiCounterstrike,
  SiUbisoft,
  SiYoutube,
  SiNetflix,
  SiInstagram,
  SiTiktok,
  SiGameloft,
  SiTelegram,
  SiLeagueoflegends,
} from "react-icons/si";
import supercell from "../assets/supcell.png";
import Ticker from "react-ticker";
const Headline = () => {
  return (
    <div className="scroll-container text-4xl pb-8 text-white">
        <Ticker chain>
        {({ index }) => (
            <>
             <div className="scroll-content flex gap-8">
          <SiEpicgames />
          <SiAdobephotoshop />
          <SiDiscord />
          <SiRockstargames />
          <SiSteam />
          <SiXbox />
          <SiPlaystation />
          <SiGogdotcom />
          <SiNvidia />
          <SiPubg />
          <SiCounterstrike />
          <SiUbisoft />
          <SiYoutube />
          <SiNetflix />
          <SiInstagram />
          <SiTiktok />
          <SiGameloft />
          <SiTelegram />
          <img src={supercell} alt="supercell" className="h-[35px]" />
          <SiLeagueoflegends />
          <SiValorant />
          <SiUnrealengine />
          <SiTwitch className="mr-4" />
        </div>
            </>
        )}
    </Ticker>
       
    </div>
  );
};

export default Headline;
