//Items that are commented out do not get used. They will be used in the future.
console.group("Initial Checks");
var debugConsole = document.getElementById("debugconsole").textContent;
debugConsole = debugConsole + "\n";
const link = document.createElement("link");
const bmbarNote = document.createElement("p");
const resWarn = document.createElement("p");
const runningBrowserString = document.getElementById("runningbrowserstring");
const div = document.getElementById("unsupportedremove");
var enableJS = false;
uaSniffer();
function uaSniffer() {
	const browsers = ["MSIE", "Firefox", "Safari", "Chrome", "OPR", "Edg"];
	const userAgent = navigator.userAgent;
	var index = browsers.length - 1;
	var browserStr = "Undetected";
	while (index > -1 && userAgent.indexOf(browsers[index]) == -1) {
		index--;
	}
	if (index > -1) {
		browserStr = browsers[index];
	}
	if (browserStr == "Edg") {
		browserStr = "Edge";
	} else if (browserStr == "OPR") {
		browserStr = "Opera";
	} else if (browserStr == "MSIE") {
		browserStr = "Internet Explorer";
	}
	const browserVer = userAgent.indexOf(browsers[index]);
	runningBrowserString.textContent = "detected browser: " + browserStr + " v" + browserVer;
	console.log(browserStr + " " + browserVer)
	const unsupportedString = document.createElement("p");
	unsupportedString.style.position = "absolute";
	unsupportedString.style.fontSize = "25px";
	unsupportedString.style.fontFamily = "courier";
	unsupportedString.style.top = "22vw";
	unsupportedString.style.left = "11vw";
	unsupportedString.style.display = "none";
	document.body.style.background = "url(./img/background.jpg)";
	document.body.appendChild(unsupportedString);
	if (browserStr == "Internet Explorer") {
		const html = document.getElementById("unsupportedremove");
		document.body.removeChild(html);
		unsupportedString.textContent = "The browser you are using, " + browserStr + ", is not supported. Please use a different browser.";
		unsupportedString.style.display = "block";
		resolutionCheck(enableJS);
		throw ("Detected browser is unsupported, JavaScript will not be used past this point.");
	} else if (browserStr == "Chrome") {
		enableJS = true;
		width = "1905";
		console.log("User is using either Chrome or a Chromium-based browser, width will be 1905, and displaying bookmarks bar notice.");
		debugConsole = debugConsole + "User is using either Chrome or a Chromium-based browser, width will be 1905, and displaying bookmarks bar notice." + "\n";
		bmbarNote.style.position = "static";
		bmbarNote.style.fontSize = "13px";
		bmbarNote.textContent = "Note: If you cannot see the build string in the bottom left, you may need to disable the bookmarks bar to see everything correctly.";
		document.body.appendChild(bmbarNote);
		bmbarNote.style.display = "block";
		document.getElementById("titlescreen").style.display = "block";
		resolutionCheck(enableJS, width);
	} else if (browserStr == "Firefox") {
		console.log("User is using Firefox, width will be 1920.");
		debugConsole = debugConsole + ("User is using Firefox, width will be 1920." + "\n");
		const width = "1920";
		enableJS = true;
		const bs = document.getElementById("buildstring").style;
		const bobs = document.getElementById("basedonbuildstring").style;
		const rbs = document.getElementById("runningbrowserstring").style;
		const sb = document.getElementById("startbutton").style;
		const wsb = document.getElementById("wipesavebutton").style;
		const usb = document.getElementById("upgradebutton").style;
		const rtsb = document.getElementById("shopreturnbutton").style;
		bs.top = "48vw";
		bobs.top = "48vw";
		rbs.top = "48vw";
		sb.top = "45.5vw";
		wsb.top = "45.5vw";
		usb.top = "45.5vw";
		rtsb.top = "45.5vw";
		document.getElementById("titlescreen").style.display = "block";
		resolutionCheck(enableJS, width);
	} else if (browserStr == "Opera") {
		width = "1903";
		console.log("User is using Opera, width will be 1903, and game borders will not be drawn.");
		debugConsole = debugConsole + "User is using Opera, width will be 1903, and game borders will not be drawn." + "\n";
		bmbarNote.style.position = "static";
		bmbarNote.style.fontSize = "13px";
		bmbarNote.textContent = "Note: Opera does not support the way in-game borders are drawn.";
		document.body.appendChild(bmbarNote);
		bmbarNote.style.display = "block";
		document.getElementById("titlescreen").style.display = "block";
		enableJS = true;
		resolutionCheck(enableJS, width);
	} else if (browserStr == "Edge") {
		width = "1897";
		console.log("User is using Edge, width will be 1897, numbers will not be formatted, and game borders will not be drawn.");
		debugConsole = debugConsole + "User is using Edge, width will be 1897, numbers will not be formatted, and game borders will not be drawn." + "\n";
		bmbarNote.style.position = "static";
		bmbarNote.style.fontSize = "13px";
		bmbarNote.textContent = "Note: Edge does not support the number formatting system this game uses, and the way in-game borders are drawn.";
		document.body.appendChild(bmbarNote);
		bmbarNote.style.display = "block";
		document.getElementById("titlescreen").style.display = "block";
		enableJS = true;
		resolutionCheck(enableJS, width);
	} else {
		const width = "1920";
		enableJS = true;
		document.getElementById("titlescreen").style.display = "block";
		resolutionCheck(enableJS, width);
	}
}
function resolutionCheck(enableJS, width) {
	console.log(enableJS, width);
	var curStySht = "";
	const head = document.head;
	const body = document.body;
	link.rel = "stylesheet";
	link.type = "text/css";
	if ($(window).width() > "1366" && $(window).width() <= width) {
		link.href = "./css/style1920x1080.css";
		curStySht = "1920x1080";
		head.appendChild(link);
	} else if ($(window).width() >= "1366" && $(window).width() <= "1366") {
		link.href = "./css/style1366x768.css";
		curStySht = "1366x768";
		head.appendChild(link);
	}
	if ($(window).width() > width || $(window).width() < "1366" || $(window).width() > "1366" && $(window).width() < width) {
		link.href = "./css/fallback.css";
		curStySht = "Fallback";
		console.warn("User has an unsupported window width. The window or zoom size may have changed, or their resolution is lower than supported. Using fallback for now.");
		debugConsole = debugConsole + "WARN: User has an unsupported window width. The window or zoom size may have changed, or their resolution is lower than supported. Using fallback for now." + "\n";
		resWarn.style.position = "static";
		resWarn.style.fontSize = "13px";
		resWarn.textContent = "Your current browser width is unsupported! This may be caused by an unmaximized browser window, zoomed in/zoomed out browser window, or your screen resolution.";
		resWarn.style.display = "block";
		head.appendChild(link);
		body.appendChild(resWarn);
	}
	if (curStySht != "Fallback") {
		console.log("Using stylesheet " + curStySht);
		debugConsole = debugConsole + "Using stylesheet " + curStySht + "\n";
	} else {
		console.log("Using fallback sheet, detected resolution is currently " + $(window).width() + "x" + $(window).height());
		debugConsole = debugConsole + "Using fallback sheet, detacted resolution is currently " + $(window).width() + "x" + $(window).height() + "\n";
	}
	if (enableJS) {
		try {
			script();
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	} else {
		div.appendChild(resWarn);
	}
}

function script() {
	console.groupEnd();
	//Title screen elements
	const buildString = document.getElementById("buildstring");
	const basedOnBuildString = document.getElementById("basedonbuildstring");
	const updateString = document.getElementById("updatestring");
	const betaString = document.getElementById("betastring");
	const startButton = document.getElementById("startbutton");
	const title = document.getElementById("title");
	const key = document.createElement("p");
	//Game screen elements
	const game = document.getElementById("gamescreen");
	const coin = document.getElementById("coin");
	const clickString = document.getElementById("clickstring");
	const cpsString = document.getElementById("cpsstring");
	const clickValueString = document.getElementById("clickvaluestring");
	const unlockString = document.getElementById("unlockstring");
	const saveButton = document.getElementById("savebutton");
	const savingString = document.getElementById("savingstring");
	const wipeSaveButton = document.getElementById("wipesavebutton");
	//Shop panel elements
	const shopPanel = document.getElementById("shoppanel");
	const clickerBuy = document.getElementById("clickerbuy");
	const clickerCPSString = document.getElementById("clickercpsstring");
	const clickerCostString = document.getElementById("clickercoststring");
	const clickerInfo = document.getElementById("clickerinfo");
	const clickersOwnedString = document.getElementById("clickersownedstring");
	const superClickerGroup = document.getElementById("superclicker");
	const superClickerBuy = document.getElementById("superclickerbuy");
	const superClickerCPSString = document.getElementById("superclickercpsstring");
	const superClickerCostString = document.getElementById("superclickercoststring");
	const superClickersOwnedString = document.getElementById("superclickersownedstring");
	const superClickerInfo = document.getElementById("superclickerinfo");
	const doublePointerGroup = document.getElementById("doublepointer");
	const doublePointerBuy = document.getElementById("doublepointerbuy");
	const doublePointerCPSString = document.getElementById("doublepointercpsstring");
	const doublePointerCostString = document.getElementById("doublepointercoststring");
	const doublePointersOwnedString = document.getElementById("doublepointersownedstring");
	const doublePointerInfo = document.getElementById("doublepointerinfo");
	//Upgrade shop panel elements
	const upgradeShopPanel = document.getElementById("upgradeshoppanel");
	const upgradeButton = document.getElementById("upgradebutton");
	const upgradeRTS = document.getElementById("shopreturnbutton");
	const cursorBuy = document.getElementById("cursorbuy");
	const cursorCostString = document.getElementById("cursorcoststring");
	const cursorOwnedString = document.getElementById("cursorownedstring");
	const superCursorGroup = document.getElementById("supercursor");
	const superCursorBuy = document.getElementById("supercursorbuy");
	const superCursorCostString = document.getElementById("supercursorcoststring");
	const superCursorOwnedString = document.getElementById("supercursorownedstring");
	const employeeGroup = document.getElementById("employee");
	const employeeBuy = document.getElementById("employeebuy");
	const employeeCostString = document.getElementById("employeecoststring");
	const employeesOwnedString = document.getElementById("employeesownedstring");
	const godFingerGroup = document.getElementById("godfinger");
	const godFingerBuy = document.getElementById("godfingerbuy");
	const godFingerCostString = document.getElementById("godfingercoststring");
	const godFingerOwnedString = document.getElementById("godfingerownedstring");
	//Stat panel elements
	const statsPanel = document.getElementById("statspanel");
	const timePlayedString = document.getElementById("timestring");
	const lifetimeClicksString = document.getElementById("lifetimeclicksstring");
	const lifetimeManualClicksString = document.getElementById("lifetimemanualclicksstring");
	const coinClickCountString = document.getElementById("coinclickcountstring");
	const totalClickHelpersString = document.getElementById("totalclickhelpersstring");
	const achievementCPSString = document.getElementById("achievementcpsstring");
	//Debug screen elements
	const debugKeyInputScreen = document.getElementById("debuginputscreen");
	const debugKeyInput = document.getElementById("debugkeyinput");
	debugKeyInput.value = "";
	const debugKeySubmit = document.getElementById("debugkeysubmit");
	const incorrectKeyLabel = document.getElementById("incorrectkeyentered");
	const debugScreen = document.getElementById("debugscreen");
	//Achievement screen elements
	const achievementsButton = document.getElementById("achievementsbutton");
	const achievementsPanel = document.getElementById("achievementsscreen");
	const achNameStr = document.getElementById("achievementnamestring");
	const achDescStr = document.getElementById("achievementdescriptionstring");
	const achUnlockStr = document.getElementById("achievementunlockedstring");
	const journeyBegins = document.getElementById("journeybegins");
	const aGoodStart = document.getElementById("agoodstart");
	const gettingThere = document.getElementById("gettingthere");
	const millionare = document.getElementById("millionare");
	const coinPool = document.getElementById("coinpool");
	const abundance = document.getElementById("abundance");
	const billionare = document.getElementById("billionare");
	const excess = document.getElementById("excess");
	const planetOfClicks = document.getElementById("planetofclicks");
	const trillionare = document.getElementById("trillionare");
	const pocketDimension = document.getElementById("pocketdimension");
	const farTooMany = document.getElementById("fartoomany");
	const backToGame = document.getElementById("backtogame");
	//Title screen variables
	const buildNumber = "2.98rb";
	const updateName = "rewrite";
	console.group("Build Info");
	console.log("Running update " + updateName + " build " + buildNumber);
	console.groupEnd();
	var gameStarted = false;
	const debug = false;
	//Purely for debugging, this will not affect anything usually.
	if (debug) {
		canvasDraw();
		gameStarted = true;
		title.style.display = "none";
		runningBrowserString.style.display = "none";
		basedOnBuildString.style.display = "none";
		updateString.style.display = "none";
		betaString.style.display = "none";
		startButton.style.display = "none";
		game.style.display = "block";
		shopPanel.style.display = "block";
		statsPanel.style.display = "block";
		bmbarNote.style.display = "none";
	}
	var generatedKey = "debug";
	//Stat variables
	var clicks = 0;
	var clicksText = "0";
	var clickValue = 1;
	var clickValueText = "1";
	var unbuffedCV = 1;
	var cps = 0;
	var cpsText = "0";
	var unbuffedCPS = 0;
	var timePlayed = 0;
	var lifetimeClicks = 0;
	var lifetimeClicksText = "0";
	var lifetimeManualClicks = 0;
	var lifetimeManualClicksText = "0";
	var coinClickCount = 0;
	var coinClickCountText = "0";
	var totalClickHelpers = 0;
	var totalClickHelpersText = "0";
	var achievementCPS = 0;
	var achievementCPSText = "0";
	//Shop variables
	var clickerCPS = 5;
	var clickerCPSText = "5";
	var clickerCost = 15;
	var clickerCostText = "15";
	var clickersOwned = 0;
	var clickersOwnedText = "0";
	var clickerCPSWorth = 0;
	var clickerCPSWorthText = "0";
	var superClickerUnlocked = false;
	var superClickerCPS = 2000;
	var superClickerCPSText = "2,000";
	var superClickerCost = 500000;
	var superClickerCostText = "500,000";
	var superClickersOwned = 0;
	var superClickersOwnedText = "0";
	var superClickerCPSWorth = 0;
	var superClickerCPSWorthText = "0";
	var doublePointerUnlocked = false;
	var doublePointerCPS = 25000000;
	var doublePointerCPSText = "25,000,000";
	var doublePointerCost = 750000000;
	var doublePointerCostText = "750,000,000";
	var doublePointersOwned = 0;
	var doublePointersOwnedText = "0";
	var doublePointerCPSWorth = 0;
	var doublePointerCPSWorthText = "0";
	//Upgrade shop variables
	var cursorCPS = 0.50;
	var cursorCost = 5000000;
	var cursorOwned = false;
	var superCursorUnlocked = false;
	var superCursorCPS = 0.75;
	var superCursorCost = 500000000;
	var superCursorOwned = false;
	var employeeUnlocked = false;
	var employeeCPS = 0.01;
	var employeeCost = 50000000000;
	var employeeCostText = "50,000,000,000";
	var employeesOwned = 0;
	var employeesOwnedText = "0";
	var godFingerUnlocked = false;
	var godFingerCV = 0.35;
	var godFingerCost = 5000000000000;
	var godFingerOwned = false;
	//Save and load variables
	var manualSave = false;
	var readyToSave = true;
	const saveData = [];
	var SHT;
	var doNotLoadCheck = false;
	//Buff variables
	//var clickEventRNG;
	//var buff = "none";
	//var selectedEvent;
	//var clicksAdded;
	//Optimization variables
	var upgradeShopOpen;
	//Achievement screen variables
	var calcCPS = false;
	var journeyBeginsUnlocked = false;
	var aGoodStartUnlocked = false;
	var gettingThereUnlocked = false;
	var millionareUnlocked = false;
	var coinPoolUnlocked = false;
	var abundanceUnlocked = false;
	var billionareUnlocked = false;
	var excessUnlocked = false;
	var planetOfClicksUnlocked = false;
	var trillionareUnlocked = false;
	var pocketDimensionUnlocked = false;
	var farTooManyUnlocked = false;
	//var quadrillionareUnlocked = false;
	//var monopolyUnlocked = false;
	//var goOutsideUnlocked = false;
	//var aQuintillionareEndgameUnlocked = false;
	const achStrs = ["Journey Begins", "A Good Start", "Getting There", "Millionare", "Coin Pool", "Abundance", "Billionare", "Excess", "Planet of Clicks", "Trillionare", "Pocket Dimension", "Far Too Many"];
	const achDescs = ["Obtain 1 lifetime click. (This achievement does not grant CPS.)", "Obtain 10,000 lifetime clicks.", "Obtain 100,000 lifetime clicks.", "Obtain 1,000,000 lifetime clicks.", "Obtain 10,000,000 lifetime clicks.", "Obtain 100,000,000 lifetime clicks.", "Obtain 1,000,000,000 lifetime clicks.", "Obtain 10,000,000,000 lifetime clicks.", "Obtain 100,000,000,000 lifetime clicks.", "Obtain 1,000,000,000,000 lifetime clicks.", "Obtain 10,000,000,000,000 lifeitme clicks.", "Obtain 100,000,000,000,000 lifetime clicks."];
	var achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked, 
		excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked];
	var achStr = "none";
	//Audio variables
	//var volume = 1.0;
	var bgm = new Audio("./snd/bgm.mp3");
	var sfx = new Audio("./snd/click.mp3");
	var sfx2 = new Audio("./snd/shopunlock.mp3");
	var sfx3 = new Audio("./snd/achievementunlock.mp3");
	const sfxList = [sfx, sfx2, sfx3];
	//Color variables
	var increase = true;
	var red = 0;
	var green = 0;
	//Debug mode variables
	var debugScreenState = "closed";
	//Miscellaneous variables
	var intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, achievementCPS, clickerCPS, clickerCost, 
		clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, employeesOwned, 
		clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth];
	var textArray = [clicksText, clickValueText, cpsText, lifetimeClicksText, lifetimeManualClicksText, coinClickCountText, totalClickHelpersText, achievementCPSText,
		clickerCPSText, clickerCostText, clickersOwnedText, superClickerCPSText, superClickerCostText, superClickersOwnedText, doublePointerCPSText, 
		doublePointerCostText, doublePointersOwnedText, employeeCostText, employeesOwnedText, clickerCPSWorthText, superClickerCPSWorthText, 
		doublePointerCPSWorthText];
	//Title screen content updates
	buildString.textContent = ("rewrite build " + buildNumber);
	updateString.textContent = ("the " + updateName + " update");
	initialDataLoad(doNotLoadCheck);
	calcCPS = true;
	//Functions
	function updateScreen() {
		try {
			addNumberCommas();
			document.getElementById("debugconsole").value = debugConsole;
			clickString.textContent = "Clicks: " + textArray[0];
			cpsString.textContent = "Clicks per Second: " + textArray[2];
			clickValueString.textContent = "Click Value: " + textArray[1];
			clickerCPSString.textContent = "CPS: +" + textArray[8];
			clickerCostString.textContent = "Cost: " + textArray[9];
			clickersOwnedString.textContent = "Owned: " + textArray[10];
			if (cps != 0) {
				clickerInfo.textContent = "Your " + textArray[10] + " clickers account for " + textArray[21] + " (" + Math.round((intArray[21] / cps) * 100) + "%) CPS.";
				superClickerInfo.textContent = "Your " + textArray[13] + " super clickers account for " + textArray[22] + " (" + Math.round((intArray[22] / cps) * 100) + "%) CPS.";
				doublePointerInfo.textContent = "Your " + textArray[16] + " double pointers account for " + textArray[23] + " (" + Math.round((intArray[23] / cps) * 100) + "%) CPS.";
			}
			if (upgradeShopOpen == true) {
				cursorOwnedString.textContent = "Owned: " + cursorOwned;
				superCursorOwnedString.textContent = "Owned: " + superCursorOwned;
				employeeCostString.textcontent = "Cost: " + textArray[17];
				employeesOwnedString.textContent = "Owned: " + textArray[18];
				godFingerOwnedString.textContent = "Owned: " + godFingerOwned;
				if (cursorOwned) {
					cursorCostString.textContent = "Cannot buy again.";
				}
				if (superCursorOwned) {
					superCursorCostString.textContent = "Cannot buy again.";
				}
				if (godFingerOwned) {
					godFingerCostString.textContent = "Cannot buy again.";
				}
			}
			if (timePlayed == 1000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " second.";
			} else if (timePlayed >= 60000 && timePlayed < 900000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minute.";
			} else if (timePlayed >= 3600000 && timePlayed < 5400000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hour.";
			}
			if (timePlayed > 1000 && timePlayed < 60000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " seconds.";
			} else if (timePlayed > 90000 && timePlayed < 5400000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minutes.";
			} else if (timePlayed > 5400000) {
				timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hours.";
			}
			lifetimeClicksString.textContent = "You have obtained a total of " + textArray[3] + " clicks.";
			if (lifetimeClicks == 1) {
				lifetimeClicksString.textContent = "You have obtained a total of " + textArray[3] + " click.";
			}
			lifetimeManualClicksString.textContent = "You have gotten " + textArray[4] + " clicks from clicking.";
			if (lifetimeManualClicks == 1) {
				lifetimeManualClicksString.textContent = "You have gotten " + textArray[4] + " click from clicking.";
			}
			coinClickCountString.textContent = "You have clicked the coin " + textArray[5] + " times.";
			if (coinClickCount == 1) {
				coinClickCountString.textContent = "You have clicked the coin " + textArray[5] + " time.";
			}
			totalClickHelpersString.textContent = "You have bought " + textArray[6] + " items.";
			if (totalClickHelpers == 1) {
				totalClickHelpersString.textContent = "You have bought " + textArray[6] + " item.";
			}
			achievementCPSString.textContent = "Your achievements give +" + textArray[7] + "% CPS.";
			shopUnlockedCheck();
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function shopUnlockedCheck() {
		try {
			if (clickersOwned >= 25 && superClickerUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "Super Clicker unlocked!";
				unlockString.style.display = "block";
				superClickerGroup.style.display = "block";
				superClickerUnlocked = true;
				SHT = 500;
			} else if (superClickerUnlocked) {
				superClickerGroup.style.display = "block";
				superClickerCPSString.textContent = "CPS: +" + textArray[11];
				superClickerCostString.textContent = "Cost: " + textArray[12];
				superClickersOwnedString.textContent = "Owned: " + textArray[13];
			}
			if (clickersOwned >= 75 && superClickersOwned >= 5 && doublePointerUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "Double Pointer unlocked!";
				unlockString.style.display = "block";
				doublePointerGroup.style.display = "block";
				doublePointerUnlocked = true;
				SHT = 500;
			} else if (doublePointerUnlocked == true) {
				doublePointerGroup.style.display = "block";
				doublePointerCPSString.textContent = "CPS: +" + textArray[14];
				doublePointerCostString.textContent = "Cost: " + textArray[15];
				doublePointersOwnedString.textContent = "Owned: " + textArray[16];
			}
			if (cursorOwned && superCursorUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "Super Cursor unlocked!";
				unlockString.style.display = "block";
				superCursorGroup.style.display = "block";
				superCursorUnlocked = true;
				SHT = 500;
			} else if (superCursorUnlocked == true) {
				superCursorGroup.style.display = "block";
			}
			if (cursorOwned && superCursorOwned && employeeUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "Employee unlocked!";
				unlockString.style.display = "block";
				employeeGroup.style.display = "block";
				employeeUnlocked = true;
				SHT = 500;
			} else if (employeeUnlocked == true) {
				employeeGroup.style.display = "block";
			}
			if (clickersOwned >= 125 && superClickersOwned >= 10 && doublePointersOwned >= 3 && cursorOwned && superCursorOwned && godFingerUnlocked == false) {
				sfx2.play();
				unlockString.textContent = "God Finger unlocked!";
				unlockString.style.display = "block";
				godFingerGroup.style.display = "block";
				godFingerUnlocked = true;
				SHT = 500;
			} else if (godFingerUnlocked == true) {
				godFingerGroup.style.display = "block";
			}
			achievementUnlockCheck();
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function achievementUnlockCheck() {
		try {
			if (lifetimeClicks >= 1 && achArr[0] == false) {
				if (gameStarted) {
					sfx3.play();
				}
				achStr = "Achievement Unlocked: Journey Begins";
				achArr[0] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000 && achArr[1] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: A Good Start";
				achArr[1] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 100000 && achArr[2] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Getting There";
				achArr[2] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 1000000 && achArr[3] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Millionare";
				achArr[3] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000000 && achArr[4] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Coin Pool";
				achArr[4] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 100000000 && achArr[5] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Abundance";
				achArr[5] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 1000000000 && achArr[6] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Billionare";
				achArr[6] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
				SHT = 500;
			}
			if (lifetimeClicks >= 10000000000 && achArr[7] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Excess";
				achArr[7] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 100000000000 && achArr[8] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Planet of Clicks";
				achArr[8] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 1000000000000 && achArr[9] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Trillionare";
				achArr[9] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 10000000000000 && achArr[10] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Pocket Dimension";
				achArr[10] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (lifetimeClicks >= 100000000000000 && achArr[11] == false) {
				if (gameStarted) {
					sfx3.play();
				};
				achievementCPS = achievementCPS + 0.01;
				achStr = "Achievement Unlocked: Far Too Many";
				achArr[11] = true;
				unlockString.textContent = achStr;
				unlockString.style.display = "block";
			}
			if (calcCPS) {
				cps = cps + Math.round(cps * achievementCPS);
				calcCPS = false;
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function addNumberCommas() {
		try {
			intArray = [clicks, clickValue, cps, lifetimeClicks, lifetimeManualClicks, coinClickCount, totalClickHelpers, achievementCPS, clickerCPS, clickerCost, 
				clickersOwned, superClickerCPS, superClickerCost, superClickersOwned, doublePointerCPS, doublePointerCost, doublePointersOwned, employeeCost, 
				employeesOwned, unbuffedCV, unbuffedCPS, clickerCPSWorth, superClickerCPSWorth, doublePointerCPSWorth];
			var i = -1;
			while (i < intArray.length - 1) {
				i++;
				if (navigator.userAgent.indexOf("Edg") == -1) {
					textArray[i] = intArray[i].toLocaleString();
				} else {
					textArray[i] = intArray[i];
				}
				if (i == 7 && navigator.userAgent.indexOf("Edg") == -1) {
					textArray[i] = Math.round(intArray[i].toLocaleString() * 100);
				} else if (i == 7 && navigator.userAgent.indexOf("Edg") != -1) {
					textArray[i] = intArray[i];
				}
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function shopCostPulse() {
		try {
			if (clicks >= clickerCost) {
				clickerCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				clickerCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= superClickerCost) {
				superClickerCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				superClickerCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= doublePointerCost) {
				doublePointerCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				doublePointerCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= cursorCost) {
				cursorCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				cursorCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= superCursorCost) {
				superCursorCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				superCursorCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= employeeCost) {
				employeeCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				employeeCostString.style.color = "rgb(0, 0, 0)";
			}
			if (clicks >= godFingerCost) {
				godFingerCostString.style.color = "rgb(0," + green + ",0)";
			} else {
				godFingerCostString.style.color = "rgb(0, 0, 0)";
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function initialDataLoad(doNotLoadCheck) {
		try {
			if (localStorage.getItem('saveData', saveData) != null) {
				const data = localStorage.getItem('saveData', saveData);
				const loadData = JSON.parse(data);
				if (doNotLoadCheck == false) {
					var ldLeng = loadData.length - 1;
				} else {
					var ldLeng = 100;
				}
				journeyBeginsUnlocked = loadData[32];
				ldLeng--;
				loadCheck(ldLeng);
				aGoodStartUnlocked = loadData[33];
				ldLeng--;
				loadCheck(ldLeng);
				gettingThereUnlocked = loadData[34];
				ldLeng--;
				loadCheck(ldLeng);
				millionareUnlocked = loadData[35];
				ldLeng--;
				loadCheck(ldLeng);
				coinPoolUnlocked = loadData[36];
				ldLeng--;
				loadCheck(ldLeng);
				abundanceUnlocked = loadData[37];
				ldLeng--;
				loadCheck(ldLeng);
				billionareUnlocked = loadData[38];
				ldLeng--;
				loadCheck(ldLeng);
				excessUnlocked = loadData[39];
				ldLeng--;
				loadCheck(ldLeng);
				planetOfClicksUnlocked = loadData[40];
				ldLeng--;
				loadCheck(ldLeng);
				trillionareUnlocked = loadData[41];
				ldLeng--;
				loadCheck(ldLeng);
				pocketDimensionUnlocked = loadData[42];
				ldLeng--;
				loadCheck(ldLeng);
				farTooManyUnlocked = loadData[43];
				ldLeng--;
				loadCheck(ldLeng);
				achArr = [journeyBeginsUnlocked, aGoodStartUnlocked, gettingThereUnlocked, millionareUnlocked, coinPoolUnlocked, abundanceUnlocked, billionareUnlocked,
					excessUnlocked, planetOfClicksUnlocked, trillionareUnlocked, pocketDimensionUnlocked, farTooManyUnlocked];
				clicks = loadData[0];
				ldLeng--;
				loadCheck(ldLeng);
				clickValue = loadData[1];
				ldLeng--;
				loadCheck(ldLeng);
				unbuffedCV = loadData[2];
				ldLeng--;
				loadCheck(ldLeng);
				cps = loadData[3];
				ldLeng--;
				loadCheck(ldLeng);
				unbuffedCPS = loadData[4];
				ldLeng--;
				loadCheck(ldLeng);
				timePlayed = loadData[5];
				ldLeng--;
				loadCheck(ldLeng);
				lifetimeClicks = loadData[6];
				ldLeng--;
				loadCheck(ldLeng);
				lifetimeManualClicks = loadData[7];
				ldLeng--;
				loadCheck(ldLeng);
				coinClickCount = loadData[8];
				ldLeng--;
				loadCheck(ldLeng);
				totalClickHelpers = loadData[9];
				ldLeng--;
				loadCheck(ldLeng);
				clickerCPS = loadData[10];
				ldLeng--;
				loadCheck(ldLeng);
				clickerCost = loadData[11];
				ldLeng--;
				loadCheck(ldLeng);
				clickersOwned = loadData[12];
				ldLeng--;
				loadCheck(ldLeng);
				superClickerUnlocked = loadData[13];
				ldLeng--;
				loadCheck(ldLeng);
				superClickerCPS = loadData[14];
				ldLeng--;
				loadCheck(ldLeng);
				superClickerCost = loadData[15];
				ldLeng--;
				loadCheck(ldLeng);
				superClickersOwned = loadData[16];
				ldLeng--;
				loadCheck(ldLeng);
				doublePointerUnlocked = loadData[17];
				ldLeng--;
				loadCheck(ldLeng);
				doublePointerCPS = loadData[18];
				ldLeng--;
				loadCheck(ldLeng);
				doublePointerCost = loadData[19];
				ldLeng--;
				loadCheck(ldLeng);
				doublePointersOwned = loadData[20];
				ldLeng--;
				loadCheck(ldLeng);
				cursorCost = loadData[21];
				ldLeng--;
				loadCheck(ldLeng);
				cursorOwned = loadData[22];
				ldLeng--;
				loadCheck(ldLeng);
				superCursorUnlocked = loadData[23];
				ldLeng--;
				loadCheck(ldLeng);
				superCursorCost = loadData[24];
				ldLeng--;
				loadCheck(ldLeng);
				superCursorOwned = loadData[25];
				ldLeng--;
				loadCheck(ldLeng);
				//volume = loadData[27];
				//bgm.volume = volume;
				//for (var i = 0; i > 2; i++) {
				//  audioList[i].volume = volume;
				//}
				employeeUnlocked = loadData[26];
				ldLeng--;
				loadCheck(ldLeng);
				employeeCost = loadData[27];
				ldLeng--;
				loadCheck(ldLeng);
				employeesOwned = loadData[28];
				ldLeng--;
				loadCheck(ldLeng);
				godFingerUnlocked = loadData[29];
				ldLeng--;
				loadCheck(ldLeng);
				godFingerCost = loadData[30];
				ldLeng--;
				loadCheck(ldLeng);
				godFingerOwned = loadData[31];
				ldLeng--;
				loadCheck(ldLeng);
				clickerCPSWorth = loadData[44];
				ldLeng--;
				loadCheck(ldLeng);
				superClickerCPSWorth = loadData[45];
				ldLeng--;
				loadCheck(ldLeng);
				doublePointerCPSWorth = loadData[46];
				ldLeng--;
				loadCheck(ldLeng);
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}
	function loadCheck(ldLeng) {
		if (ldLeng == -1) {
			console.group("Initial Data Reload");
			console.log("Data index is at the proper value, performing save and reload.");
			debugConsole = debugConsole + "Data index is at the proper value, performing save and reload." + "\n";
			const needToSave = true;
			manualSave = true;
			saveGame(needToSave);
			doNotLoadCheck = true;
			initialDataLoad(doNotLoadCheck);
		}
	}
	function saveGame(needToSave) {
		try {
			if (readyToSave && gameStarted || readyToSave && needToSave) {
				cps = cps - Math.round(cps * achievementCPS);
				readyToSave = false;
				savingString.textContent = "Saving...";
				savingString.style.display = "block";
				saveData.push(clicks);
				saveData.push(clickValue);
				saveData.push(unbuffedCV);
				saveData.push(cps);
				saveData.push(unbuffedCPS);
				saveData.push(timePlayed);
				saveData.push(lifetimeClicks);
				saveData.push(lifetimeManualClicks);
				saveData.push(coinClickCount);
				saveData.push(totalClickHelpers);
				saveData.push(clickerCPS);
				saveData.push(clickerCost);
				saveData.push(clickersOwned);
				saveData.push(superClickerUnlocked);
				saveData.push(superClickerCPS);
				saveData.push(superClickerCost);
				saveData.push(superClickersOwned);
				saveData.push(doublePointerUnlocked);
				saveData.push(doublePointerCPS);
				saveData.push(doublePointerCost);
				saveData.push(doublePointersOwned);
				saveData.push(cursorCost);
				saveData.push(cursorOwned);
				saveData.push(superCursorUnlocked);
				saveData.push(superCursorCost);
				saveData.push(superCursorOwned);
				//saveData.push(volume);
				saveData.push(employeeUnlocked);
				saveData.push(employeeCost);
				saveData.push(employeesOwned);
				saveData.push(godFingerUnlocked);
				saveData.push(godFingerCost);
				saveData.push(godFingerOwned);
				saveData.push(journeyBeginsUnlocked);
				saveData.push(aGoodStartUnlocked);
				saveData.push(gettingThereUnlocked);
				saveData.push(millionareUnlocked);
				saveData.push(coinPoolUnlocked);
				saveData.push(abundanceUnlocked);
				saveData.push(billionareUnlocked);
				saveData.push(excessUnlocked);
				saveData.push(planetOfClicksUnlocked);
				saveData.push(trillionareUnlocked);
				saveData.push(pocketDimensionUnlocked);
				saveData.push(farTooManyUnlocked);
				saveData.push(clickerCPSWorth);
				saveData.push(superClickerCPSWorth);
				saveData.push(doublePointerCPSWorth);
				calcCPS = true;
				saveGameP2(needToSave);
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function saveGameP2(needToSave) {
		try {
			localStorage.setItem('saveData', JSON.stringify(saveData));
			while (saveData.length > 0) {
				saveData.pop();
			}
			if (saveData.length == 0) {
				if (manualSave == true) {
					savingString.textContent = "Game saved.";
					console.log("Game saved @ playtime " + timePlayed + "ms");
					debugConsole = debugConsole + ("Game saved @ playtime " + timePlayed + "ms" + "\n");
				} else {
					savingString.textContent = "Game autosaved.";
					console.log("Game autosaved @ playtime " + timePlayed + "ms");
					debugConsole = debugConsole + ("Game autosaved @ playtime " + timePlayed + "ms" + "\n");
				}
				if (needToSave) {
					console.groupEnd();
				}
				SHT = 500;
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function wipeSave() {
		try {
			if (readyToSave == true) {
				readyToSave = false;
				if (confirm("This is completely irreversible and wiping your save will also refresh the page! Are you sure you wish to continue?")) {
					localStorage.removeItem("saveData");
					location.reload();
				} else {
					readyToSave = true;
				}
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function timedLabelCount() {
		try {
			SHT--;
			if (SHT == 0) {
				savingString.textContent = "";
				unlockString.textContent = "";
				incorrectKeyLabel.textContent = "";
				readyToSave = true;
				SHT++;
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}

	function timeIncrease() {
		timePlayed = timePlayed + 1000;
	}

	function coinClick() {
		sfx.play();
		clicks = clicks + clickValue;
		lifetimeClicks = lifetimeClicks + clickValue;
		lifetimeManualClicks = lifetimeManualClicks + clickValue;
		coinClickCount++;
	}

	function cpsClick() {
		clicks = clicks + cps;
		lifetimeClicks = lifetimeClicks + cps;
	}

	function rgChange() {
		if (increase == true) {
			red = red + 5;
			green = green + 5;
		} else if (increase == false) {
			red = red - 5;
			green = green - 5;
		}
		if (green == 200) {
			increase = false;
		} else if (green == 0) {
			increase = true;
		}
		shopCostPulse();
	}

	function canvasDraw() {
		const canvas = document.getElementById("borders");
		const ctx = canvas.getContext("2d");
		const size = $(window).width();
		const scale = window.devicePixelRatio;
		if (navigator.userAgent.indexOf("OPR") == -1 && navigator.userAgent.indexOf("Edg") == -1) {
			canvas.style.width = "${size}px";
			canvas.style.height = "${size}px";
			canvas.height = Math.floor(size * scale);
			canvas.width = Math.floor(size * scale);
			ctx.scale(scale, scale);
			if (size == 1920) {
				ctx.fillRect(505, 0, 2, canvas.height);
				ctx.fillRect(1350, 0, 2, canvas.height);
			} else if (size == 1366) {
				ctx.fillRect(405, 0, 2, canvas.height);
				ctx.fillRect(925, 0, 2, canvas.height);
			}
		}
	}

	function createBase64Key() {
		try {
			if (gameStarted == false) {
				generatedKey = "debug";
				console.group("Debug Key Status");
				console.log("Generating key...");
				debugConsole = debugConsole + "Generating key..." + "\n";
				const addArray = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N",
					"o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
					"8", "9"
				];
				var c = 30;
				while (c > 0) {
					c--;
					var val = (Math.floor(Math.random() * 62) + 1);
					generatedKey = generatedKey + addArray[val];
					if (c == 0) {
						console.log("Key generated.");
						debugConsole = debugConsole + "Key generated." + "\n";
						const base64key = btoa(generatedKey);
						key.textContent = base64key;
						key.style.fontFamily = "courier";
						key.style.display = "block";
						console.log("Unencoded: " + generatedKey);
						console.log("Base64: " + base64key);
						debugConsole = debugConsole + "Unencoded: " + generatedKey + "\n";
						debugConsole = debugConsole + "Base64: " + base64key + "\n";
						console.groupEnd();
					}
				}
			}
		} catch (error) {
			const eElement = document.createElement("p");
			const body = document.body;
			const titlescreen = document.getElementById("titlescreen");
			eElement.textContent = "Error in script: " + error;
			console.error(error);
			eElement.style.fontSize = "25px";
			eElement.style.display = "block";
			titlescreen.style.display = "none";
			body.appendChild(eElement);
		}
	}
	function logDNPError() {
		console.error("Stop! Do NOT paste anything here. If you are told to do so, it is likely that someone is attempting to mess up your save.");
	}
	//Event listeners
	startButton.addEventListener("click", function () {
		gameStarted = true;
		sfx.play();
		bgm.play();
		bgm.loop = "true";
		if (generatedKey != "debug") {
			key.style.display = "none";
		}
		startButton.style.display = "none";
		title.style.display = "none";
		updateString.style.display = "none";
		betaString.style.display = "none";
		basedOnBuildString.style.display = "none";
		bmbarNote.style.display = "none";
		resWarn.style.display = "none";
		runningBrowserString.style.display = "none";
		game.style.display = "block";
		shopPanel.style.display = "block";
		statsPanel.style.display = "block";
		canvasDraw();
	});

	coin.addEventListener("click", coinClick);
	clickerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= clickerCost) {
			clicks = clicks - clickerCost;
			clickersOwned++;
			cps = cps + clickerCPS;
			clickerCPSWorth = clickerCPSWorth + clickerCPS;
			//if (buff == "cpsDouble") {
			//  cps = cps + (clickerCPS * 2);
			//}
			clickerCPS = clickerCPS + Math.round(clickersOwned * 2 + (0.01 * cps) + (Math.floor(Math.random() * 15) + 3));
			clickerCost = clickerCost + Math.round(clickersOwned + (5 * cps) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
			clickValue = clickValue + Math.round(clickersOwned * 0.5 + 0.05 * cps);
			totalClickHelpers++;
		}
	});

	superClickerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= superClickerCost) {
			clicks = clicks - superClickerCost;
			superClickersOwned++;
			cps = cps + superClickerCPS;
			superClickerCPSWorth = superClickerCPSWorth + superClickerCPS;
			//if (buff == "cpsDouble") {
			//  cps = cps + (superClickerCPS * 2);
			//}
			superClickerCPS = superClickerCPS + Math.round(superClickersOwned * 3 + (0.4 * cps));
			superClickerCost = superClickerCost + Math.round(superClickerCost + (50 * cps) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
			clickValue = clickValue + Math.round(superClickersOwned * 2 + 0.10 * cps);
			totalClickHelpers++;
		}
	});

	doublePointerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= doublePointerCost) {
			clicks = clicks - doublePointerCost;
			doublePointersOwned++;
			cps = cps + doublePointerCPS;
			doublePointerCPSWorth = doublePoitnerCPSWorth + doublePointerCPS;
			//if (buff == "cpsDouble") {
			//  cps = cps + (doublePointerCPS * 2);
			//}
			doublePointerCPS = doublePointerCPS + Math.round(doublePointersOwned * 5 + (0.6 * cps));
			doublePointerCost = doublePointerCost + Math.round(doublePointersOwned + (100 * cps) + doublePointersOwned * 10 + (Math.floor(Math.random() * 1000000) + 500000));
			clickValue = clickValue + Math.round(doublePointersOwned * 3 + 0.12 * cps);
			totalClickHelpers++;
		}
	});
	upgradeButton.addEventListener("click", function () {
		upgradeShopOpen = true;
		sfx.play();
		shopPanel.style.display = "none";
		upgradeShopPanel.style.display = "block";
	});
	upgradeRTS.addEventListener("click", function () {
		upgradeShopOpen = false;
		sfx.play();
		shopPanel.style.display = "block";
		upgradeShopPanel.style.display = "none";
	});
	cursorBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= cursorCost) {
			clicks = clicks - cursorCost;
			cursorOwned = true;
			cps = cps + Math.round(cps * cursorCPS);
			//if (buff == "cpsDouble") {
			//  cps = cps + Math.round(cps * (cursorCPS * 2));
			//}
			cursorCost = "Owned.";
			clickValue = clickValue + Math.round(0.07 * cps);
			totalClickHelpers++;
		}
	});
	superCursorBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= superCursorCost) {
			clicks = clicks - superCursorCost;
			superCursorOwned = true;
			cps = cps + Math.round(cps * superCursorCPS);
			//if (buff == "cpsDouble") {
			//  cps = cps + Math.round(cps * (superCursorCPS * 2));
			//}
			superCursorCost = "Owned.";
			clickValue = clickValue + Math.round(0.12 * cps);
			totalClickHelpers++;
		}
	});
	employeeBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= employeeCost) {
			clicks = clicks - employeeCost;
			employeesOwned++;
			cps = cps + Math.round(cps * employeeCPS);
			//if (buff == "cpsDouble") {
			//  cps = cps + Math.round(cps * (employeeCPS * 2));
			//}
			employeeCost = employeeCost + (employeesOwned * employeeCost);
			employeeCPS = employeeCPS * 2;
			totalClickHelpers++;
		}
	});
	godFingerBuy.addEventListener("click", function () {
		sfx.play();
		if (clicks >= godFingerCost) {
			clicks = clicks - godFingerCost;
			godFingerOwned = true;
			clickValue = clickValue + Math.round(godFingerCV * clickValue);
			//if (buff == "cv777%CPS") {
			//  clickValue = clickValue + Math.round((godFingerCV * clickValue) * 7.77 * cps)
			//}
			godFingerCost = "Owned.";
			totalClickHelpers++;
		}
	})
	saveButton.addEventListener("click", function () {
		sfx.play();
		manualSave = true;
		saveGame();
	});
	wipeSaveButton.addEventListener("click", function () {
		sfx.play();
		wipeSave();
	});
	document.addEventListener("keyup", function (s) {
		titlescreen.appendChild(key);
		if (s.key == "s") {
			manualSave = true;
			saveGame();
		} else if (s.key == "y" && s.ctrlKey) {
			createBase64Key();
		} else if (s.key == "y" && s.altKey) {
			if (gameStarted && debugScreenState == "closed") {
				debugScreenState = "open";
				game.style.display = "none";
				debugKeyInputScreen.style.display = "block";
			} else if (gameStarted && debugScreenState == "open") {
				debugScreenState = "closed";
				debugKeyInputScreen.style.display = "none";
				debugScreen.style.display = "none";
				game.style.display = "block";
			}
		}
	});
	debugKeySubmit.addEventListener("click", function (event) {
		event.preventDefault();
		try {
			var dmkInput = atob(debugKeyInput.value);
		} catch (error) {
			console.warn("Debug Access Key input is not encoded. Using raw input as value.");
			debugConsole = debugConsole + "WARN: Debug access key input is not encoded. Using raw input as value." + "\n";
			dmkInput = debugKeyInput.value;
		}
		if (dmkInput == generatedKey) {
			debugKeyInputScreen.style.display = "none";
			debugScreen.style.display = "block";
		} else {
			incorrectKeyLabel.style.display = "block";
			incorrectKeyLabel.textContent = "Incorrect key.";
			SHT = 500;
		}
	});
	document.addEventListener("mousemove", function (event) {
		let achCPSNotice = document.getElementById("achievementcpsnotice");
		let left = event.clientX;
		let top = event.clientY;
		achCPSNotice.style.left = left + 'px';
		achCPSNotice.style.top = top + 'px';
		clickerInfo.style.left = left + 'px';
		clickerInfo.style.top = top + 'px';
		superClickerInfo.style.top = top + 'px';
		superClickerInfo.style.left = left + 'px';
		doublePointerInfo.style.left = left + 'px';
		doublePointerInfo.style.top = top + 'px';
	})
	achievementsButton.addEventListener("click", function () {
		game.style.display = "none";
		achievementsPanel.style.display = "block";
		achNameStr.textContent = achStrs[0];
		achDescStr.textContent = achDescs[0];
		achUnlockStr.textContent = "Unlocked: " + achArr[0];
	});
	backToGame.addEventListener("click", function () {
		game.style.display = "block";
		achievementsPanel.style.display = "none";
	});
	journeyBegins.addEventListener("click", function () {
		achNameStr.textContent = achStrs[0];
		achDescStr.textContent = achDescs[0];
		achUnlockStr.textContent = "Unlocked: " + achArr[0];
	});
	aGoodStart.addEventListener("click", function () {
		achNameStr.textContent = achStrs[1];
		achDescStr.textContent = achDescs[1];
		achUnlockStr.textContent = "Unlocked: " + achArr[1];
	});
	gettingThere.addEventListener("click", function () {
		achNameStr.textContent = achStrs[2];
		achDescStr.textContent = achDescs[2];
		achUnlockStr.textContent = "Unlocked: " + achArr[2];
	});
	millionare.addEventListener("click", function () {
		achNameStr.textContent = achStrs[3];
		achDescStr.textContent = achDescs[3];
		achUnlockStr.textContent = "Unlocked: " + achArr[3];
	});
	coinPool.addEventListener("click", function () {
		achNameStr.textContent = achStrs[4];
		achDescStr.textContent = achDescs[4];
		achUnlockStr.textContent = "Unlocked: " + achArr[4];
	});
	abundance.addEventListener("click", function () {
		achNameStr.textContent = achStrs[5];
		achDescStr.textContent = achDescs[5];
		achUnlockStr.textContent = "Unlocked: " + achArr[5];
	});
	billionare.addEventListener("click", function () {
		achNameStr.textContent = achStrs[6];
		achDescStr.textContent = achDescs[6];
		achUnlockStr.textContent = "Unlocked: " + achArr[6];
	});
	excess.addEventListener("click", function () {
		achNameStr.textContent = achStrs[7];
		achDescStr.textContent = achDescs[7];
		achUnlockStr.textContent = "Unlocked: " + achArr[7];
	});
	planetOfClicks.addEventListener("click", function () {
		achNameStr.textContent = achStrs[8];
		achDescStr.textContent = achDescs[8];
		achUnlockStr.textCOntent = "Unlocked: " + achArr[8];
	});
	trillionare.addEventListener("click", function () {
		achNameStr.textContent = achStrs[9];
		achDescStr.textContent = achDescs[9];
		achUnlockStr.textContent = "Unlocked: " + achArr[9];
	});
	pocketDimension.addEventListener("click", function () {
		achNameStr.textContent = achStrs[10];
		achDescStr.textContent = achDescs[10];
		achUnlockStr.textContent = "Unlocked: " + achArr[10];
	});
	farTooMany.addEventListener("click", function () {
		achNameStr.textContent = achStrs[11];
		achDescStr.textContent = achDescs[11];
		achUnlockStr.textContent = "Unlocked: " + achArr[11];
	});
	//Function intervals
	setInterval(updateScreen, 100);
	setInterval(cpsClick, 1000);
	setInterval(timeIncrease, 1000);
	setInterval(saveGame, 60000);
	setInterval(timedLabelCount, 1);
	setInterval(rgChange, 25);
	setInterval(logDNPError, 65000);
}