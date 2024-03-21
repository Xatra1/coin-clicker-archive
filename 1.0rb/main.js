//Title screen elements
var buildString = document.getElementById("buildstring");
var basedOnBuildString = document.getElementById("basedonbuildstring");
var updateString = document.getElementById("updatestring");
var betaString = document.getElementById("betastring");
var startButton = document.getElementById("startbutton");
var title = document.getElementById("title");
//Game screen elements
var game = document.getElementById("gamescreen");
var coin = document.getElementById("coin");
var clickString = document.getElementById("clickstring");
var cpsString = document.getElementById("cpsstring");
//Shop panel elements
var shopPanel = document.getElementById("shoppanel");
var clickerBuy = document.getElementById("clickerbuy");
var clickerCPSString = document.getElementById("clickercpsstring");
var clickerCostString = document.getElementById("clickercoststring");
var clickersOwnedString = document.getElementById("clickersownedstring");
//Title screen variables
var gameStarted = false;
var buildNumber = "1.0rb";
var updateName = "rewrite";
//Stat variables
var clicks = 0;
var clickValue = 1;
var unbuffedCV = 1;
var cps = 0;
var unbuffedCPS = 0;
var timePlayed = 0;
var lifetimeClicks = 0;
var lifetimeManualClicks = 0;
var coinClickCount = 0;
var totalClickHelpers = 0;
var achievementCPS = 0;
//Shop variables
var clickerCPS = 5;
var clickerCost = 15;
var clickersOwned = 0;
var superClickerUnlocked = false;
var superClickerCPS = 1000;
var superClickerCost = 300000;
var superClickersOwned = 0;
var doublePointerUnlocked = false;
var doublePointerCPS = 35000000;
var doublePointerCost = 2000000000;
var doublePointersOwned = 0;
var cursorCPS = 1.00;
var cursorCPSText = cursorCPS * 100 + "%";
var cursorCost = 5000000;
var cursorsOwned = 0;
var superCursorUnlocked = false;
var superCursorCPS = 2.00;
var superCursorCPSText = superCursorCPS * 100 + "%";
var superCursorCost = 100000000;
var superCursorsOwned = 0;
var employeeUnlocked = false;
var employeeCPS = 0.10;
var employeeCPSText = employeeCPS * 100 + "% (Stacks)";
var employeeCost = 50000000000;
var employeesOwned = 0;
var godFingerUnlocked = false;
var godFingerPerk = "200% of CPS";
var godFingerCost = 5000000000000;
var godFingerOwned = 0;
//Save and load variables
var manualSave = 0;
var readyToSave = 1;
var saveArray;
var achievementArray;
var backupArray;
var backupAchievementsArray;
var manualLoad = false;
var debugEnabledBeforeSave = false;
var waitingForVersionMatch = false;
var versionMismatch = false;
//Save editor variables
var editFriendlySaveArray;
var efdObj;
var selectedStat;
var selectedStatSave;
//Debug mode variables
var debug_mode = false;
var debugCodeInput;
//Click event variables
var ceV;
var buff = "none";
var selectedEvent;
var clicksAdded;
//Optimization variables
var statsOpen;
var shopOpen;
var upgradeShopOpen;
var achievementsOpen;
//Achievement screen variables
var achievementName;
var achievementDescription;
var achievementUnlocked;
var journeyBeginsUnlocked = false;
var aGoodStartUnlocked = false;
var gettingThereUnlocked = false;
var millionareUnlocked = false;
var coinPoolUnlocked = false;
var thatsEnoughUnlocked = false;
var billionareUnlocked = false;
var anExcessOfClicksUnlocked = false;
var planetOfClicksUnlocked = false;
var trillionareUnlocked = false;
var clickDimensionUnlocked = false;
var farTooManyUnlocked = false;
var quadrillionareUnlocked = false;
var monopolyUnlocked = false;
var goOutsideUnlocked = false;
var aQuintillionareEndgameUnlocked = false;
var textR = 0;
var increase = true;
//Settings screen variables
var muted = false;
var muteLoad = true;
//Audio file variables
var bgm = new Audio("./mp3/bgm.mp3");
var sfx = new Audio("./mp3/clicksfx.mp3");
//Title screen content updates
buildString.textContent = ("build " + buildNumber);
updateString.textContent = ("the " + updateName + " update");
//Functions
function updateScreen() {
  clickString.textContent = "Clicks: " + clicks;
  cpsString.textContent = "Clicks per Second: " + cps;
  clickerCPSString.textContent = "CPS: +" + clickerCPS;
  clickerCostString.textContent = "Cost: " + clickerCost;
  clickersOwnedString.textContent = "Owned: " + clickersOwned;
}
function coinClick() {
  clicks = clicks + clickValue;
  lifetimeClicks = lifetimeClicks + clicks;
  lifetimeManualClicks = lifetimeManualClicks + clickValue;
  coinClickCount = coinClickCount + 1;
}
function cpsClick() {
  clicks = clicks + cps;
  lifetimeClicks = lifetimeClicks + cps;
}
//Event listeners
startButton.addEventListener("click", function () {
  gameStarted = true;
  sfx.play();
  bgm.play();
  bgm.loop = "true";
  startButton.style.display = "none";
  title.style.display = "none";
  updateString.style.display = "none";
  betaString.style.display = "none";
  basedOnBuildString.style.display = "none";
  game.style.display = "inline-block";
  shopPanel.style.display = "inline-block";
});
coin.addEventListener("click", coinClick);
clickerBuy.addEventListener("click", function () {
  sfx.play();
  if (clicks >= clickerCost) {
    clicks = clicks - clickerCost;
    clickersOwned = clickersOwned + 1;
    cps = cps + clickerCPS;
    if (buff == "cpsDouble") {
      cps = cps + (clickerCPS * 2);
    }
    clickerCPS = clickerCPS + Math.round(clickersOwned * 2 + (0.01 * cps) + (Math.floor(Math.random() * 15) + 3));
    clickerCost = clickerCost + Math.round(clickersOwned + (5 * cps) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
    clickValue = clickValue + Math.round(clickersOwned * 0.5 + 0.05 * cps);
    totalClickHelpers = totalClickHelpers + 1;
  }
})
//Function intervals
setInterval(updateScreen, 100);
setInterval(cpsClick, 1000);