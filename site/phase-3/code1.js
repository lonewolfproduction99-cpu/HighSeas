gdjs.SailingCode = {};
gdjs.SailingCode.localVariables = [];
gdjs.SailingCode.idToCallbackMap = new Map();
gdjs.SailingCode.forEachIndex3 = 0;

gdjs.SailingCode.forEachObjects3 = [];

gdjs.SailingCode.forEachTemporary3 = null;

gdjs.SailingCode.forEachTotalCount3 = 0;

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
gdjs.SailingCode.GDCannonBallObjects1= [];
gdjs.SailingCode.GDCannonBallObjects2= [];
gdjs.SailingCode.GDCannonBallObjects3= [];
gdjs.SailingCode.GDCannonBallObjects4= [];
gdjs.SailingCode.GDCannonBallObjects5= [];
gdjs.SailingCode.GDFxObjects1= [];
gdjs.SailingCode.GDFxObjects2= [];
gdjs.SailingCode.GDFxObjects3= [];
gdjs.SailingCode.GDFxObjects4= [];
gdjs.SailingCode.GDFxObjects5= [];
gdjs.SailingCode.GDDamageTextObjects1= [];
gdjs.SailingCode.GDDamageTextObjects2= [];
gdjs.SailingCode.GDDamageTextObjects3= [];
gdjs.SailingCode.GDDamageTextObjects4= [];
gdjs.SailingCode.GDDamageTextObjects5= [];
gdjs.SailingCode.GDEnemyHullBgObjects1= [];
gdjs.SailingCode.GDEnemyHullBgObjects2= [];
gdjs.SailingCode.GDEnemyHullBgObjects3= [];
gdjs.SailingCode.GDEnemyHullBgObjects4= [];
gdjs.SailingCode.GDEnemyHullBgObjects5= [];
gdjs.SailingCode.GDEnemyHullFillObjects1= [];
gdjs.SailingCode.GDEnemyHullFillObjects2= [];
gdjs.SailingCode.GDEnemyHullFillObjects3= [];
gdjs.SailingCode.GDEnemyHullFillObjects4= [];
gdjs.SailingCode.GDEnemyHullFillObjects5= [];
gdjs.SailingCode.GDEnemyTagTextObjects1= [];
gdjs.SailingCode.GDEnemyTagTextObjects2= [];
gdjs.SailingCode.GDEnemyTagTextObjects3= [];
gdjs.SailingCode.GDEnemyTagTextObjects4= [];
gdjs.SailingCode.GDEnemyTagTextObjects5= [];
gdjs.SailingCode.GDPlayerReloadBgObjects1= [];
gdjs.SailingCode.GDPlayerReloadBgObjects2= [];
gdjs.SailingCode.GDPlayerReloadBgObjects3= [];
gdjs.SailingCode.GDPlayerReloadBgObjects4= [];
gdjs.SailingCode.GDPlayerReloadBgObjects5= [];
gdjs.SailingCode.GDPlayerReloadFillObjects1= [];
gdjs.SailingCode.GDPlayerReloadFillObjects2= [];
gdjs.SailingCode.GDPlayerReloadFillObjects3= [];
gdjs.SailingCode.GDPlayerReloadFillObjects4= [];
gdjs.SailingCode.GDPlayerReloadFillObjects5= [];
gdjs.SailingCode.GDPlayerTagTextObjects1= [];
gdjs.SailingCode.GDPlayerTagTextObjects2= [];
gdjs.SailingCode.GDPlayerTagTextObjects3= [];
gdjs.SailingCode.GDPlayerTagTextObjects4= [];
gdjs.SailingCode.GDPlayerTagTextObjects5= [];
gdjs.SailingCode.GDAmmoRoundButtonObjects1= [];
gdjs.SailingCode.GDAmmoRoundButtonObjects2= [];
gdjs.SailingCode.GDAmmoRoundButtonObjects3= [];
gdjs.SailingCode.GDAmmoRoundButtonObjects4= [];
gdjs.SailingCode.GDAmmoRoundButtonObjects5= [];
gdjs.SailingCode.GDAmmoRoundLabelObjects1= [];
gdjs.SailingCode.GDAmmoRoundLabelObjects2= [];
gdjs.SailingCode.GDAmmoRoundLabelObjects3= [];
gdjs.SailingCode.GDAmmoRoundLabelObjects4= [];
gdjs.SailingCode.GDAmmoRoundLabelObjects5= [];
gdjs.SailingCode.GDAmmoGrapeButtonObjects1= [];
gdjs.SailingCode.GDAmmoGrapeButtonObjects2= [];
gdjs.SailingCode.GDAmmoGrapeButtonObjects3= [];
gdjs.SailingCode.GDAmmoGrapeButtonObjects4= [];
gdjs.SailingCode.GDAmmoGrapeButtonObjects5= [];
gdjs.SailingCode.GDAmmoGrapeLabelObjects1= [];
gdjs.SailingCode.GDAmmoGrapeLabelObjects2= [];
gdjs.SailingCode.GDAmmoGrapeLabelObjects3= [];
gdjs.SailingCode.GDAmmoGrapeLabelObjects4= [];
gdjs.SailingCode.GDAmmoGrapeLabelObjects5= [];
gdjs.SailingCode.GDAmmoChainButtonObjects1= [];
gdjs.SailingCode.GDAmmoChainButtonObjects2= [];
gdjs.SailingCode.GDAmmoChainButtonObjects3= [];
gdjs.SailingCode.GDAmmoChainButtonObjects4= [];
gdjs.SailingCode.GDAmmoChainButtonObjects5= [];
gdjs.SailingCode.GDAmmoChainLabelObjects1= [];
gdjs.SailingCode.GDAmmoChainLabelObjects2= [];
gdjs.SailingCode.GDAmmoChainLabelObjects3= [];
gdjs.SailingCode.GDAmmoChainLabelObjects4= [];
gdjs.SailingCode.GDAmmoChainLabelObjects5= [];
gdjs.SailingCode.GDCombatFleeButtonObjects1= [];
gdjs.SailingCode.GDCombatFleeButtonObjects2= [];
gdjs.SailingCode.GDCombatFleeButtonObjects3= [];
gdjs.SailingCode.GDCombatFleeButtonObjects4= [];
gdjs.SailingCode.GDCombatFleeButtonObjects5= [];
gdjs.SailingCode.GDCombatFleeLabelObjects1= [];
gdjs.SailingCode.GDCombatFleeLabelObjects2= [];
gdjs.SailingCode.GDCombatFleeLabelObjects3= [];
gdjs.SailingCode.GDCombatFleeLabelObjects4= [];
gdjs.SailingCode.GDCombatFleeLabelObjects5= [];
gdjs.SailingCode.GDSurrenderButtonObjects1= [];
gdjs.SailingCode.GDSurrenderButtonObjects2= [];
gdjs.SailingCode.GDSurrenderButtonObjects3= [];
gdjs.SailingCode.GDSurrenderButtonObjects4= [];
gdjs.SailingCode.GDSurrenderButtonObjects5= [];
gdjs.SailingCode.GDSurrenderLabelObjects1= [];
gdjs.SailingCode.GDSurrenderLabelObjects2= [];
gdjs.SailingCode.GDSurrenderLabelObjects3= [];
gdjs.SailingCode.GDSurrenderLabelObjects4= [];
gdjs.SailingCode.GDSurrenderLabelObjects5= [];
gdjs.SailingCode.GDWater3DObjects1= [];
gdjs.SailingCode.GDWater3DObjects2= [];
gdjs.SailingCode.GDWater3DObjects3= [];
gdjs.SailingCode.GDWater3DObjects4= [];
gdjs.SailingCode.GDWater3DObjects5= [];
gdjs.SailingCode.GDFoam3DObjects1= [];
gdjs.SailingCode.GDFoam3DObjects2= [];
gdjs.SailingCode.GDFoam3DObjects3= [];
gdjs.SailingCode.GDFoam3DObjects4= [];
gdjs.SailingCode.GDFoam3DObjects5= [];
gdjs.SailingCode.GDEnemyShip3DObjects1= [];
gdjs.SailingCode.GDEnemyShip3DObjects2= [];
gdjs.SailingCode.GDEnemyShip3DObjects3= [];
gdjs.SailingCode.GDEnemyShip3DObjects4= [];
gdjs.SailingCode.GDEnemyShip3DObjects5= [];


