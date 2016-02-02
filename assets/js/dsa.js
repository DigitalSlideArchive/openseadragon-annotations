var markupScope;
var layerScope

$(document).ready(function(){
	var viewer = DSAViewer.getViewer();
	var annotationState = window.annotationState = new AnnotationState();
	annotationState.setSeadragonViewer(viewer);
	annotation_setup_code(annotationState);

	//Layer andmarkup scope
	markupScope = angular.element(document.getElementById("markup_ng_controller")).scope();
	layerScope = angular.element(document.getElementById("layer_ng_controller")).scope();

	layerScope.$apply(function () {
		layerScope.options.imageId = selectedImageId;
	});

	$(annotationState).on("annotationAdded", function(e) {
		//Add new markup
		//Use $apply, which will trigger, $digest and $watch to update all scope variables.
		markupScope.$apply(function () {
			markupScope.add(annotationState.annotations);
		});
	});

	$("#viewport_properties_modal").draggable({
		handle: ".modal-header"
	});

	$("#layers_modal").draggable({
		handle: ".modal-header"
	});
});
