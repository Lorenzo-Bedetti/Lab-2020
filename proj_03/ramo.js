function ramo(begin, end) {
	this.begin = begin;
	this.end = end

	this.show = function() {
		stroke(255);
		line(this.begin.x, this.begin.y, this.end.x, this.end.y)

	}


	this.ramo = function() {
		//creare un vettore direzionale cioè un "ramo" dell'albero
		var dir = p5.Vector.sub(this.end, this.begin);

		//creare un ramo rotato rispetto al punto di partenza (il punto di fine del ramo precedente, se c'è)
		dir.rotate(PI / 4);
		var newEnd = p5.Vector.add(this.end, dir);
		var right = new ramo(this.end, newEnd);
		return right;

	}
}