gdjs.SailingCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CannonDamage").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("CannonDamage").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTime").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("ReloadTime").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Accuracy").setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getChild("Sloop").getChild("Accuracy").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Sails").setNumber(100);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").setString("Round");
}
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
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("CannonDamage").setNumber(Math.round(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("CannonDamage").getAsNumber() * (1 + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("TierDamageScale").getAsNumber() * (runtimeScene.getScene().getVariables().getFromIndex(22).getAsNumber() - 1))));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadTime").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("ReloadTime").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Accuracy").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("Accuracy").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("SurrenderChance").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("SurrenderChance").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("GrapeChance").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("GrapeChance").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ChainChance").setNumber(runtimeScene.getScene().getVariables().getFromIndex(43).getChild("ChainChance").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Sails").setNumber(100);
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
{runtimeScene.getScene().getVariables().getFromIndex(18).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() * (1 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipXFrac").getAsNumber() + 0.04));
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(68).setNumber((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber() / Math.tan(gdjs.toRad(Math.max(5, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamFov").getAsNumber() / 2)))) - runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.75);
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(69).setNumber((runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.15 - runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber()) / runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DriftSpeed").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(29).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() / Math.max(0.1, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(44).getChild("CannonDamage").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Accuracy").getAsNumber() / runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadTime").getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(30).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() / Math.max(0.1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CannonDamage").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Accuracy").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTime").getAsNumber()));
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
{runtimeScene.getScene().getVariables().getFromIndex(19).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() * (1 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipXFrac").getAsNumber() + 0.04));
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
{runtimeScene.getScene().getVariables().getFromIndex(20).setNumber(Math.min(1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() / Math.max(0.1, runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber())));
}
{runtimeScene.getScene().getVariables().getFromIndex(21).setNumber(runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(16).setNumber(gdjs.evtTools.common.lerp(runtimeScene.getScene().getVariables().getFromIndex(18).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(19).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(21).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(17).setNumber(gdjs.evtTools.common.lerp(runtimeScene.getScene().getVariables().getFromIndex(68).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.15, runtimeScene.getScene().getVariables().getFromIndex(20).getAsNumber()));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "ENCOUNTER_APPROACH");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(69).getAsNumber());
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
{runtimeScene.getScene().getVariables().getFromIndex(17).add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DriftSpeed").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
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
{runtimeScene.getScene().getVariables().getFromIndex(17).add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DriftSpeed").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
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
{runtimeScene.getScene().getVariables().getFromIndex(17).add(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("DriftSpeed").getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
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
    gdjs.SailingCode.GDEnemyShipObjects2[i].setPosition((gdjs.SailingCode.GDEnemyShipObjects2[i].getPointX("")) + 10 * runtimeScene.getScene().getVariables().getFromIndex(56).getAsNumber(),(gdjs.SailingCode.GDEnemyShipObjects2[i].getPointY("")));
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
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").getAsString() == "leave");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 + runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.6);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 + runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.6);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
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
{runtimeScene.getScene().getVariables().getFromIndex(26).setNumber(gdjs.evtTools.common.clamp(0.5 + (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Speed").getAsNumber() * (0.5 + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Sails").getAsNumber() / 200) - runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Speed").getAsNumber() * (0.5 + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Sails").getAsNumber() / 200)) * 0.06, 0.15, 0.9));
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(46).getAsNumber() == 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(46).setNumber(1);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").setNumber(0.9);
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTotal").setNumber(0.9);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").setNumber(1.3 + gdjs.randomFloat(0.7));
}
{runtimeScene.getScene().getVariables().getFromIndex(47).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(52).setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "COMBAT");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(46).setNumber(0);
}
}

}


};gdjs.SailingCode.eventsList21 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Round");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("HullMult").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Grape");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("HullMult").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Chain");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("HullMult").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Round");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Grape");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Chain");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("SailDmg").getAsNumber());
}
}

}


};gdjs.SailingCode.eventsList22 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("You escaped!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.2);
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
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("They cut you off!");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(2.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(47).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("FleeCooldown").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").setNumber(Math.min(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").getAsNumber(), 0.3));
}
}

}


};gdjs.SailingCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "AMMO_ROUND");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").setString("Round");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Loading round shot");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "AMMO_GRAPE");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").setString("Grape");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Loading grape shot");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "AMMO_CHAIN");
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").setString("Chain");
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Loading chain shot");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(1.2);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "COMBAT_FLEE");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber() <= 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(gdjs.randomFloat(1));
}

{ //Subevents
gdjs.SailingCode.eventsList22(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(41).getAsString() == "SURRENDER");
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(Math.floor(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SurrenderGoldLoss").getAsNumber()));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("leave");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("You strike your colours");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " takes " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold" + gdjs.evtTools.string.newLine() + "and lets you sail away.");
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
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber() > 0);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(47).sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


};gdjs.SailingCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").sub(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(55).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(55).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(56).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(56).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(66).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(66).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
{runtimeScene.getScene().getVariables().getFromIndex(67).setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() - gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 3));
}
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCannonBallObjects3Objects = Hashtable.newFrom({"CannonBall": gdjs.SailingCode.GDCannonBallObjects3});
gdjs.SailingCode.eventsList25 = function(runtimeScene) {

};gdjs.SailingCode.eventsList26 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getScene().getVariables().getFromIndex(48).getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.SailingCode.GDCannonBallObjects3.length = 0;


runtimeScene.getScene().getVariables().getFromIndex(49).setNumber(repeatIndex3);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCannonBallObjects3Objects, -(1000), -(1000), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setZOrder(35);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setAnimationName(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(0)).setNumber(1);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(16)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(13)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Starboard").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("StarboardN").getAsNumber())).getChild("X").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(14)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Starboard").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("StarboardN").getAsNumber())).getChild("Y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(15)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Starboard").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("StarboardN").getAsNumber())).getChild("Z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1)).setNumber(Math.floor(gdjs.randomFloat(1) + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Accuracy").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * Math.round(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("CannonDamage").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoHullMult").getAsNumber() * gdjs.randomFloatInRange(0.8, 1.2)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(3)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * Math.floor(gdjs.randomFloat(1) + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoCrewKill").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(4)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(5).getChild("AmmoSailDmg").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17)).setNumber((1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * Math.floor(gdjs.randomFloat(1) * 2));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(7)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber() - 1 * ((1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 2.3 + (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * gdjs.randomInRange(30, 170)) + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * gdjs.randomInRange(-(40), 40));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(8)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber() + (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * gdjs.randomFloatInRange(-(0.3), 0.3) * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * (2 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * (2 * Math.floor(gdjs.randomFloat(1) * 2) - 1) * (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.55 + gdjs.randomInRange(20, 120)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(12)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * gdjs.randomFloatInRange(0.9, 2.4)) - (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * 6);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(18)).setNumber(40 + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * 90);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(9)).setNumber(-(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolleyStagger").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(10)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShotFlightTime").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setOpacity(0);
}
}
}
}

}


};gdjs.SailingCode.eventsList27 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(48).setNumber(Math.min(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber()));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(48).getAsNumber()));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTotal").setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTime").getAsNumber() / gdjs.evtTools.common.clamp(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber() / Math.max(1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannons").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CrewPerCannon").getAsNumber()), 0.4, 1));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTotal").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(55).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}

