interface Advertisement {
    text: string;
    clickCount: number;
}

function newAdvertisement(text: string): Advertisement {
    return {
        text: text,
        clickCount: 0
    }
}

interface User {
    id: string;
}

function markAdAsClicked(ad: Advertisement) {
    ad.clickCount += 1;
}

const ad: Advertisement =
    {
        text: "this is a super course about TypeScript",
        clickCount: 0
    };

const ad2: Advertisement = newAdvertisement("this is a second ad");

markAdAsClicked(ad);
markAdAsClicked(ad2);
