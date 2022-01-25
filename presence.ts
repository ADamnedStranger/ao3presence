const presence = new Presence({
  //The client ID of the Application created at https://discordapp.com/developers/applications
  clientId: "935651475378548736"
  }),

  strings = presence.getStrings({
    play: "presence.playback.playing",
    pause: "presence.playback.paused"
  });
 //const startTimestamp = Math.floor(Date.now() / 1000);
 const browsingTimestamp = Math.floor(Date.now() / 1000);
 let user: HTMLElement;


presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
	  
    //The large image on the presence. This can be a key of an image uploaded on the Discord Developer Portal - Rich Presence - Art Assets, or a URL to an image
    largeImageKey: "ArchiveOfOurOwn",
    //The small image on the presence. This can be a key of an image uploaded on the Discord Developer Portal - Rich Presence - Art Assets, or a URL to an image
    smallImageKey: "https://archiveofourown.org/images/ao3_logos/logo_42.png",
    //The text which is displayed when hovering over the small image
    smallImageText: "Archive Of Our Own",
     //The upper section of the presence text
	 //startTimestamp: 3133657200000,
  }
	 
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
	 };
	 
    //details: "Archive of Our Own",
    //The lower section of the presence text
    //state: "Reading Masterpieces",
    //The unix epoch timestamp for when to start counting from

    //If you want to show Time Left instead of Elapsed, this is the unix epoch timestamp at which the timer ends
    //endTimestamp: 3133700400000
    //Optionally you can set a largeImageKey here and change the rest as variable subproperties, for example presenceData.type = "blahblah"; type examples: details, state, etc.

  //Update the presence with all the values from the presenceData object
 if (!presenceData.details) {
		presenceData.startTimestamp = browsingTimestamp;
		presenceData.details = "Browsing Masterpieces";
		presenceData.state = document.querySelector("head > title").textContent;
		presence.setActivity(presenceData);
	} else presence.setActivity(presenceData);
});