gdjs.PortCode = {};
gdjs.PortCode.localVariables = [];
gdjs.PortCode.idToCallbackMap = new Map();
gdjs.PortCode.GDPortBackgroundObjects1= [];
gdjs.PortCode.GDPortBackgroundObjects2= [];
gdjs.PortCode.GDDockedShipObjects1= [];
gdjs.PortCode.GDDockedShipObjects2= [];
gdjs.PortCode.GDTitleTextObjects1= [];
gdjs.PortCode.GDTitleTextObjects2= [];
gdjs.PortCode.GDBankedGoldTextObjects1= [];
gdjs.PortCode.GDBankedGoldTextObjects2= [];
gdjs.PortCode.GDPortInfoTextObjects1= [];
gdjs.PortCode.GDPortInfoTextObjects2= [];
gdjs.PortCode.GDSetSailButtonObjects1= [];
gdjs.PortCode.GDSetSailButtonObjects2= [];
gdjs.PortCode.GDSetSailLabelObjects1= [];
gdjs.PortCode.GDSetSailLabelObjects2= [];


gdjs.PortCode.mapOfGDgdjs_9546PortCode_9546GDSetSailButtonObjects1Objects = Hashtable.newFrom({"SetSailButton": gdjs.PortCode.GDSetSailButtonObjects1});
gdjs.PortCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BankedGoldText"), gdjs.PortCode.GDBankedGoldTextObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").setString("PORT");
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").setNumber(0);
}
{for(var i = 0, len = gdjs.PortCode.GDBankedGoldTextObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDBankedGoldTextObjects1[i].setString("Gold: " + gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(2).getChild("BankedGold").getAsNumber()));
}
}
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
gdjs.copyArray(runtimeScene.getObjects("BankedGoldText"), gdjs.PortCode.GDBankedGoldTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("DockedShip"), gdjs.PortCode.GDDockedShipObjects1);
gdjs.copyArray(runtimeScene.getObjects("PortBackground"), gdjs.PortCode.GDPortBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("PortInfoText"), gdjs.PortCode.GDPortInfoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SetSailButton"), gdjs.PortCode.GDSetSailButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SetSailLabel"), gdjs.PortCode.GDSetSailLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("TitleText"), gdjs.PortCode.GDTitleTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(Math.max(0, (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber()) / 2));
}
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(Math.max(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / (( gdjs.PortCode.GDPortBackgroundObjects1.length === 0 ) ? 0 :gdjs.PortCode.GDPortBackgroundObjects1[0].getWidth()), runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / (( gdjs.PortCode.GDPortBackgroundObjects1.length === 0 ) ? 0 :gdjs.PortCode.GDPortBackgroundObjects1[0].getHeight())));
}
{for(var i = 0, len = gdjs.PortCode.GDPortBackgroundObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDPortBackgroundObjects1[i].setSize((gdjs.PortCode.GDPortBackgroundObjects1[i].getWidth()) * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber(), (gdjs.PortCode.GDPortBackgroundObjects1[i].getHeight()) * runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber());
}
}
{for(var i = 0, len = gdjs.PortCode.GDPortBackgroundObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDPortBackgroundObjects1[i].setPosition((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (gdjs.PortCode.GDPortBackgroundObjects1[i].getWidth())) / 2,(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - (gdjs.PortCode.GDPortBackgroundObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.PortCode.GDDockedShipObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDDockedShipObjects1[i].setSize(Math.min(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.2, 280) * (gdjs.PortCode.GDDockedShipObjects1[i].getWidth()) / (gdjs.PortCode.GDDockedShipObjects1[i].getHeight()), Math.min(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.2, 280));
}
}
{for(var i = 0, len = gdjs.PortCode.GDDockedShipObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDDockedShipObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + 60,runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.52);
}
}
{for(var i = 0, len = gdjs.PortCode.GDTitleTextObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDTitleTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.PortCode.GDTitleTextObjects1[i].getWidth())) / 2,runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SafeTop").getAsNumber() + 110);
}
}
{for(var i = 0, len = gdjs.PortCode.GDBankedGoldTextObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDBankedGoldTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - (gdjs.PortCode.GDBankedGoldTextObjects1[i].getWidth())) / 2,runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SafeTop").getAsNumber() + 190);
}
}
{for(var i = 0, len = gdjs.PortCode.GDPortInfoTextObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDPortInfoTextObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 24,runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * 0.52);
}
}
{for(var i = 0, len = gdjs.PortCode.GDSetSailButtonObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDSetSailButtonObjects1[i].setSize(360, 110);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() - 360) / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(1).getChild("SafeBottom").getAsNumber() - 110 - 40);
}
{for(var i = 0, len = gdjs.PortCode.GDSetSailButtonObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDSetSailButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber());
}
}
{for(var i = 0, len = gdjs.PortCode.GDSetSailLabelObjects1.length ;i < len;++i) {
    gdjs.PortCode.GDSetSailLabelObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber() + (360 - (gdjs.PortCode.GDSetSailLabelObjects1[i].getWidth())) / 2,runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() + (110 - (gdjs.PortCode.GDSetSailLabelObjects1[i].getHeight())) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SetSailButton"), gdjs.PortCode.GDSetSailButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.PortCode.mapOfGDgdjs_9546PortCode_9546GDSetSailButtonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Sailing", false);
}
}

}


};

gdjs.PortCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PortCode.GDPortBackgroundObjects1.length = 0;
gdjs.PortCode.GDPortBackgroundObjects2.length = 0;
gdjs.PortCode.GDDockedShipObjects1.length = 0;
gdjs.PortCode.GDDockedShipObjects2.length = 0;
gdjs.PortCode.GDTitleTextObjects1.length = 0;
gdjs.PortCode.GDTitleTextObjects2.length = 0;
gdjs.PortCode.GDBankedGoldTextObjects1.length = 0;
gdjs.PortCode.GDBankedGoldTextObjects2.length = 0;
gdjs.PortCode.GDPortInfoTextObjects1.length = 0;
gdjs.PortCode.GDPortInfoTextObjects2.length = 0;
gdjs.PortCode.GDSetSailButtonObjects1.length = 0;
gdjs.PortCode.GDSetSailButtonObjects2.length = 0;
gdjs.PortCode.GDSetSailLabelObjects1.length = 0;
gdjs.PortCode.GDSetSailLabelObjects2.length = 0;

gdjs.PortCode.eventsList0(runtimeScene);
gdjs.PortCode.GDPortBackgroundObjects1.length = 0;
gdjs.PortCode.GDPortBackgroundObjects2.length = 0;
gdjs.PortCode.GDDockedShipObjects1.length = 0;
gdjs.PortCode.GDDockedShipObjects2.length = 0;
gdjs.PortCode.GDTitleTextObjects1.length = 0;
gdjs.PortCode.GDTitleTextObjects2.length = 0;
gdjs.PortCode.GDBankedGoldTextObjects1.length = 0;
gdjs.PortCode.GDBankedGoldTextObjects2.length = 0;
gdjs.PortCode.GDPortInfoTextObjects1.length = 0;
gdjs.PortCode.GDPortInfoTextObjects2.length = 0;
gdjs.PortCode.GDSetSailButtonObjects1.length = 0;
gdjs.PortCode.GDSetSailButtonObjects2.length = 0;
gdjs.PortCode.GDSetSailLabelObjects1.length = 0;
gdjs.PortCode.GDSetSailLabelObjects2.length = 0;


return;

}

gdjs['PortCode'] = gdjs.PortCode;
