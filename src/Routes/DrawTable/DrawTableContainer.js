import React from "react";
import DrawTablePresenter from "./DrawTablePresenter";

export default () => {
  const PLAYERS = [
    "온천장베인스", "강블리가될거야", "김에코다", "랩을시작한다홍",
    "PC는 역시 내집컴", "hui biao", "신천지 박살낸다", "무한쯔꾸요미"
  ]
  return (
    <DrawTablePresenter 
      players={PLAYERS}
    />
  )
}