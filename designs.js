// Select color input
var selectedColor = $("#colorPicker");
// Select size input
var grid = $("#pixelCanvas");
var gridRows = $("#inputHeight");
var gridColumns = $("#inputWidth");
var submit = $(":submit");

// When size is submitted by the user, call makeGrid()

function makeGrid() {	
	grid.children().remove();
 	grid.on("click", "td", function() {
		$(this).css("background-color", selectedColor.val());
	});

	var rows = parseInt(gridRows.val());
	var columns = parseInt(gridColumns.val());

	var createGrid = "";
	for (var r = 0; r < rows; r++) {
		createGrid += "<tr>";
		for (var c = 0; c < columns; c++) {
			createGrid += "<td></td>";
		}
		createGrid += "</tr>";
	}
	grid.append(createGrid);
};

submit.on("click", function(event){
	event.preventDefault();
	makeGrid();
});
