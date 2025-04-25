ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3006").setExtent([272316.950810, 6490840.776401, 742096.156436, 6787583.376401]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Marknedtonad_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.lantmateriet.se/topowebb-skikt/wms/v1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "mark_nedtonad",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Mark nedtonad',
                            popuplayertitle: 'Mark nedtonad',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Marknedtonad_1, 0]);
var lyr_Hydrografiytornedtonad_2 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://maps.lantmateriet.se/topowebb-skikt/wms/v1.1",
                              attributions: ' ',
                              params: {
                                "LAYERS": "hydrografi_ytor_nedtonad",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: 'Hydrografi-ytor nedtonad',
                            popuplayertitle: 'Hydrografi-ytor nedtonad',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Hydrografiytornedtonad_2, 0]);
var format_projekt_ln_3 = new ol.format.GeoJSON();
var features_projekt_ln_3 = format_projekt_ln_3.readFeatures(json_projekt_ln_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_projekt_ln_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projekt_ln_3.addFeatures(features_projekt_ln_3);
var lyr_projekt_ln_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_projekt_ln_3, 
                style: style_projekt_ln_3,
                popuplayertitle: 'projekt_län',
                interactive: true,
                title: '<img src="styles/legend/projekt_ln_3.png" /> projekt_län'
            });
var format_sjprovfiske_4 = new ol.format.GeoJSON();
var features_sjprovfiske_4 = format_sjprovfiske_4.readFeatures(json_sjprovfiske_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_sjprovfiske_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sjprovfiske_4.addFeatures(features_sjprovfiske_4);
var lyr_sjprovfiske_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_sjprovfiske_4, 
                style: style_sjprovfiske_4,
                popuplayertitle: 'sjöprovfiske',
                interactive: true,
                title: '<img src="styles/legend/sjprovfiske_4.png" /> sjöprovfiske'
            });
var format_Skagernpolygoner_Skagern_5 = new ol.format.GeoJSON();
var features_Skagernpolygoner_Skagern_5 = format_Skagernpolygoner_Skagern_5.readFeatures(json_Skagernpolygoner_Skagern_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_Skagernpolygoner_Skagern_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Skagernpolygoner_Skagern_5.addFeatures(features_Skagernpolygoner_Skagern_5);
var lyr_Skagernpolygoner_Skagern_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Skagernpolygoner_Skagern_5, 
                style: style_Skagernpolygoner_Skagern_5,
                popuplayertitle: 'Skagern — polygoner_Skagern',
                interactive: true,
                title: '<img src="styles/legend/Skagernpolygoner_Skagern_5.png" /> Skagern — polygoner_Skagern'
            });
var format_avveckling_markavvattningsfretag_6 = new ol.format.GeoJSON();
var features_avveckling_markavvattningsfretag_6 = format_avveckling_markavvattningsfretag_6.readFeatures(json_avveckling_markavvattningsfretag_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_avveckling_markavvattningsfretag_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_avveckling_markavvattningsfretag_6.addFeatures(features_avveckling_markavvattningsfretag_6);
var lyr_avveckling_markavvattningsfretag_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_avveckling_markavvattningsfretag_6, 
                style: style_avveckling_markavvattningsfretag_6,
                popuplayertitle: 'avveckling_markavvattningsföretag',
                interactive: true,
                title: '<img src="styles/legend/avveckling_markavvattningsfretag_6.png" /> avveckling_markavvattningsföretag'
            });
var format_inventering_asp_7 = new ol.format.GeoJSON();
var features_inventering_asp_7 = format_inventering_asp_7.readFeatures(json_inventering_asp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_inventering_asp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventering_asp_7.addFeatures(features_inventering_asp_7);
var lyr_inventering_asp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventering_asp_7, 
                style: style_inventering_asp_7,
                popuplayertitle: 'inventering_asp',
                interactive: true,
                title: '<img src="styles/legend/inventering_asp_7.png" /> inventering_asp'
            });
var format_inventering_projektering_vattendrag_8 = new ol.format.GeoJSON();
var features_inventering_projektering_vattendrag_8 = format_inventering_projektering_vattendrag_8.readFeatures(json_inventering_projektering_vattendrag_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_inventering_projektering_vattendrag_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_inventering_projektering_vattendrag_8.addFeatures(features_inventering_projektering_vattendrag_8);
var lyr_inventering_projektering_vattendrag_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_inventering_projektering_vattendrag_8, 
                style: style_inventering_projektering_vattendrag_8,
                popuplayertitle: 'inventering_projektering_vattendrag',
                interactive: true,
                title: '<img src="styles/legend/inventering_projektering_vattendrag_8.png" /> inventering_projektering_vattendrag'
            });
