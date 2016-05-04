function OnTriggerEnter(col: Collider) {
	CoinsCollected.coinsCollected += 1;
	Destroy(gameObject);
}