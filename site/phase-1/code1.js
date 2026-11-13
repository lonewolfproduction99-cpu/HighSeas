gdjs.SailingCode = {};
gdjs.SailingCode.localVariables = [];
gdjs.SailingCode.idToCallbackMap = new Map();
gdjs.SailingCode.GDOceanObjects1= [];
gdjs.SailingCode.GDOceanObjects2= [];
gdjs.SailingCode.GDOceanObjects3= [];
gdjs.SailingCode.GDOceanFoamObjects1= [];
gdjs.SailingCode.GDOceanFoamObjects2= [];
gdjs.SailingCode.GDOceanFoamObjects3= [];
gdjs.SailingCode.GDPlayerShipObjects1= [];
gdjs.SailingCode.GDPlayerShipObjects2= [];
gdjs.SailingCode.GDPlayerShipObjects3= [];
gdjs.SailingCode.GDHudPanelObjects1= [];
gdjs.SailingCode.GDHudPanelObjects2= [];
gdjs.SailingCode.GDHudPanelObjects3= [];
gdjs.SailingCode.GDHullBarBgObjects1= [];
gdjs.SailingCode.GDHullBarBgObjects2= [];
gdjs.SailingCode.GDHullBarBgObjects3= [];
gdjs.SailingCode.GDHullBarFillObjects1= [];
gdjs.SailingCode.GDHullBarFillObjects2= [];
gdjs.SailingCode.GDHullBarFillObjects3= [];
gdjs.SailingCode.GDIconDistanceObjects1= [];
gdjs.SailingCode.GDIconDistanceObjects2= [];
gdjs.SailingCode.GDIconDistanceObjects3= [];
gdjs.SailingCode.GDIconGoldObjects1= [];
gdjs.SailingCode.GDIconGoldObjects2= [];
gdjs.SailingCode.GDIconGoldObjects3= [];
gdjs.SailingCode.GDIconHullObjects1= [];
gdjs.SailingCode.GDIconHullObjects2= [];
gdjs.SailingCode.GDIconHullObjects3= [];
gdjs.SailingCode.GDIconCrewObjects1= [];
gdjs.SailingCode.GDIconCrewObjects2= [];
gdjs.SailingCode.GDIconCrewObjects3= [];
gdjs.SailingCode.GDIconFoodObjects1= [];
gdjs.SailingCode.GDIconFoodObjects2= [];
gdjs.SailingCode.GDIconFoodObjects3= [];
gdjs.SailingCode.GDIconShotObjects1= [];
gdjs.SailingCode.GDIconShotObjects2= [];
gdjs.SailingCode.GDIconShotObjects3= [];
gdjs.SailingCode.GDIconCargoObjects1= [];
gdjs.SailingCode.GDIconCargoObjects2= [];
gdjs.SailingCode.GDIconCargoObjects3= [];
gdjs.SailingCode.GDDistanceTextObjects1= [];
gdjs.SailingCode.GDDistanceTextObjects2= [];
gdjs.SailingCode.GDDistanceTextObjects3= [];
gdjs.SailingCode.GDGoldTextObjects1= [];
gdjs.SailingCode.GDGoldTextObjects2= [];
gdjs.SailingCode.GDGoldTextObjects3= [];
gdjs.SailingCode.GDHullTextObjects1= [];
gdjs.SailingCode.GDHullTextObjects2= [];
gdjs.SailingCode.GDHullTextObjects3= [];
gdjs.SailingCode.GDCrewTextObjects1= [];
gdjs.SailingCode.GDCrewTextObjects2= [];
gdjs.SailingCode.GDCrewTextObjects3= [];
gdjs.SailingCode.GDFoodTextObjects1= [];
gdjs.SailingCode.GDFoodTextObjects2= [];
gdjs.SailingCode.GDFoodTextObjects3= [];
gdjs.SailingCode.GDShotTextObjects1= [];
gdjs.SailingCode.GDShotTextObjects2= [];
gdjs.SailingCode.GDShotTextObjects3= [];
gdjs.SailingCode.GDCargoTextObjects1= [];
gdjs.SailingCode.GDCargoTextObjects2= [];
gdjs.SailingCode.GDCargoTextObjects3= [];
gdjs.SailingCode.GDReturnButtonObjects1= [];
gdjs.SailingCode.GDReturnButtonObjects2= [];
gdjs.SailingCode.GDReturnButtonObjects3= [];
gdjs.SailingCode.GDReturnLabelObjects1= [];
gdjs.SailingCode.GDReturnLabelObjects2= [];
gdjs.SailingCode.GDReturnLabelObjects3= [];
gdjs.SailingCode.GDStateTextObjects1= [];
gdjs.SailingCode.GDStateTextObjects2= [];
gdjs.SailingCode.GDStateTextObjects3= [];


