import React from 'react'

const Addvideo = () => {
  return (
    <>
    <div className="videosid h-100">
        <div className="text-center  bg-theme1 fw-medium fs-14 text-white text-opacity-75 p-2 border-bottom-light">Get to Know CoinSwitch Pro Better</div>
        <div className="videos text-center pt-4">
        <iframe className="w-100" width={560} height={315} src="https://www.youtube.com/embed/orbkg5JH9C8?si=yvkRG2HegzATVoxl" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
        </div>
    </div>
    </>
  )
}

export default Addvideo