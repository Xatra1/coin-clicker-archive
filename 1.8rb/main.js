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
var clickValueString = document.getElementById("clickvaluestring");
var unlockString = document.getElementById("unlockstring");
var saveButton = document.getElementById("savebutton");
var savingString = document.getElementById("savingstring");
var wipeSaveButton = document.getElementById("wipesavebutton");
var wipedSaveString = document.getElementById("wipedstring");
//Shop panel elements
var shopPanel = document.getElementById("shoppanel");
var clickerBuy = document.getElementById("clickerbuy");
var clickerCPSString = document.getElementById("clickercpsstring");
var clickerCostString = document.getElementById("clickercoststring");
var clickersOwnedString = document.getElementById("clickersownedstring");
var superClickerGroup = document.getElementById("superclicker");
var superClickerBuy = document.getElementById("superclickerbuy");
var superClickerCPSString = document.getElementById("superclickercpsstring");
var superClickerCostString = document.getElementById("superclickercoststring");
var superClickersOwnedString = document.getElementById("superclickersownedstring");
var doublePointerGroup = document.getElementById("doublepointer");
var doublePointerBuy = document.getElementById("doublepointerbuy");
var doublePointerCPSString = document.getElementById("doublepointercpsstring");
var doublePointerCostString = document.getElementById("doublepointercoststring");
var doublePointersOwnedString = document.getElementById("doublepointersownedstring");
//Upgrade shop panel elements
var upgradeShopPanel = document.getElementById("upgradeshoppanel");
var upgradeButton = document.getElementById("upgradebutton");
var upgradeRTS = document.getElementById("shopreturnbutton");
var cursorBuy = document.getElementById("cursorbuy");
var cursorCostString = document.getElementById("cursorcoststring");
var cursorOwnedString = document.getElementById("cursorownedstring");
var superCursorGroup = document.getElementById("supercursor");
var superCursorBuy = document.getElementById("supercursorbuy");
var superCursorCostString = document.getElementById("supercursorcoststring");
var superCursorOwnedString = document.getElementById("supercursorownedstring");
//Stat panel elements
var statsPanel = document.getElementById("statspanel");
var timePlayedString = document.getElementById("timestring");
var lifetimeClicksString = document.getElementById("lifetimeclicksstring");
var lifetimeManualClicksString = document.getElementById("lifetimemanualclicksstring");
var coinClickCountString = document.getElementById("coinclickcountstring");
var totalClickHelpersString = document.getElementById("totalclickhelpersstring");
var achievementCPSString = document.getElementById("achievementcpsstring");
//Title screen variables
var gameStarted = false;
var buildNumber = "1.8rb";
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
var superClickerCost = 500000;
var superClickersOwned = 0;
var doublePointerUnlocked = false;
var doublePointerCPS = 35000000;
var doublePointerCost = 2000000000;
var doublePointersOwned = 0;
//Upgrade shop variables
var cursorCPS = 0.50;
var cursorCost = 5000000;
var cursorOwned = false;
var superCursorUnlocked = false;
var superCursorCPS = 0.75;
var superCursorCost = 500000000;
var superCursorOwned = false;
//var employeeUnlocked = false;
//var employeeCPS = 0.10;
//var employeeCPSText = employeeCPS * 100 + "% (Stacks)";
//var employeeCost = 50000000000;
//var employeesOwned = 0;
//var godFingerUnlocked = false;
//var godFingerPerk = "200% of CPS";
//var godFingerCost = 5000000000000;
//var godFingerOwned = false;
//Save and load variables
var manualSave = false;
var readyToSave = true;
const saveData = [];
var SHT;
//var achievementArray;
//Click event variables
//var clickEventRNG;
//var buff = "none";
//var selectedEvent;
//var clicksAdded;
//Optimization variables
var upgradeShopOpen;
//Achievement screen variables
//var journeyBeginsUnlocked = false;
//var aGoodStartUnlocked = false;
//var gettingThereUnlocked = false;
//var millionareUnlocked = false;
//var coinPoolUnlocked = false;
//var thatsEnoughUnlocked = false;
//var billionareUnlocked = false;
//var anExcessOfClicksUnlocked = false;
//var planetOfClicksUnlocked = false;
//var trillionareUnlocked = false;
//var clickDimensionUnlocked = false;
//var farTooManyUnlocked = false;
//var quadrillionareUnlocked = false;
//var monopolyUnlocked = false;
//var goOutsideUnlocked = false;
//var aQuintillionareEndgameUnlocked = false;
//Settings screen variables
//var muted = false;
//var muteLoad = true;
//Audio file variables
var bgm = new Audio("./mp3/bgm.mp3");
var sfx = new Audio("./mp3/click.mp3");
//Color variables
var increase = true;
var red = 0;
var green = 0;
//Title screen content updates
buildString.textContent = ("rewrite build " + buildNumber);
updateString.textContent = ("the " + updateName + " update");
initialDataLoad();
//Functions
function updateScreen() {
  clickString.textContent = "Clicks: " + clicks;
  cpsString.textContent = "Clicks per Second: " + cps;
  clickValueString.textContent = "Click Value: " + clickValue;
  clickerCPSString.textContent = "CPS: +" + clickerCPS;
  clickerCostString.textContent = "Cost: " + clickerCost;
  clickersOwnedString.textContent = "Owned: " + clickersOwned;
  if (upgradeShopOpen == true) {
    cursorOwnedString.textContent = "Owned: " + cursorOwned;
    superCursorOwnedString.textContent = "Owned: " + superCursorOwned;
    if (cursorOwned == true) {
      cursorCostString.textContent = "Cannot buy again.";
    }
    if (superCursorOwned == true) {
      superCursorCostString.textContent = "Cannot buy again.";
    }
  }
  if (timePlayed == 1000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " second.";
  } else if (timePlayed >= 60000 && timePlayed < 120000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minute.";
  } else if (timePlayed >= 3600000 && timePlayed < 7200000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hour.";
  }
  if (timePlayed > 1000 && timePlayed < 60000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 1000) + " seconds.";
  } else if (timePlayed > 120000 && timePlayed < 3600000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 60000) + " minutes.";
  } else if (timePlayed > 7200000) {
    timePlayedString.textContent = "You have played for " + Math.round(timePlayed / 3600000) + " hours.";
  }
  lifetimeClicksString.textContent = "You have obtained a total of " + lifetimeClicks + " clicks.";
  if (lifetimeClicks == 1) {
    lifetimeClicksString.textContent = "You have obtained a total of " + lifetimeClicks + " click.";
  }
  lifetimeManualClicksString.textContent = "You have gotten " + lifetimeManualClicks + " clicks from clicking.";
  if (lifetimeManualClicks == 1) {
    lifetimeManualClicksString.textContent = "You have gotten " + lifetimeManualClicks + " click from clicking.";
  }
  coinClickCountString.textContent = "You have clicked the coin " + coinClickCount + " times.";
  if (coinClickCount == 1) {
    coinClickCountString.textContent = "You have clicked the coin " + coinClickCount + " time.";
  }
  totalClickHelpersString.textContent = "You have bought " + totalClickHelpers + " items.";
  if (totalClickHelpers == 1) {
    totalClickHelpersString.textContent = "You have bought " + totalClickHelpers + " item.";
  }
  achievementCPSString.textContent = "Your achievements give +" + achievementCPS + "% CPS."
  shopUnlockedCheck();
}

