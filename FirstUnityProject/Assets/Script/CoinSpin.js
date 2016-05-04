var rotSpeed: float = 60;
function Update() {
	transform.Rotate(0, rotSpeed * Time.deltaTime, 0, Space.World);
}