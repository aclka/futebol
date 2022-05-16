(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    g = g['toLowerCase']();
    var i = function () {
        var r = this['get']('data');
        r['updateText'](r['translateObjs'][f]);
    };
    var j = function (s) {
        var t = s['data']['nextSelectedIndex'];
        if (t >= 0x0) {
            var u = s['source']['get']('items')[t];
            var v = function () {
                u['unbind']('start', v, this);
                i['call'](this);
            };
            u['bind']('start', v, this);
        } else
            i['call'](this);
    };
    var k = function (w) {
        return function (x) {
            if (w in x) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var l = function (y, z) {
        return function (A, B) {
            if (y == A && z in B) {
                i['call'](this);
            }
        }['bind'](this);
    };
    var m = function (C, D, E) {
        for (var F = 0x0; F < C['length']; ++F) {
            var G = C[F];
            var H = G['get']('selectedIndex');
            if (H >= 0x0) {
                var I = D['split']('.');
                var J = G['get']('items')[H];
                if (E !== undefined && !E['call'](this, J))
                    continue;
                for (var K = 0x0; K < I['length']; ++K) {
                    if (J == undefined)
                        return '';
                    J = 'get' in J ? J['get'](I[K]) : J[I[K]];
                }
                return J;
            }
        }
        return '';
    };
    var n = function (L) {
        var M = L['get']('player');
        return M !== undefined && M['get']('viewerArea') == this['getMainViewer']();
    };
    switch (g) {
    case 'title':
    case 'subtitle':
        var p = function () {
            switch (g) {
            case 'title':
                return 'media.label';
            case 'subtitle':
                return 'media.data.subtitle';
            }
        }();
        if (p) {
            return function () {
                var N = this['_getPlayListsWithViewer'](this['getMainViewer']());
                if (!h) {
                    for (var O = 0x0; O < N['length']; ++O) {
                        N[O]['bind']('changing', j, this);
                    }
                    h = !![];
                }
                return m['call'](this, N, p, n);
            };
        }
        break;
    default:
        if (g['startsWith']('quiz.') && 'Quiz' in TDV) {
            var q = undefined;
            var p = function () {
                switch (g) {
                case 'quiz.questions.answered':
                    return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                case 'quiz.question.count':
                    return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                case 'quiz.items.found':
                    return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                case 'quiz.item.count':
                    return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                case 'quiz.score':
                    return TDV['Quiz']['PROPERTY']['SCORE'];
                case 'quiz.score.total':
                    return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                case 'quiz.time.remaining':
                    return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                case 'quiz.time.elapsed':
                    return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                case 'quiz.time.limit':
                    return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                case 'quiz.media.items.found':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                case 'quiz.media.item.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                case 'quiz.media.questions.answered':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                case 'quiz.media.question.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                case 'quiz.media.score':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                case 'quiz.media.score.total':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                case 'quiz.media.index':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                case 'quiz.media.count':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                case 'quiz.media.visited':
                    return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                default:
                    var P = /quiz\.([\w_]+)\.(.+)/['exec'](g);
                    if (P) {
                        q = P[0x1];
                        switch ('quiz.' + P[0x2]) {
                        case 'quiz.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                        case 'quiz.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                        case 'quiz.media.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                        case 'quiz.media.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                        case 'quiz.media.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                        case 'quiz.media.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                        case 'quiz.questions.answered':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                        case 'quiz.question.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                        case 'quiz.items.found':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                        case 'quiz.item.count':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                        case 'quiz.media.score':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                        case 'quiz.media.score.total':
                            return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                        }
                    }
                }
            }();
            if (p) {
                return function () {
                    var Q = this['get']('data')['quiz'];
                    if (Q) {
                        if (!h) {
                            if (q != undefined)
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, U[W]['id'], p), this);
                                    }
                                } else {
                                    Q['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], l['call'](this, q, p), this);
                                }
                            else
                                Q['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], k['call'](this, p), this);
                            h = !![];
                        }
                        try {
                            var Z = 0x0;
                            if (q != undefined) {
                                if (q == 'global') {
                                    var S = this['get']('data')['quizConfig'];
                                    var U = S['objectives'];
                                    for (var W = 0x0, Y = U['length']; W < Y; ++W) {
                                        Z += Q['getObjective'](U[W]['id'], p);
                                    }
                                } else {
                                    Z = Q['getObjective'](q, p);
                                }
                            } else {
                                Z = Q['get'](p);
                                if (p == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                    Z += 0x1;
                            }
                            return Z;
                        } catch (a0) {
                            return undefined;
                        }
                    }
                };
            }
        }
        break;
    }
    return '';
}
function createQuizConfig(player, a1) {
    var a2 = {};
    a2['player'] = player;
    a2['playList'] = a1;
    function a3(a6) {
        for (var a7 = 0x0; a7 < a6['length']; ++a7) {
            var a8 = a6[a7];
            if ('id' in a8)
                player[a8['id']] = a8;
        }
    }
    if (a2['questions']) {
        a3(a2['questions']);
        for (var a4 = 0x0; a4 < a2['questions']['length']; ++a4) {
            var a5 = a2['questions'][a4];
            a3(a5['options']);
        }
    }
    if (a2['objectives']) {
        a3(a2['objectives']);
    }
    if (a2['califications']) {
        a3(a2['califications']);
    }
    if (a2['score']) {
        player[a2['score']['id']] = a2['score'];
    }
    if (a2['question']) {
        player[a2['question']['id']] = a2['question'];
    }
    if (a2['timeout']) {
        player[a2['timeout']['id']] = a2['timeout'];
    }
    player['get']('data')['translateObjs'] = translateObjs;
    return a2;
}
var script = {"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B], 'cardboardAvailable')","backgroundColorRatios":[0],"class":"Player","desktopMipmappingEnabled":false,"toolTipHorizontalAlign":"center","gap":10,"scrollBarMargin":2,"borderSize":0,"scrollBarOpacity":0.5,"paddingLeft":0,"paddingTop":0,"backgroundPreloadEnabled":true,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"paddingRight":0,"mediaActivationMode":"window","width":"100%","horizontalAlign":"left","backgroundOpacity":1,"backgroundColorDirection":"vertical","contentOpaque":false,"definitions": [{"playbackBarOpacity":1,"subtitlesOpacity":1,"class":"ViewerArea","displayTooltipInTouchScreens":true,"toolTipShadowBlurRadius":1,"toolTipFontStyle":"normal","subtitlesEnabled":true,"borderSize":0,"toolTipFontWeight":"normal","width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingLeft":0,"playbackBarProgressOpacity":1,"progressBackgroundOpacity":1,"id":"MainViewer_mobile","playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"subtitlesPaddingRight":5,"subtitlesPaddingLeft":5,"paddingRight":0,"subtitlesBackgroundColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesGap":0,"transitionDuration":500,"toolTipFontColor":"#606060","toolTipPaddingLeft":3,"subtitlesBottom":50,"playbackBarProgressBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"toolTipTextShadowOpacity":0,"progressBarOpacity":1,"progressBottom":0,"playbackBarBackgroundColor":["#FFFFFF"],"height":"100%","playbackBarHeadShadowHorizontalLength":0,"subtitlesHorizontalAlign":"center","toolTipDisplayTime":600,"progressBackgroundColorRatios":[0],"playbackBarHeight":10,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","vrPointerColor":"#FFFFFF","translationTransitionDuration":1000,"vrPointerSelectionTime":2000,"progressRight":0,"subtitlesBorderSize":0,"toolTipTextShadowColor":"#000000","minHeight":25,"subtitlesTextDecoration":"none","subtitlesTextShadowVerticalLength":1,"minWidth":50,"borderRadius":0,"progressHeight":10,"playbackBarBackgroundColorDirection":"vertical","progressBorderSize":0,"playbackBarProgressBorderSize":0,"toolTipPaddingTop":2,"subtitlesFontColor":"#FFFFFF","progressBarBorderSize":0,"toolTipBorderSize":1,"playbackBarRight":0,"progressBarBorderRadius":0,"progressOpacity":1,"toolTipBorderColor":"#767676","subtitlesTop":0,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowBlurRadius":0,"toolTipHorizontalAlign":"center","toolTipPaddingBottom":2,"paddingTop":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","toolTipShadowSpread":0,"firstTransitionDuration":0,"surfaceReticleOpacity":0.6,"playbackBarHeadShadowVerticalLength":0,"paddingBottom":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","toolTipShadowOpacity":1,"playbackBarHeadShadowBlurRadius":1.5,"toolTipPaddingRight":3,"playbackBarHeadShadowOpacity":0.7,"progressBorderRadius":0,"progressBarBackgroundColorRatios":[0],"toolTipTextShadowBlurRadius":1,"transitionMode":"blending","subtitlesFontFamily":"Arial","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressLeft":0,"playbackBarHeadShadow":true,"progressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","subtitlesTextShadowColor":"#000000","doubleClickAction":"toggle_fullscreen","subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"playbackBarBackgroundOpacity":1,"toolTipBorderRadius":1,"subtitlesPaddingBottom":5,"playbackBarBorderColor":"#FFFFFF","toolTipBackgroundColor":"#F6F6F6","toolTipFontSize":"1.11vmin","playbackBarBorderRadius":0,"subtitlesShadow":false,"playbackBarHeadOpacity":1,"playbackBarProgressBorderColor":"#000000","toolTipOpacity":1,"toolTipShadowVerticalLength":0,"progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","toolTipShadowHorizontalLength":0,"progressBorderColor":"#000000","propagateClick":false,"shadow":false,"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"}},{"video":["this.videores_C3AEAF08_CD7C_3E4D_41CF_DED05ED4CAF7","this.videores_C3AE4F08_CD7C_3E4D_41E6_24BCE2C55216"],"class":"Video360","loop":false,"data":{"label":"vrvaiaescola_visita_lisboa_chiado_portugues_1"},"pitch":0,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","hfovMax":140,"adjacentPanoramas":[{"distance":2.34,"yaw":0,"select":"this.overlay_C002A7E5_CD7C_EDC7_41E2_D27EFD8C80F2.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C002A7E5_CD7C_EDC7_41E2_D27EFD8C80F2"},"class":"AdjacentPanorama","panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9"}],"hfovMin":60,"label":trans('media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5.label'),"overlays":["this.overlay_C002A7E5_CD7C_EDC7_41E2_D27EFD8C80F2"],"partial":false,"thumbnailUrl":"media/media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_t.jpg","hfov":360,"vfov":180},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera"},{"video":["this.videores_C3B39EB4_CD7C_3E45_41E0_A3638B854199","this.videores_C3B3FEC2_CD7C_3E3D_41E7_A352DC912DA9"],"class":"Video360","loop":false,"data":{"label":"video360"},"pitch":0,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","hfovMax":140,"adjacentPanoramas":[{"distance":2.34,"yaw":0,"select":"this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},"class":"AdjacentPanorama","panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9"}],"hfovMin":60,"label":trans('media_C0AB9F4A_CD30_4216_41CA_74AA125FB806.label'),"overlays":["this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"],"partial":false,"thumbnailUrl":"media/media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_t.jpg","hfov":360,"vfov":180},{"items":["this.Video360PlayListItem_C2348183_CD7C_2242_41E2_8B194B7FA37A"],"class":"PlayList","id":"playList_C23A111E_CD7C_2242_41CA_4BD13E980477"},{"class":"IconButton","data":{"name":"IconButton11832"},"borderSize":0,"width":50,"cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","horizontalAlign":"center","paddingBottom":0,"backgroundOpacity":0,"transparencyActive":false,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","paddingRight":0,"bottom":"5%","height":36,"verticalAlign":"middle","maxHeight":36,"maxWidth":50,"mode":"push","propagateClick":false,"minWidth":1,"shadow":false,"borderRadius":0,"minHeight":1,"right":"5%"},{"items":["this.PanoramaPlayListItem_C2347183_CD7C_2242_41E4_D1F209795C71"],"class":"PlayList","id":"mainPlayList"},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"RotationalCameraPosition"},"class":"RotationalCamera","manualZoomSpeed":1,"automaticZoomSpeed":10,"automaticRotationSpeed":10,"manualRotationSpeed":1800,"hoverFactor":0,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera"},{"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer","zoomEnabled":true,"buttonCardboardView":"this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","viewerArea":"this.MainViewer_mobile","aaEnabled":true,"surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true},{"vfov":180,"class":"Panorama","frames":[{"cube":{"levels":[{"width":9216,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"tags":"ondemand","rowCount":3},{"width":6144,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"tags":"ondemand","rowCount":2},{"width":3072,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","class":"CubicPanoramaFrame"}],"pitch":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","adjacentPanoramas":[{"distance":100,"yaw":30,"select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},"class":"AdjacentPanorama","panorama":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5"},{"distance":3.49,"yaw":0,"select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},"class":"AdjacentPanorama","panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806"},{"distance":100,"yaw":0,"select":"this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},"class":"AdjacentPanorama","panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806"}],"hfovMin":"150%","label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"hfovMax":130,"overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741","this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916","this.overlay_C3374531_CD30_4672_41D3_9642AA224F59"],"partial":false,"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","data":{"label":"intro"},"hfov":360},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"RotationalCameraPosition"},"class":"RotationalCamera","manualZoomSpeed":1,"automaticZoomSpeed":10,"automaticRotationSpeed":10,"manualRotationSpeed":1800,"hoverFactor":0,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera"},{"items":["this.Video360PlayListItem_C234A183_CD7C_2242_41E1_162F253D62C6"],"class":"PlayList","id":"playList_C23A011E_CD7C_2242_41C3_1BDAC1C10C47"},{"framerate":29.97,"width":3620,"bitrate":4635,"url":trans('videores_C3AEAF08_CD7C_3E4D_41CF_DED05ED4CAF7.url'),"class":"Video360Resource","height":2038,"posterURL":trans('videores_C3AEAF08_CD7C_3E4D_41CF_DED05ED4CAF7.posterURL'),"type":"video/mp4","id":"videores_C3AEAF08_CD7C_3E4D_41CF_DED05ED4CAF7"},{"framerate":29.97,"width":3840,"bitrate":4635,"url":trans('videores_C3AE4F08_CD7C_3E4D_41E6_24BCE2C55216.url'),"class":"Video360Resource","height":2160,"posterURL":trans('videores_C3AE4F08_CD7C_3E4D_41E6_24BCE2C55216.posterURL'),"type":"video/mp4","id":"videores_C3AE4F08_CD7C_3E4D_41E6_24BCE2C55216"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","rotationX":20,"verticalAlign":"middle","vfov":6.5,"data":{"label":"bt_voltar"},"hfov":29,"playbackPositions":[{"hfov":29,"yaw":0,"opacity":1,"rotationX":20,"class":"PanoramaOverlayPlaybackPosition","rotationY":0,"roll":0,"vfov":6.5,"timestamp":0,"pitch":-35.98}],"horizontalAlign":"center","pitch":-35.98,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C0FC17E7_CD7C_EDC3_41DB_F599917C17B7"],"data":{"label":"bt_voltar","hasPanoramaAction":true},"id":"overlay_C002A7E5_CD7C_EDC7_41E2_D27EFD8C80F2"},{"framerate":29.97,"width":3620,"bitrate":10088,"url":trans('videores_C3B39EB4_CD7C_3E45_41E0_A3638B854199.url'),"class":"Video360Resource","height":2038,"posterURL":trans('videores_C3B39EB4_CD7C_3E45_41E0_A3638B854199.posterURL'),"type":"video/mp4","id":"videores_C3B39EB4_CD7C_3E45_41E0_A3638B854199"},{"framerate":29.97,"width":3840,"bitrate":10088,"url":trans('videores_C3B3FEC2_CD7C_3E3D_41E7_A352DC912DA9.url'),"class":"Video360Resource","height":2160,"posterURL":trans('videores_C3B3FEC2_CD7C_3E3D_41E7_A352DC912DA9.posterURL'),"type":"video/mp4","id":"videores_C3B3FEC2_CD7C_3E3D_41E7_A352DC912DA9"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","rotationX":20,"verticalAlign":"middle","vfov":6.5,"data":{"label":"bt_voltar"},"hfov":29,"playbackPositions":[{"hfov":29,"yaw":0,"opacity":1,"rotationX":20,"class":"PanoramaOverlayPlaybackPosition","rotationY":0,"roll":0,"vfov":6.5,"timestamp":0,"pitch":-35.98}],"horizontalAlign":"center","pitch":-35.98,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"data":{"label":"bt_voltar","hasPanoramaAction":true},"id":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","media":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C23A111E_CD7C_2242_41CA_4BD13E980477, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C23A111E_CD7C_2242_41CA_4BD13E980477, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","class":"Video360PlayListItem","id":"Video360PlayListItem_C2348183_CD7C_2242_41E2_8B194B7FA37A"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_C2347183_CD7C_2242_41E4_D1F209795C71"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","rotationX":20,"vfov":6.5,"data":{"label":"bt_comecar"},"hfov":29,"verticalAlign":"middle","horizontalAlign":"center","pitch":-26,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"data":{"label":"bt_comecar","hasPanoramaAction":true},"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1","distance":50,"yaw":30,"class":"HotspotPanoramaOverlayImage","rotationY":30,"vfov":37.18,"data":{"label":"janela_intro"},"hfov":25,"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"],"data":{"label":"janela_intro","hasPanoramaAction":true},"id":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","vfov":37.18,"data":{"label":"janela_intro"},"hfov":29,"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"],"data":{"label":"janela_intro","hasPanoramaAction":true},"id":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},{"enabledInCardboard":true,"maps":[],"data":{"label":"janela_intro"},"useHandCursor":true,"items":[{"image":"this.res_C23D5D2A_CD30_4616_41DB_7773EC3BED79","distance":50,"yaw":-30,"class":"HotspotPanoramaOverlayImage","rotationY":-30,"vfov":37.18,"data":{"label":"janela_intro"},"hfov":25,"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"],"class":"HotspotPanoramaOverlay","id":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera","media":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C23A011E_CD7C_2242_41C3_1BDAC1C10C47, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C23A011E_CD7C_2242_41C3_1BDAC1C10C47, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","class":"Video360PlayListItem","id":"Video360PlayListItem_C234A183_CD7C_2242_41E1_162F253D62C6"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C2347183_CD7C_2242_41E4_D1F209795C71); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C0FC17E7_CD7C_EDC3_41DB_F599917C17B7"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C2347183_CD7C_2242_41E4_D1F209795C71); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C2348183_CD7C_2242_41E2_8B194B7FA37A); this.setMediaBehaviour(this.playList_C23A111E_CD7C_2242_41CA_4BD13E980477, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"levels":[{"height":458,"width":381,"url":"media/res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C234A183_CD7C_2242_41E1_162F253D62C6); this.setMediaBehaviour(this.playList_C23A011E_CD7C_2242_41C3_1BDAC1C10C47, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"},{"levels":[{"height":535,"width":444,"url":"media/res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C2348183_CD7C_2242_41E2_8B194B7FA37A); this.setMediaBehaviour(this.playList_C23A111E_CD7C_2242_41CA_4BD13E980477, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"},{"levels":[{"height":458,"width":381,"url":"media/res_C23D5D2A_CD30_4616_41DB_7773EC3BED79_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D5D2A_CD30_4616_41DB_7773EC3BED79"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"}],"children":["this.MainViewer_mobile","this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B"],"defaultVRPointer":"laser","defaultMenu":["fullscreen","mute","rotation"],"height":"100%","verticalAlign":"top","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","layout":"absolute","mobileMipmappingEnabled":false,"overflow":"hidden","scrollBarVisible":"rollOver","scripts":{"quizStart":TDV.Tour.Script.quizStart,"existsKey":TDV.Tour.Script.existsKey,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"translate":TDV.Tour.Script.translate,"quizFinish":TDV.Tour.Script.quizFinish,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"playAudioList":TDV.Tour.Script.playAudioList,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"textToSpeech":TDV.Tour.Script.textToSpeech,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"clone":TDV.Tour.Script.clone,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"openLink":TDV.Tour.Script.openLink,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"init":TDV.Tour.Script.init,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getMediaByName":TDV.Tour.Script.getMediaByName,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"historyGoForward":TDV.Tour.Script.historyGoForward,"unregisterKey":TDV.Tour.Script.unregisterKey,"historyGoBack":TDV.Tour.Script.historyGoBack,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"cloneCamera":TDV.Tour.Script.cloneCamera,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getOverlays":TDV.Tour.Script.getOverlays,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isPanorama":TDV.Tour.Script.isPanorama,"mixObject":TDV.Tour.Script.mixObject,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"executeJS":TDV.Tour.Script.executeJS,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"setMapLocation":TDV.Tour.Script.setMapLocation,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"shareSocial":TDV.Tour.Script.shareSocial,"registerKey":TDV.Tour.Script.registerKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"showPopupImage":TDV.Tour.Script.showPopupImage,"setValue":TDV.Tour.Script.setValue,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPixels":TDV.Tour.Script.getPixels,"initQuiz":TDV.Tour.Script.initQuiz,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showWindow":TDV.Tour.Script.showWindow,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"downloadFile":TDV.Tour.Script.downloadFile,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"syncPlaylists":TDV.Tour.Script.syncPlaylists},"vrPolyfillScale":0.75,"scrollBarWidth":10,"propagateClick":false,"downloadEnabled":true,"minWidth":0,"shadow":false,"borderRadius":0,"minHeight":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"volume":1,"pitch":1,"speechOnTooltip":false,"stopBackgroundAudio":false,"rate":1},"name":"Player484","locales":{"en":"locale/en.txt"},"defaultLocale":"en"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022