function shopUnlockedCheck() {
  if (clickersOwned >= 25 && superClickerUnlocked == false) {
    unlockString.textContent = "Super Clicker Unlocked!";
    unlockString.style.display = "block";
    superClickerGroup.style.display = "block";
    superClickerUnlocked = true;
    setInterval(function() {
      unlockString.style.display = "none";
    }, 3000);
  } else if (superClickerUnlocked == true) {
    superClickerCPSString.textContent = "CPS: +" + superClickerCPS;
    superClickerCostString.textContent = "Cost: " + superClickerCost;
    superClickersOwnedString.textContent = "Owned: " + superClickersOwned;
  }
  if (clickersOwned >= 75 && superClickersOwned >= 5 && doublePointerUnlocked == false) {
    unlockString.textContent = "Double Pointer Unlocked!";
    unlockString.style.display = "block";
    doublePointerGroup.style.display = "block";
    doublePointerUnlocked = true;
    setInterval(function() {
      unlockString.style.display = "none";
    }, 3000);
  } else if (doublePointerUnlocked == true) {
    doublePointerCPSString.textContent = "CPS: +" + doublePointerCPS;
    doublePointerCostString.textContent = "Cost: " + doublePointerCost;
    doublePointersOwnedString.textContent = "Owned: " + doublePointersOwned;
  }
  if (cursorOwned == true && superCursorUnlocked == false) {
    unlockString.textContent = "Super Cursor Unlocked!";
    unlockString.style.display = "block";
    superCursorGroup.style.display = "block";
    superCursorUnlocked = true;
  }
}

