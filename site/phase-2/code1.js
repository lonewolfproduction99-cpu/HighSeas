gdjs.SailingCode = {};
gdjs.SailingCode.localVariables = [];
gdjs.SailingCode.idToCallbackMap = new Map();
gdjs.SailingCode.GDOceanObjects1= [];
gdjs.SailingCode.GDOceanObjects2= [];
gdjs.SailingCode.GDOceanObjects3= [];
gdjs.SailingCode.GDOceanObjects4= [];
gdjs.SailingCode.GDOceanObjects5= [];
gdjs.SailingCode.GDOceanFoamObjects1= [];
gdjs.SailingCode.GDOceanFoamObjects2= [];
gdjs.SailingCode.GDOceanFoamObjects3= [];
gdjs.SailingCode.GDOceanFoamObjects4= [];
gdjs.SailingCode.GDOceanFoamObjects5= [];
gdjs.SailingCode.GDPlayerShipObjects1= [];
gdjs.SailingCode.GDPlayerShipObjects2= [];
gdjs.SailingCode.GDPlayerShipObjects3= [];
gdjs.SailingCode.GDPlayerShipObjects4= [];
gdjs.SailingCode.GDPlayerShipObjects5= [];
gdjs.SailingCode.GDHudPanelObjects1= [];
gdjs.SailingCode.GDHudPanelObjects2= [];
gdjs.SailingCode.GDHudPanelObjects3= [];
gdjs.SailingCode.GDHudPanelObjects4= [];
gdjs.SailingCode.GDHudPanelObjects5= [];
gdjs.SailingCode.GDHullBarBgObjects1= [];
gdjs.SailingCode.GDHullBarBgObjects2= [];
gdjs.SailingCode.GDHullBarBgObjects3= [];
gdjs.SailingCode.GDHullBarBgObjects4= [];
gdjs.SailingCode.GDHullBarBgObjects5= [];
gdjs.SailingCode.GDHullBarFillObjects1= [];
gdjs.SailingCode.GDHullBarFillObjects2= [];
gdjs.SailingCode.GDHullBarFillObjects3= [];
gdjs.SailingCode.GDHullBarFillObjects4= [];
gdjs.SailingCode.GDHullBarFillObjects5= [];
gdjs.SailingCode.GDIconDistanceObjects1= [];
gdjs.SailingCode.GDIconDistanceObjects2= [];
gdjs.SailingCode.GDIconDistanceObjects3= [];
gdjs.SailingCode.GDIconDistanceObjects4= [];
gdjs.SailingCode.GDIconDistanceObjects5= [];
gdjs.SailingCode.GDIconGoldObjects1= [];
gdjs.SailingCode.GDIconGoldObjects2= [];
gdjs.SailingCode.GDIconGoldObjects3= [];
gdjs.SailingCode.GDIconGoldObjects4= [];
gdjs.SailingCode.GDIconGoldObjects5= [];
gdjs.SailingCode.GDIconHullObjects1= [];
gdjs.SailingCode.GDIconHullObjects2= [];
gdjs.SailingCode.GDIconHullObjects3= [];
gdjs.SailingCode.GDIconHullObjects4= [];
gdjs.SailingCode.GDIconHullObjects5= [];
gdjs.SailingCode.GDIconCrewObjects1= [];
gdjs.SailingCode.GDIconCrewObjects2= [];
gdjs.SailingCode.GDIconCrewObjects3= [];
gdjs.SailingCode.GDIconCrewObjects4= [];
gdjs.SailingCode.GDIconCrewObjects5= [];
gdjs.SailingCode.GDIconFoodObjects1= [];
gdjs.SailingCode.GDIconFoodObjects2= [];
gdjs.SailingCode.GDIconFoodObjects3= [];
gdjs.SailingCode.GDIconFoodObjects4= [];
gdjs.SailingCode.GDIconFoodObjects5= [];
gdjs.SailingCode.GDIconShotObjects1= [];
gdjs.SailingCode.GDIconShotObjects2= [];
gdjs.SailingCode.GDIconShotObjects3= [];
gdjs.SailingCode.GDIconShotObjects4= [];
gdjs.SailingCode.GDIconShotObjects5= [];
gdjs.SailingCode.GDIconCargoObjects1= [];
gdjs.SailingCode.GDIconCargoObjects2= [];
gdjs.SailingCode.GDIconCargoObjects3= [];
gdjs.SailingCode.GDIconCargoObjects4= [];
gdjs.SailingCode.GDIconCargoObjects5= [];
gdjs.SailingCode.GDDistanceTextObjects1= [];
gdjs.SailingCode.GDDistanceTextObjects2= [];
gdjs.SailingCode.GDDistanceTextObjects3= [];
gdjs.SailingCode.GDDistanceTextObjects4= [];
gdjs.SailingCode.GDDistanceTextObjects5= [];
gdjs.SailingCode.GDGoldTextObjects1= [];
gdjs.SailingCode.GDGoldTextObjects2= [];
gdjs.SailingCode.GDGoldTextObjects3= [];
gdjs.SailingCode.GDGoldTextObjects4= [];
gdjs.SailingCode.GDGoldTextObjects5= [];
gdjs.SailingCode.GDHullTextObjects1= [];
gdjs.SailingCode.GDHullTextObjects2= [];
gdjs.SailingCode.GDHullTextObjects3= [];
gdjs.SailingCode.GDHullTextObjects4= [];
gdjs.SailingCode.GDHullTextObjects5= [];
gdjs.SailingCode.GDCrewTextObjects1= [];
gdjs.SailingCode.GDCrewTextObjects2= [];
gdjs.SailingCode.GDCrewTextObjects3= [];
gdjs.SailingCode.GDCrewTextObjects4= [];
gdjs.SailingCode.GDCrewTextObjects5= [];
gdjs.SailingCode.GDFoodTextObjects1= [];
gdjs.SailingCode.GDFoodTextObjects2= [];
gdjs.SailingCode.GDFoodTextObjects3= [];
gdjs.SailingCode.GDFoodTextObjects4= [];
gdjs.SailingCode.GDFoodTextObjects5= [];
gdjs.SailingCode.GDShotTextObjects1= [];
gdjs.SailingCode.GDShotTextObjects2= [];
gdjs.SailingCode.GDShotTextObjects3= [];
gdjs.SailingCode.GDShotTextObjects4= [];
gdjs.SailingCode.GDShotTextObjects5= [];
gdjs.SailingCode.GDCargoTextObjects1= [];
gdjs.SailingCode.GDCargoTextObjects2= [];
gdjs.SailingCode.GDCargoTextObjects3= [];
gdjs.SailingCode.GDCargoTextObjects4= [];
gdjs.SailingCode.GDCargoTextObjects5= [];
gdjs.SailingCode.GDReturnButtonObjects1= [];
gdjs.SailingCode.GDReturnButtonObjects2= [];
gdjs.SailingCode.GDReturnButtonObjects3= [];
gdjs.SailingCode.GDReturnButtonObjects4= [];
gdjs.SailingCode.GDReturnButtonObjects5= [];
gdjs.SailingCode.GDReturnLabelObjects1= [];
gdjs.SailingCode.GDReturnLabelObjects2= [];
gdjs.SailingCode.GDReturnLabelObjects3= [];
gdjs.SailingCode.GDReturnLabelObjects4= [];
gdjs.SailingCode.GDReturnLabelObjects5= [];
gdjs.SailingCode.GDStateTextObjects1= [];
gdjs.SailingCode.GDStateTextObjects2= [];
gdjs.SailingCode.GDStateTextObjects3= [];
gdjs.SailingCode.GDStateTextObjects4= [];
gdjs.SailingCode.GDStateTextObjects5= [];
gdjs.SailingCode.GDEnemyShipObjects1= [];
gdjs.SailingCode.GDEnemyShipObjects2= [];
gdjs.SailingCode.GDEnemyShipObjects3= [];
gdjs.SailingCode.GDEnemyShipObjects4= [];
gdjs.SailingCode.GDEnemyShipObjects5= [];
gdjs.SailingCode.GDEnemyPanelObjects1= [];
gdjs.SailingCode.GDEnemyPanelObjects2= [];
gdjs.SailingCode.GDEnemyPanelObjects3= [];
gdjs.SailingCode.GDEnemyPanelObjects4= [];
gdjs.SailingCode.GDEnemyPanelObjects5= [];
gdjs.SailingCode.GDEnemyNameTextObjects1= [];
gdjs.SailingCode.GDEnemyNameTextObjects2= [];
gdjs.SailingCode.GDEnemyNameTextObjects3= [];
gdjs.SailingCode.GDEnemyNameTextObjects4= [];
gdjs.SailingCode.GDEnemyNameTextObjects5= [];
gdjs.SailingCode.GDEnemyTypeTextObjects1= [];
gdjs.SailingCode.GDEnemyTypeTextObjects2= [];
gdjs.SailingCode.GDEnemyTypeTextObjects3= [];
gdjs.SailingCode.GDEnemyTypeTextObjects4= [];
gdjs.SailingCode.GDEnemyTypeTextObjects5= [];
gdjs.SailingCode.GDEnemyStatsTextObjects1= [];
gdjs.SailingCode.GDEnemyStatsTextObjects2= [];
gdjs.SailingCode.GDEnemyStatsTextObjects3= [];
gdjs.SailingCode.GDEnemyStatsTextObjects4= [];
gdjs.SailingCode.GDEnemyStatsTextObjects5= [];
gdjs.SailingCode.GDEnemyHintTextObjects1= [];
gdjs.SailingCode.GDEnemyHintTextObjects2= [];
gdjs.SailingCode.GDEnemyHintTextObjects3= [];
gdjs.SailingCode.GDEnemyHintTextObjects4= [];
gdjs.SailingCode.GDEnemyHintTextObjects5= [];
gdjs.SailingCode.GDFightButtonObjects1= [];
gdjs.SailingCode.GDFightButtonObjects2= [];
gdjs.SailingCode.GDFightButtonObjects3= [];
gdjs.SailingCode.GDFightButtonObjects4= [];
gdjs.SailingCode.GDFightButtonObjects5= [];
gdjs.SailingCode.GDFightLabelObjects1= [];
gdjs.SailingCode.GDFightLabelObjects2= [];
gdjs.SailingCode.GDFightLabelObjects3= [];
gdjs.SailingCode.GDFightLabelObjects4= [];
gdjs.SailingCode.GDFightLabelObjects5= [];
gdjs.SailingCode.GDFleeButtonObjects1= [];
gdjs.SailingCode.GDFleeButtonObjects2= [];
gdjs.SailingCode.GDFleeButtonObjects3= [];
gdjs.SailingCode.GDFleeButtonObjects4= [];
gdjs.SailingCode.GDFleeButtonObjects5= [];
gdjs.SailingCode.GDFleeLabelObjects1= [];
gdjs.SailingCode.GDFleeLabelObjects2= [];
gdjs.SailingCode.GDFleeLabelObjects3= [];
gdjs.SailingCode.GDFleeLabelObjects4= [];
gdjs.SailingCode.GDFleeLabelObjects5= [];
gdjs.SailingCode.GDParleyButtonObjects1= [];
gdjs.SailingCode.GDParleyButtonObjects2= [];
gdjs.SailingCode.GDParleyButtonObjects3= [];
gdjs.SailingCode.GDParleyButtonObjects4= [];
gdjs.SailingCode.GDParleyButtonObjects5= [];
gdjs.SailingCode.GDParleyLabelObjects1= [];
gdjs.SailingCode.GDParleyLabelObjects2= [];
gdjs.SailingCode.GDParleyLabelObjects3= [];
gdjs.SailingCode.GDParleyLabelObjects4= [];
gdjs.SailingCode.GDParleyLabelObjects5= [];
gdjs.SailingCode.GDResultPanelObjects1= [];
gdjs.SailingCode.GDResultPanelObjects2= [];
gdjs.SailingCode.GDResultPanelObjects3= [];
gdjs.SailingCode.GDResultPanelObjects4= [];
gdjs.SailingCode.GDResultPanelObjects5= [];
gdjs.SailingCode.GDResultTitleObjects1= [];
gdjs.SailingCode.GDResultTitleObjects2= [];
gdjs.SailingCode.GDResultTitleObjects3= [];
gdjs.SailingCode.GDResultTitleObjects4= [];
gdjs.SailingCode.GDResultTitleObjects5= [];
gdjs.SailingCode.GDResultBodyObjects1= [];
gdjs.SailingCode.GDResultBodyObjects2= [];
gdjs.SailingCode.GDResultBodyObjects3= [];
gdjs.SailingCode.GDResultBodyObjects4= [];
gdjs.SailingCode.GDResultBodyObjects5= [];
gdjs.SailingCode.GDContinueButtonObjects1= [];
gdjs.SailingCode.GDContinueButtonObjects2= [];
gdjs.SailingCode.GDContinueButtonObjects3= [];
gdjs.SailingCode.GDContinueButtonObjects4= [];
gdjs.SailingCode.GDContinueButtonObjects5= [];
gdjs.SailingCode.GDContinueLabelObjects1= [];
gdjs.SailingCode.GDContinueLabelObjects2= [];
gdjs.SailingCode.GDContinueLabelObjects3= [];
gdjs.SailingCode.GDContinueLabelObjects4= [];
gdjs.SailingCode.GDContinueLabelObjects5= [];
gdjs.SailingCode.GDStatusBannerObjects1= [];
gdjs.SailingCode.GDStatusBannerObjects2= [];
gdjs.SailingCode.GDStatusBannerObjects3= [];
gdjs.SailingCode.GDStatusBannerObjects4= [];
gdjs.SailingCode.GDStatusBannerObjects5= [];


