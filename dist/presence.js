const presence = new Presence({
    clientId: "935651475378548736"
}), strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
});
const browsingTimestamp = Math.floor(Date.now() / 1000);
let user;
presence.on("UpdateData", async () => {
    const presenceData = {
        largeImageKey: "ArchiveOfOurOwn",
        smallImageKey: "https://archiveofourown.org/images/ao3_logos/logo_42.png",
        smallImageText: "Archive Of Our Own",
    };
    if (document.location.hostname === "www.archiveofourown.org") {
        if (document.location.pathname === "/") {
            presenceData.startTimestamp = browsingTimestamp;
            presenceData.details = "Browsing Masterpieces";
        }
        else if (document.location.pathname.includes("/works/")) {
            presenceData.startTimestamp = browsingTimestamp;
            presenceData.details = "Reads Masterpiece:";
            presenceData.state = user.textContent;
            presenceData.smallImageKey = "reading";
        }
    }
    ;
    if (!presenceData.details) {
        presenceData.startTimestamp = browsingTimestamp;
        presenceData.details = "Browsing Masterpieces";
        presenceData.state = document.querySelector("head > title").textContent;
        presence.setActivity(presenceData);
    }
    else
        presence.setActivity(presenceData);
});
