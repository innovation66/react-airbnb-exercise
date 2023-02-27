import lzsRequest from "..";


export function getEntireRoomList(offset = 0 , size = 20) {
  return lzsRequest.get({
    url: "entire/list",
    params: {
      offset,
      size
    }
  })
}