var format_restaurering_habitatfrstrkning_9 = new ol.format.GeoJSON();
var features_restaurering_habitatfrstrkning_9 = format_restaurering_habitatfrstrkning_9.readFeatures(json_restaurering_habitatfrstrkning_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_restaurering_habitatfrstrkning_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_restaurering_habitatfrstrkning_9.addFeatures(features_restaurering_habitatfrstrkning_9);
var lyr_restaurering_habitatfrstrkning_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_restaurering_habitatfrstrkning_9, 
                style: style_restaurering_habitatfrstrkning_9,
                popuplayertitle: 'restaurering_habitatförstärkning',
                interactive: true,
                title: '<img src="styles/legend/restaurering_habitatfrstrkning_9.png" /> restaurering_habitatförstärkning'
            });
var format_THS_inventering_10 = new ol.format.GeoJSON();
var features_THS_inventering_10 = format_THS_inventering_10.readFeatures(json_THS_inventering_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_THS_inventering_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_THS_inventering_10.addFeatures(features_THS_inventering_10);
var lyr_THS_inventering_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_THS_inventering_10, 
                style: style_THS_inventering_10,
                popuplayertitle: 'THS_inventering',
                interactive: true,
                title: '<img src="styles/legend/THS_inventering_10.png" /> THS_inventering'
            });
var format_biotopkartering_11 = new ol.format.GeoJSON();
var features_biotopkartering_11 = format_biotopkartering_11.readFeatures(json_biotopkartering_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_biotopkartering_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_biotopkartering_11.addFeatures(features_biotopkartering_11);
var lyr_biotopkartering_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_biotopkartering_11, 
                style: style_biotopkartering_11,
                popuplayertitle: 'biotopkartering',
                interactive: true,
                title: '<img src="styles/legend/biotopkartering_11.png" /> biotopkartering'
            });
var format_NAP_renden_12 = new ol.format.GeoJSON();
var features_NAP_renden_12 = format_NAP_renden_12.readFeatures(json_NAP_renden_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_NAP_renden_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAP_renden_12.addFeatures(features_NAP_renden_12);
var lyr_NAP_renden_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAP_renden_12, 
                style: style_NAP_renden_12,
                popuplayertitle: 'NAP_ärenden',
                interactive: true,
                title: '<img src="styles/legend/NAP_renden_12.png" /> NAP_ärenden'
            });
var format_projektering_dammar_13 = new ol.format.GeoJSON();
var features_projektering_dammar_13 = format_projektering_dammar_13.readFeatures(json_projektering_dammar_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_projektering_dammar_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_projektering_dammar_13.addFeatures(features_projektering_dammar_13);
var lyr_projektering_dammar_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_projektering_dammar_13, 
                style: style_projektering_dammar_13,
                popuplayertitle: 'projektering_dammar',
                interactive: true,
                title: '<img src="styles/legend/projektering_dammar_13.png" /> projektering_dammar'
            });
var format_SGS_kontor_14 = new ol.format.GeoJSON();
var features_SGS_kontor_14 = format_SGS_kontor_14.readFeatures(json_SGS_kontor_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_SGS_kontor_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SGS_kontor_14.addFeatures(features_SGS_kontor_14);
var lyr_SGS_kontor_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SGS_kontor_14, 
                style: style_SGS_kontor_14,
                popuplayertitle: 'SGS_kontor',
                interactive: true,
                title: '<img src="styles/legend/SGS_kontor_14.png" /> SGS_kontor'
            });
var format_dammutrivningar_15 = new ol.format.GeoJSON();
var features_dammutrivningar_15 = format_dammutrivningar_15.readFeatures(json_dammutrivningar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3006'});
var jsonSource_dammutrivningar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dammutrivningar_15.addFeatures(features_dammutrivningar_15);
var lyr_dammutrivningar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_dammutrivningar_15, 
                style: style_dammutrivningar_15,
                popuplayertitle: 'dammutrivningar',
                interactive: true,
                title: '<img src="styles/legend/dammutrivningar_15.png" /> dammutrivningar'
            });
var group_Baskarta = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_Marknedtonad_1,lyr_Hydrografiytornedtonad_2,],
                                fold: 'open',
                                title: 'Baskarta'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Marknedtonad_1.setVisible(true);lyr_Hydrografiytornedtonad_2.setVisible(true);lyr_projekt_ln_3.setVisible(true);lyr_sjprovfiske_4.setVisible(true);lyr_Skagernpolygoner_Skagern_5.setVisible(true);lyr_avveckling_markavvattningsfretag_6.setVisible(true);lyr_inventering_asp_7.setVisible(true);lyr_inventering_projektering_vattendrag_8.setVisible(true);lyr_restaurering_habitatfrstrkning_9.setVisible(true);lyr_THS_inventering_10.setVisible(true);lyr_biotopkartering_11.setVisible(true);lyr_NAP_renden_12.setVisible(true);lyr_projektering_dammar_13.setVisible(true);lyr_SGS_kontor_14.setVisible(true);lyr_dammutrivningar_15.setVisible(true);
