/*
Clear all strokes on selected layers
*/

var SelectedLayers = app.project.activeItem.selectedLayers;

for (var i = 0; i < SelectedLayers.length; i++){
	var layer = SelectedLayers[i];
	var ContentsGroup = layer.property("Contents");

	for (var s=1; s<=ContentsGroup.numProperties; s++)
	{
			var contents = ContentsGroup.property(s);
              if (contents.name.indexOf('Group') > -1) /*verifica si el nombre contiene "Group" */{
                    var stroke = contents.property("Contents").property("Stroke 1");
                    stroke.remove();
                }
        }
}
