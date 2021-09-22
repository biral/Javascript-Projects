var dataset = ee.ImageCollection('LANDSAT/LE07/C01/T1_8DAY_NDWI')
                  .filterDate('2007-01-01', '2021-01-01');
var colorized = dataset.select('NDWI');
var colorizedVis = {
  min: 0.0,
  max: 1.0,
  palette: ['0000ff', '00ffff', 'ffff00', 'ff0000', 'ffffff'],
};
Map.setCenter(-79.47,43.29, 15);
Map.addLayer(colorized, colorizedVis, 'Colorized');