function initialDataLoad() {
  if (localStorage.getItem('saveData', saveData) != null) {
    const loadData = JSON.parse(localStorage.getItem('saveData', saveData));
    clicks = loadData[0];
    clickValue = loadData[1];
    unbuffedCV = loadData[2];
    cps = loadData[3];
    unbuffedCPS = loadData[4];
    timePlayed = loadData[5];
    lifetimeClicks = loadData[6];
    lifetimeManualClicks = loadData[7];
    coinClickCount = loadData[8];
    totalClickHelpers = loadData[9];
    achievementCPS = loadData[10];
    clickerCPS = loadData[11];
    clickerCost = loadData[12];
    clickersOwned = loadData[13];
    superClickerUnlocked = loadData[14];
    superClickerCPS = loadData[15];
    superClickerCost = loadData[16];
    superClickersOwned = loadData[17];
    doublePointerUnlocked = loadData[18];
    doublePointerCPS = loadData[19];
    doublePointerCost = loadData[20];
    doublePointersOwned = loadData[21];
    cursorCost = loadData[22];
    cursorOwned = loadData[23];
  }
}

function saveGame() {
  if (readyToSave == true) {
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
    saveData.push(achievementCPS);
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
    console.log(saveData);
    saveGameP2();
  }
}

function saveGameP2() {
  localStorage.setItem('saveData', JSON.stringify(saveData));
  while (saveData.length > 0) {
    saveData.pop();
  }
  if (saveData.length == 0) {
    if (manualSave == true) {
      savingString.textContent = "Game saved.";
    } else {
      savingString.textContent = "Game autosaved.";
    }
    SHT = 500;
  }
}

function wipeSave() {
  if (readyToSave == true) {
    readyToSave = false;
    if (confirm("This is completely irreversible and wiping your save will also refresh the page! Are you 100% sure you wish to continue?")) {
      localStorage.removeItem("saveData");
      location.reload();
      readyToSave = true;
    } else {
      readyToSave = true;
    }
  }
}

function decreaseSavedHideTimeout() {
  SHT--;
  if (SHT == 0) {
    savingString.textContent = "";
    readyToSave = true;
    SHT++;
  }
}

function timeIncrease() {
  timePlayed = timePlayed + 1000;
}

function coinClick() {
  clicks = clicks + clickValue;
  lifetimeClicks = lifetimeClicks + clickValue;
  lifetimeManualClicks = lifetimeManualClicks + clickValue;
  coinClickCount = coinClickCount + 1;
}

function cpsClick() {
  clicks = clicks + cps;
  lifetimeClicks = lifetimeClicks + cps;
}

