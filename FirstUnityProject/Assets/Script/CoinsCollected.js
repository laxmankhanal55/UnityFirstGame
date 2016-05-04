static var coinsCollected: int = 0;

function OnGUI() { 
	GUI.Label(Rect(10, 10, 40, 40), ("Coins " + coinsCollected));
}