gdjs.SailingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
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


};gdjs.SailingCode.eventsList5 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("CrewText"), gdjs.SailingCode.GDCrewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DistanceText"), gdjs.SailingCode.GDDistanceTextObjects1);
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
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects1);
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
}

}


};gdjs.SailingCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].setAngle(2.5 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.6));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - (gdjs.SailingCode.GDPlayerShipObjects1[i].getWidth()) / 2,runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - (gdjs.SailingCode.GDPlayerShipObjects1[i].getHeight()) / 2 + 4 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.1));
}
}
}

}


};gdjs.SailingCode.eventsList7 = function(runtimeScene) {

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
/* Reuse gdjs.SailingCode.GDHullBarFillObjects1 */
{for(var i = 0, len = gdjs.SailingCode.GDHullBarFillObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDHullBarFillObjects1[i].setColor("220;70;60");
}
}
}

}


};gdjs.SailingCode.eventsList8 = function(runtimeScene) {

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
gdjs.SailingCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDReturnButtonObjects2Objects = Hashtable.newFrom({"ReturnButton": gdjs.SailingCode.GDReturnButtonObjects2});
gdjs.SailingCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "SAILING");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDReturnButtonObjects2Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("RETURNING");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
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


};gdjs.SailingCode.eventsList10 = function(runtimeScene) {

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


gdjs.SailingCode.eventsList8(runtimeScene);
}


{


gdjs.SailingCode.eventsList9(runtimeScene);
}


};

