import React from "react"
import '../Styles/LeftMenu.css'
import { FaSpotify, FaEllipsisH, FaBroadcastTower } from "react-icons/fa"
import { BiSearchAlt } from "react-icons/bi"
import { BsHouseFill } from "react-icons/bs"
import { HiPlus, HiOutlineSpeakerWave } from "react-icons/hi"
import { RiPlayListFill } from "react-icons/ri"
import { FiTrash2 } from "react-icons/fi"
import { GiSpeaker } from "react-icons/gi"
import { MdMonitor } from "react-icons/md"


/**
 * icon 설치
 * https://react-icons.github.io/react-icons/
 * npm install react-icons --save
 */

function LeftMenu() {
  let listItems = [
    { icon: <BsHouseFill />, label: "Home" },
    { icon: <FaBroadcastTower />, label: "Radio" },
  ]

  let playLists = [
    { label: "Top Hit 2021-USA" },
    { label: "Dance" },
  ]


  let listItemLoop = listItems.map((listItem, i) => {
    return (
      <div className="item">
        <i>
          {listItem.icon}
        </i>
        <div>{listItem.label}</div>
      </div>
    )
  })

  let playListLoop = playLists.map((playList) => {
    return (
      <div className="play-list">
        <div className="play-list-label">
          <i>
            <RiPlayListFill />
          </i>
          <div>{playList.label}</div>
        </div>
        <i>
          <FiTrash2 />
        </i>
      </div>
    )
  })
  
  return (
    <div className="leftMenu">
      <div className="logoContainer">
        <i>
          <FaSpotify />
        </i>
        <h2>Spotify</h2>
        <i>
          <FaEllipsisH />
        </i>
      </div>
      <div className="searchBox">
        <i>
          <BiSearchAlt />
        </i>
        <input type="text" placeholder="Search..."/>
      </div>
      <div className="title-area">
        <div className="item-title">
          MENU
        </div>
      </div>
      <div className="list-items">
        {listItemLoop}
      </div>
      <div className="title-area">
        <div className="item-title">
          PLAYLISTS
        </div>
        <i> <HiPlus /> </i>
      </div>
      <div className="list-items">
        {playListLoop}
      </div>
      <div className="player">
        <div className="title-area">
          <div className="track"></div>
          <div className="play-song-info">
            <div className="playing-title">
              Take On Me
            </div>
            <div className="playing-artist">
              A-ha
            </div>
          </div>
        </div>
        <div className="palyer-control-area">
          <div className="volume-control">
            <i>
              <GiSpeaker />
            </i>
          </div>
          <div className="play-list">
            <i>
              <RiPlayListFill />
            </i>
          </div>
          <div className="display-control">
            <i>
              <MdMonitor />
            </i>
          </div>
        </div>
      </div>
    </div>
  )
}

export { LeftMenu }