import lzsRequest from "..";

export function getHomeGoodPriceData() {
    return lzsRequest.get({
        url: "/home/goodprice"
    })
}
export function getHomeHighScoreData() {
    return lzsRequest.get({
      url: "/home/highscore"
    })
}
export function getHomeDiscountData() {
    return lzsRequest.get({
        url: "/home/discount"        
    })
}
export function getHomeHotRecommendData() {
    return lzsRequest.get({
        url: "/home/hotrecommenddest"
    })
}
export function getHomeLongforData() {
    return lzsRequest.get({
        url: "/home/longfor"       
    })
}

export function getHomePlusData() {
    return lzsRequest.get({
      url: "/home/plus"
    })
  }
  