gdjs.SailingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SailingCode.GDOceanObjects1.length = 0;
gdjs.SailingCode.GDOceanObjects2.length = 0;
gdjs.SailingCode.GDOceanObjects3.length = 0;
gdjs.SailingCode.GDOceanFoamObjects1.length = 0;
gdjs.SailingCode.GDOceanFoamObjects2.length = 0;
gdjs.SailingCode.GDOceanFoamObjects3.length = 0;
gdjs.SailingCode.GDPlayerShipObjects1.length = 0;
gdjs.SailingCode.GDPlayerShipObjects2.length = 0;
gdjs.SailingCode.GDPlayerShipObjects3.length = 0;
gdjs.SailingCode.GDHudPanelObjects1.length = 0;
gdjs.SailingCode.GDHudPanelObjects2.length = 0;
gdjs.SailingCode.GDHudPanelObjects3.length = 0;
gdjs.SailingCode.GDHullBarBgObjects1.length = 0;
gdjs.SailingCode.GDHullBarBgObjects2.length = 0;
gdjs.SailingCode.GDHullBarBgObjects3.length = 0;
gdjs.SailingCode.GDHullBarFillObjects1.length = 0;
gdjs.SailingCode.GDHullBarFillObjects2.length = 0;
gdjs.SailingCode.GDHullBarFillObjects3.length = 0;
gdjs.SailingCode.GDIconDistanceObjects1.length = 0;
gdjs.SailingCode.GDIconDistanceObjects2.length = 0;
gdjs.SailingCode.GDIconDistanceObjects3.length = 0;
gdjs.SailingCode.GDIconGoldObjects1.length = 0;
gdjs.SailingCode.GDIconGoldObjects2.length = 0;
gdjs.SailingCode.GDIconGoldObjects3.length = 0;
gdjs.SailingCode.GDIconHullObjects1.length = 0;
gdjs.SailingCode.GDIconHullObjects2.length = 0;
gdjs.SailingCode.GDIconHullObjects3.length = 0;
gdjs.SailingCode.GDIconCrewObjects1.length = 0;
gdjs.SailingCode.GDIconCrewObjects2.length = 0;
gdjs.SailingCode.GDIconCrewObjects3.length = 0;
gdjs.SailingCode.GDIconFoodObjects1.length = 0;
gdjs.SailingCode.GDIconFoodObjects2.length = 0;
gdjs.SailingCode.GDIconFoodObjects3.length = 0;
gdjs.SailingCode.GDIconShotObjects1.length = 0;
gdjs.SailingCode.GDIconShotObjects2.length = 0;
gdjs.SailingCode.GDIconShotObjects3.length = 0;
gdjs.SailingCode.GDIconCargoObjects1.length = 0;
gdjs.SailingCode.GDIconCargoObjects2.length = 0;
gdjs.SailingCode.GDIconCargoObjects3.length = 0;
gdjs.SailingCode.GDDistanceTextObjects1.length = 0;
gdjs.SailingCode.GDDistanceTextObjects2.length = 0;
gdjs.SailingCode.GDDistanceTextObjects3.length = 0;
gdjs.SailingCode.GDGoldTextObjects1.length = 0;
gdjs.SailingCode.GDGoldTextObjects2.length = 0;
gdjs.SailingCode.GDGoldTextObjects3.length = 0;
gdjs.SailingCode.GDHullTextObjects1.length = 0;
gdjs.SailingCode.GDHullTextObjects2.length = 0;
gdjs.SailingCode.GDHullTextObjects3.length = 0;
gdjs.SailingCode.GDCrewTextObjects1.length = 0;
gdjs.SailingCode.GDCrewTextObjects2.length = 0;
gdjs.SailingCode.GDCrewTextObjects3.length = 0;
gdjs.SailingCode.GDFoodTextObjects1.length = 0;
gdjs.SailingCode.GDFoodTextObjects2.length = 0;
gdjs.SailingCode.GDFoodTextObjects3.length = 0;
gdjs.SailingCode.GDShotTextObjects1.length = 0;
gdjs.SailingCode.GDShotTextObjects2.length = 0;
gdjs.SailingCode.GDShotTextObjects3.length = 0;
gdjs.SailingCode.GDCargoTextObjects1.length = 0;
gdjs.SailingCode.GDCargoTextObjects2.length = 0;
gdjs.SailingCode.GDCargoTextObjects3.length = 0;
gdjs.SailingCode.GDReturnButtonObjects1.length = 0;
gdjs.SailingCode.GDReturnButtonObjects2.length = 0;
gdjs.SailingCode.GDReturnButtonObjects3.length = 0;
gdjs.SailingCode.GDReturnLabelObjects1.length = 0;
gdjs.SailingCode.GDReturnLabelObjects2.length = 0;
gdjs.SailingCode.GDReturnLabelObjects3.length = 0;
gdjs.SailingCode.GDStateTextObjects1.length = 0;
gdjs.SailingCode.GDStateTextObjects2.length = 0;
gdjs.SailingCode.GDStateTextObjects3.length = 0;