gdjs.SailingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("Cannons").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxHull").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("MaxHull").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxHull").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxCrew").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("MaxCrew").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("StartCrew").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("Speed").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CargoMax").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("CargoMax").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CargoUsed").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Food").setNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Food").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").setNumber(runtimeScene.getGame().getVariables().getFromIndex(4).getChild("Cannonballs").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Distance").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("SAILING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber());
}
}

}


};gdjs.SailingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


};gdjs.SailingCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Distance").add(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DistancePerKnotSecond").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "RETURN");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("RETURNING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "RETURNING");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "RETURNING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= 1.5);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("PORT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Port", false);
}
}

}


};gdjs.SailingCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_APPROACH");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterScrollFactor").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterScrollFactor").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "PARLEY");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterScrollFactor").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterScrollFactor").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ScrollPerKnot").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterScrollFactor").getAsNumber());
}
}

}


};gdjs.SailingCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "SUNK");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "PORT");
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Your ship has sunk!");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("Unbanked gold lost: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber()) + gdjs.evtTools.string.newLine() + "Your ships and upgrades are safe.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("230;90;80");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("SUNK");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SUNK");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(9).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SUNK");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "CONTINUE");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("PORT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Port", false);
}
}

}


};gdjs.SailingCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ocean"), gdjs.SailingCode.GDOceanObjects1);
gdjs.copyArray(runtimeScene.getObjects("OceanFoam"), gdjs.SailingCode.GDOceanFoamObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(8).setNumber(gdjs.evtTools.common.lerp(runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(9).getAsNumber(), Math.min(1, 2 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
{runtimeScene.getScene().getVariables().getFromIndex(10).setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 256));
}
{runtimeScene.getScene().getVariables().getFromIndex(11).setNumber(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(8).getAsNumber() * 1.5 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 512));
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanObjects1[i].setYOffset(-(runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanFoamObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanFoamObjects1[i].setYOffset(-(runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber()));
}
}
}

}


};gdjs.SailingCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("");
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").setNumber(gdjs.randomFloatInRange(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMinDelay").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMaxDelay").getAsNumber()));
}
}

}


};gdjs.SailingCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(24).add(Math.max(5, runtimeScene.getScene().getVariables().getFromIndex(43).getChild("BaseWeight").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(43).getChild("WeightPerTier").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() - 1)));
}
}

}


};gdjs.SailingCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(40).getAsString() == "");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(25).sub(Math.max(5, runtimeScene.getScene().getVariables().getFromIndex(43).getChild("BaseWeight").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(43).getChild("WeightPerTier").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() - 1)));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(40).getAsString() == "");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(25).getAsNumber() < 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(40).setString(runtimeScene.getScene().getVariables().getFromIndex(39).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Type").setString(runtimeScene.getScene().getVariables().getFromIndex(39).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").setString(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Names").getChild(gdjs.randomInRange(0, runtimeScene.getScene().getVariables().getFromIndex(43).getChild("NameCount").getAsNumber() - 1)).getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("DisplayName").setString(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("DisplayName").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Faction").setString(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Faction").getAsString());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Hostile").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Tier").setNumber(runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("MaxHull").setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Hull").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("MaxHull").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Crew").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Cannons").getAsNumber() + Math.floor((runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() - 1) / 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Speed").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Speed").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Gold").setNumber(Math.round(gdjs.randomInRange(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("GoldMin").getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(43).getChild("GoldMax").getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(23).getAsNumber()));
}
}

}


};gdjs.SailingCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCrew").setNumber(Math.max(5, Math.round(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() / 5) * 5));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCannons").setNumber(Math.max(1, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() + gdjs.randomInRange(-(1), 1)));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Approx").setString("~");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCrew").setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCannons").setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Approx").setString("");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() * 0.8);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Danger").setString("Low");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() * 1.2);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Danger").setString("High");
}
}

}


};gdjs.SailingCode.eventsList11 = function(runtimeScene) {

{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(39);
const valueIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(43);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(6);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.SailingCode.eventsList8(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(25).setNumber(gdjs.randomFloat(runtimeScene.getScene().getVariables().getFromIndex(24).getAsNumber()));
}
}

}