var layersList = [group_Baskarta,lyr_projekt_ln_3,lyr_sjprovfiske_4,lyr_Skagernpolygoner_Skagern_5,lyr_avveckling_markavvattningsfretag_6,lyr_inventering_asp_7,lyr_inventering_projektering_vattendrag_8,lyr_restaurering_habitatfrstrkning_9,lyr_THS_inventering_10,lyr_biotopkartering_11,lyr_NAP_renden_12,lyr_projektering_dammar_13,lyr_SGS_kontor_14,lyr_dammutrivningar_15];
lyr_projekt_ln_3.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'län': 'län', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_sjprovfiske_4.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', 'popup': 'popup', });
lyr_Skagernpolygoner_Skagern_5.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_avveckling_markavvattningsfretag_6.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_inventering_asp_7.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_inventering_projektering_vattendrag_8.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', 'popup': 'popup', });
lyr_restaurering_habitatfrstrkning_9.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_THS_inventering_10.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_biotopkartering_11.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'undersökning': 'undersökning', 'längd (km)': 'längd (km)', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_NAP_renden_12.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_projektering_dammar_13.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', 'popup': 'popup', });
lyr_SGS_kontor_14.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', });
lyr_dammutrivningar_15.set('fieldAliases', {'projekt': 'projekt', 'typ': 'typ', 'beskrivning': 'beskrivning', 'fallhöjd (m)': 'fallhöjd (m)', 'år': 'år', 'status': 'status', 'län': 'län', 'beställare': 'beställare', 'utförare': 'utförare', 'intern_id': 'intern_id', 'shp_fil': 'shp_fil', 'koordinatsystem': 'koordinatsystem', 'förebild': 'förebild', 'efterbild': 'efterbild', 'länk': 'länk', 'popup': 'popup', });
lyr_projekt_ln_3.set('fieldImages', {'projekt': 'TextEdit', 'typ': 'TextEdit', 'beskrivning': 'TextEdit', 'län': 'TextEdit', 'intern_id': 'Range', 'shp_fil': 'TextEdit', 'koordinatsystem': 'TextEdit', 'förebild': 'TextEdit', 'efterbild': 'TextEdit', 'länk': 'TextEdit', });
lyr_sjprovfiske_4.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', 'popup': '', });
lyr_Skagernpolygoner_Skagern_5.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_avveckling_markavvattningsfretag_6.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_inventering_asp_7.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_inventering_projektering_vattendrag_8.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', 'popup': '', });
lyr_restaurering_habitatfrstrkning_9.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_THS_inventering_10.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_biotopkartering_11.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'undersökning': '', 'längd (km)': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_NAP_renden_12.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_projektering_dammar_13.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', 'popup': '', });
lyr_SGS_kontor_14.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', });
lyr_dammutrivningar_15.set('fieldImages', {'projekt': '', 'typ': '', 'beskrivning': '', 'fallhöjd (m)': '', 'år': '', 'status': '', 'län': '', 'beställare': '', 'utförare': '', 'intern_id': '', 'shp_fil': '', 'koordinatsystem': '', 'förebild': '', 'efterbild': '', 'länk': '', 'popup': '', });
lyr_projekt_ln_3.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'län': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_sjprovfiske_4.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', 'popup': 'no label', });
lyr_Skagernpolygoner_Skagern_5.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_avveckling_markavvattningsfretag_6.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_inventering_asp_7.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_inventering_projektering_vattendrag_8.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', 'popup': 'no label', });
lyr_restaurering_habitatfrstrkning_9.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_THS_inventering_10.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_biotopkartering_11.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'undersökning': 'no label', 'längd (km)': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_NAP_renden_12.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', });
lyr_projektering_dammar_13.set('fieldLabels', {'projekt': 'no label', 'typ': 'no label', 'beskrivning': 'no label', 'år': 'no label', 'status': 'no label', 'län': 'no label', 'beställare': 'no label', 'utförare': 'no label', 'intern_id': 'no label', 'shp_fil': 'no label', 'koordinatsystem': 'no label', 'förebild': 'no label', 'efterbild': 'no label', 'länk': 'no label', 'popup': 'no label', });
lyr_SGS_kontor_14.set('fieldLabels', {'projekt': 'header label - always visible', 'typ': 'inline label - visible with data', 'beskrivning': 'inline label - visible with data', 'år': 'inline label - visible with data', 'status': 'inline label - visible with data', 'län': 'inline label - visible with data', 'beställare': 'inline label - visible with data', 'utförare': 'inline label - visible with data', 'intern_id': 'hidden field', 'shp_fil': 'hidden field', 'koordinatsystem': 'hidden field', 'förebild': 'no label', 'efterbild': 'hidden field', 'länk': 'no label', });
lyr_dammutrivningar_15.set('fieldLabels', {'projekt': 'header label - always visible', 'typ': 'inline label - visible with data', 'beskrivning': 'inline label - visible with data', 'fallhöjd (m)': 'inline label - visible with data', 'år': 'inline label - visible with data', 'status': 'inline label - visible with data', 'län': 'inline label - visible with data', 'beställare': 'inline label - visible with data', 'utförare': 'inline label - visible with data', 'intern_id': 'hidden field', 'shp_fil': 'hidden field', 'koordinatsystem': 'hidden field', 'förebild': 'hidden field', 'efterbild': 'hidden field', 'länk': 'inline label - always visible', 'popup': 'no label', });
lyr_dammutrivningar_15.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});