gdjs.SailingCode.eventsList10(runtimeScene);
gdjs.SailingCode.GDOceanObjects1.length = 0;
gdjs.SailingCode.GDOceanObjects2.length = 0;
gdjs.SailingCode.GDOceanObjects3.length = 0;
gdjs.SailingCode.GDOceanFoamObjects1.length = 0;
gdjs.SailingCode.GDOceanFoamObjects2.length = 0;
gdjs.SailingCode.GDOceanFoamObjects3.length = 0;
gdjs.SailingCode.GDPlayerShipObjects1.length = 0;
gdjs.SailingCode.GDPlayerShipObjects2.length = 0;
gdjs.SailingCode.GDPlayerShipObjects3.length = 0;
gdjs.SailingCode.GDHudPanelObjects1.length = 0;
gdjs.SailingCode.GDHudPanelObjects2.length = 0;
gdjs.SailingCode.GDHudPanelObjects3.length = 0;
gdjs.SailingCode.GDHullBarBgObjects1.length = 0;
gdjs.SailingCode.GDHullBarBgObjects2.length = 0;
gdjs.SailingCode.GDHullBarBgObjects3.length = 0;
gdjs.SailingCode.GDHullBarFillObjects1.length = 0;
gdjs.SailingCode.GDHullBarFillObjects2.length = 0;
gdjs.SailingCode.GDHullBarFillObjects3.length = 0;
gdjs.SailingCode.GDIconDistanceObjects1.length = 0;
gdjs.SailingCode.GDIconDistanceObjects2.length = 0;
gdjs.SailingCode.GDIconDistanceObjects3.length = 0;
gdjs.SailingCode.GDIconGoldObjects1.length = 0;
gdjs.SailingCode.GDIconGoldObjects2.length = 0;
gdjs.SailingCode.GDIconGoldObjects3.length = 0;
gdjs.SailingCode.GDIconHullObjects1.length = 0;
gdjs.SailingCode.GDIconHullObjects2.length = 0;
gdjs.SailingCode.GDIconHullObjects3.length = 0;
gdjs.SailingCode.GDIconCrewObjects1.length = 0;
gdjs.SailingCode.GDIconCrewObjects2.length = 0;
gdjs.SailingCode.GDIconCrewObjects3.length = 0;
gdjs.SailingCode.GDIconFoodObjects1.length = 0;
gdjs.SailingCode.GDIconFoodObjects2.length = 0;
gdjs.SailingCode.GDIconFoodObjects3.length = 0;
gdjs.SailingCode.GDIconShotObjects1.length = 0;
gdjs.SailingCode.GDIconShotObjects2.length = 0;
gdjs.SailingCode.GDIconShotObjects3.length = 0;
gdjs.SailingCode.GDIconCargoObjects1.length = 0;
gdjs.SailingCode.GDIconCargoObjects2.length = 0;
gdjs.SailingCode.GDIconCargoObjects3.length = 0;
gdjs.SailingCode.GDDistanceTextObjects1.length = 0;
gdjs.SailingCode.GDDistanceTextObjects2.length = 0;
gdjs.SailingCode.GDDistanceTextObjects3.length = 0;
gdjs.SailingCode.GDGoldTextObjects1.length = 0;
gdjs.SailingCode.GDGoldTextObjects2.length = 0;
gdjs.SailingCode.GDGoldTextObjects3.length = 0;
gdjs.SailingCode.GDHullTextObjects1.length = 0;
gdjs.SailingCode.GDHullTextObjects2.length = 0;
gdjs.SailingCode.GDHullTextObjects3.length = 0;
gdjs.SailingCode.GDCrewTextObjects1.length = 0;
gdjs.SailingCode.GDCrewTextObjects2.length = 0;
gdjs.SailingCode.GDCrewTextObjects3.length = 0;
gdjs.SailingCode.GDFoodTextObjects1.length = 0;
gdjs.SailingCode.GDFoodTextObjects2.length = 0;
gdjs.SailingCode.GDFoodTextObjects3.length = 0;
gdjs.SailingCode.GDShotTextObjects1.length = 0;
gdjs.SailingCode.GDShotTextObjects2.length = 0;
gdjs.SailingCode.GDShotTextObjects3.length = 0;
gdjs.SailingCode.GDCargoTextObjects1.length = 0;
gdjs.SailingCode.GDCargoTextObjects2.length = 0;
gdjs.SailingCode.GDCargoTextObjects3.length = 0;
gdjs.SailingCode.GDReturnButtonObjects1.length = 0;
gdjs.SailingCode.GDReturnButtonObjects2.length = 0;
gdjs.SailingCode.GDReturnButtonObjects3.length = 0;
gdjs.SailingCode.GDReturnLabelObjects1.length = 0;
gdjs.SailingCode.GDReturnLabelObjects2.length = 0;
gdjs.SailingCode.GDReturnLabelObjects3.length = 0;
gdjs.SailingCode.GDStateTextObjects1.length = 0;
gdjs.SailingCode.GDStateTextObjects2.length = 0;
gdjs.SailingCode.GDStateTextObjects3.length = 0;


return;

}

gdjs['SailingCode'] = gdjs.SailingCode;