{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(39);
const valueIteratorReference3 = runtimeScene.getScene().getVariables().getFromIndex(43);
const iterableReference3 = runtimeScene.getGame().getVariables().getFromIndex(6);
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

let isConditionTrue_0 = false;
if (true)
{

{ //Subevents: 
gdjs.SailingCode.eventsList9(runtimeScene);} //Subevents end.
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(40).getAsString() == "");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").setNumber(gdjs.randomFloatInRange(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMinDelay").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMaxDelay").getAsNumber()));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(40).getAsString() != "");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Type").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].setOpacity(255);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].setAngle(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].setSize(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 1.05 * (gdjs.SailingCode.GDEnemyShipObjects1[i].getWidth()) / (gdjs.SailingCode.GDEnemyShipObjects1[i].getHeight()), runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 1.05);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].hide(false);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + (( gdjs.SailingCode.GDEnemyShipObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects1[0].getWidth()));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.15);
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").getAsNumber() * 9 + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber() * 1.5 + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() * 0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() * 9 + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() * 1.5 + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() * 0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Danger").setString("Even");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("A " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("DisplayName").getAsString() + " approaches!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("ENCOUNTER_APPROACH");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}

{ //Subevents
gdjs.SailingCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(22).setNumber(1 + Math.floor(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Distance").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TierDistance").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(23).setNumber(1 + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TierStatScale").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() - 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(24).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(40).setString("");
}

{ //Subevents
gdjs.SailingCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() * 0.72);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_APPROACH");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ApproachTime").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(1 - Math.pow(1 - runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber(), 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.common.lerp(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber()));
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(-(18) * (1 - runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber()) + 2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_APPROACH");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ApproachTime").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("ENCOUNTER_DECISION");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber());
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "PARLEY");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber());
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber());
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber());
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "leave");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 220);
}
{runtimeScene.getScene().getVariables().getFromIndex(16).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 60);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "behind");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(17).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 320);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "sunk");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setOpacity(gdjs.SailingCode.GDEnemyShipObjects2[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 170));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setAngle(gdjs.SailingCode.GDEnemyShipObjects2[i].getAngle() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 25));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() - (gdjs.SailingCode.GDEnemyShipObjects2[i].getWidth()) / 2,runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() - (gdjs.SailingCode.GDEnemyShipObjects2[i].getHeight()) / 2 + 4 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.3 + 1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].setPosition((gdjs.SailingCode.GDEnemyShipObjects2[i].getPointX("")) + 3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 37),(gdjs.SailingCode.GDEnemyShipObjects2[i].getPointY("")));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "leave");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() < -((( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getHeight())));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDEnemyShipObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").setNumber(gdjs.randomFloatInRange(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMinDelay").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMaxDelay").getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "behind");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() + (( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getHeight()));
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDEnemyShipObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects2[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").setNumber(gdjs.randomFloatInRange(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMinDelay").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMaxDelay").getAsNumber()));
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "sunk");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDEnemyShipObjects1.length;i<l;++i) {
    if ( gdjs.SailingCode.GDEnemyShipObjects1[i].getOpacity() <= 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDEnemyShipObjects1[k] = gdjs.SailingCode.GDEnemyShipObjects1[i];
        ++k;
    }
}
gdjs.SailingCode.GDEnemyShipObjects1.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDEnemyShipObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShipObjects1[i].hide();
}
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("NextEncounterIn").setNumber(gdjs.randomFloatInRange(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMinDelay").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(0).getChild("EncounterMaxDelay").getAsNumber()));
}
}

}


};gdjs.SailingCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DecisionTimeout").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " opens fire!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("COMBAT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DecisionTimeout").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " sails on.");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("leave");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("SAILING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(gdjs.evtTools.common.clamp(0.5 + (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Speed").getAsNumber()) * 0.06, 0.15, 0.9));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(1);
}
}

}


};gdjs.SailingCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("You slipped away!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("behind");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("SAILING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(gdjs.randomInRange(4, 10) + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Escape failed!  -" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()) + " hull");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("COMBAT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "FIGHT");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Battle stations!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("COMBAT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "FLEE");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(gdjs.randomFloat(1));
}

{ //Subevents
gdjs.SailingCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "PARLEY");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Parleying with the " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + "...");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1.6);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("PARLEY");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "CONTINUE");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("SAILING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < 0.5);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(Math.max(5, Math.round(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Gold").getAsNumber() * 0.3)));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").add(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Safe passage");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " pays" + gdjs.evtTools.string.newLine() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold for safe passage.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("255;214;90");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < 0.85);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Fair winds");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The captain of the " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + gdjs.evtTools.string.newLine() + "wishes you fair winds.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("160;220;255");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= 0.85);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("No deal");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " refuses" + gdjs.evtTools.string.newLine() + "to talk and sails on.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("220;220;220");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < 0.35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() >= 10);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(Math.max(10, Math.round(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() * 0.25)));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Tribute paid");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("You hand over " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold." + gdjs.evtTools.string.newLine() + "The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " lets you pass.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("230;170;90");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < 0.35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() < 10);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Nothing to offer? They attack!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("COMBAT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= 0.35);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < 0.65);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Pirate's code");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " honours" + gdjs.evtTools.string.newLine() + "the code and sails off.");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("160;220;255");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= 0.65);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Parley fails! The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " attacks!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.4);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("COMBAT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "PARLEY");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ParleyTime").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("leave");
}

{ //Subevents
gdjs.SailingCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Gold").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").add(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("sunk");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Victory!");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("You sank the " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + "." + gdjs.evtTools.string.newLine() + "+" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold    -" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()) + " hull" + gdjs.evtTools.string.newLine() + "Cannonballs used: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("255;214;90");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(31).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber() * 1.8));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("leave");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Driven off");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " out-gunned you." + gdjs.evtTools.string.newLine() + "-" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(32).getAsNumber()) + " hull    no plunder" + gdjs.evtTools.string.newLine() + "Cannonballs used: " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").setString("230;110;90");
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("REWARDS");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CombatResolveTime").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(28).setNumber(Math.min(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").getAsNumber() * 3));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(runtimeScene.getScene().getVariables().getFromIndex(28).getAsNumber() * 3 + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber() * 1.5 + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() * 0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() * 9 + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() * 1.5 + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() * 0.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(31).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() / Math.max(1, runtimeScene.getScene().getVariables().getFromIndex(29).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(30).getAsNumber()), 0.1, 0.9));
}
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(32).setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() * gdjs.randomFloatInRange(2, 4)));
}

