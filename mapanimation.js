
    mapboxgl.accessToken = 'pk.eyJ1IjoiMjNoMSIsImEiOiJjbDdwYTU0bHIwZnFnM3JzM2ViY2NhMGxvIn0.AeJkVXbm4lhCJkImsQomFQ';
    
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-1.8759307, 50.73136], 
        zoom: 10.5,
        //panTo: [-74, 38]
    });

    var marker = new mapboxgl.Marker().setLngLat([-1.8646716, 50.7269046]).addTo(map);
    
        // Bus stop co-ordinates from Google. 
    // Need to eventually get this data from an API.
    var busStops = [
        [-1.865571, 50.727432], // 50.727432 , -1.865571
        [-1.867808, 50.727966], // 50.727966 , -1.867808
        [-1.872971, 50.730904], // 50.730904 , -1.872971
        [-1.874668, 50.732288], // 50.732288!4d-1.874668
        [-1.877129, 50.733921], // 50.733921!4d-1.877129
        [-1.879562, 50.735489], // 50.735489!4d-1.879562
        [-1.879851, 50.738564], // 50.738564!4d-1.879851
        [-1.880224, 50.7401332], // 50.7401332!4d-1.880224
        [-1.882779, 50.740833], // 50.740833!4d-1.882779
        [-1.887526, 50.74107], // 50.74107!4d-1.887526
        [-1.890416, 50.741451], // 50.741451!4d-1.890416
        [-1.896548, 50.74382],  // 50.74382!4d-1.896548
        [-1.898351, 50.742819]
    ];

    var counter = 0;
    function move()
    {
        setTimeout(() => 
        {
            if (counter >= busStops.length) return
            marker.setLngLat(busStops[counter], {duration: 2000});
            counter++;
            map.zoomTo(13.75, {duration: 2000});
            move();
            if (counter == busStops.length) map.zoomTo(10.5, {duration: 4000});

            // TODO : Draw the route segment as the marker passes each bus stop
            // https://docs.mapbox.com/mapbox-gl-js/example/geojson-line/

        }, 1000);
    }


    // STYLES 
        // mapbox://styles/mapbox/streets-v11
        // mapbox://styles/mapbox/outdoors-v11
        // mapbox://styles/mapbox/light-v10
        // mapbox://styles/mapbox/dark-v10
        // mapbox://styles/mapbox/satellite-v9
        // mapbox://styles/mapbox/satellite-streets-v11
