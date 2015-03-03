Template.nativeMap.created = function(){
    this.autorun(function(){
        var data = Template.currentData();
        
        console.log('@@@ updates to map data');
        
        console.log('@@@ current location is', data.currentLocation);
        console.log('@@@ markers are', data.markers);


        if(data.currentLocation && data.markers && data.markers.length > 0 && MapControl.isReady()){
            MapControl.centerMap(data.currentLocation.lat, data.currentLocation.lng);
            MapControl.setMarkers(data.markers);
        }
    });
};

Template.nativeMap.rendered = function(){
    document.addEventListener("deviceready", function() {
        if(Meteor.isCordova){
            MapControl.setup($(".map_canvas")[0]);
        }
    });
};

Template.nativeMap.destroyed = function(){
    MapControl.destroy();
};