{ //Subevents
gdjs.SailingCode.eventsList20(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("");
}
}

}


};gdjs.SailingCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(-(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(-(1));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() != gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CargoText"), gdjs.SailingCode.GDCargoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("CrewText"), gdjs.SailingCode.GDCrewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DistanceText"), gdjs.SailingCode.GDDistanceTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyHintText"), gdjs.SailingCode.GDEnemyHintTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyNameText"), gdjs.SailingCode.GDEnemyNameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyPanel"), gdjs.SailingCode.GDEnemyPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyStatsText"), gdjs.SailingCode.GDEnemyStatsTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTypeText"), gdjs.SailingCode.GDEnemyTypeTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FightButton"), gdjs.SailingCode.GDFightButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FleeButton"), gdjs.SailingCode.GDFleeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("FoodText"), gdjs.SailingCode.GDFoodTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.SailingCode.GDGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("HudPanel"), gdjs.SailingCode.GDHudPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("HullBarBg"), gdjs.SailingCode.GDHullBarBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("HullBarFill"), gdjs.SailingCode.GDHullBarFillObjects1);
gdjs.copyArray(runtimeScene.getObjects("HullText"), gdjs.SailingCode.GDHullTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconCargo"), gdjs.SailingCode.GDIconCargoObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconCrew"), gdjs.SailingCode.GDIconCrewObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconDistance"), gdjs.SailingCode.GDIconDistanceObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconFood"), gdjs.SailingCode.GDIconFoodObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconGold"), gdjs.SailingCode.GDIconGoldObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconHull"), gdjs.SailingCode.GDIconHullObjects1);
gdjs.copyArray(runtimeScene.getObjects("IconShot"), gdjs.SailingCode.GDIconShotObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ocean"), gdjs.SailingCode.GDOceanObjects1);
gdjs.copyArray(runtimeScene.getObjects("OceanFoam"), gdjs.SailingCode.GDOceanFoamObjects1);
gdjs.copyArray(runtimeScene.getObjects("ParleyButton"), gdjs.SailingCode.GDParleyButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultPanel"), gdjs.SailingCode.GDResultPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnLabel"), gdjs.SailingCode.GDReturnLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShotText"), gdjs.SailingCode.GDShotTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StateText"), gdjs.SailingCode.GDStateTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(Math.max(0, (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber()) / 2));
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanObjects1[i].setSize(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanFoamObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanFoamObjects1[i].setSize(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanObjects1[i].setPosition(0,0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanFoamObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanFoamObjects1[i].setPosition(0,0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.22, 320));
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].setSize(runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * (gdjs.SailingCode.GDPlayerShipObjects1[i].getWidth()) / (gdjs.SailingCode.GDPlayerShipObjects1[i].getHeight()), runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() * 0.28);
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.56);
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16);
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SafeTop").getAsNumber() + 16);
}
{for(var i = 0, len = gdjs.SailingCode.GDHudPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHudPanelObjects1[i].setSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - 32, 184);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHudPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHudPanelObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconDistanceObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconDistanceObjects1[i].setSize(44, 44);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconDistanceObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconDistanceObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 18);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDistanceTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDDistanceTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 74,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 20);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconGoldObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconGoldObjects1[i].setSize(44, 44);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconGoldObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconGoldObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 440,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 18);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDGoldTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 494,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 20);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconHullObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconHullObjects1[i].setSize(40, 40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconHullObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconHullObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 22,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 74);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHullBarBgObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarBgObjects1[i].setSize(440, 28);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHullBarBgObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarBgObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 74,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 80);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 74,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 80);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHullTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 530,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 78);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconCrewObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconCrewObjects1[i].setSize(36, 36);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconCrewObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconCrewObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 0 * 166,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 128);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCrewTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCrewTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 0 * 166 + 44,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 130);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconFoodObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconFoodObjects1[i].setSize(36, 36);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconFoodObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconFoodObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 1 * 166,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 128);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFoodTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFoodTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 1 * 166 + 44,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 130);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconShotObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconShotObjects1[i].setSize(36, 36);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconShotObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconShotObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 2 * 166,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 128);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDShotTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDShotTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 2 * 166 + 44,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 130);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconCargoObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconCargoObjects1[i].setSize(36, 36);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDIconCargoObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDIconCargoObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 3 * 166,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 128);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCargoTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCargoTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() + 20 + 3 * 166 + 44,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 130);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDReturnButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnButtonObjects1[i].setSize(320, 96);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(14).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - 320) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(15).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SafeBottom").getAsNumber() - 96 - 24);
}
{for(var i = 0, len = gdjs.SailingCode.GDReturnButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDReturnLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnLabelObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(14).getAsNumber() + (320 - (gdjs.SailingCode.GDReturnLabelObjects1[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() + (96 - (gdjs.SailingCode.GDReturnLabelObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDStateTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDStateTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 20,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 196);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(37).setNumber(runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() - 24 - 210);
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyPanelObjects1[i].setSize(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - 32, 210);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyPanelObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16,runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 40,runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() + 18);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyTypeTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTypeTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 40,runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() + 64);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyStatsTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyStatsTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 40,runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() + 104);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHintTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHintTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 40,runtimeScene.getScene().getVariables().getFromIndex(37).getAsNumber() + 152);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFightButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFightButtonObjects1[i].setColor("200;70;60");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeButtonObjects1[i].setColor("70;120;190");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDParleyButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyButtonObjects1[i].setColor("70;160;90");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFightButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFightButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFightButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFightButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 0 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 1 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDParleyButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDParleyButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 2 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(38).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.5 - 260);
}
{for(var i = 0, len = gdjs.SailingCode.GDResultPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultPanelObjects1[i].setSize(620, 420);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultPanelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultPanelObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 50,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueButtonObjects1[i].setSize(300, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 210,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() + 296);
}
}
}

}


};gdjs.SailingCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].setAngle(2.5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.6));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - (gdjs.SailingCode.GDPlayerShipObjects2[i].getWidth()) / 2,runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - (gdjs.SailingCode.GDPlayerShipObjects2[i].getHeight()) / 2 + 4 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.1));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].setPosition((gdjs.SailingCode.GDPlayerShipObjects1[i].getPointX("")) + 3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 41),(gdjs.SailingCode.GDPlayerShipObjects1[i].getPointY("")));
}
}
}

}


};gdjs.SailingCode.eventsList25 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHintText"), gdjs.SailingCode.GDEnemyHintTextObjects3);
gdjs.copyArray(gdjs.SailingCode.GDEnemyNameTextObjects2, gdjs.SailingCode.GDEnemyNameTextObjects3);

{for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects3[i].setColor("255;120;100");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHintTextObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHintTextObjects3[i].setString("They will attack in " + gdjs.evtTools.common.toString(Math.ceil(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DecisionTimeout").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber())) + "s");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hostile").getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHintText"), gdjs.SailingCode.GDEnemyHintTextObjects2);
/* Reuse gdjs.SailingCode.GDEnemyNameTextObjects2 */
{for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects2[i].setColor("255;230;160");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHintTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHintTextObjects2[i].setString("They will sail on in " + gdjs.evtTools.common.toString(Math.ceil(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DecisionTimeout").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber())) + "s");
}
}
}

}


};gdjs.SailingCode.eventsList26 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() > 0.5);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.SailingCode.GDHullBarFillObjects1, gdjs.SailingCode.GDHullBarFillObjects2);

{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects2[i].setColor("90;200;90");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() <= 0.5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() > 0.25);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.SailingCode.GDHullBarFillObjects1, gdjs.SailingCode.GDHullBarFillObjects2);

{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects2[i].setColor("230;190;60");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber() <= 0.25);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.SailingCode.GDHullBarFillObjects1, gdjs.SailingCode.GDHullBarFillObjects2);