{ //Subevents
gdjs.SailingCode.eventsList26(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(52).getAsNumber() == 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(52).setNumber(1);
}
{runtimeScene.getScene().getVariables().getFromIndex(42).setString("Out of cannonballs! Flee or surrender.");
}
{runtimeScene.getScene().getVariables().getFromIndex(34).setNumber(3);
}
{runtimeScene.getScene().getVariables().getFromIndex(35).setNumber(1);
}
}

}


};gdjs.SailingCode.eventsList28 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(57).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(44).getChild("SurrenderChance").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").setNumber(1);
}
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCannonBallObjects3Objects = Hashtable.newFrom({"CannonBall": gdjs.SailingCode.GDCannonBallObjects3});
gdjs.SailingCode.eventsList29 = function(runtimeScene) {

};gdjs.SailingCode.eventsList30 = function(runtimeScene) {

{


const repeatCount3 = runtimeScene.getScene().getVariables().getFromIndex(48).getAsNumber();
for (let repeatIndex3 = 0;repeatIndex3 < repeatCount3;++repeatIndex3) {
gdjs.SailingCode.GDCannonBallObjects3.length = 0;


runtimeScene.getScene().getVariables().getFromIndex(49).setNumber(repeatIndex3);
let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCannonBallObjects3Objects, -(1000), -(1000), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setZOrder(35);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setAnimationName(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(0)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(16)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(13)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Port").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("PortN").getAsNumber())).getChild("X").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(14)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Port").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("PortN").getAsNumber())).getChild("Y").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(15)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Port").getChild(gdjs.evtTools.common.mod(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("PortN").getAsNumber())).getChild("Z").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1)).setNumber(Math.floor(gdjs.randomFloat(1) + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Accuracy").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(2)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * Math.round(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("CannonDamage").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").getAsNumber() * gdjs.randomFloatInRange(0.8, 1.2)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(3)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * Math.floor(gdjs.randomFloat(1) + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(4)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17)).setNumber((1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * Math.floor(gdjs.randomFloat(1) * 2));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(7)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - -(1) * ((1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 2.3 + (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * gdjs.randomInRange(30, 170)) + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * gdjs.randomInRange(-(40), 40));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(8)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber()) * gdjs.randomFloatInRange(-(0.3), 0.3) * runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * (2 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * (2 * Math.floor(gdjs.randomFloat(1) * 2) - 1) * (runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() * 0.55 + gdjs.randomInRange(20, 120)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(12)).setNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber() * (runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * gdjs.randomFloatInRange(0.9, 2.4)) - (1 - gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(1).getAsNumber()) * 6);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(18)).setNumber(40 + gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(17).getAsNumber() * 90);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(9)).setNumber(-(runtimeScene.getScene().getVariables().getFromIndex(49).getAsNumber()) * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("VolleyStagger").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(10)).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShotFlightTime").getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects3.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects3[i].setOpacity(0);
}
}
}
}

}


};gdjs.SailingCode.eventsList31 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(44).getChild("GrapeChance").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").setString("Grape");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() >= runtimeScene.getScene().getVariables().getFromIndex(44).getChild("GrapeChance").getAsNumber());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(27).getAsNumber() < runtimeScene.getScene().getVariables().getFromIndex(44).getChild("GrapeChance").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ChainChance").getAsNumber());
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").setString("Chain");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Round");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Round").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Grape");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Grape").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").getAsString() == "Chain");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoHullMult").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("HullMult").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoCrewKill").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("CrewKill").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("AmmoSailDmg").setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getChild("Chain").getChild("SailDmg").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() <= runtimeScene.getScene().getVariables().getFromIndex(44).getChild("MaxHull").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("SurrenderHullFrac").getAsNumber());
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(57).setNumber(gdjs.randomFloat(1));
}

{ //Subevents
gdjs.SailingCode.eventsList28(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").getAsNumber() == 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() > 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(48).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(56).setNumber(1);
}

{ //Subevents
gdjs.SailingCode.eventsList30(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList32 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(27).setNumber(gdjs.randomFloat(1));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Ammo").setString("Round");
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadTotal").setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadTime").getAsNumber() / gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() / Math.max(1, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Cannons").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CrewPerCannon").getAsNumber()), 0.4, 1));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadLeft").setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("ReloadTotal").getAsNumber());
}

