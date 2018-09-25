interface PPCAd {
    kind: "ppcAd";
    cost: number;
}

interface DisplayAd {
    kind: "DisplayAd";
    cost: number;
    size: number;
}

type Ad = PPCAd | DisplayAd;

function calculateCost(ad: Ad) {
    if (ad.kind === "ppcAd") {
        return ad.cost;
    }
    else if (ad.kind === "DisplayAd") {
        return ad.cost * ad.size;
    }
}

calculateCost({kind: "ppcAd", cost: 1});