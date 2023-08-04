import React, { useRef, useState } from "react";
import HomeBanner from "../../Components/HomeBanner/HomeBanner";
import ListMovie from "../../Components/ListMovie/ListMovie";
import TabMovie from "../../Components/TabMovie/TabMovie";

const HomePage = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <div>
      <HomeBanner />
      <ListMovie />
      <TabMovie />
    </div>
  );
};

export default HomePage;
