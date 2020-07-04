// <script>
//     //添加网格图
//     addNetGridLayer() {
//         debugger
//         let turfOuutline = this.initOutline();
//         let xmin = 103.013302;
//         let ymin = 30.00859

//         let xmax = 105.077495
//         let ymax = 31.539177;
//         var geojsonObject = {
//             'type': 'FeatureCollection',
//             'crs': {
//                 'type': 'name',
//                 'properties': {
//                     'name': 'EPSG:3857'
//                 }
//             },
//             'features': []
//         };
//         let resolution = 0.02;
//         let points = [];
//         for (let i = xmin; i < xmax; i += resolution) {
//             for (let j = ymax; j >= ymin; j -= resolution) {

//                 // points.push();
//                 let point = turf.point([i, j]);
//                 let within = turf.inside(point, turfOuutline);
//                 if (within) {

//                     let coorLeftUp = transform(
//                         [i, j],
//                         "EPSG:4326",
//                         "EPSG:3857"
//                     );

//                     let coorRightUp = transform(
//                         [i + resolution, j],
//                         "EPSG:4326",
//                         "EPSG:3857"
//                     );


//                     let coorRightDown = transform(
//                         [i + resolution, j - resolution],
//                         "EPSG:4326",
//                         "EPSG:3857"
//                     );

//                     let coorLeftDown = transform(
//                         [i, j - resolution],
//                         "EPSG:4326",
//                         "EPSG:3857"
//                     );

//                     let feature = {
//                         'type': 'Feature',
//                         'geometry': {
//                             'type': 'Polygon',
//                             'coordinates': [
//                                 [coorLeftUp, coorRightUp, coorRightDown, coorLeftDown, coorLeftUp]
//                             ]
//                         }
//                     };

//                     geojsonObject.features.push(feature)

// </script>