{ //Subevents
gdjs.SailingCode.eventsList31(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").setNumber(1);
}
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects = Hashtable.newFrom({"Fx": gdjs.SailingCode.GDFxObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects = Hashtable.newFrom({"Fx": gdjs.SailingCode.GDFxObjects4});
gdjs.SailingCode.eventsList33 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects4);
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(gdjs.toRad((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getBehavior("Object3D").getRotationX())));
}
{runtimeScene.getScene().getVariables().getFromIndex(73).setNumber(gdjs.toRad((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getBehavior("Object3D").getRotationY())));
}
{runtimeScene.getScene().getVariables().getFromIndex(74).setNumber(gdjs.toRad((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getAngle())));
}
{runtimeScene.getScene().getVariables().getFromIndex(75).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(15).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(63).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(76).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(14).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(75).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(77).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(14).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(75).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(78).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(13).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(77).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(79).setNumber(-(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(13).getAsNumber()) * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(77).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(50).setNumber((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getX()) + runtimeScene.getScene().getVariables().getFromIndex(78).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(51).setNumber((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getY()) + runtimeScene.getScene().getVariables().getFromIndex(78).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(65).setNumber((( gdjs.SailingCode.GDPlayerShipObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerShipObjects4[0].getBehavior("Object3D").getZ()) + runtimeScene.getScene().getVariables().getFromIndex(63).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(79).getAsNumber());
}
}

}


{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.copyArray(runtimeScene.getObjects("EnemyShip3D"), gdjs.SailingCode.GDEnemyShip3DObjects4);
{runtimeScene.getScene().getVariables().getFromIndex(72).setNumber(gdjs.toRad((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getBehavior("Object3D").getRotationX())));
}
{runtimeScene.getScene().getVariables().getFromIndex(73).setNumber(gdjs.toRad((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getBehavior("Object3D").getRotationY())));
}
{runtimeScene.getScene().getVariables().getFromIndex(74).setNumber(gdjs.toRad((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getAngle())));
}
{runtimeScene.getScene().getVariables().getFromIndex(75).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(15).getAsNumber() - runtimeScene.getScene().getVariables().getFromIndex(63).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(76).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(14).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(75).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(77).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(14).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(75).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(72).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(78).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(13).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(77).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(79).setNumber(-(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(13).getAsNumber()) * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(77).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(73).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(50).setNumber((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getX()) + runtimeScene.getScene().getVariables().getFromIndex(78).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(51).setNumber((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getY()) + runtimeScene.getScene().getVariables().getFromIndex(78).getAsNumber() * Math.sin(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()) + runtimeScene.getScene().getVariables().getFromIndex(76).getAsNumber() * Math.cos(runtimeScene.getScene().getVariables().getFromIndex(74).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(65).setNumber((( gdjs.SailingCode.GDEnemyShip3DObjects4.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShip3DObjects4[0].getBehavior("Object3D").getZ()) + runtimeScene.getScene().getVariables().getFromIndex(63).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(79).getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);

gdjs.SailingCode.GDFxObjects4.length = 0;

{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects4[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects4[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(6)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(51).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects4[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(11)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(65).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects4[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(16)).setNumber(1);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(51).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setAnimationName("Flash");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(4)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(51).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(8)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(65).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(1)).setNumber(0.16);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(0)).setNumber(-((0)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(3)).setNumber(0.6);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(2)).setNumber(2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(7)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(9)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setOpacity(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects, runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber(), runtimeScene.getScene().getVariables().getFromIndex(51).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setAnimationName("Smoke");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(4)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(50).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(5)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(51).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(8)).setNumber(runtimeScene.getScene().getVariables().getFromIndex(65).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(1)).setNumber(1.2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(0)).setNumber(-((0)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(3)).setNumber(0.5);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(2)).setNumber(0.9);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(6)).setNumber((2 * ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(0).getAsNumber() - 1) * 16);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(7)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(9)).setNumber(22);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setOpacity(0);
}
}
}

}


};gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects = Hashtable.newFrom({"Fx": gdjs.SailingCode.GDFxObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects = Hashtable.newFrom({"DamageText": gdjs.SailingCode.GDDamageTextObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects = Hashtable.newFrom({"Fx": gdjs.SailingCode.GDFxObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects = Hashtable.newFrom({"DamageText": gdjs.SailingCode.GDDamageTextObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects = Hashtable.newFrom({"DamageText": gdjs.SailingCode.GDDamageTextObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects = Hashtable.newFrom({"DamageText": gdjs.SailingCode.GDDamageTextObjects4});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects = Hashtable.newFrom({"Fx": gdjs.SailingCode.GDFxObjects4});
gdjs.SailingCode.eventsList34 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.SailingCode.GDDamageTextObjects4.length = 0;

gdjs.SailingCode.GDFxObjects4.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(2).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(3).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Sails").setNumber(Math.max(0, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Sails").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(4).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(67).setNumber(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber(), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(5)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(8)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(1)).setNumber(0.45);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(0)).setNumber(-((0)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(3)).setNumber(0.8);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(2)).setNumber(1.2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(7)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(9)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setOpacity(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setString("-" + gdjs.evtTools.common.toString(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(2).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setColor("255;255;255");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setZOrder(50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(2)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(3)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber() + 50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
}

}


{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.SailingCode.GDDamageTextObjects4.length = 0;

gdjs.SailingCode.GDFxObjects4.length = 0;

{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(2).getAsNumber()));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Crew").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(3).getAsNumber()));
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Sails").setNumber(Math.max(0, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Sails").getAsNumber() - ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(4).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(66).setNumber(1);
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber(), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setAnimationName("Hit");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(5)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(8)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(1)).setNumber(0.45);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(0)).setNumber(-((0)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(3)).setNumber(0.8);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(2)).setNumber(1.2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(7)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(9)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setOpacity(0);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setString("-" + gdjs.evtTools.common.toString(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(2).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setColor("255;110;90");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setZOrder(50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(2)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(3)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber() + 50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setOpacity(0);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(12).setNumber(1);
}
}

}


{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(3)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.SailingCode.GDDamageTextObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber() + 70, "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setString("-" + gdjs.evtTools.common.toString(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(3).getAsNumber()) + " crew");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setColor("255;170;80");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setZOrder(50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(2)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(3)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber() + 70);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber() - 30);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(1)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(4)) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.SailingCode.GDDamageTextObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDDamageTextObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber() - 70, "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setString("sails -" + gdjs.evtTools.common.toString(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(4).getAsNumber()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setColor("150;210;255");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setZOrder(50);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(2)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber() + gdjs.randomInRange(-(30), 30));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(3)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber() - 70);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(12).getAsNumber() + 120);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects4[i].setOpacity(0);
}
}
}

}


{

gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects4.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects4[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects4[i].getVariables().getFromIndex(1)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects4[k] = gdjs.SailingCode.GDCannonBallObjects4[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects4.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects4 */
gdjs.SailingCode.GDFxObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDFxObjects4Objects, ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber(), ((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber(), "FX");
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setZOrder(40);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setAnimationName("Splash");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(4)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(7).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(5)).setNumber(((gdjs.SailingCode.GDCannonBallObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SailingCode.GDCannonBallObjects4[0].getVariables()).getFromIndex(8).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(8)).setNumber(-(6));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(1)).setNumber(0.6);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(0)).setNumber(-((0)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(3)).setNumber(0.55);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(2)).setNumber(0.9);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(6)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(7)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].returnVariable(gdjs.SailingCode.GDFxObjects4[i].getVariables().getFromIndex(9)).setNumber(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects4[i].setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.SailingCode.GDCannonBallObjects3, gdjs.SailingCode.GDCannonBallObjects4);

{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects4.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects4[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.SailingCode.eventsList35 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.SailingCode.GDCannonBallObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects2[i].returnVariable(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.SailingCode.GDCannonBallObjects2);

for (gdjs.SailingCode.forEachIndex3 = 0;gdjs.SailingCode.forEachIndex3 < gdjs.SailingCode.GDCannonBallObjects2.length;++gdjs.SailingCode.forEachIndex3) {
gdjs.SailingCode.GDCannonBallObjects3.length = 0;


gdjs.SailingCode.forEachTemporary3 = gdjs.SailingCode.GDCannonBallObjects2[gdjs.SailingCode.forEachIndex3];
gdjs.SailingCode.GDCannonBallObjects3.push(gdjs.SailingCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects3.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects3[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(16)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects3[k] = gdjs.SailingCode.GDCannonBallObjects3[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects3.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects3[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(9)) >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects3[k] = gdjs.SailingCode.GDCannonBallObjects3[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.SailingCode.eventsList33(runtimeScene);} //Subevents end.
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.SailingCode.GDCannonBallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects2.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects2[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9)) >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects2[k] = gdjs.SailingCode.GDCannonBallObjects2[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects2.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects2[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(16)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects2[k] = gdjs.SailingCode.GDCannonBallObjects2[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects2.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDCannonBallObjects2 */
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects2[i].setOpacity(255);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects2[i].setScale(0.9 * (runtimeScene.getScene().getVariables().getFromIndex(64).getAsNumber() / Math.max(1, (-(((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(6).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(8).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber()))) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - (((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(11).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(12).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())) + gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(18).getAsNumber() * Math.sin(3.14159 * Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())))) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))))));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects2[i].setPosition((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + ((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(5).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(7).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber()))) - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(6).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(8).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber()))) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - (((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(11).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(12).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())) + gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(18).getAsNumber() * Math.sin(3.14159 * Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())))) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDCannonBallObjects2[i].getWidth()) / 2,(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - (-(((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(6).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(8).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber()))) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) + (((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(11).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(12).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())) + gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(18).getAsNumber() * Math.sin(3.14159 * Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())))) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(6).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(8).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber()))) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - (((gdjs.evtTools.common.lerp(gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(11).getAsNumber(), gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(12).getAsNumber(), Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())) + gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(18).getAsNumber() * Math.sin(3.14159 * Math.min(1, gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(9).getAsNumber() / gdjs.SailingCode.GDCannonBallObjects2[i].getVariables().getFromIndex(10).getAsNumber())))) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDCannonBallObjects2[i].getHeight()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.SailingCode.GDCannonBallObjects2);

for (gdjs.SailingCode.forEachIndex3 = 0;gdjs.SailingCode.forEachIndex3 < gdjs.SailingCode.GDCannonBallObjects2.length;++gdjs.SailingCode.forEachIndex3) {
gdjs.SailingCode.GDCannonBallObjects3.length = 0;


gdjs.SailingCode.forEachTemporary3 = gdjs.SailingCode.GDCannonBallObjects2[gdjs.SailingCode.forEachIndex3];
gdjs.SailingCode.GDCannonBallObjects3.push(gdjs.SailingCode.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDCannonBallObjects3.length;i<l;++i) {
    if ( gdjs.SailingCode.GDCannonBallObjects3[i].getVariableNumber(gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(9)) >= gdjs.SailingCode.GDCannonBallObjects3[i].getVariables().getFromIndex(10).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDCannonBallObjects3[k] = gdjs.SailingCode.GDCannonBallObjects3[i];
        ++k;
    }
}
gdjs.SailingCode.GDCannonBallObjects3.length = k;
}
if (isConditionTrue_0) {

{ //Subevents: 
gdjs.SailingCode.eventsList34(runtimeScene);} //Subevents end.
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "COMBAT");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CannonBall"), gdjs.SailingCode.GDCannonBallObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDCannonBallObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCannonBallObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.SailingCode.eventsList36 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DamageText"), gdjs.SailingCode.GDDamageTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("Fx"), gdjs.SailingCode.GDFxObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].returnVariable(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects2[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(0)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fx"), gdjs.SailingCode.GDFxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDFxObjects2.length;i<l;++i) {
    if ( gdjs.SailingCode.GDFxObjects2[i].getVariableNumber(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(0)) >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDFxObjects2[k] = gdjs.SailingCode.GDFxObjects2[i];
        ++k;
    }
}
gdjs.SailingCode.GDFxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDFxObjects2 */
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].returnVariable(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(4)).add(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(6).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].returnVariable(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(5)).add(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(7).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].returnVariable(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(8)).add(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(9).getAsNumber() * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].setScale((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(3).getAsNumber() + gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(2).getAsNumber() * gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(0).getAsNumber()) * (runtimeScene.getScene().getVariables().getFromIndex(64).getAsNumber() / Math.max(1, (-(((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(5).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(8).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))))));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].setOpacity(255 * gdjs.evtTools.common.clamp(1 - gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(0).getAsNumber() / gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(1).getAsNumber(), 0, 1));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].setPosition((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + ((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(4).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(5).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(8).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDFxObjects2[i].getWidth()) / 2,(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - (-(((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(5).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) + ((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(8).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(5).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(8).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDFxObjects2[i].getHeight()) / 2);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Fx"), gdjs.SailingCode.GDFxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDFxObjects2.length;i<l;++i) {
    if ( gdjs.SailingCode.GDFxObjects2[i].getVariableNumber(gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(0)) >= gdjs.SailingCode.GDFxObjects2[i].getVariables().getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDFxObjects2[k] = gdjs.SailingCode.GDFxObjects2[i];
        ++k;
    }
}
gdjs.SailingCode.GDFxObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDFxObjects2 */
{for(var i = 0, len = gdjs.SailingCode.GDFxObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDFxObjects2[i].deleteFromScene(runtimeScene);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("DamageText"), gdjs.SailingCode.GDDamageTextObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects2[i].returnVariable(gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(4)).add(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 60);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects2[i].setPosition((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + ((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(2).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(3).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(4).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDDamageTextObjects2[i].getWidth()) / 2,(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - (-(((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(3).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) + ((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(4).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(3).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(4).getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))) - (gdjs.SailingCode.GDDamageTextObjects2[i].getHeight()) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects2[i].setOpacity(255 * gdjs.evtTools.common.clamp(2 * (1 - gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(0).getAsNumber() / gdjs.SailingCode.GDDamageTextObjects2[i].getVariables().getFromIndex(1).getAsNumber()), 0, 1));
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("DamageText"), gdjs.SailingCode.GDDamageTextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SailingCode.GDDamageTextObjects1.length;i<l;++i) {
    if ( gdjs.SailingCode.GDDamageTextObjects1[i].getVariableNumber(gdjs.SailingCode.GDDamageTextObjects1[i].getVariables().getFromIndex(0)) >= gdjs.SailingCode.GDDamageTextObjects1[i].getVariables().getFromIndex(1).getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.SailingCode.GDDamageTextObjects1[k] = gdjs.SailingCode.GDDamageTextObjects1[i];
        ++k;
    }
}
gdjs.SailingCode.GDDamageTextObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SailingCode.GDDamageTextObjects1 */
{for(var i = 0, len = gdjs.SailingCode.GDDamageTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDDamageTextObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.SailingCode.eventsList37 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() <= 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() > 0);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Gold").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").add(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("sunk");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("Victory!");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("You sank the " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + "." + gdjs.evtTools.string.newLine() + "+" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() > 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Hull").getAsNumber() > 0);
}
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Surrenders").setNumber(0);
}
{runtimeScene.getScene().getVariables().getFromIndex(33).setNumber(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Gold").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Gold").add(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Departing").setString("leave");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Title").setString("They surrender!");
}
{runtimeScene.getScene().getVariables().getFromIndex(45).getChild("Body").setString("The " + runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + " strikes her colours" + gdjs.evtTools.string.newLine() + "and hands over " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(33).getAsNumber()) + " gold.");
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


};gdjs.SailingCode.eventsList38 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("");
}
}

}


};gdjs.SailingCode.eventsList39 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("CargoText"), gdjs.SailingCode.GDCargoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeButton"), gdjs.SailingCode.GDCombatFleeButtonObjects1);
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
gdjs.copyArray(runtimeScene.getObjects("ResultPanel"), gdjs.SailingCode.GDResultPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnButton"), gdjs.SailingCode.GDReturnButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ReturnLabel"), gdjs.SailingCode.GDReturnLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("ShotText"), gdjs.SailingCode.GDShotTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("StateText"), gdjs.SailingCode.GDStateTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SurrenderButton"), gdjs.SailingCode.GDSurrenderButtonObjects1);
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
{runtimeScene.getScene().getVariables().getFromIndex(7).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipLength").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(0).getChild("RefWidth").getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipXFrac").getAsNumber());
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.SailingCode.GDOceanFoamObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDOceanFoamObjects1[i].hide();
}
}
{/* Unknown instruction - skipped. */}
{gdjs.scene3d.camera.setCameraZ(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber(), "", 0);
}
{gdjs.scene3d.camera.setCameraRotationX(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber(), "", 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(60).setNumber(Math.atan((2 * runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipScreenFrac").getAsNumber() - 1) * Math.tan(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamFov").getAsNumber() / 2))));
}
{runtimeScene.getScene().getVariables().getFromIndex(59).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber() * Math.tan(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(60).getAsNumber()));
}
{runtimeScene.getScene().getVariables().getFromIndex(6).setNumber(runtimeScene.getScene().getVariables().getFromIndex(59).getAsNumber());
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
{for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 0 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 1 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects1[i].setSize(216, 96);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16 + 2 * 236,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeButtonObjects1[i].setSize(334, 84);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 16,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() - 104);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDSurrenderButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderButtonObjects1[i].setSize(334, 84);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDSurrenderButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderButtonObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() + 370,runtimeScene.getScene().getVariables().getFromIndex(15).getAsNumber() - 104);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeButtonObjects1[i].setColor("70;120;190");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDSurrenderButtonObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderButtonObjects1[i].setColor("120;120;130");
}
}
}

}


};gdjs.SailingCode.eventsList40 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Foam3D"), gdjs.SailingCode.GDFoam3DObjects1);
gdjs.copyArray(runtimeScene.getObjects("Water3D"), gdjs.SailingCode.GDWater3DObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDWater3DObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDWater3DObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WaterSize").getAsNumber() / 2,runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WaterSize").getAsNumber() + 600 + runtimeScene.getScene().getVariables().getFromIndex(10).getAsNumber());
}
}
{for(var i = 0, len = gdjs.SailingCode.GDFoam3DObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDFoam3DObjects1[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WaterSize").getAsNumber() / 2,runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("WaterSize").getAsNumber() + 600 + runtimeScene.getScene().getVariables().getFromIndex(11).getAsNumber());
}
}
}

}


};gdjs.SailingCode.eventsList41 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip"), gdjs.SailingCode.GDEnemyShipObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyShip3D"), gdjs.SailingCode.GDEnemyShip3DObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].setPosition((( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getCenterXInScene()),(( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].setAngle((( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getAngle()));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].getBehavior("Object3D").setRotationY(3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.4 + 1) - 4 * runtimeScene.getScene().getVariables().getFromIndex(56).getAsNumber() + 2 * runtimeScene.getScene().getVariables().getFromIndex(67).getAsNumber() * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 47) - (255 - (( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getOpacity())) * 0.12);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].getBehavior("Object3D").setRotationX(-((255 - (( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getOpacity()))) * 0.09);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects2[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + 3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.2 + 2) - (255 - (( gdjs.SailingCode.GDEnemyShipObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyShipObjects2[0].getOpacity())) * 1.2);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Active").getAsNumber() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EnemyShip3D"), gdjs.SailingCode.GDEnemyShip3DObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyShip3DObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyShip3DObjects1[i].hide();
}
}
}

}


};gdjs.SailingCode.eventsList42 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].setAngle(1.2 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 0.9));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].getBehavior("Object3D").setRotationY(3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.6) + 4 * runtimeScene.getScene().getVariables().getFromIndex(55).getAsNumber() + 2 * runtimeScene.getScene().getVariables().getFromIndex(66).getAsNumber() * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 45));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + 3 * Math.sin(gdjs.evtTools.runtimeScene.getTimeFromStartInSeconds(runtimeScene) * 1.1));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].getBehavior("Object3D").setRotationX(0);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects2[i].setPosition(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() - 8 * runtimeScene.getScene().getVariables().getFromIndex(55).getAsNumber(),runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber());
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
gdjs.copyArray(runtimeScene.getObjects("PlayerShip"), gdjs.SailingCode.GDPlayerShipObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].getBehavior("Object3D").setZ(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() - Math.min(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 9, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() * runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 3));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].getBehavior("Object3D").setRotationX(-(Math.min(22, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() * 9)));
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerShipObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerShipObjects1[i].getBehavior("Object3D").setRotationY(gdjs.SailingCode.GDPlayerShipObjects1[i].getBehavior("Object3D").getRotationY() + (Math.min(25, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("StateTime").getAsNumber() * 10)));
}
}
}

}


};gdjs.SailingCode.eventsList43 = function(runtimeScene) {

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


};gdjs.SailingCode.eventsList44 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber() > 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.SailingCode.GDCombatFleeLabelObjects1, gdjs.SailingCode.GDCombatFleeLabelObjects2);

