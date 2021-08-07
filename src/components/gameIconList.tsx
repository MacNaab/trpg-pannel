import * as GameIcon from "react-icons/gi";

const listedIconName = Object.keys(GameIcon);

const IconList = listedIconName.map( (e) => {
  const NGame:any = GameIcon;
  const Icon:any = NGame[e];
    return ( {
      name: e,
      icon: Icon,
    } );
})

export default IconList;