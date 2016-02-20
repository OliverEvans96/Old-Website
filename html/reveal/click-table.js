//click-table.js
//Desmos API 0.6
//Add points to graph by clicking

var elt = document.getElementById('calculator');
var calculator = Desmos.Calculator(elt);

var xvalues = ['1'];
var yvalues = ['1'];

function updateTable () {
  calculator.setExpression({
	id: 'table1',
	type: 'table',
	columns: [
	  {latex: 'x', values: xvalues},
	  {latex: 'y', values: yvalues}
	]
  });
}

updateTable();

function inRectangle(point, rect) {
  return (
	point.x >= rect.left &&
	point.x <= rect.right &&
	point.y <= rect.top &&
	point.y >= rect.bottom
  )
}

elt.addEventListener('click', function (evt) {
  var rect = elt.getBoundingClientRect();
  var x = evt.pageX - rect.left;
  var y = evt.pageY - rect.top;
  // Note, pixelsToMath expects x and y to be referenced to the top left of
  // the calculator's parent container.
  var mathCoordinates = calculator.pixelsToMath({x: x, y: y});


  if (!inRectangle(mathCoordinates, calculator.graphpaperBounds.mathCoordinates)) return;

  xvalues.push(mathCoordinates.x.toPrecision(2));
  yvalues.push(mathCoordinates.y.toPrecision(2));

  updateTable();
});
