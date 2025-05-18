injectTapEventPlugin();

var defaultFill = new ol.style.Fill({
  color: 'rgba(255,255,255,0.4)'
});
var defaultStroke = new ol.style.Stroke({
  color: '#3399CC',
  width: 1.25
});
var defaultSelectionFill = new ol.style.Fill({
  color: 'rgba(255,255,0,0.4)'
});
var defaultSelectionStroke = new ol.style.Stroke({
  color: '#FFFF00',
  width: 1.25
});


                    var textStyleCache_doors_f={}
                    var clusterStyleCache_doors_f={}
                    var style_doors_f = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(211,106,45,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_doors_f = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_levels_f={}
                    var clusterStyleCache_levels_f={}
                    var style_levels_f = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(194,102,195,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_levels_f = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_stairs_f={}
                    var clusterStyleCache_stairs_f={}
                    var style_stairs_f = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(141,136,83,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_stairs_f = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_walls_f={}
                    var clusterStyleCache_walls_f={}
                    var style_walls_f = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(136,100,180,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_walls_f = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_windows_f={}
                    var clusterStyleCache_windows_f={}
                    var style_windows_f = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(129,179,130,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_windows_f = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_entrance={}
                    var clusterStyleCache_entrance={}
                    var style_entrance = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(65,241,194,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_entrance = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_ramps={}
                    var clusterStyleCache_ramps={}
                    var style_ramps = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(152,10,150,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_ramps = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_axes={}
                    var clusterStyleCache_axes={}
                    var style_axes = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(16,186,201,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_axes = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_trees={}
                    var clusterStyleCache_trees={}
                    var style_trees = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(9,174,37,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_trees = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_columns={}
                    var clusterStyleCache_columns={}
                    var style_columns = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(237,35,244,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_columns = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_doors_g={}
                    var clusterStyleCache_doors_g={}
                    var style_doors_g = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(131,42,91,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_doors_g = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_levels_g={}
                    var clusterStyleCache_levels_g={}
                    var style_levels_g = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(131,42,91,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_levels_g = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_stairs_g={}
                    var clusterStyleCache_stairs_g={}
                    var style_stairs_g = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(102,168,35,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_stairs_g = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_walls_g={}
                    var clusterStyleCache_walls_g={}
                    var style_walls_g = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(69,75,184,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_walls_g = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_windows_g={}
                    var clusterStyleCache_windows_g={}
                    var style_windows_g = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(38,248,196,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_windows_g = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_parking={}
                    var clusterStyleCache_parking={}
                    var style_parking = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(180,175,170,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_parking = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_hospital={}
                    var clusterStyleCache_hospital={}
                    var style_hospital = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(203,151,131,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_hospital = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_khidmat={}
                    var clusterStyleCache_khidmat={}
                    var style_khidmat = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(21,55,242,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_khidmat = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_shabkaturq={}
                    var clusterStyleCache_shabkaturq={}
                    var style_shabkaturq = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_shabkaturq = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_bahhos={}
                    var clusterStyleCache_bahhos={}
                    var style_bahhos = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(108,79,165,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_bahhos = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_riyadia={}
                    var clusterStyleCache_riyadia={}
                    var style_riyadia = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(71,185,160,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_riyadia = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_isteshmariya={}
                    var clusterStyleCache_isteshmariya={}
                    var style_isteshmariya = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(213,39,77,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_isteshmariya = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_tadris={}
                    var clusterStyleCache_tadris={}
                    var style_tadris = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(244,211,181,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_tadris = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_garden={}
                    var clusterStyleCache_garden={}
                    var style_garden = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(85,180,107,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_garden = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_matzojain={}
                    var clusterStyleCache_matzojain={}
                    var style_matzojain = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(13,171,244,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_matzojain = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sakanaltulab={}
                    var clusterStyleCache_sakanaltulab={}
                    var style_sakanaltulab = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(229,244,8,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sakanaltulab = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_sakantalebat={}
                    var clusterStyleCache_sakantalebat={}
                    var style_sakantalebat = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(80,149,51,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_sakantalebat = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_haddodjama={}
                    var clusterStyleCache_haddodjama={}
                    var style_haddodjama = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255,0,0,1.0)", lineDash: [6], width: 3}),
                        fill: new ol.style.Fill({color: "rgba(209,104,162,0.0)"})
                        })
                        ];
                        var allStyles = [];
                        
        var labelText = feature.get("Text");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_haddodjama[key]){
            var text = new ol.style.Text({
                  font: '26.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(190, 188, 70, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_haddodjama[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_haddodjama[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_haddodjama = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 3}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
        var labelText = feature.get("Text");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_haddodjama[key]){
            var text = new ol.style.Text({
                  font: '26.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(190, 188, 70, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_haddodjama[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_haddodjama[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_kulyattulab={}
                    var clusterStyleCache_kulyattulab={}
                    var style_kulyattulab = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(199,50,4,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kulyattulab = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_kulyattalibat={}
                    var clusterStyleCache_kulyattalibat={}
                    var style_kulyattalibat = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(248,180,63,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_kulyattalibat = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_askan={}
                    var clusterStyleCache_askan={}
                    var style_askan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(229,244,8,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_askan = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_abara={}
                    var clusterStyleCache_abara={}
                    var style_abara = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(79,169,47,1.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_abara = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_turq_aqlim={}
                    var clusterStyleCache_turq_aqlim={}
                    var style_turq_aqlim = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(7,8,15,1.0)", lineDash: null, width: 2})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_turq_aqlim = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 2})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_turq_shiryan={}
                    var clusterStyleCache_turq_shiryan={}
                    var style_turq_shiryan = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(62,57,140,1.0)", lineDash: null, width: 0})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_turq_shiryan = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_mantequabaha={}
                    var clusterStyleCache_mantequabaha={}
                    var style_mantequabaha = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(246,0,0,1.0)", lineDash: [6], width: 2}),
                        fill: new ol.style.Fill({color: "rgba(162,228,230,0.0)"})
                        })
                        ];
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_mantequabaha = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: [6], width: 2}),
                        fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})
                        })
                        ]
                        var allStyles = [];
                        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };

                    var textStyleCache_tajmiat_friya={}
                    var clusterStyleCache_tajmiat_friya={}
                    var style_tajmiat_friya = function(feature, resolution){
                        
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 1.14, stroke: new ol.style.Stroke({color: "rgba(0,0,0,1.0)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(239,119,19,1.0)"})})
                        })
                        ];
                        var allStyles = [];
                        
        var labelText = feature.get("Text");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_tajmiat_friya[key]){
            var text = new ol.style.Text({
                  font: '18.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(248, 180, 63, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_tajmiat_friya[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_tajmiat_friya[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
                    var selectionStyle_tajmiat_friya = function(feature, resolution){
                        var value = "";
                        var style = [ new ol.style.Style({
                            image: new ol.style.Circle({radius: 1.14, stroke: new ol.style.Stroke({color: "rgba(255, 204, 0, 1)", lineDash: null, width: 0}), fill: new ol.style.Fill({color: "rgba(255, 204, 0, 1)"})})
                        })
                        ]
                        var allStyles = [];
                        
        var labelText = feature.get("Text");
        
        var key = value + "_" + labelText;
        if (!textStyleCache_tajmiat_friya[key]){
            var text = new ol.style.Text({
                  font: '18.5px Calibri,sans-serif',
                  text: labelText,
                  fill: new ol.style.Fill({
                    color: "rgba(248, 180, 63, 255)"
                  }),
                  textBaseline: "middle",
                  textAlign: "center",
                  rotation: -0.0,
                  offsetX: 0,
                  offsetY: 0 
                });
            textStyleCache_tajmiat_friya[key] = new ol.style.Style({"text": text});
        }
        allStyles.push(textStyleCache_tajmiat_friya[key]);
        
                        allStyles.push.apply(allStyles, style);
                        return allStyles;
                    };
var baseLayers = [new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world street map',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html: 'Tiles &copy; <a href="http://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer">ArcGIS</a>'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
,new ol.layer.Tile({
    type: 'base',
    title: 'ESRI world imagery',
    source: new ol.source.XYZ({
        attributions: [new ol.Attribution({ html: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'})],
        url: 'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    }),
    projection: 'EPSG:3857'
})
];var baseLayersGroup = new ol.layer.Group({showContent: true,'type':
                    'base-group', 'title': 'Base maps', layers: baseLayers});var overviewMapBaseLayer = baseLayersGroup;
var overlayLayers = [];var overlaysGroup = new ol.layer.Group({showContent: true, 'title': 'Overlays', layers: overlayLayers});
var lyr_doors_f = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_doors_f,
                    selectedStyle: selectionStyle_doors_f,
                    //title: "Doors_F",
title: "أبواب",
                    id: "أبواب20240331120639335",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
doors_f_geojson_callback = function(geojson) {
                              lyr_doors_f.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_levels_f = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_levels_f,
                    selectedStyle: selectionStyle_levels_f,
                    //title: "Levels_F",
title: "مستويات",
                    id: "مستويات20240331120855445",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr></table>"
                });
levels_f_geojson_callback = function(geojson) {
                              lyr_levels_f.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_stairs_f = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_stairs_f,
                    selectedStyle: selectionStyle_stairs_f,
                    //title: "Stairs_F",
title: "سلالم",
                    id: "سلالم20240331120855424",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>Linetype</td><td style='text-align:right'>[Linetype]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
stairs_f_geojson_callback = function(geojson) {
                              lyr_stairs_f.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_walls_f = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_walls_f,
                    selectedStyle: selectionStyle_walls_f,
                   // title: "Walls_F",
title: "حوائط",
                    id: "حوائط20240331120855414",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
walls_f_geojson_callback = function(geojson) {
                              lyr_walls_f.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_windows_f = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_windows_f,
                    selectedStyle: selectionStyle_windows_f,
                    //title: "Windows_F",
title: "نوافذ",
                    id: "نوافذ20240331120525617",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
windows_f_geojson_callback = function(geojson) {
                              lyr_windows_f.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_entrance = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_entrance,
                    selectedStyle: selectionStyle_entrance,
                    //title: "Entrance",
title: "ممرات_دخول",
                    id: "ممرات_دخول20240331115025930",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
entrance_geojson_callback = function(geojson) {
                              lyr_entrance.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_ramps = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_ramps,
                    selectedStyle: selectionStyle_ramps,
                   // title: "Ramps",
title: "منحدرات",
                    id: "منحدرات20240331114557657",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
ramps_geojson_callback = function(geojson) {
                              lyr_ramps.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_axes = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_axes,
                    selectedStyle: selectionStyle_axes,
                    //title: "Axes",
title: "محاور",
                    id: "محاور20240331114403134",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
axes_geojson_callback = function(geojson) {
                              lyr_axes.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_trees = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_trees,
                    selectedStyle: selectionStyle_trees,
                    //title: "Trees",
title: "أشجار",
                    id: "أشجار20240331113933699",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
trees_geojson_callback = function(geojson) {
                              lyr_trees.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_columns = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_columns,
                    selectedStyle: selectionStyle_columns,
                   // title: "Columns",
title: "أعمده",
                    id: "أعمده20240331113739107",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
columns_geojson_callback = function(geojson) {
                              lyr_columns.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_doors_g = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_doors_g,
                    selectedStyle: selectionStyle_doors_g,
                   // title: "Doors_G",
title: "أبواب",
                    id: "أبواب20240331113601535",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
doors_g_geojson_callback = function(geojson) {
                              lyr_doors_g.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_levels_g = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_levels_g,
                    selectedStyle: selectionStyle_levels_g,
                    //title: "Levels_G",
title: "مستويات",
                    id: "مستويات20240331115254685",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
levels_g_geojson_callback = function(geojson) {
                              lyr_levels_g.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_stairs_g = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_stairs_g,
                    selectedStyle: selectionStyle_stairs_g,
                    //title: "Stairs_G",
title: "سلالم",
                    id: "سلالم20240331115541853",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
stairs_g_geojson_callback = function(geojson) {
                              lyr_stairs_g.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_walls_g = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_walls_g,
                    selectedStyle: selectionStyle_walls_g,
                   // title: "Walls_G",
title: "حوائط",
                    id: "حوائط20240331114157525",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
walls_g_geojson_callback = function(geojson) {
                              lyr_walls_g.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_windows_g = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_windows_g,
                    selectedStyle: selectionStyle_windows_g,
                    //title: "Windows_G",
title: "نوافذ",
                    id: "نوافذ20240331115759893",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
windows_g_geojson_callback = function(geojson) {
                              lyr_windows_g.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_parking = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_parking,
                    selectedStyle: selectionStyle_parking,
                    //title: "parking",
title: "مواقف السيارات",
                    id: "parking20160309164736275",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>LAYER</td><td style='text-align:right'>[LAYER]</td></tr><tr><td>تصنيف</td><td style='text-align:right'>[تصنيف]</td></tr><tr><td>ط§ظ„ظ…ظˆظ‚</td><td style='text-align:right'>[ط§ظ„ظ…ظˆظ‚]</td></tr></table>"
                });
parking_geojson_callback = function(geojson) {
                              lyr_parking.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_hospital = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_hospital,
                    selectedStyle: selectionStyle_hospital,
                    //title: "hospital",
title: "المستشفى_والكليات_الطبية",
                    id: "المستشفى_والكليات_الطبية20160309173954680",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>layer</td><td style='text-align:right'>[layer]</td></tr><tr><td>landuse</td><td style='text-align:right'>[landuse]</td></tr></table>"
                });
hospital_geojson_callback = function(geojson) {
                              lyr_hospital.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_khidmat = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_khidmat,
                    selectedStyle: selectionStyle_khidmat,
                   // title: "khidmat",
title: "مناطق_الخدمات",
                    id: "مناطق_الخدمات20160309171342883",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
khidmat_geojson_callback = function(geojson) {
                              lyr_khidmat.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_shabkaturq = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_shabkaturq,
                    selectedStyle: selectionStyle_shabkaturq,
                    //title: "shabkaturq",
title: "شبكة_الطرق",
                    id: "شبكة_الطرق20160309183515151",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
shabkaturq_geojson_callback = function(geojson) {
                              lyr_shabkaturq.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_bahhos = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_bahhos,
                    selectedStyle: selectionStyle_bahhos,
                    //title: "bahhos",
title: "مدينة_البحوث",
                    id: "مدينة_البحوث20160309171342852",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
bahhos_geojson_callback = function(geojson) {
                              lyr_bahhos.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_riyadia = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_riyadia,
                    selectedStyle: selectionStyle_riyadia,
                    //title: "riyadia",
title: "المنطقة_الرياضية",
                    id: "المنطقة_الرياضية20160309171342743",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>layer</td><td style='text-align:right'>[layer]</td></tr><tr><td>landuse</td><td style='text-align:right'>[landuse]</td></tr></table>"
                });
riyadia_geojson_callback = function(geojson) {
                              lyr_riyadia.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_isteshmariya = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_isteshmariya,
                    selectedStyle: selectionStyle_isteshmariya,
                   // title: "isteshmariya",
title: "المنطقة_الاستثمارية",
                    id: "المنطقة_الاستثمارية20160309171342680",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
isteshmariya_geojson_callback = function(geojson) {
                              lyr_isteshmariya.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_tadris = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_tadris,
                    selectedStyle: selectionStyle_tadris,
                    //title: "tadris",
title: "إسكان_أعضاء_هيئة_التدريس",
                    id: "إسكان_أعضاء_هيئة_التدريس20160309171342150",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
tadris_geojson_callback = function(geojson) {
                              lyr_tadris.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_garden = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_garden,
                    selectedStyle: selectionStyle_garden,
                    //title: "garden",
title: "المناطق_الخضراء_والحدائق",
                    id: "المناطق_الخضراء_والحدائق20160309133143355",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr></table>"
                });
garden_geojson_callback = function(geojson) {
                              lyr_garden.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_matzojain = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_matzojain,
                    selectedStyle: selectionStyle_matzojain,
                    //title: "matzojain",
title: "إسكان_طلاب_متزوجين",
                    id: "إسكان_طلاب_متزوجين20160309171342165",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
matzojain_geojson_callback = function(geojson) {
                              lyr_matzojain.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_sakanaltulab = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_sakanaltulab,
                    selectedStyle: selectionStyle_sakanaltulab,
                    //title: "sakanaltulab",
title: "سكن_الطلاب",
                    id: "سكن_الطلاب20160309171342758",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
sakanaltulab_geojson_callback = function(geojson) {
                              lyr_sakanaltulab.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_sakantalebat = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_sakantalebat,
                    selectedStyle: selectionStyle_sakantalebat,
                    //title: "sakantalebat",
title: "سكن_طالبات",
                    id: "سكن_طالبات20240328141229542",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>LAYER</td><td style='text-align:right'>[LAYER]</td></tr><tr><td>GM_TYPE</td><td style='text-align:right'>[GM_TYPE]</td></tr></table>"
                });
sakantalebat_geojson_callback = function(geojson) {
                              lyr_sakantalebat.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_haddodjama = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_haddodjama,
                    selectedStyle: selectionStyle_haddodjama,
                    //title: "haddod jama",
title: "حدود_الجامعة",
                    id: "حدود_الجامعة20160309191630481",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
haddodjama_geojson_callback = function(geojson) {
                              lyr_haddodjama.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_kulyattulab = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kulyattulab,
                    selectedStyle: selectionStyle_kulyattulab,
                    //title: "kulyattulab",
title: "كليات_طلاب",
                    id: "كليات_طلاب20160309171342836",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
kulyattulab_geojson_callback = function(geojson) {
                              lyr_kulyattulab.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_kulyattalibat = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_kulyattalibat,
                    selectedStyle: selectionStyle_kulyattalibat,
                    //title: "kulyattalibat",
title: "كليات_الطالبات",
                    id: "كليات_الطالبات20240328135843012",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>layer</td><td style='text-align:right'>[layer]</td></tr><tr><td>luse</td><td style='text-align:right'>[luse]</td></tr></table>"
                });
kulyattalibat_geojson_callback = function(geojson) {
                              lyr_kulyattalibat.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_askan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_askan,
                    selectedStyle: selectionStyle_askan,
                    //title: "askan",
title: "إسكان",
                    id: "إسكان20160309171342571",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
askan_geojson_callback = function(geojson) {
                              lyr_askan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_abara = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_abara,
                    selectedStyle: selectionStyle_abara,
                    //title: "abara",
title: "عبارة",
                    id: "عبارة20240326225054292",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
abara_geojson_callback = function(geojson) {
                              lyr_abara.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_turq_aqlim = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_turq_aqlim,
                    selectedStyle: selectionStyle_turq_aqlim,
                   // title: "turq_aqlim",
title: "طرق اقليمية",
                    id: "turq_aqlim20240326225717929",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
turq_aqlim_geojson_callback = function(geojson) {
                              lyr_turq_aqlim.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_turq_shiryan = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_turq_shiryan,
                    selectedStyle: selectionStyle_turq_shiryan,
                    //title: "turq_shiryan",
title: "طرق شريانية",
                    id: "turq_shiryan20240326230527684",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
turq_shiryan_geojson_callback = function(geojson) {
                              lyr_turq_shiryan.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_mantequabaha = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_mantequabaha,
                    selectedStyle: selectionStyle_mantequabaha,
                   // title: "mantequabaha",
title: "حدود_منطقة_الباحة",
                    id: "حدود_منطقة_الباحة20240326225452278",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
mantequabaha_geojson_callback = function(geojson) {
                              lyr_mantequabaha.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var lyr_tajmiat_friya = new ol.layer.Vector({
                    opacity: 1.0,
                    source: new ol.source.Vector(),
                     
                    style: style_tajmiat_friya,
                    selectedStyle: selectionStyle_tajmiat_friya,
                    //title: "tajmiat_friya",
title: "التجمعات الفرعية",
                    id: "tajmiat_friya20240326230700125",
                    filters: [],
                    timeInfo: null,
                    isSelectable: true,
                    popupInfo: "<table class='popup-table'><tr><th>Attribute</th><th>Value</th><tr><td>Layer</td><td style='text-align:right'>[Layer]</td></tr><tr><td>SubClasses</td><td style='text-align:right'>[SubClasses]</td></tr><tr><td>EntityHand</td><td style='text-align:right'>[EntityHand]</td></tr><tr><td>Text</td><td style='text-align:right'>[Text]</td></tr></table>"
                });
tajmiat_friya_geojson_callback = function(geojson) {
                              lyr_tajmiat_friya.getSource().addFeatures(new ol.format.GeoJSON().readFeatures(geojson));
                        };
var group_collegedetailsfirstflour = new ol.layer.Group({
                                layers: [lyr_doors_f,lyr_levels_f,lyr_stairs_f,lyr_walls_f,lyr_windows_f],
                                showContent: true,
                                title: "College Details (First Flour)"});
var group_albaharegion = new ol.layer.Group({
                                layers: [lyr_turq_aqlim,lyr_turq_shiryan,lyr_mantequabaha,lyr_tajmiat_friya],
                                showContent: true,
                                title: "Al Baha Region"});
var group_universityarea = new ol.layer.Group({
                                layers: [lyr_parking,lyr_hospital,lyr_khidmat,lyr_shabkaturq,lyr_bahhos,lyr_riyadia,lyr_isteshmariya,lyr_tadris,lyr_garden,lyr_matzojain,lyr_sakanaltulab,lyr_sakantalebat,lyr_haddodjama,lyr_kulyattulab,lyr_kulyattalibat,lyr_askan,lyr_abara],
                                showContent: true,

                                title: "University Area"});
var group_collegedetailsgroundflour = new ol.layer.Group({
                                layers: [lyr_entrance,lyr_ramps,lyr_axes,lyr_trees,lyr_columns,lyr_doors_g,lyr_levels_g,lyr_stairs_g,lyr_walls_g,lyr_windows_g],
                                showContent: true,
                               title: "College Details (Ground Flour)"});

lyr_doors_f.setVisible(true);
lyr_levels_f.setVisible(true);
lyr_stairs_f.setVisible(true);
lyr_walls_f.setVisible(true);
lyr_windows_f.setVisible(true);
lyr_entrance.setVisible(true);
lyr_ramps.setVisible(true);
lyr_axes.setVisible(true);
lyr_trees.setVisible(true);
lyr_columns.setVisible(true);
lyr_doors_g.setVisible(true);
lyr_levels_g.setVisible(true);
lyr_stairs_g.setVisible(true);
lyr_walls_g.setVisible(true);
lyr_windows_g.setVisible(true);
lyr_parking.setVisible(true);
lyr_hospital.setVisible(true);
lyr_khidmat.setVisible(true);
lyr_shabkaturq.setVisible(true);
lyr_bahhos.setVisible(true);
lyr_riyadia.setVisible(true);
lyr_isteshmariya.setVisible(true);
lyr_tadris.setVisible(true);
lyr_garden.setVisible(true);
lyr_matzojain.setVisible(true);
lyr_sakanaltulab.setVisible(true);
lyr_sakantalebat.setVisible(true);
lyr_haddodjama.setVisible(true);
lyr_kulyattulab.setVisible(true);
lyr_kulyattalibat.setVisible(true);
lyr_askan.setVisible(true);
lyr_abara.setVisible(true);
lyr_turq_aqlim.setVisible(true);
lyr_turq_shiryan.setVisible(true);
lyr_mantequabaha.setVisible(true);
lyr_tajmiat_friya.setVisible(true);
for (var i=0;i<baseLayers.length;i++){baseLayers[i].setVisible(false);}
baseLayers[0].setVisible(true);
var layersList = [group_collegedetailsfirstflour,group_collegedetailsgroundflour,group_universityarea,group_albaharegion];layersList.unshift(baseLayersGroup);
var printLayouts = [{"width": 594.0, "elements": [{"name": "\u0625\u0633\u0643\u0627\u0646 \u0627\u0644\u0637\u0627\u0644\u0628\u0627\u062a", "height": 14.9325, "width": 57.8032, "y": 284.681, "x": 227.841, "font": "Traditional Arabic", "type": "label", "id": "98ec0b98-97b6-4190-8dba-94039d2e915e", "size": 28}, {"name": "\u0627\u0644\u0645\u0648\u0642\u0639 \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u064a\u0629 \u0628\u0627\u0644\u0639\u0642\u064a\u0642\n ", "height": 18.5191, "width": 160.698, "y": 10.5191, "x": 31.4006, "font": "Traditional Arabic", "type": "label", "id": "e4525339-620e-4378-b82c-855268331f29", "size": 36}, {"name": "\u062e\u062f\u0645\u0627\u062a", "height": 9.55823, "width": 38.34, "y": 333.941, "x": 153.529, "font": "Traditional Arabic", "type": "label", "id": "d9b7fac1-d442-439a-a3e4-8c0449ca52fc", "size": 28}, {"name": "\u0643\u0644\u064a\u0627\u062a \u0627\u0644\u0637\u0627\u0644\u0628\u0627\u062a", "height": 15.5321, "width": 62.7259, "y": 364.382, "x": 267.397, "font": "Traditional Arabic", "type": "label", "id": "c2863302-8e72-4c28-a7df-9c49080ae206", "size": 28}, {"name": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629", "height": 14.3373, "width": 62.7259, "y": 326.175, "x": 322.59, "font": "Traditional Arabic", "type": "label", "id": "fa0c8a76-b6e2-4ea2-87af-5f2a9493e235", "size": 28}, {"name": "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631\u064a\u0629", "height": 13.74, "width": 72.2841, "y": 225.216, "x": 37.6355, "font": "Traditional Arabic", "type": "label", "id": "058189aa-ffea-4f62-af00-e1549b93ef45", "size": 28}, {"name": "\u0625\u0633\u0643\u0627\u0646 \u0627\u0644\u0637\u0644\u0627\u0628", "height": 14.3373, "width": 49.6904, "y": 98.5693, "x": 244.332, "font": "Traditional Arabic", "type": "label", "id": "a0a10016-8ba8-43c2-a662-cd15a1350337", "size": 28}, {"name": "\u0627\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0631\u064a\u0627\u0636\u064a\u0629", "height": 14.3373, "width": 50.1807, "y": 242.475, "x": 340.226, "font": "Traditional Arabic", "type": "label", "id": "488f2014-1a17-4129-9d30-db17b2345cb5", "size": 28}, {"name": "\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u0628\u062d\u0648\u062b", "height": 11.9478, "width": 47.8982, "y": 128.828, "x": 165.685, "font": "Traditional Arabic", "type": "label", "id": "1cc69533-7899-46db-b2d4-7838aa0aa829", "size": 28}, {"name": "\u0627\u0644\u0645\u0633\u062a\u0634\u0641\u0649 \u0648\u0627\u0644\u0643\u0644\u064a\u0627\u062a \u0627\u0644\u0637\u0628\u064a\u0629", "height": 14.3373, "width": 86.6215, "y": 140.568, "x": 403.588, "font": "Traditional Arabic", "type": "label", "id": "c81c583b-56ab-4171-970b-13c1d39fa3de", "size": 28}, {"name": "\u0625\u0633\u0643\u0627\u0646 \u0623\u0639\u0636\u0627\u0621 \u0647\u064a\u0626\u0629 \u0627\u0644\u062a\u062f\u0631\u064a\u0633", "height": 12.5452, "width": 91.998, "y": 23.506, "x": 299.344, "font": "Traditional Arabic", "type": "label", "id": "e2e47d0a-1145-4e33-98a3-74725932db17", "size": 28}, {"height": 15.2, "width": 162.48859739056334, "y": 398.654, "x": 41.7912, "type": "scalebar", "id": "3ad7f56a-725b-40f1-bdde-c7174d149f0e"}, {"height": 414.588, "width": 491.418, "grid": {"intervalX": 500.0, "intervalY": 500.0, "annotationEnabled": true, "crs": ""}, "y": 2.19478, "x": 36.0, "type": "map", "id": "d6ed1e4e-6eb0-46ab-b488-4a925f30e087"}], "thumbnail": "composer1_thumbnail.png", "name": "Composer 1", "height": 420.0}, {"width": 841.0, "elements": [{"name": "\u0627\u0644\u0627\u0633\u062a\u0639\u0645\u0627\u0644\u0627\u062a \u0627\u0644\u062a\u0641\u0635\u064a\u0644\u064a\u0629 \u0644\u0644\u0645\u062f\u064a\u0646\u0629 \u0627\u0644\u062c\u0627\u0645\u0639\u064a\u0629", "height": 21.9799, "width": 181.757, "y": 457.052, "x": 251.934, "font": "Traditional Arabic", "type": "label", "id": "8470d650-aeee-48b2-84fe-f42e667f2dc3", "size": 48}, {"height": 18.6, "width": 179.43912307000082, "y": 499.548, "x": 255.616, "type": "scalebar", "id": "fef1883d-dcb9-4766-a063-48934fc680ea"}, {"height": 91.8, "width": 132.0, "y": 30.9314, "x": 453.281, "type": "legend", "id": "ae1e3a14-b799-4ab2-bd46-4713091d573d"}, {"height": 509.134, "width": 407.828, "grid": {"intervalX": 250.0, "intervalY": 250.0, "annotationEnabled": false, "crs": ""}, "y": 31.0, "x": 40.0, "type": "map", "id": "49ec7f5a-1c26-4977-8a1f-869c0daef8b2"}], "thumbnail": "composer2_thumbnail.png", "name": "Composer 2", "height": 594.0}];
var view = new ol.View({ maxZoom: 32, minZoom: 1, projection: 'EPSG:3857'});
var originalExtent = [4630225.304597, 2290828.135569, 4640536.739465, 2297023.313745];

var map = new ol.Map({
  layers: layersList,
  view: view,
  controls: [new ol.control.ZoomSlider(),
new ol.control.FullScreen(),
new ol.control.ScaleLine({"minWidth": 64, "units": "metric"})]
});

var BasicApp = React.createClass({
  componentDidMount() {
    map.addControl(new ol.control.OverviewMap({collapsed: true, layers: [overviewMapBaseLayer, lyr_doors_f,lyr_levels_f,lyr_stairs_f,lyr_walls_f,lyr_windows_f,lyr_entrance,lyr_ramps,lyr_axes,lyr_trees,lyr_columns,lyr_doors_g,lyr_levels_g,lyr_stairs_g,lyr_walls_g,lyr_windows_g,lyr_parking,lyr_hospital,lyr_khidmat,lyr_shabkaturq,lyr_bahhos,lyr_riyadia,lyr_isteshmariya,lyr_tadris,lyr_garden,lyr_matzojain,lyr_sakanaltulab,lyr_sakantalebat,lyr_haddodjama,lyr_kulyattulab,lyr_kulyattalibat,lyr_askan,lyr_abara,lyr_turq_aqlim,lyr_turq_shiryan,lyr_mantequabaha,lyr_tajmiat_friya]}));
  },
  _toggle(el) {
    if (el.style.display === 'block') {
      el.style.display = 'none';
    } else {
      el.style.display = 'block';
    }
  },
  _toggleTable() {
    this._toggle(document.getElementById('table-panel'));
    this.refs.table.getWrappedInstance().setDimensionsOnState();
  },
  _toggleWFST() {
    this._toggle(document.getElementById('wfst'));
  },
  _toggleQuery() {
    this._toggle(document.getElementById('query-panel'));
  },
  _toggleEdit() {
    this._toggle(document.getElementById('edit-tool-panel'));
  },
  _toggleAboutPanel() {
    this._toggle(document.getElementById('about-panel'));
  },
  _toggleChartPanel(evt) {
    evt.preventDefault();
    this._toggle(document.getElementById('chart-panel'));
  },
  render() {
    var toolbarOptions = {style: {height: 71}, showMenuIconButton: false, title:"Al Baha University / جامعة الباحة"};
    return React.createElement("div", {id: 'content'},
      React.createElement(AppBar, toolbarOptions ,React.createElement(RaisedButton, {label: 'Table / الجدول',
 style: {margin: '10px 12px'}, onTouchTap: this._toggleTable.bind(this)}),
// Disable Query , Help and Edit
//React.createElement(RaisedButton, {style: {margin: '10px 12px'}, label: 'Query222', onTouchTap: this._toggleQuery.bind(this)}),
///React.createElement(RaisedButton, {style: {margin: '10px 12px'}, label: 'Help222', onTouchTap: function(){window.open('help/help.html','_blank')}}),
///React.createElement(RaisedButton, {style: {margin: '10px 12px'}, label: 'Edit222', onTouchTap: this._toggleEdit.bind(this)}),
React.createElement(ImageExport, {map:map}),
React.createElement(Select, {toggleGroup: 'navigation', map:map}),
React.createElement(Navigation, {toggleGroup: 'navigation', secondary: true}),
React.createElement(QGISPrint, {map:map, layouts:printLayouts, thumbnailPath: './resources/print/',}),
React.createElement(AddLayer, {map:map}),
React.createElement(Measure, {toggleGroup:'navigation', map:map})
      ),
      React.createElement(MapPanel, {useHistory: true, extent: originalExtent, id: 'map', map: map}
        ,
React.createElement("div", {id: 'query-panel', className:'query-panel'},
                                          React.createElement(QueryBuilder, {map: map})
                                        ),
 React.createElement("div", {id: 'edit-tool-panel'},
                                      React.createElement(Edit, {map: map, toggleGroup:'navigation'})
                                    ),
React.createElement("div", {id: 'popup', className: 'ol-popup'},
                                    React.createElement(InfoPopup, {map: map, hover: false})
                                  )
      )
      ,
 React.createElement("div", {id: 'table-panel', className: 'attributes-table'},
                                          React.createElement(FeatureTable, {offset: [20, 20], ref: 'table', resizeTo: 'table-panel', layer: lyr_doors_f, pointZoom:16, map: map})
                                    ),
React.createElement("div",{id: "layerlist"},
                                    React.createElement(LayerList, {showOpacity:true, showDownload:true,
                                        showGroupContent:true, showZoomTo:false, allowReordering:true,
                                        allowFiltering:true, tipLabel:'layers / طبقات الخريطة',
                                        downloadFormat:'GeoJSON', map:map})),
React.createElement("div", {id:'geolocation-control'},
                                    React.createElement(Geolocation, {map:map})
                                  ),
React.createElement(LoadingPanel, {map:map}),
React.createElement("div", {id:'zoom-buttons'},
                                    React.createElement(Zoom, {
                                    duration:250,
                                    zoomInTipLabel: 'Zoom in / تكبير الخريطة',
                                    zoomOutTipLabel: 'Zoom out / تصغير الخريطة',
                                    delta: 1.2,
                                    map: map})
                                  ),
React.createElement("div", {id:'home-button'},
                                    React.createElement(HomeButton, {map:map})
                                  )
    );
  }
});

ReactDOM.render(React.createElement(IntlProvider, {locale: 'en'}, React.createElement(BasicApp)), document.getElementById('main'));