function rgChange() {
  if (increase == true) {
    green = green + 5;
  } else if (increase == false) {
    green = green - 5;
  }
  if (green == 200) {
    increase = false;
  } else if (green == 0) {
    increase = true;
  }
}
//Event listeners
startButton.addEventListener("click", function() {
  gameStarted = true;
  sfx.play();
  bgm.play();
  bgm.loop = "true";
  startButton.style.display = "none";
  title.style.display = "none";
  updateString.style.display = "none";
  betaString.style.display = "none";
  basedOnBuildString.style.display = "none";
  game.style.display = "block";
  shopPanel.style.display = "block";
  statsPanel.style.display = "block";
});
coin.addEventListener("click", coinClick);
clickerBuy.addEventListener("click", function() {
  sfx.play();
  if (clicks >= clickerCost) {
    clicks = clicks - clickerCost;
    clickersOwned = clickersOwned + 1;
    cps = cps + clickerCPS;
    //if (buff == "cpsDouble") {
    //  cps = cps + (clickerCPS * 2);
    //}
    clickerCPS = clickerCPS + Math.round(clickersOwned * 2 + (0.01 * cps) + (Math.floor(Math.random() * 15) + 3));
    clickerCost = clickerCost + Math.round(clickersOwned + (5 * cps) + clickersOwned * 3 + (Math.floor(Math.random() * 200) + 100));
    clickValue = clickValue + Math.round(clickersOwned * 0.5 + 0.05 * cps);
    totalClickHelpers = totalClickHelpers + 1;
  }
});
superClickerBuy.addEventListener("click", function() {
  sfx.play();
  if (clicks >= superClickerCost) {
    clicks = clicks - superClickerCost;
    superClickersOwned = superClickersOwned + 1;
    cps = cps + superClickerCPS;
    //if (buff == "cpsDouble") {
    //  cps = cps + (superClickerCPS * 2);
    //}
    superClickerCPS = superClickerCPS + Math.round(superClickersOwned * 3 + (0.4 * cps));
    superClickerCost = superClickerCost + Math.round(superClickerCost + (50 * cps) + superClickersOwned * 4 + (Math.floor(Math.random() * 50000) + 30000));
    clickValue = clickValue + Math.round(superClickersOwned * 2 + 0.10 * cps);
  }
});
doublePointerBuy.addEventListener("click", function() {
  sfx.play();
  if (clicks >= doublePointerCost) {
    clicks = clicks - doublePointerCost;
    doublePointersOwned = doublePointersOwned + 1;
    cps = cps + doublePointerCPS;
    //if (buff == "cpsDouble") {
    //  cps = cps + (doublePointerCPS * 2);
    //}
    doublePointerCPS = doublePointerCPS + Math.round(doublePointersOwned * 5 + (0.6 * cps));
    doublePointerCost = doublePointerCost + Math.round(doublePointersOwned + (100 * cps) + doublePointersOwned * 10 + (Math.floor(Math.random() * 1000000) + 500000));
    clickValue = clickValue + Math.round(doublePointersOwned * 3 + 0.12 * cps);
  }
});
upgradeButton.addEventListener("click", function() {
  upgradeShopOpen = true;
  sfx.play();
  shopPanel.style.display = "none";
  upgradeShopPanel.style.display = "block";
});
upgradeRTS.addEventListener("click", function() {
  upgradeShopOpen = false;
  sfx.play();
  shopPanel.style.display = "block";
  upgradeShopPanel.style.display = "none";
});
cursorBuy.addEventListener("click", function() {
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
  }
});
superCursorBuy.addEventListener("click", function() {
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
  }
});
saveButton.addEventListener("click", function() {
  sfx.play();
  manualSave = true;
  saveGame();
});
wipeSaveButton.addEventListener("click", function() {
  sfx.play();
  wipeSave();
});
//Function intervals
setInterval(updateScreen, 100);
setInterval(cpsClick, 1000);
setInterval(timeIncrease, 1000);
setInterval(saveGame, 60000);
setInterval(decreaseSavedHideTimeout, 1);
setInterval(rgChange, 25);