{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects2[i].setColor("220;70;60");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyNameText"), gdjs.SailingCode.GDEnemyNameTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyStatsText"), gdjs.SailingCode.GDEnemyStatsTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTypeText"), gdjs.SailingCode.GDEnemyTypeTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightButton"), gdjs.SailingCode.GDFightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightLabel"), gdjs.SailingCode.GDFightLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeButton"), gdjs.SailingCode.GDFleeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeLabel"), gdjs.SailingCode.GDFleeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyButton"), gdjs.SailingCode.GDParleyButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyLabel"), gdjs.SailingCode.GDParleyLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects2[i].setString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyTypeTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTypeTextObjects2[i].setString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("DisplayName").getAsString() + "  ·  " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Faction").getAsString() + "  ·  Danger: " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Danger").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyStatsTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyStatsTextObjects2[i].setString("Hull " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber()) + "    Crew " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Approx").getAsString() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCrew").getAsNumber()) + "    Cannons " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Approx").getAsString() + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("EstCannons").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeLabelObjects2[i].setString("Flee " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber() * 100)) + "%");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFightLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFightLabelObjects2[i].setPosition((( gdjs.SailingCode.GDFightButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFightButtonObjects2[0].getPointX("")) + ((( gdjs.SailingCode.GDFightButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFightButtonObjects2[0].getWidth()) - (gdjs.SailingCode.GDFightLabelObjects2[i].getWidth())) / 2,(( gdjs.SailingCode.GDFightButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFightButtonObjects2[0].getPointY("")) + ((( gdjs.SailingCode.GDFightButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFightButtonObjects2[0].getHeight()) - (gdjs.SailingCode.GDFightLabelObjects2[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeLabelObjects2[i].setPosition((( gdjs.SailingCode.GDFleeButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFleeButtonObjects2[0].getPointX("")) + ((( gdjs.SailingCode.GDFleeButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFleeButtonObjects2[0].getWidth()) - (gdjs.SailingCode.GDFleeLabelObjects2[i].getWidth())) / 2,(( gdjs.SailingCode.GDFleeButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFleeButtonObjects2[0].getPointY("")) + ((( gdjs.SailingCode.GDFleeButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDFleeButtonObjects2[0].getHeight()) - (gdjs.SailingCode.GDFleeLabelObjects2[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDParleyLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyLabelObjects2[i].setPosition((( gdjs.SailingCode.GDParleyButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDParleyButtonObjects2[0].getPointX("")) + ((( gdjs.SailingCode.GDParleyButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDParleyButtonObjects2[0].getWidth()) - (gdjs.SailingCode.GDParleyLabelObjects2[i].getWidth())) / 2,(( gdjs.SailingCode.GDParleyButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDParleyButtonObjects2[0].getPointY("")) + ((( gdjs.SailingCode.GDParleyButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDParleyButtonObjects2[0].getHeight()) - (gdjs.SailingCode.GDParleyLabelObjects2[i].getHeight())) / 2);
}
}

{ //Subevents
gdjs.SailingCode.eventsList25(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ContinueLabel"), gdjs.SailingCode.GDContinueLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultBody"), gdjs.SailingCode.GDResultBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultTitle"), gdjs.SailingCode.GDResultTitleObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].setString(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects2[i].setString(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.SailingCode.GDResultTitleObjects2[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() + 34);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.SailingCode.GDResultBodyObjects2[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() + 112);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects2[i].setString("Continue");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects2[i].setPosition((( gdjs.SailingCode.GDContinueButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects2[0].getPointX("")) + ((( gdjs.SailingCode.GDContinueButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects2[0].getWidth()) - (gdjs.SailingCode.GDContinueLabelObjects2[i].getWidth())) / 2,(( gdjs.SailingCode.GDContinueButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects2[0].getPointY("")) + ((( gdjs.SailingCode.GDContinueButtonObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects2[0].getHeight()) - (gdjs.SailingCode.GDContinueLabelObjects2[i].getHeight())) / 2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SUNK");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ContinueLabel"), gdjs.SailingCode.GDContinueLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultBody"), gdjs.SailingCode.GDResultBodyObjects1);
gdjs.copyArray(runtimeScene.getObjects("ResultTitle"), gdjs.SailingCode.GDResultTitleObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects1[i].setString(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects1[i].setString(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects1[i].setColor(runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Color").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.SailingCode.GDResultTitleObjects1[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() + 34);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.SailingCode.GDResultBodyObjects1[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(38).getAsNumber() + 112);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects1[i].setString("Return to Port");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects1[i].setPosition((( gdjs.SailingCode.GDContinueButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDContinueButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDContinueLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDContinueButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDContinueButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDContinueButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDContinueLabelObjects1[i].getHeight())) / 2);
}
}
}

}


};gdjs.SailingCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(12).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(12).getAsNumber() >= 0.2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CargoText"), gdjs.SailingCode.GDCargoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CrewText"), gdjs.SailingCode.GDCrewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DistanceText"), gdjs.SailingCode.GDDistanceTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("FoodText"), gdjs.SailingCode.GDFoodTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldText"), gdjs.SailingCode.GDGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("HullBarFill"), gdjs.SailingCode.GDHullBarFillObjects1);
gdjs.copyArray(runtimeScene.getObjects("HullText"), gdjs.SailingCode.GDHullTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShotText"), gdjs.SailingCode.GDShotTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StateText"), gdjs.SailingCode.GDStateTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(0);
}
{for(var i = 0, len = gdjs.SailingCode.GDDistanceTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDDistanceTextObjects1[i].setString(gdjs.evtTools.common.toString(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Distance").getAsNumber())) + "." + gdjs.evtTools.common.toString(gdjs.evtTools.common.mod(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Distance").getAsNumber() * 10), 10)) + " nm");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDGoldTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDGoldTextObjects1[i].setString(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDHullTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullTextObjects1[i].setString(gdjs.evtTools.common.toString(Math.ceil(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber())) + "/" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxHull").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCrewTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCrewTextObjects1[i].setString(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxCrew").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFoodTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFoodTextObjects1[i].setString(gdjs.evtTools.common.toString(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Food").getAsNumber())));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDShotTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDShotTextObjects1[i].setString(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCargoTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCargoTextObjects1[i].setString(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CargoUsed").getAsNumber()) + "/" + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CargoMax").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDStateTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDStateTextObjects1[i].setString("State: " + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(13).setNumber(gdjs.evtTools.common.clamp(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() / Math.max(1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("MaxHull").getAsNumber()), 0, 1));
}
{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects1[i].setSize(Math.max(1, 440 * runtimeScene.getScene().getVariables().getFromIndex(13).getAsNumber()), 28);
}
}

{ //Subevents
gdjs.SailingCode.eventsList26(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHintText"), gdjs.SailingCode.GDEnemyHintTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyNameText"), gdjs.SailingCode.GDEnemyNameTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyPanel"), gdjs.SailingCode.GDEnemyPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyStatsText"), gdjs.SailingCode.GDEnemyStatsTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTypeText"), gdjs.SailingCode.GDEnemyTypeTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightButton"), gdjs.SailingCode.GDFightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightLabel"), gdjs.SailingCode.GDFightLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeButton"), gdjs.SailingCode.GDFleeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeLabel"), gdjs.SailingCode.GDFleeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyButton"), gdjs.SailingCode.GDParleyButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyLabel"), gdjs.SailingCode.GDParleyLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyPanelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyPanelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyTypeTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTypeTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyStatsTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyStatsTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyHintTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHintTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDFightButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFightButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDFightLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFightLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDFleeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDParleyButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDParleyLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyLabelObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyHintText"), gdjs.SailingCode.GDEnemyHintTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyNameText"), gdjs.SailingCode.GDEnemyNameTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyPanel"), gdjs.SailingCode.GDEnemyPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyStatsText"), gdjs.SailingCode.GDEnemyStatsTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTypeText"), gdjs.SailingCode.GDEnemyTypeTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightButton"), gdjs.SailingCode.GDFightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FightLabel"), gdjs.SailingCode.GDFightLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeButton"), gdjs.SailingCode.GDFleeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("FleeLabel"), gdjs.SailingCode.GDFleeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyButton"), gdjs.SailingCode.GDParleyButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParleyLabel"), gdjs.SailingCode.GDParleyLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyPanelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyPanelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyNameTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyNameTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyTypeTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTypeTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyStatsTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyStatsTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyHintTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHintTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDFightButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFightButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDFightLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFightLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDFleeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFleeLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDParleyButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDParleyLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDParleyLabelObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ContinueLabel"), gdjs.SailingCode.GDContinueLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultBody"), gdjs.SailingCode.GDResultBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultPanel"), gdjs.SailingCode.GDResultPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultTitle"), gdjs.SailingCode.GDResultTitleObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDResultPanelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultPanelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SUNK");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ContinueLabel"), gdjs.SailingCode.GDContinueLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultBody"), gdjs.SailingCode.GDResultBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultPanel"), gdjs.SailingCode.GDResultPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultTitle"), gdjs.SailingCode.GDResultTitleObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDResultPanelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultPanelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "REWARDS");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "SUNK");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ContinueLabel"), gdjs.SailingCode.GDContinueLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultBody"), gdjs.SailingCode.GDResultBodyObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultPanel"), gdjs.SailingCode.GDResultPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("ResultTitle"), gdjs.SailingCode.GDResultTitleObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDResultPanelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultPanelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDResultTitleObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultTitleObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDResultBodyObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDResultBodyObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDContinueButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDContinueLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDContinueLabelObjects2[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(35).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusBanner"), gdjs.SailingCode.GDStatusBannerObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDStatusBannerObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDStatusBannerObjects2[i].setString(runtimeScene.getScene().getVariables().getFromIndex(42).getAsString());
}
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusBanner"), gdjs.SailingCode.GDStatusBannerObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(34).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{for(var i = 0, len = gdjs.SailingCode.GDStatusBannerObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDStatusBannerObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDStatusBannerObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDStatusBannerObjects2[i].setOpacity(Math.min(255, runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() * 510));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDStatusBannerObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDStatusBannerObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.SailingCode.GDStatusBannerObjects2[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + 236);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(34).getAsNumber() <= 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("StatusBanner"), gdjs.SailingCode.GDStatusBannerObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDStatusBannerObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDStatusBannerObjects1[i].hide();
}
}
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDReturnButtonObjects2Objects = Hashtable.newFrom({"ReturnButton": gdjs.SailingCode.GDReturnButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFightButtonObjects2Objects = Hashtable.newFrom({"FightButton": gdjs.SailingCode.GDFightButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFleeButtonObjects2Objects = Hashtable.newFrom({"FleeButton": gdjs.SailingCode.GDFleeButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDParleyButtonObjects2Objects = Hashtable.newFrom({"ParleyButton": gdjs.SailingCode.GDParleyButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDContinueButtonObjects2Objects = Hashtable.newFrom({"ContinueButton": gdjs.SailingCode.GDContinueButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDContinueButtonObjects2Objects = Hashtable.newFrom({"ContinueButton": gdjs.SailingCode.GDContinueButtonObjects2});
gdjs.SailingCode.eventsList29 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDReturnButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("RETURN");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FightButton"), gdjs.SailingCode.GDFightButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFightButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("FIGHT");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("FleeButton"), gdjs.SailingCode.GDFleeButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFleeButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("FLEE");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ParleyButton"), gdjs.SailingCode.GDParleyButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_DECISION");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDParleyButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("PARLEY");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "REWARDS");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDContinueButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("CONTINUE");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ContinueButton"), gdjs.SailingCode.GDContinueButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SUNK");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(36).getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDContinueButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("CONTINUE");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ReturnLabel"), gdjs.SailingCode.GDReturnLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDReturnButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnButtonObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDReturnLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnLabelObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "SAILING");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnLabel"), gdjs.SailingCode.GDReturnLabelObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDReturnButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnButtonObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.SailingCode.GDReturnLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDReturnLabelObjects1[i].hide();
}
}
}

}


};gdjs.SailingCode.eventsList30 = function(runtimeScene) {

{


gdjs.SailingCode.eventsList0(runtimeScene);
}


{


gdjs.SailingCode.eventsList1(runtimeScene);
}


{


gdjs.SailingCode.eventsList2(runtimeScene);
}


{


gdjs.SailingCode.eventsList3(runtimeScene);
}


{


gdjs.SailingCode.eventsList4(runtimeScene);
}


{


gdjs.SailingCode.eventsList5(runtimeScene);
}


{


gdjs.SailingCode.eventsList6(runtimeScene);
}


{


gdjs.SailingCode.eventsList7(runtimeScene);
}


{


gdjs.SailingCode.eventsList12(runtimeScene);
}


{


gdjs.SailingCode.eventsList13(runtimeScene);
}


{


gdjs.SailingCode.eventsList14(runtimeScene);
}


{


gdjs.SailingCode.eventsList15(runtimeScene);
}


{


gdjs.SailingCode.eventsList17(runtimeScene);
}


{


gdjs.SailingCode.eventsList19(runtimeScene);
}


{


gdjs.SailingCode.eventsList21(runtimeScene);
}


{


gdjs.SailingCode.eventsList22(runtimeScene);
}


{


gdjs.SailingCode.eventsList23(runtimeScene);
}


{


gdjs.SailingCode.eventsList24(runtimeScene);
}


{


gdjs.SailingCode.eventsList27(runtimeScene);
}


{


gdjs.SailingCode.eventsList28(runtimeScene);
}


{


gdjs.SailingCode.eventsList29(runtimeScene);
}


};

gdjs.SailingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SailingCode.GDOceanObjects1.length = 0;
gdjs.SailingCode.GDOceanObjects2.length = 0;
gdjs.SailingCode.GDOceanObjects3.length = 0;
gdjs.SailingCode.GDOceanObjects4.length = 0;
gdjs.SailingCode.GDOceanObjects5.length = 0;
gdjs.SailingCode.GDOceanFoamObjects1.length = 0;
gdjs.SailingCode.GDOceanFoamObjects2.length = 0;
gdjs.SailingCode.GDOceanFoamObjects3.length = 0;
gdjs.SailingCode.GDOceanFoamObjects4.length = 0;
gdjs.SailingCode.GDOceanFoamObjects5.length = 0;
gdjs.SailingCode.GDPlayerShipObjects1.length = 0;
gdjs.SailingCode.GDPlayerShipObjects2.length = 0;
gdjs.SailingCode.GDPlayerShipObjects3.length = 0;
gdjs.SailingCode.GDPlayerShipObjects4.length = 0;
gdjs.SailingCode.GDPlayerShipObjects5.length = 0;
gdjs.SailingCode.GDHudPanelObjects1.length = 0;
gdjs.SailingCode.GDHudPanelObjects2.length = 0;
gdjs.SailingCode.GDHudPanelObjects3.length = 0;
gdjs.SailingCode.GDHudPanelObjects4.length = 0;
gdjs.SailingCode.GDHudPanelObjects5.length = 0;
gdjs.SailingCode.GDHullBarBgObjects1.length = 0;
gdjs.SailingCode.GDHullBarBgObjects2.length = 0;
gdjs.SailingCode.GDHullBarBgObjects3.length = 0;
gdjs.SailingCode.GDHullBarBgObjects4.length = 0;
gdjs.SailingCode.GDHullBarBgObjects5.length = 0;
gdjs.SailingCode.GDHullBarFillObjects1.length = 0;
gdjs.SailingCode.GDHullBarFillObjects2.length = 0;
gdjs.SailingCode.GDHullBarFillObjects3.length = 0;
gdjs.SailingCode.GDHullBarFillObjects4.length = 0;
gdjs.SailingCode.GDHullBarFillObjects5.length = 0;
gdjs.SailingCode.GDIconDistanceObjects1.length = 0;
gdjs.SailingCode.GDIconDistanceObjects2.length = 0;
gdjs.SailingCode.GDIconDistanceObjects3.length = 0;
gdjs.SailingCode.GDIconDistanceObjects4.length = 0;
gdjs.SailingCode.GDIconDistanceObjects5.length = 0;
gdjs.SailingCode.GDIconGoldObjects1.length = 0;
gdjs.SailingCode.GDIconGoldObjects2.length = 0;
gdjs.SailingCode.GDIconGoldObjects3.length = 0;
gdjs.SailingCode.GDIconGoldObjects4.length = 0;
gdjs.SailingCode.GDIconGoldObjects5.length = 0;
gdjs.SailingCode.GDIconHullObjects1.length = 0;
gdjs.SailingCode.GDIconHullObjects2.length = 0;
gdjs.SailingCode.GDIconHullObjects3.length = 0;
gdjs.SailingCode.GDIconHullObjects4.length = 0;
gdjs.SailingCode.GDIconHullObjects5.length = 0;
gdjs.SailingCode.GDIconCrewObjects1.length = 0;
gdjs.SailingCode.GDIconCrewObjects2.length = 0;
gdjs.SailingCode.GDIconCrewObjects3.length = 0;
gdjs.SailingCode.GDIconCrewObjects4.length = 0;
gdjs.SailingCode.GDIconCrewObjects5.length = 0;
gdjs.SailingCode.GDIconFoodObjects1.length = 0;
gdjs.SailingCode.GDIconFoodObjects2.length = 0;
gdjs.SailingCode.GDIconFoodObjects3.length = 0;
gdjs.SailingCode.GDIconFoodObjects4.length = 0;
gdjs.SailingCode.GDIconFoodObjects5.length = 0;
gdjs.SailingCode.GDIconShotObjects1.length = 0;
gdjs.SailingCode.GDIconShotObjects2.length = 0;
gdjs.SailingCode.GDIconShotObjects3.length = 0;
gdjs.SailingCode.GDIconShotObjects4.length = 0;
gdjs.SailingCode.GDIconShotObjects5.length = 0;
gdjs.SailingCode.GDIconCargoObjects1.length = 0;
gdjs.SailingCode.GDIconCargoObjects2.length = 0;
gdjs.SailingCode.GDIconCargoObjects3.length = 0;
gdjs.SailingCode.GDIconCargoObjects4.length = 0;
gdjs.SailingCode.GDIconCargoObjects5.length = 0;
gdjs.SailingCode.GDDistanceTextObjects1.length = 0;
gdjs.SailingCode.GDDistanceTextObjects2.length = 0;
gdjs.SailingCode.GDDistanceTextObjects3.length = 0;
gdjs.SailingCode.GDDistanceTextObjects4.length = 0;
gdjs.SailingCode.GDDistanceTextObjects5.length = 0;
gdjs.SailingCode.GDGoldTextObjects1.length = 0;
gdjs.SailingCode.GDGoldTextObjects2.length = 0;
gdjs.SailingCode.GDGoldTextObjects3.length = 0;
gdjs.SailingCode.GDGoldTextObjects4.length = 0;
gdjs.SailingCode.GDGoldTextObjects5.length = 0;
gdjs.SailingCode.GDHullTextObjects1.length = 0;
gdjs.SailingCode.GDHullTextObjects2.length = 0;
gdjs.SailingCode.GDHullTextObjects3.length = 0;
gdjs.SailingCode.GDHullTextObjects4.length = 0;
gdjs.SailingCode.GDHullTextObjects5.length = 0;
gdjs.SailingCode.GDCrewTextObjects1.length = 0;
gdjs.SailingCode.GDCrewTextObjects2.length = 0;
gdjs.SailingCode.GDCrewTextObjects3.length = 0;
gdjs.SailingCode.GDCrewTextObjects4.length = 0;
gdjs.SailingCode.GDCrewTextObjects5.length = 0;
gdjs.SailingCode.GDFoodTextObjects1.length = 0;
gdjs.SailingCode.GDFoodTextObjects2.length = 0;
gdjs.SailingCode.GDFoodTextObjects3.length = 0;
gdjs.SailingCode.GDFoodTextObjects4.length = 0;
gdjs.SailingCode.GDFoodTextObjects5.length = 0;
gdjs.SailingCode.GDShotTextObjects1.length = 0;
gdjs.SailingCode.GDShotTextObjects2.length = 0;
gdjs.SailingCode.GDShotTextObjects3.length = 0;
gdjs.SailingCode.GDShotTextObjects4.length = 0;
gdjs.SailingCode.GDShotTextObjects5.length = 0;
gdjs.SailingCode.GDCargoTextObjects1.length = 0;
gdjs.SailingCode.GDCargoTextObjects2.length = 0;
gdjs.SailingCode.GDCargoTextObjects3.length = 0;
gdjs.SailingCode.GDCargoTextObjects4.length = 0;
gdjs.SailingCode.GDCargoTextObjects5.length = 0;
gdjs.SailingCode.GDReturnButtonObjects1.length = 0;
gdjs.SailingCode.GDReturnButtonObjects2.length = 0;
gdjs.SailingCode.GDReturnButtonObjects3.length = 0;
gdjs.SailingCode.GDReturnButtonObjects4.length = 0;
gdjs.SailingCode.GDReturnButtonObjects5.length = 0;
gdjs.SailingCode.GDReturnLabelObjects1.length = 0;
gdjs.SailingCode.GDReturnLabelObjects2.length = 0;
gdjs.SailingCode.GDReturnLabelObjects3.length = 0;
gdjs.SailingCode.GDReturnLabelObjects4.length = 0;
gdjs.SailingCode.GDReturnLabelObjects5.length = 0;
gdjs.SailingCode.GDStateTextObjects1.length = 0;
gdjs.SailingCode.GDStateTextObjects2.length = 0;
gdjs.SailingCode.GDStateTextObjects3.length = 0;
gdjs.SailingCode.GDStateTextObjects4.length = 0;
gdjs.SailingCode.GDStateTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyShipObjects1.length = 0;
gdjs.SailingCode.GDEnemyShipObjects2.length = 0;
gdjs.SailingCode.GDEnemyShipObjects3.length = 0;
gdjs.SailingCode.GDEnemyShipObjects4.length = 0;
gdjs.SailingCode.GDEnemyShipObjects5.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects1.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects2.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects3.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects4.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects5.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects5.length = 0;
gdjs.SailingCode.GDFightButtonObjects1.length = 0;
gdjs.SailingCode.GDFightButtonObjects2.length = 0;
gdjs.SailingCode.GDFightButtonObjects3.length = 0;
gdjs.SailingCode.GDFightButtonObjects4.length = 0;
gdjs.SailingCode.GDFightButtonObjects5.length = 0;
gdjs.SailingCode.GDFightLabelObjects1.length = 0;
gdjs.SailingCode.GDFightLabelObjects2.length = 0;
gdjs.SailingCode.GDFightLabelObjects3.length = 0;
gdjs.SailingCode.GDFightLabelObjects4.length = 0;
gdjs.SailingCode.GDFightLabelObjects5.length = 0;
gdjs.SailingCode.GDFleeButtonObjects1.length = 0;
gdjs.SailingCode.GDFleeButtonObjects2.length = 0;
gdjs.SailingCode.GDFleeButtonObjects3.length = 0;
gdjs.SailingCode.GDFleeButtonObjects4.length = 0;
gdjs.SailingCode.GDFleeButtonObjects5.length = 0;
gdjs.SailingCode.GDFleeLabelObjects1.length = 0;
gdjs.SailingCode.GDFleeLabelObjects2.length = 0;
gdjs.SailingCode.GDFleeLabelObjects3.length = 0;
gdjs.SailingCode.GDFleeLabelObjects4.length = 0;
gdjs.SailingCode.GDFleeLabelObjects5.length = 0;
gdjs.SailingCode.GDParleyButtonObjects1.length = 0;
gdjs.SailingCode.GDParleyButtonObjects2.length = 0;
gdjs.SailingCode.GDParleyButtonObjects3.length = 0;
gdjs.SailingCode.GDParleyButtonObjects4.length = 0;
gdjs.SailingCode.GDParleyButtonObjects5.length = 0;
gdjs.SailingCode.GDParleyLabelObjects1.length = 0;
gdjs.SailingCode.GDParleyLabelObjects2.length = 0;
gdjs.SailingCode.GDParleyLabelObjects3.length = 0;
gdjs.SailingCode.GDParleyLabelObjects4.length = 0;
gdjs.SailingCode.GDParleyLabelObjects5.length = 0;
gdjs.SailingCode.GDResultPanelObjects1.length = 0;
gdjs.SailingCode.GDResultPanelObjects2.length = 0;
gdjs.SailingCode.GDResultPanelObjects3.length = 0;
gdjs.SailingCode.GDResultPanelObjects4.length = 0;
gdjs.SailingCode.GDResultPanelObjects5.length = 0;
gdjs.SailingCode.GDResultTitleObjects1.length = 0;
gdjs.SailingCode.GDResultTitleObjects2.length = 0;
gdjs.SailingCode.GDResultTitleObjects3.length = 0;
gdjs.SailingCode.GDResultTitleObjects4.length = 0;
gdjs.SailingCode.GDResultTitleObjects5.length = 0;
gdjs.SailingCode.GDResultBodyObjects1.length = 0;
gdjs.SailingCode.GDResultBodyObjects2.length = 0;
gdjs.SailingCode.GDResultBodyObjects3.length = 0;
gdjs.SailingCode.GDResultBodyObjects4.length = 0;
gdjs.SailingCode.GDResultBodyObjects5.length = 0;
gdjs.SailingCode.GDContinueButtonObjects1.length = 0;
gdjs.SailingCode.GDContinueButtonObjects2.length = 0;
gdjs.SailingCode.GDContinueButtonObjects3.length = 0;
gdjs.SailingCode.GDContinueButtonObjects4.length = 0;
gdjs.SailingCode.GDContinueButtonObjects5.length = 0;
gdjs.SailingCode.GDContinueLabelObjects1.length = 0;
gdjs.SailingCode.GDContinueLabelObjects2.length = 0;
gdjs.SailingCode.GDContinueLabelObjects3.length = 0;
gdjs.SailingCode.GDContinueLabelObjects4.length = 0;
gdjs.SailingCode.GDContinueLabelObjects5.length = 0;
gdjs.SailingCode.GDStatusBannerObjects1.length = 0;
gdjs.SailingCode.GDStatusBannerObjects2.length = 0;
gdjs.SailingCode.GDStatusBannerObjects3.length = 0;
gdjs.SailingCode.GDStatusBannerObjects4.length = 0;
gdjs.SailingCode.GDStatusBannerObjects5.length = 0;

gdjs.SailingCode.eventsList30(runtimeScene);
gdjs.SailingCode.GDOceanObjects1.length = 0;
gdjs.SailingCode.GDOceanObjects2.length = 0;
gdjs.SailingCode.GDOceanObjects3.length = 0;
gdjs.SailingCode.GDOceanObjects4.length = 0;
gdjs.SailingCode.GDOceanObjects5.length = 0;
gdjs.SailingCode.GDOceanFoamObjects1.length = 0;
gdjs.SailingCode.GDOceanFoamObjects2.length = 0;
gdjs.SailingCode.GDOceanFoamObjects3.length = 0;
gdjs.SailingCode.GDOceanFoamObjects4.length = 0;
gdjs.SailingCode.GDOceanFoamObjects5.length = 0;
gdjs.SailingCode.GDPlayerShipObjects1.length = 0;
gdjs.SailingCode.GDPlayerShipObjects2.length = 0;
gdjs.SailingCode.GDPlayerShipObjects3.length = 0;
gdjs.SailingCode.GDPlayerShipObjects4.length = 0;
gdjs.SailingCode.GDPlayerShipObjects5.length = 0;
gdjs.SailingCode.GDHudPanelObjects1.length = 0;
gdjs.SailingCode.GDHudPanelObjects2.length = 0;
gdjs.SailingCode.GDHudPanelObjects3.length = 0;
gdjs.SailingCode.GDHudPanelObjects4.length = 0;
gdjs.SailingCode.GDHudPanelObjects5.length = 0;
gdjs.SailingCode.GDHullBarBgObjects1.length = 0;
gdjs.SailingCode.GDHullBarBgObjects2.length = 0;
gdjs.SailingCode.GDHullBarBgObjects3.length = 0;
gdjs.SailingCode.GDHullBarBgObjects4.length = 0;
gdjs.SailingCode.GDHullBarBgObjects5.length = 0;
gdjs.SailingCode.GDHullBarFillObjects1.length = 0;
gdjs.SailingCode.GDHullBarFillObjects2.length = 0;
gdjs.SailingCode.GDHullBarFillObjects3.length = 0;
gdjs.SailingCode.GDHullBarFillObjects4.length = 0;
gdjs.SailingCode.GDHullBarFillObjects5.length = 0;
gdjs.SailingCode.GDIconDistanceObjects1.length = 0;
gdjs.SailingCode.GDIconDistanceObjects2.length = 0;
gdjs.SailingCode.GDIconDistanceObjects3.length = 0;
gdjs.SailingCode.GDIconDistanceObjects4.length = 0;
gdjs.SailingCode.GDIconDistanceObjects5.length = 0;
gdjs.SailingCode.GDIconGoldObjects1.length = 0;
gdjs.SailingCode.GDIconGoldObjects2.length = 0;
gdjs.SailingCode.GDIconGoldObjects3.length = 0;
gdjs.SailingCode.GDIconGoldObjects4.length = 0;
gdjs.SailingCode.GDIconGoldObjects5.length = 0;
gdjs.SailingCode.GDIconHullObjects1.length = 0;
gdjs.SailingCode.GDIconHullObjects2.length = 0;
gdjs.SailingCode.GDIconHullObjects3.length = 0;
gdjs.SailingCode.GDIconHullObjects4.length = 0;
gdjs.SailingCode.GDIconHullObjects5.length = 0;
gdjs.SailingCode.GDIconCrewObjects1.length = 0;
gdjs.SailingCode.GDIconCrewObjects2.length = 0;
gdjs.SailingCode.GDIconCrewObjects3.length = 0;
gdjs.SailingCode.GDIconCrewObjects4.length = 0;
gdjs.SailingCode.GDIconCrewObjects5.length = 0;
gdjs.SailingCode.GDIconFoodObjects1.length = 0;
gdjs.SailingCode.GDIconFoodObjects2.length = 0;
gdjs.SailingCode.GDIconFoodObjects3.length = 0;
gdjs.SailingCode.GDIconFoodObjects4.length = 0;
gdjs.SailingCode.GDIconFoodObjects5.length = 0;
gdjs.SailingCode.GDIconShotObjects1.length = 0;
gdjs.SailingCode.GDIconShotObjects2.length = 0;
gdjs.SailingCode.GDIconShotObjects3.length = 0;
gdjs.SailingCode.GDIconShotObjects4.length = 0;
gdjs.SailingCode.GDIconShotObjects5.length = 0;
gdjs.SailingCode.GDIconCargoObjects1.length = 0;
gdjs.SailingCode.GDIconCargoObjects2.length = 0;
gdjs.SailingCode.GDIconCargoObjects3.length = 0;
gdjs.SailingCode.GDIconCargoObjects4.length = 0;
gdjs.SailingCode.GDIconCargoObjects5.length = 0;
gdjs.SailingCode.GDDistanceTextObjects1.length = 0;
gdjs.SailingCode.GDDistanceTextObjects2.length = 0;
gdjs.SailingCode.GDDistanceTextObjects3.length = 0;
gdjs.SailingCode.GDDistanceTextObjects4.length = 0;
gdjs.SailingCode.GDDistanceTextObjects5.length = 0;
gdjs.SailingCode.GDGoldTextObjects1.length = 0;
gdjs.SailingCode.GDGoldTextObjects2.length = 0;
gdjs.SailingCode.GDGoldTextObjects3.length = 0;
gdjs.SailingCode.GDGoldTextObjects4.length = 0;
gdjs.SailingCode.GDGoldTextObjects5.length = 0;
gdjs.SailingCode.GDHullTextObjects1.length = 0;
gdjs.SailingCode.GDHullTextObjects2.length = 0;
gdjs.SailingCode.GDHullTextObjects3.length = 0;
gdjs.SailingCode.GDHullTextObjects4.length = 0;
gdjs.SailingCode.GDHullTextObjects5.length = 0;
gdjs.SailingCode.GDCrewTextObjects1.length = 0;
gdjs.SailingCode.GDCrewTextObjects2.length = 0;
gdjs.SailingCode.GDCrewTextObjects3.length = 0;
gdjs.SailingCode.GDCrewTextObjects4.length = 0;
gdjs.SailingCode.GDCrewTextObjects5.length = 0;
gdjs.SailingCode.GDFoodTextObjects1.length = 0;
gdjs.SailingCode.GDFoodTextObjects2.length = 0;
gdjs.SailingCode.GDFoodTextObjects3.length = 0;
gdjs.SailingCode.GDFoodTextObjects4.length = 0;
gdjs.SailingCode.GDFoodTextObjects5.length = 0;
gdjs.SailingCode.GDShotTextObjects1.length = 0;
gdjs.SailingCode.GDShotTextObjects2.length = 0;
gdjs.SailingCode.GDShotTextObjects3.length = 0;
gdjs.SailingCode.GDShotTextObjects4.length = 0;
gdjs.SailingCode.GDShotTextObjects5.length = 0;
gdjs.SailingCode.GDCargoTextObjects1.length = 0;
gdjs.SailingCode.GDCargoTextObjects2.length = 0;
gdjs.SailingCode.GDCargoTextObjects3.length = 0;
gdjs.SailingCode.GDCargoTextObjects4.length = 0;
gdjs.SailingCode.GDCargoTextObjects5.length = 0;
gdjs.SailingCode.GDReturnButtonObjects1.length = 0;
gdjs.SailingCode.GDReturnButtonObjects2.length = 0;
gdjs.SailingCode.GDReturnButtonObjects3.length = 0;
gdjs.SailingCode.GDReturnButtonObjects4.length = 0;
gdjs.SailingCode.GDReturnButtonObjects5.length = 0;
gdjs.SailingCode.GDReturnLabelObjects1.length = 0;
gdjs.SailingCode.GDReturnLabelObjects2.length = 0;
gdjs.SailingCode.GDReturnLabelObjects3.length = 0;
gdjs.SailingCode.GDReturnLabelObjects4.length = 0;
gdjs.SailingCode.GDReturnLabelObjects5.length = 0;
gdjs.SailingCode.GDStateTextObjects1.length = 0;
gdjs.SailingCode.GDStateTextObjects2.length = 0;
gdjs.SailingCode.GDStateTextObjects3.length = 0;
gdjs.SailingCode.GDStateTextObjects4.length = 0;
gdjs.SailingCode.GDStateTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyShipObjects1.length = 0;
gdjs.SailingCode.GDEnemyShipObjects2.length = 0;
gdjs.SailingCode.GDEnemyShipObjects3.length = 0;
gdjs.SailingCode.GDEnemyShipObjects4.length = 0;
gdjs.SailingCode.GDEnemyShipObjects5.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects1.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects2.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects3.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects4.length = 0;
gdjs.SailingCode.GDEnemyPanelObjects5.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyNameTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyTypeTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyStatsTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyHintTextObjects5.length = 0;
gdjs.SailingCode.GDFightButtonObjects1.length = 0;
gdjs.SailingCode.GDFightButtonObjects2.length = 0;
gdjs.SailingCode.GDFightButtonObjects3.length = 0;
gdjs.SailingCode.GDFightButtonObjects4.length = 0;
gdjs.SailingCode.GDFightButtonObjects5.length = 0;
gdjs.SailingCode.GDFightLabelObjects1.length = 0;
gdjs.SailingCode.GDFightLabelObjects2.length = 0;
gdjs.SailingCode.GDFightLabelObjects3.length = 0;
gdjs.SailingCode.GDFightLabelObjects4.length = 0;
gdjs.SailingCode.GDFightLabelObjects5.length = 0;
gdjs.SailingCode.GDFleeButtonObjects1.length = 0;
gdjs.SailingCode.GDFleeButtonObjects2.length = 0;
gdjs.SailingCode.GDFleeButtonObjects3.length = 0;
gdjs.SailingCode.GDFleeButtonObjects4.length = 0;
gdjs.SailingCode.GDFleeButtonObjects5.length = 0;
gdjs.SailingCode.GDFleeLabelObjects1.length = 0;
gdjs.SailingCode.GDFleeLabelObjects2.length = 0;
gdjs.SailingCode.GDFleeLabelObjects3.length = 0;
gdjs.SailingCode.GDFleeLabelObjects4.length = 0;
gdjs.SailingCode.GDFleeLabelObjects5.length = 0;
gdjs.SailingCode.GDParleyButtonObjects1.length = 0;
gdjs.SailingCode.GDParleyButtonObjects2.length = 0;
gdjs.SailingCode.GDParleyButtonObjects3.length = 0;
gdjs.SailingCode.GDParleyButtonObjects4.length = 0;
gdjs.SailingCode.GDParleyButtonObjects5.length = 0;
gdjs.SailingCode.GDParleyLabelObjects1.length = 0;
gdjs.SailingCode.GDParleyLabelObjects2.length = 0;
gdjs.SailingCode.GDParleyLabelObjects3.length = 0;
gdjs.SailingCode.GDParleyLabelObjects4.length = 0;
gdjs.SailingCode.GDParleyLabelObjects5.length = 0;
gdjs.SailingCode.GDResultPanelObjects1.length = 0;
gdjs.SailingCode.GDResultPanelObjects2.length = 0;
gdjs.SailingCode.GDResultPanelObjects3.length = 0;
gdjs.SailingCode.GDResultPanelObjects4.length = 0;
gdjs.SailingCode.GDResultPanelObjects5.length = 0;
gdjs.SailingCode.GDResultTitleObjects1.length = 0;
gdjs.SailingCode.GDResultTitleObjects2.length = 0;
gdjs.SailingCode.GDResultTitleObjects3.length = 0;
gdjs.SailingCode.GDResultTitleObjects4.length = 0;
gdjs.SailingCode.GDResultTitleObjects5.length = 0;
gdjs.SailingCode.GDResultBodyObjects1.length = 0;
gdjs.SailingCode.GDResultBodyObjects2.length = 0;
gdjs.SailingCode.GDResultBodyObjects3.length = 0;
gdjs.SailingCode.GDResultBodyObjects4.length = 0;
gdjs.SailingCode.GDResultBodyObjects5.length = 0;
gdjs.SailingCode.GDContinueButtonObjects1.length = 0;
gdjs.SailingCode.GDContinueButtonObjects2.length = 0;
gdjs.SailingCode.GDContinueButtonObjects3.length = 0;
gdjs.SailingCode.GDContinueButtonObjects4.length = 0;
gdjs.SailingCode.GDContinueButtonObjects5.length = 0;
gdjs.SailingCode.GDContinueLabelObjects1.length = 0;
gdjs.SailingCode.GDContinueLabelObjects2.length = 0;
gdjs.SailingCode.GDContinueLabelObjects3.length = 0;
gdjs.SailingCode.GDContinueLabelObjects4.length = 0;
gdjs.SailingCode.GDContinueLabelObjects5.length = 0;
gdjs.SailingCode.GDStatusBannerObjects1.length = 0;
gdjs.SailingCode.GDStatusBannerObjects2.length = 0;
gdjs.SailingCode.GDStatusBannerObjects3.length = 0;
gdjs.SailingCode.GDStatusBannerObjects4.length = 0;
gdjs.SailingCode.GDStatusBannerObjects5.length = 0;


return;

}

gdjs['SailingCode'] = gdjs.SailingCode;
