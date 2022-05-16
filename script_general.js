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
var script = {"borderRadius":0,"borderSize":0,"shadow":false,"class":"Player","scrollBarWidth":10,"backgroundColorRatios":[0],"scrollBarMargin":2,"backgroundOpacity":1,"gap":10,"defaultMenu":["fullscreen","mute","rotation"],"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"definitions": [{"video":["this.videores_C2450135_CD02_395E_41E4_F392E81FB244","this.videores_DD965E85_CD02_6B39_41DE_F1A7A8814829"],"partial":false,"loop":false,"class":"Video360","adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C38C7564_CD06_79FF_41E3_DC474439B75E.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C38C7564_CD06_79FF_41E3_DC474439B75E"},"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"AdjacentPanorama"}],"pitch":0,"id":"media_C354F0E6_CD06_78FB_41BD_E581168139EC","thumbnailUrl":"media/media_C354F0E6_CD06_78FB_41BD_E581168139EC_t.jpg","label":trans('media_C354F0E6_CD06_78FB_41BD_E581168139EC.label'),"overlays":["this.overlay_C38C7564_CD06_79FF_41E3_DC474439B75E"],"hfovMin":60,"vfov":180,"hfov":360,"hfovMax":140,"data":{"label":"video360"}},{"subtitlesTextShadowBlurRadius":0,"class":"ViewerArea","toolTipFontSize":"1.11vmin","borderSize":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarHeadBorderRadius":0,"playbackBarOpacity":1,"subtitlesFontFamily":"Arial","subtitlesFontSize":"3vmin","progressBorderColor":"#000000","data":{"name":"Main Viewer"},"playbackBarBottom":5,"displayTooltipInSurfaceSelection":true,"id":"MainViewer","playbackBarProgressOpacity":1,"subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","toolTipPaddingLeft":6,"subtitlesPaddingBottom":5,"toolTipFontFamily":"Arial","translationTransitionDuration":1000,"playbackBarHeadBorderColor":"#000000","surfaceReticleColor":"#FFFFFF","transitionDuration":500,"propagateClick":false,"subtitlesPaddingTop":5,"width":"100%","subtitlesFontWeight":"normal","surfaceReticleSelectionOpacity":1,"toolTipShadowHorizontalLength":0,"playbackBarBorderSize":0,"subtitlesEnabled":true,"playbackBarProgressBackgroundColorDirection":"vertical","playbackBarHeadShadowVerticalLength":0,"vrPointerSelectionColor":"#FF6600","progressBarBackgroundColor":["#3399FF"],"playbackBarBackgroundColor":["#FFFFFF"],"progressBackgroundColor":["#FFFFFF"],"toolTipDisplayTime":600,"playbackBarHeight":10,"vrPointerColor":"#FFFFFF","subtitlesPaddingLeft":5,"subtitlesShadow":false,"playbackBarHeadBackgroundColorDirection":"vertical","progressBarOpacity":1,"vrPointerSelectionTime":2000,"displayTooltipInTouchScreens":true,"borderRadius":0,"toolTipPaddingRight":6,"subtitlesOpacity":1,"height":"100%","playbackBarHeadWidth":6,"subtitlesBackgroundOpacity":0.2,"subtitlesTextShadowVerticalLength":1,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"firstTransitionDuration":0,"toolTipShadowColor":"#333138","playbackBarProgressBorderSize":0,"toolTipHorizontalAlign":"center","toolTipBorderRadius":3,"subtitlesGap":0,"subtitlesHorizontalAlign":"center","subtitlesBackgroundColor":"#000000","shadow":false,"progressBottom":0,"toolTipShadowVerticalLength":0,"playbackBarBackgroundColorDirection":"vertical","subtitlesVerticalAlign":"bottom","subtitlesBottom":50,"toolTipBorderColor":"#767676","toolTipPaddingBottom":4,"playbackBarRight":0,"paddingTop":0,"progressBorderSize":0,"playbackBarProgressBorderRadius":0,"progressBarBorderRadius":0,"toolTipFontColor":"#606060","playbackBarLeft":0,"paddingBottom":0,"toolTipShadowOpacity":1,"playbackBarHeadHeight":15,"playbackBarHeadShadowOpacity":0.7,"paddingLeft":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressHeight":10,"playbackBarHeadShadowColor":"#000000","subtitlesPaddingRight":5,"progressBarBorderSize":0,"playbackBarBackgroundOpacity":1,"progressRight":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowBlurRadius":3,"progressOpacity":1,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipTextShadowBlurRadius":3,"subtitlesBorderSize":0,"paddingRight":0,"toolTipBorderSize":1,"subtitlesBorderColor":"#FFFFFF","doubleClickAction":"toggle_fullscreen","toolTipPaddingTop":4,"transitionMode":"blending","playbackBarHeadShadowHorizontalLength":0,"toolTipBackgroundColor":"#F6F6F6","toolTipFontWeight":"normal","playbackBarHeadShadow":true,"toolTipFontStyle":"normal","surfaceReticleOpacity":0.6,"progressBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","playbackBarBorderColor":"#FFFFFF","subtitlesTop":0,"toolTipTextShadowColor":"#000000","playbackBarBorderRadius":0,"progressLeft":0,"playbackBarProgressBackgroundColorRatios":[0],"playbackBarProgressBorderColor":"#000000","progressBackgroundOpacity":1,"toolTipTextShadowOpacity":0,"progressBarBackgroundColorRatios":[0],"progressBackgroundColorDirection":"vertical","subtitlesTextDecoration":"none","subtitlesTextShadowHorizontalLength":1,"toolTipOpacity":1,"minHeight":50,"playbackBarHeadOpacity":1,"progressBarBorderColor":"#000000","subtitlesFontColor":"#FFFFFF","minWidth":100,"toolTipShadowBlurRadius":3},{"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"hoverFactor":0,"class":"PanoramaCamera","id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera"},{"class":"PlayList","items":["this.PanoramaPlayListItem_DDE11621_CD02_7B76_41E5_2011E30381CA"],"id":"mainPlayList"},{"class":"PlayList","items":["this.Video360PlayListItem_DDE2B621_CD02_7B76_41D6_242394F8B400"],"id":"playList_DDE7D594_CD02_795E_41E8_18CB7D0A3B71"},{"manualRotationSpeed":1800,"manualZoomSpeed":1,"automaticZoomSpeed":10,"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","pitch":0,"hfov":120},"hoverFactor":0,"automaticRotationSpeed":10,"class":"RotationalCamera","id":"media_C354F0E6_CD06_78FB_41BD_E581168139EC_camera"},{"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"mouseControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"touchControlMode":"drag_rotation","viewerArea":"this.MainViewer","displayPlaybackBar":true,"arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewerPanoramaPlayer"},{"partial":false,"hfov":360,"class":"Panorama","adjacentPanoramas":[{"distance":100,"yaw":0,"select":"this.overlay_C36E6283_CCA0_6F90_41E8_D97E54A7D47B.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C36E6283_CCA0_6F90_41E8_D97E54A7D47B"},"panorama":"this.media_C354F0E6_CD06_78FB_41BD_E581168139EC","class":"AdjacentPanorama"}],"pitch":0,"frames":[{"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","cube":{"levels":[{"width":9216,"colCount":18,"tags":"ondemand","url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","rowCount":3},{"width":6144,"colCount":12,"tags":"ondemand","url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"tags":["ondemand","preload"],"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C36E6283_CCA0_6F90_41E8_D97E54A7D47B"],"hfovMax":130,"vfov":180,"data":{"label":"intro"},"hfovMin":"150%"},{"width":3620,"type":"video/mp4","url":trans('videores_C2450135_CD02_395E_41E4_F392E81FB244.url'),"posterURL":trans('videores_C2450135_CD02_395E_41E4_F392E81FB244.posterURL'),"height":2038,"class":"Video360Resource","bitrate":10075,"framerate":29.97,"id":"videores_C2450135_CD02_395E_41E4_F392E81FB244"},{"width":3840,"type":"video/mp4","url":trans('videores_DD965E85_CD02_6B39_41DE_F1A7A8814829.url'),"posterURL":trans('videores_DD965E85_CD02_6B39_41DE_F1A7A8814829.posterURL'),"height":2160,"class":"Video360Resource","bitrate":10075,"framerate":29.97,"id":"videores_DD965E85_CD02_6B39_41DE_F1A7A8814829"},{"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"bt_voltar"},"useHandCursor":true,"maps":[],"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"rotationX":20,"playbackPositions":[{"vfov":6.5,"opacity":1,"yaw":0,"rotationX":20,"rotationY":0,"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-25.98,"hfov":29}],"yaw":0,"hfov":29,"vfov":6.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-25.98,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_C38C7564_CD06_79FF_41E3_DC474439B75E"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_DDE11621_CD02_7B76_41E5_2011E30381CA"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.media_C354F0E6_CD06_78FB_41BD_E581168139EC_camera","media":"this.media_C354F0E6_CD06_78FB_41BD_E581168139EC","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DDE7D594_CD02_795E_41E8_18CB7D0A3B71, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DDE7D594_CD02_795E_41E8_18CB7D0A3B71, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","id":"Video360PlayListItem_DDE2B621_CD02_7B76_41D6_242394F8B400"},{"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"rotationX":20,"yaw":0,"hfov":29,"vfov":6.5,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_comecar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-26,"scaleMode":"fit_inside"}],"data":{"label":"bt_comecar"},"useHandCursor":true,"maps":[],"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"areas":["this.HotspotPanoramaOverlayArea_C3AE8C2B_CCA0_1A97_41D7_8434D7E1CBB8"],"class":"HotspotPanoramaOverlay","data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"maps":[],"items":[{"image":"this.res_DC2D130C_CD02_594E_41B4_D4BF314990BA","distance":50,"yaw":0,"hfov":29,"vfov":37.18,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"enabledInCardboard":true,"id":"overlay_C36E6283_CCA0_6F90_41E8_D97E54A7D47B"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_DDE11621_CD02_7B76_41E5_2011E30381CA); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png"}],"class":"ImageResource","id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png"}],"class":"ImageResource","id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_DDE2B621_CD02_7B76_41D6_242394F8B400); this.setMediaBehaviour(this.playList_DDE7D594_CD02_795E_41E8_18CB7D0A3B71, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewerPanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_C3AE8C2B_CCA0_1A97_41D7_8434D7E1CBB8"},{"levels":[{"height":535,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2D130C_CD02_594E_41B4_D4BF314990BA_0.png"}],"class":"ImageResource","id":"res_DC2D130C_CD02_594E_41B4_D4BF314990BA"}],"width":"100%","paddingBottom":0,"defaultVRPointer":"laser","paddingLeft":0,"horizontalAlign":"left","overflow":"hidden","propagateClick":false,"scripts":{"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getMainViewer":TDV.Tour.Script.getMainViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getKey":TDV.Tour.Script.getKey,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"openLink":TDV.Tour.Script.openLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getOverlays":TDV.Tour.Script.getOverlays,"existsKey":TDV.Tour.Script.existsKey,"clone":TDV.Tour.Script.clone,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setValue":TDV.Tour.Script.setValue,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"registerKey":TDV.Tour.Script.registerKey,"unregisterKey":TDV.Tour.Script.unregisterKey,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"init":TDV.Tour.Script.init,"isPanorama":TDV.Tour.Script.isPanorama,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"initQuiz":TDV.Tour.Script.initQuiz,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"executeJS":TDV.Tour.Script.executeJS,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumePlayers":TDV.Tour.Script.resumePlayers,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"textToSpeech":TDV.Tour.Script.textToSpeech,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"mixObject":TDV.Tour.Script.mixObject,"showWindow":TDV.Tour.Script.showWindow,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"showPopupImage":TDV.Tour.Script.showPopupImage,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setLocale":TDV.Tour.Script.setLocale,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"shareSocial":TDV.Tour.Script.shareSocial,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizStart":TDV.Tour.Script.quizStart,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"downloadFile":TDV.Tour.Script.downloadFile,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentByName":TDV.Tour.Script.getComponentByName,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"quizFinish":TDV.Tour.Script.quizFinish,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaByName":TDV.Tour.Script.getMediaByName,"translate":TDV.Tour.Script.translate,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode},"backgroundColorDirection":"vertical","verticalAlign":"top","paddingRight":0,"mediaActivationMode":"window","desktopMipmappingEnabled":false,"vrPolyfillScale":0.75,"backgroundColor":["#FFFFFF"],"layout":"absolute","height":"100%","scrollBarOpacity":0.5,"children":["this.MainViewer"],"scrollBarColor":"#000000","downloadEnabled":true,"scrollBarVisible":"rollOver","mobileMipmappingEnabled":false,"contentOpaque":false,"minHeight":0,"start":"this.init()","backgroundPreloadEnabled":true,"minWidth":0,"data":{"name":"Player484","textToSpeechConfig":{"stopBackgroundAudio":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"speechOnTooltip":false,"pitch":1,"rate":1},"locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"toolTipHorizontalAlign":"center"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022