{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeLabelObjects2[i].setString("Flee (" + gdjs.evtTools.common.toString(Math.ceil(runtimeScene.getScene().getVariables().getFromIndex(47).getAsNumber())) + "s)");
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("CombatFleeButton"), gdjs.SailingCode.GDCombatFleeButtonObjects1);
/* Reuse gdjs.SailingCode.GDCombatFleeLabelObjects1 */
{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeLabelObjects1[i].setPosition((( gdjs.SailingCode.GDCombatFleeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDCombatFleeButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDCombatFleeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDCombatFleeButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDCombatFleeLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDCombatFleeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDCombatFleeButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDCombatFleeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDCombatFleeButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDCombatFleeLabelObjects1[i].getHeight())) / 2);
}
}
}

}


};gdjs.SailingCode.eventsList45 = function(runtimeScene) {

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
gdjs.SailingCode.eventsList43(runtimeScene);} //End of subevents
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
    gdjs.SailingCode.GDContinueLabelObjects2[i].setString("Return to Port");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoChainLabel"), gdjs.SailingCode.GDAmmoChainLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeLabel"), gdjs.SailingCode.GDAmmoGrapeLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundLabel"), gdjs.SailingCode.GDAmmoRoundLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeLabel"), gdjs.SailingCode.GDCombatFleeLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("EnemyTagText"), gdjs.SailingCode.GDEnemyTagTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerTagText"), gdjs.SailingCode.GDPlayerTagTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("SurrenderButton"), gdjs.SailingCode.GDSurrenderButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("SurrenderLabel"), gdjs.SailingCode.GDSurrenderLabelObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyTagTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTagTextObjects1[i].setString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Name").getAsString() + gdjs.evtTools.string.newLine() + "Crew " + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Crew").getAsNumber()) + "   Sails " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Sails").getAsNumber())) + "%");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerTagTextObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerTagTextObjects1[i].setString("Sails " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Sails").getAsNumber())) + "%   " + runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() + " shot");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDCombatFleeLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeLabelObjects1[i].setString("Flee " + gdjs.evtTools.common.toString(Math.round(runtimeScene.getScene().getVariables().getFromIndex(26).getAsNumber() * 100)) + "%");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundLabelObjects1[i].setPosition((( gdjs.SailingCode.GDAmmoRoundButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoRoundButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDAmmoRoundButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoRoundButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDAmmoRoundLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDAmmoRoundButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoRoundButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDAmmoRoundButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoRoundButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDAmmoRoundLabelObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeLabelObjects1[i].setPosition((( gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoGrapeButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoGrapeButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDAmmoGrapeLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoGrapeButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoGrapeButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDAmmoGrapeLabelObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoChainLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainLabelObjects1[i].setPosition((( gdjs.SailingCode.GDAmmoChainButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoChainButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDAmmoChainButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoChainButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDAmmoChainLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDAmmoChainButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoChainButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDAmmoChainButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDAmmoChainButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDAmmoChainLabelObjects1[i].getHeight())) / 2);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDSurrenderLabelObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderLabelObjects1[i].setPosition((( gdjs.SailingCode.GDSurrenderButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDSurrenderButtonObjects1[0].getPointX("")) + ((( gdjs.SailingCode.GDSurrenderButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDSurrenderButtonObjects1[0].getWidth()) - (gdjs.SailingCode.GDSurrenderLabelObjects1[i].getWidth())) / 2,(( gdjs.SailingCode.GDSurrenderButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDSurrenderButtonObjects1[0].getPointY("")) + ((( gdjs.SailingCode.GDSurrenderButtonObjects1.length === 0 ) ? 0 :gdjs.SailingCode.GDSurrenderButtonObjects1[0].getHeight()) - (gdjs.SailingCode.GDSurrenderLabelObjects1[i].getHeight())) / 2);
}
}

