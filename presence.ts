const presence = new Presence({
  //The client ID of the Application created at https://discordapp.com/developers/applications
  clientId: "935651475378548736",
});

const browsingTimestamp = Math.floor(Date.now() / 1000);
let user: HTMLElement;

presence.on("UpdateData", async () => {
  const presenceData: PresenceData = {
    largeImageKey: "ArchiveOfOurOwn",
    smallImageKey: "https://archiveofourown.org/images/ao3_logos/logo_42.png",
    smallImageText: "Archive Of Our Own",
  };
  
  const { pathname, hostname } = document.location;


if (
		hostname === "archiveofourown.org" ||
		hostname === "www.archiveofourown.org"
	) {
		if (pathname === "/") {
			presenceData.details = "At Home";
			presenceData.startTimestamp = browsingTimestamp;
		}
		else if (pathname === "/media")
			presenceData.details = "Browsing Fandoms";
		else if (pathname.startsWith("/media/")) {
			presenceData.details = "Browsing Fandoms";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname.includes("/chapters/")) {
			presenceData.details = "Reading Chapter";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/works") presenceData.details = "Browsing Masterpieces";
		else if (pathname.startsWith("/works/")) {
			presenceData.details = "Browsing Masterpieces";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/users") presenceData.details = "Vieweing Profile";
		else if (pathname.startsWith("/users/")) {
			presenceData.details = "Viewing Profile";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/comments") presenceData.details = "Checking comments";
		else if (pathname.startsWith("/comments/")) {
			presenceData.details = "Checking Comments";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/edit") presenceData.details = "Editing their work";
		else if (pathname.startsWith("/edit/")) {
			presenceData.details = "Editing their work";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/tags") presenceData.details = "Looking for something";
		else if (pathname.startsWith("/tags/")) {
			presenceData.details = "Looking for something";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
		} else if (pathname === "/bookmarks") presenceData.details = "Browsking Bookmarks";
		else if (pathname.startsWith("/bookmarks/")) {
			presenceData.details = "Browsing Bookmarks";
			presenceData.state = document.querySelector("head > title").textContent;
			presenceData.startTimestamp = browsingTimestamp;
	}};
	
  
  	if (presenceData.details) presence.setActivity(presenceData);
	else presence.setActivity();
});
