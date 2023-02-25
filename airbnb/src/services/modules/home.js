import lzsRequest from "..";

export function getHomeGoodPriceData() {
    return lzsRequest.get({
        url: "/home/goodprice"
    })
}