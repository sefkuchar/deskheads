
import Card from "./components/card"
import './index.css'
import react from "react";

export default function App() {

  react.useEffect(() => {
    document.title = "DESKHEADS FAN ART"
 }, []);
  return (
    
    <div className="pb-10">
      <div  className="bg-[url('https://cdn.discordapp.com/banners/951840245073182731/9c84bd4cfbab220c27701b6d9821c520.webp?size=4096')] h-full w-full fixed"></div>
      <div className="flex justify-center w-screen py-10 text-white ml-auto mr-auto align-middle flex-wrap">
        <div className="flex flex-col sm:flex-row z-20 font-sans font-serif text-5xl font-black">
          <span>DESKHEADS FAN ART </span>
        </div>
      </div>
      <div className="flex justify-center flex-wrap h-full">
        <div id="ao" className="w-20 h-200 fixed"></div>

        <Card discord="cosmos#0245" pos="left" link="https://media.discordapp.net/attachments/968113253282639895/969940788882583592/32f23f.png?width=1202&height=676" />
        <Card discord="Tawakalitu#5862" pos="left" link="https://media.discordapp.net/attachments/968113253282639895/969873002013544448/IMG-20220430-WA0002.jpg?width=676&height=676" />
        <Card discord="Eq#3546"  link="https://media.discordapp.net/attachments/968113253282639895/969720174666207233/IMG_0752.png?width=674&height=676" />
        <Card discord="Masashi Kio#8991"  link="https://media.discordapp.net/attachments/968113253282639895/969647469749223524/unknown.png?width=680&height=676" />
        <Card discord="bdvigh#7037"  pos="left" link="https://media.discordapp.net/attachments/968113253282639895/969576931668406293/IMG_0030.png?width=676&height=676" />
        <Card discord="Jagz#4114"  pos="left" link="https://media.discordapp.net/attachments/968113253282639895/969505772276957234/IMG_3337.jpg?width=678&height=676" />
        <Card discord="badboydennis#8320"  link="https://images-ext-1.discordapp.net/external/2rtcMj-l647wL5ZBTnhHkawxG7WXZn8CYaIIhgI_MgA/https/pbs.twimg.com/media/FRdxcDMWQAEBBuI.jpg?width=676&height=676" />
        <Card discord="Heebo#2058"  link="https://media.discordapp.net/attachments/968113253282639895/969279053033009202/deskyHeebo-01.png?width=676&height=676" />
        <Card discord="Prajna#9888"  link="https://images-ext-1.discordapp.net/external/nhfJqtdxAknDo9gv7GpAYLRxlMdlc14jhVCIdufe76A/https/pbs.twimg.com/media/FRHVmfdVkAExvuP.jpg?width=676&height=676" />
        <Card discord="LT 🌘Sedd#5166"  link="https://images-ext-2.discordapp.net/external/D0mkxSjp2imlnVqkdg9Zge8-iytgz-jlTnM0QVIxG08/https/pbs.twimg.com/media/FRAVIy2XIAI2e60.jpg?width=535&height=676" />
        <Card discord="wam#4254"  link="https://images-ext-1.discordapp.net/external/a9ox6FmDjQIYhbK7A6W11AVA6zxiqaS3rbnnHhbs46U/https/pbs.twimg.com/media/FQ-3SxTaMAAjPpP.jpg?width=704&height=676" />
        <Card discord="Muss#7497"  link="https://images-ext-1.discordapp.net/external/-CvIZTClw2I-RBIb0nBaZ0Aqbfn9ZdxcYAN5VDWb6Js/https/pbs.twimg.com/media/FROf_AyacAISl9Q.jpg?width=685&height=676" />
        <Card discord="lahseminit#3553"  link="https://media.discordapp.net/attachments/968113253282639895/968404750699733022/Untitled_Artwork.png?width=682&height=676" />
        <Card discord="!⚡Erwin⚡#7651"  link="https://media.discordapp.net/attachments/968113253282639895/968427530149330964/Hnet-image_3.gif" />
        <Card discord="Cryptopapi#4136"  link="https://media.discordapp.net/attachments/968113253282639895/968463070244515840/josh1.jpg?width=659&height=676" />
        <Card discord="xBlasti#0398"  link="https://media.discordapp.net/attachments/968113253282639895/968481537278505030/20220424_161749.png?width=676&height=676" />
        <Card discord="optimist#9103"  link="https://media.discordapp.net/attachments/968113253282639895/968510799482060851/Deskheads.jpg?width=676&height=676" />
        <Card discord="STAY HYDRATED EVERYONE!#5231"  link="https://media.discordapp.net/attachments/968113253282639895/969227468491853894/unknown.png?width=665&height=676" />
        <Card discord="xXx-SilverFlex-xXx#0291"  link="https://media.discordapp.net/attachments/968113253282639895/969235977371525210/SILVERFLEX.png?width=673&height=676" />
        <Card discord="Masashi Kio#8991"  link="https://media.discordapp.net/attachments/968113253282639895/969250885630849164/unknown.png?width=779&height=676" />
        
        <div className="flex flex-col sm:flex-row top-100 z-20 font-sans font-serif text-7xl font-black">
          <span>sef kuchar#0365 </span>
        </div>  
      </div>
    </div>
  )
}