{ //Subevents
gdjs.SailingCode.eventsList44(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList46 = function(runtimeScene) {

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
gdjs.SailingCode.eventsList45(runtimeScene);} //End of subevents
}

}


};gdjs.SailingCode.eventsList47 = function(runtimeScene) {

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


};gdjs.SailingCode.eventsList48 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoChainLabel"), gdjs.SailingCode.GDAmmoChainLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeLabel"), gdjs.SailingCode.GDAmmoGrapeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundLabel"), gdjs.SailingCode.GDAmmoRoundLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeButton"), gdjs.SailingCode.GDCombatFleeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeLabel"), gdjs.SailingCode.GDCombatFleeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullBg"), gdjs.SailingCode.GDEnemyHullBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullFill"), gdjs.SailingCode.GDEnemyHullFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTagText"), gdjs.SailingCode.GDEnemyTagTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadBg"), gdjs.SailingCode.GDPlayerReloadBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadFill"), gdjs.SailingCode.GDPlayerReloadFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerTagText"), gdjs.SailingCode.GDPlayerTagTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SurrenderButton"), gdjs.SailingCode.GDSurrenderButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SurrenderLabel"), gdjs.SailingCode.GDSurrenderLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullBgObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyHullFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullFillObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTagTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadBgObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerTagTextObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoChainLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDCombatFleeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDCombatFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeLabelObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDSurrenderButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderButtonObjects2[i].hide(false);
}
for(var i = 0, len = gdjs.SailingCode.GDSurrenderLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderLabelObjects2[i].hide(false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() != "COMBAT");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoChainLabel"), gdjs.SailingCode.GDAmmoChainLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeLabel"), gdjs.SailingCode.GDAmmoGrapeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundLabel"), gdjs.SailingCode.GDAmmoRoundLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeButton"), gdjs.SailingCode.GDCombatFleeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("CombatFleeLabel"), gdjs.SailingCode.GDCombatFleeLabelObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullBg"), gdjs.SailingCode.GDEnemyHullBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullFill"), gdjs.SailingCode.GDEnemyHullFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTagText"), gdjs.SailingCode.GDEnemyTagTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadBg"), gdjs.SailingCode.GDPlayerReloadBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadFill"), gdjs.SailingCode.GDPlayerReloadFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerTagText"), gdjs.SailingCode.GDPlayerTagTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SurrenderButton"), gdjs.SailingCode.GDSurrenderButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SurrenderLabel"), gdjs.SailingCode.GDSurrenderLabelObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullBgObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyHullFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullFillObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDEnemyTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTagTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadBgObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDPlayerTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerTagTextObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDAmmoChainLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDCombatFleeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDCombatFleeLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDCombatFleeLabelObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDSurrenderButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.SailingCode.GDSurrenderLabelObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDSurrenderLabelObjects2[i].hide();
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
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullBg"), gdjs.SailingCode.GDEnemyHullBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyHullFill"), gdjs.SailingCode.GDEnemyHullFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("EnemyTagText"), gdjs.SailingCode.GDEnemyTagTextObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadBg"), gdjs.SailingCode.GDPlayerReloadBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadFill"), gdjs.SailingCode.GDPlayerReloadFillObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerTagText"), gdjs.SailingCode.GDPlayerTagTextObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + ((runtimeScene.getScene().getVariables().getFromIndex(16).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 8.6) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))));
}
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - (-(((runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) + ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 8.6) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((runtimeScene.getScene().getVariables().getFromIndex(17).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 8.6) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))));
}
{runtimeScene.getScene().getVariables().getFromIndex(58).setNumber(170);
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullBgObjects2[i].setSize(runtimeScene.getScene().getVariables().getFromIndex(58).getAsNumber(), 14);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullBgObjects2[i].setPosition(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() - (runtimeScene.getScene().getVariables().getFromIndex(58).getAsNumber()) / 2, 8, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (runtimeScene.getScene().getVariables().getFromIndex(58).getAsNumber()) - 8),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() - 20);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullFillObjects2[i].setSize(Math.max(1, runtimeScene.getScene().getVariables().getFromIndex(58).getAsNumber() * gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(44).getChild("Hull").getAsNumber() / Math.max(1, runtimeScene.getScene().getVariables().getFromIndex(44).getChild("MaxHull").getAsNumber()), 0, 1)), 14);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullFillObjects2[i].setPosition((( gdjs.SailingCode.GDEnemyHullBgObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDEnemyHullBgObjects2[0].getPointX("")),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() - 20);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyHullFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyHullFillObjects2[i].setColor("220;80;60");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDEnemyTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDEnemyTagTextObjects2[i].setPosition(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() - ((gdjs.SailingCode.GDEnemyTagTextObjects2[i].getWidth())) / 2, 8, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - ((gdjs.SailingCode.GDEnemyTagTextObjects2[i].getWidth())) - 8),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() - 26 - (gdjs.SailingCode.GDEnemyTagTextObjects2[i].getHeight()));
}
}
{runtimeScene.getScene().getVariables().getFromIndex(70).setNumber((runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2 + ((runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() / 2) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() / 2) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))));
}
{runtimeScene.getScene().getVariables().getFromIndex(71).setNumber((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2 - (-(((runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() / 2) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) + ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))) * runtimeScene.getScene().getVariables().getFromIndex(61).getAsNumber() / (-(((runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(7).getAsNumber() / 2) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber()) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())))));
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadBgObjects2[i].setSize(120, 10);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadBgObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadBgObjects2[i].setPosition(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() - (120) / 2, 8, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - (120) - 8),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() + 10);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects2[i].setSize(Math.max(1, 120 * gdjs.evtTools.common.clamp(1 - runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadLeft").getAsNumber() / Math.max(0.1, runtimeScene.getGame().getVariables().getFromIndex(5).getChild("ReloadTotal").getAsNumber()), 0, 1)), 10);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects2[i].setPosition((( gdjs.SailingCode.GDPlayerReloadBgObjects2.length === 0 ) ? 0 :gdjs.SailingCode.GDPlayerReloadBgObjects2[0].getPointX("")),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() + 10);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects2[i].setColor("240;200;90");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDPlayerTagTextObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerTagTextObjects2[i].setPosition(gdjs.evtTools.common.clamp(runtimeScene.getScene().getVariables().getFromIndex(70).getAsNumber() - ((gdjs.SailingCode.GDPlayerTagTextObjects2[i].getWidth())) / 2, 8, runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - ((gdjs.SailingCode.GDPlayerTagTextObjects2[i].getWidth())) - 8),runtimeScene.getScene().getVariables().getFromIndex(71).getAsNumber() + 26);
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects2[i].setColor("85;85;95");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects2[i].setColor("85;85;95");
}
}
{for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects2[i].setColor("85;85;95");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Round");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDAmmoRoundButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoRoundButtonObjects2[i].setColor("215;160;50");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Grape");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoGrapeButtonObjects2[i].setColor("215;160;50");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Ammo").getAsString() == "Chain");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects2);
{for(var i = 0, len = gdjs.SailingCode.GDAmmoChainButtonObjects2.length ;i < len;++i) {
    gdjs.SailingCode.GDAmmoChainButtonObjects2[i].setColor("215;160;50");
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
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("Cannonballs").getAsNumber() <= 0);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerReloadFill"), gdjs.SailingCode.GDPlayerReloadFillObjects1);
{for(var i = 0, len = gdjs.SailingCode.GDPlayerReloadFillObjects1.length ;i < len;++i) {
    gdjs.SailingCode.GDPlayerReloadFillObjects1[i].setColor("120;120;120");
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
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoRoundButtonObjects2Objects = Hashtable.newFrom({"AmmoRoundButton": gdjs.SailingCode.GDAmmoRoundButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoGrapeButtonObjects2Objects = Hashtable.newFrom({"AmmoGrapeButton": gdjs.SailingCode.GDAmmoGrapeButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoChainButtonObjects2Objects = Hashtable.newFrom({"AmmoChainButton": gdjs.SailingCode.GDAmmoChainButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCombatFleeButtonObjects2Objects = Hashtable.newFrom({"CombatFleeButton": gdjs.SailingCode.GDCombatFleeButtonObjects2});
gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDSurrenderButtonObjects2Objects = Hashtable.newFrom({"SurrenderButton": gdjs.SailingCode.GDSurrenderButtonObjects2});
gdjs.SailingCode.eventsList49 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("AmmoRoundButton"), gdjs.SailingCode.GDAmmoRoundButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoRoundButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("AMMO_ROUND");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AmmoGrapeButton"), gdjs.SailingCode.GDAmmoGrapeButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoGrapeButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("AMMO_GRAPE");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("AmmoChainButton"), gdjs.SailingCode.GDAmmoChainButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDAmmoChainButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("AMMO_CHAIN");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("CombatFleeButton"), gdjs.SailingCode.GDCombatFleeButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDCombatFleeButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("COMBAT_FLEE");
}
{runtimeScene.getScene().getVariables().getFromIndex(36).setNumber(1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SurrenderButton"), gdjs.SailingCode.GDSurrenderButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(5).getChild("State").getAsString() == "COMBAT");
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
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SailingCode.mapOfGDgdjs_9546SailingCode_9546GDSurrenderButtonObjects2Objects, runtimeScene, true, false);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(41).setString("SURRENDER");
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


};gdjs.SailingCode.eventsList50 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(61).setNumber((runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2) / Math.tan(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamFov").getAsNumber() / 2)));
}
{runtimeScene.getScene().getVariables().getFromIndex(62).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipLength").getAsNumber() / runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Length").getAsNumber());
}
{runtimeScene.getScene().getVariables().getFromIndex(63).setNumber(runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(8).getChild("Sloop").getChild("Height").getAsNumber() / 2);
}
{runtimeScene.getScene().getVariables().getFromIndex(64).setNumber((-(((runtimeScene.getScene().getVariables().getFromIndex(6).getAsNumber()) - runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() / 2)) * Math.sin(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber())) - ((runtimeScene.getGame().getVariables().getFromIndex(0).getChild("ShipZ").getAsNumber() + runtimeScene.getScene().getVariables().getFromIndex(62).getAsNumber() * 2) - runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamZ").getAsNumber()) * Math.cos(gdjs.toRad(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("CamPitch").getAsNumber()))));
}
}

}


{


gdjs.SailingCode.eventsList20(runtimeScene);
}


{


gdjs.SailingCode.eventsList21(runtimeScene);
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


gdjs.SailingCode.eventsList32(runtimeScene);
}


{


gdjs.SailingCode.eventsList35(runtimeScene);
}


{


gdjs.SailingCode.eventsList36(runtimeScene);
}


{


gdjs.SailingCode.eventsList37(runtimeScene);
}


{


gdjs.SailingCode.eventsList38(runtimeScene);
}


{


gdjs.SailingCode.eventsList39(runtimeScene);
}


{


gdjs.SailingCode.eventsList40(runtimeScene);
}


{


gdjs.SailingCode.eventsList41(runtimeScene);
}


{


gdjs.SailingCode.eventsList42(runtimeScene);
}


{


gdjs.SailingCode.eventsList46(runtimeScene);
}


{


gdjs.SailingCode.eventsList47(runtimeScene);
}


{


gdjs.SailingCode.eventsList48(runtimeScene);
}


{


gdjs.SailingCode.eventsList49(runtimeScene);
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
gdjs.SailingCode.GDCannonBallObjects1.length = 0;
gdjs.SailingCode.GDCannonBallObjects2.length = 0;
gdjs.SailingCode.GDCannonBallObjects3.length = 0;
gdjs.SailingCode.GDCannonBallObjects4.length = 0;
gdjs.SailingCode.GDCannonBallObjects5.length = 0;
gdjs.SailingCode.GDFxObjects1.length = 0;
gdjs.SailingCode.GDFxObjects2.length = 0;
gdjs.SailingCode.GDFxObjects3.length = 0;
gdjs.SailingCode.GDFxObjects4.length = 0;
gdjs.SailingCode.GDFxObjects5.length = 0;
gdjs.SailingCode.GDDamageTextObjects1.length = 0;
gdjs.SailingCode.GDDamageTextObjects2.length = 0;
gdjs.SailingCode.GDDamageTextObjects3.length = 0;
gdjs.SailingCode.GDDamageTextObjects4.length = 0;
gdjs.SailingCode.GDDamageTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects1.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects2.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects3.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects4.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects5.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects1.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects2.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects3.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects4.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects5.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects5.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects1.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects2.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects3.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects4.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects5.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects1.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects2.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects3.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects4.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects5.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects1.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects2.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects3.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects4.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects5.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects5.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects5.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects5.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects1.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects2.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects3.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects4.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects5.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects1.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects2.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects3.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects4.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects5.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects1.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects2.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects3.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects4.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects5.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects1.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects2.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects3.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects4.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects5.length = 0;
gdjs.SailingCode.GDWater3DObjects1.length = 0;
gdjs.SailingCode.GDWater3DObjects2.length = 0;
gdjs.SailingCode.GDWater3DObjects3.length = 0;
gdjs.SailingCode.GDWater3DObjects4.length = 0;
gdjs.SailingCode.GDWater3DObjects5.length = 0;
gdjs.SailingCode.GDFoam3DObjects1.length = 0;
gdjs.SailingCode.GDFoam3DObjects2.length = 0;
gdjs.SailingCode.GDFoam3DObjects3.length = 0;
gdjs.SailingCode.GDFoam3DObjects4.length = 0;
gdjs.SailingCode.GDFoam3DObjects5.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects1.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects2.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects3.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects4.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects5.length = 0;

gdjs.SailingCode.eventsList50(runtimeScene);
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
gdjs.SailingCode.GDCannonBallObjects1.length = 0;
gdjs.SailingCode.GDCannonBallObjects2.length = 0;
gdjs.SailingCode.GDCannonBallObjects3.length = 0;
gdjs.SailingCode.GDCannonBallObjects4.length = 0;
gdjs.SailingCode.GDCannonBallObjects5.length = 0;
gdjs.SailingCode.GDFxObjects1.length = 0;
gdjs.SailingCode.GDFxObjects2.length = 0;
gdjs.SailingCode.GDFxObjects3.length = 0;
gdjs.SailingCode.GDFxObjects4.length = 0;
gdjs.SailingCode.GDFxObjects5.length = 0;
gdjs.SailingCode.GDDamageTextObjects1.length = 0;
gdjs.SailingCode.GDDamageTextObjects2.length = 0;
gdjs.SailingCode.GDDamageTextObjects3.length = 0;
gdjs.SailingCode.GDDamageTextObjects4.length = 0;
gdjs.SailingCode.GDDamageTextObjects5.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects1.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects2.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects3.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects4.length = 0;
gdjs.SailingCode.GDEnemyHullBgObjects5.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects1.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects2.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects3.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects4.length = 0;
gdjs.SailingCode.GDEnemyHullFillObjects5.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects1.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects2.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects3.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects4.length = 0;
gdjs.SailingCode.GDEnemyTagTextObjects5.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects1.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects2.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects3.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects4.length = 0;
gdjs.SailingCode.GDPlayerReloadBgObjects5.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects1.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects2.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects3.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects4.length = 0;
gdjs.SailingCode.GDPlayerReloadFillObjects5.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects1.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects2.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects3.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects4.length = 0;
gdjs.SailingCode.GDPlayerTagTextObjects5.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoRoundButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoRoundLabelObjects5.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoGrapeButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoGrapeLabelObjects5.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects1.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects2.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects3.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects4.length = 0;
gdjs.SailingCode.GDAmmoChainButtonObjects5.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects1.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects2.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects3.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects4.length = 0;
gdjs.SailingCode.GDAmmoChainLabelObjects5.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects1.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects2.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects3.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects4.length = 0;
gdjs.SailingCode.GDCombatFleeButtonObjects5.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects1.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects2.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects3.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects4.length = 0;
gdjs.SailingCode.GDCombatFleeLabelObjects5.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects1.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects2.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects3.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects4.length = 0;
gdjs.SailingCode.GDSurrenderButtonObjects5.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects1.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects2.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects3.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects4.length = 0;
gdjs.SailingCode.GDSurrenderLabelObjects5.length = 0;
gdjs.SailingCode.GDWater3DObjects1.length = 0;
gdjs.SailingCode.GDWater3DObjects2.length = 0;
gdjs.SailingCode.GDWater3DObjects3.length = 0;
gdjs.SailingCode.GDWater3DObjects4.length = 0;
gdjs.SailingCode.GDWater3DObjects5.length = 0;
gdjs.SailingCode.GDFoam3DObjects1.length = 0;
gdjs.SailingCode.GDFoam3DObjects2.length = 0;
gdjs.SailingCode.GDFoam3DObjects3.length = 0;
gdjs.SailingCode.GDFoam3DObjects4.length = 0;
gdjs.SailingCode.GDFoam3DObjects5.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects1.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects2.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects3.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects4.length = 0;
gdjs.SailingCode.GDEnemyShip3DObjects5.length = 0;


return;

}

gdjs['SailingCode'] = gdjs.SailingCode;
