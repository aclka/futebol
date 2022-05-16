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
var script = {"backgroundColorRatios":[0],"class":"Player","start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28], 'cardboardAvailable')","toolTipHorizontalAlign":"center","gap":10,"scrollBarMargin":2,"borderSize":0,"scrollBarOpacity":0.5,"paddingLeft":0,"paddingTop":0,"backgroundPreloadEnabled":true,"paddingBottom":0,"id":"rootPlayer","mouseWheelEnabled":true,"paddingRight":0,"mediaActivationMode":"window","width":"100%","horizontalAlign":"left","backgroundOpacity":1,"defaultMenu":["fullscreen","mute","rotation"],"backgroundColorDirection":"vertical","contentOpaque":false,"definitions": [{"video":["this.videores_C36C88C0_CD14_325C_418D_93CC6C0DC430","this.videores_C36C18C2_CD14_325C_41A0_3ED8D1085EAB"],"class":"Video360","loop":false,"data":{"label":"video360"},"pitch":0,"id":"media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E","hfovMax":140,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C39AE7D2_CD0F_9BEE_41D6_24314D2C9291.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","data":{"overlayID":"overlay_C39AE7D2_CD0F_9BEE_41D6_24314D2C9291"}}],"hfovMin":60,"label":trans('media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E.label'),"overlays":["this.overlay_C39AE7D2_CD0F_9BEE_41D6_24314D2C9291"],"partial":false,"thumbnailUrl":"media/media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E_t.jpg","hfov":360,"vfov":180},{"items":["this.PanoramaPlayListItem_C3BA6A46_CD14_3661_41DA_A11678B18441"],"class":"PlayList","id":"mainPlayList"},{"playbackBarOpacity":1,"subtitlesEnabled":true,"toolTipShadowHorizontalLength":0,"class":"ViewerArea","displayTooltipInTouchScreens":true,"toolTipShadowBlurRadius":3,"toolTipFontStyle":"normal","borderSize":0,"toolTipFontWeight":"normal","width":"100%","playbackBarHeadBackgroundColor":["#111111","#666666"],"paddingLeft":0,"playbackBarProgressOpacity":1,"progressBackgroundOpacity":1,"id":"MainViewer","playbackBarHeadBorderColor":"#000000","playbackBarBottom":5,"toolTipOpacity":1,"subtitlesPaddingLeft":5,"paddingRight":0,"subtitlesBackgroundColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesPaddingRight":5,"subtitlesGap":0,"transitionDuration":500,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingLeft":6,"subtitlesBottom":50,"playbackBarProgressBackgroundColorDirection":"vertical","progressBackgroundColor":["#FFFFFF"],"playbackBarBorderSize":0,"progressBarOpacity":1,"progressBottom":0,"displayTooltipInSurfaceSelection":true,"playbackBarBackgroundColor":["#FFFFFF"],"height":"100%","subtitlesHorizontalAlign":"center","playbackBarHeadShadowVerticalLength":0,"toolTipDisplayTime":600,"subtitlesVerticalAlign":"bottom","progressBackgroundColorRatios":[0],"toolTipTextShadowOpacity":0,"playbackBarHeight":10,"playbackBarHeadShadowHorizontalLength":0,"subtitlesTextShadowOpacity":1,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","playbackBarHeadWidth":6,"surfaceReticleColor":"#FFFFFF","vrPointerColor":"#FFFFFF","translationTransitionDuration":1000,"vrPointerSelectionTime":2000,"progressRight":0,"subtitlesBorderSize":0,"toolTipTextShadowColor":"#000000","minHeight":50,"subtitlesTextDecoration":"none","minWidth":100,"borderRadius":0,"progressHeight":10,"playbackBarBackgroundColorDirection":"vertical","progressBorderSize":0,"playbackBarProgressBorderSize":0,"toolTipPaddingTop":4,"subtitlesFontColor":"#FFFFFF","toolTipShadowOpacity":1,"progressBarBorderSize":0,"toolTipBorderSize":1,"playbackBarRight":0,"toolTipFontColor":"#606060","progressOpacity":1,"toolTipBorderColor":"#767676","subtitlesTextShadowHorizontalLength":1,"subtitlesTop":0,"playbackBarProgressBorderRadius":0,"subtitlesTextShadowBlurRadius":0,"progressBarBorderRadius":0,"toolTipHorizontalAlign":"center","toolTipPaddingBottom":4,"paddingTop":0,"playbackBarHeadHeight":15,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowColor":"#333138","toolTipShadowSpread":0,"firstTransitionDuration":0,"surfaceReticleOpacity":0.6,"paddingBottom":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","progressBarBorderColor":"#000000","playbackBarHeadBorderSize":0,"progressBarBackgroundColorDirection":"vertical","progressBorderRadius":0,"playbackBarHeadShadowBlurRadius":3,"toolTipPaddingRight":6,"playbackBarHeadShadowOpacity":0.7,"progressBarBackgroundColorRatios":[0],"toolTipTextShadowBlurRadius":3,"transitionMode":"blending","subtitlesFontFamily":"Arial","subtitlesTextShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBackgroundColorRatios":[0],"progressLeft":0,"playbackBarHeadShadow":true,"progressBackgroundColorDirection":"vertical","subtitlesFontWeight":"normal","doubleClickAction":"toggle_fullscreen","subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"playbackBarBackgroundOpacity":1,"toolTipBorderRadius":3,"subtitlesPaddingBottom":5,"toolTipBackgroundColor":"#F6F6F6","toolTipFontSize":"1.11vmin","playbackBarBorderRadius":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadOpacity":1,"progressBorderColor":"#000000","propagateClick":false,"toolTipShadowVerticalLength":0,"progressBarBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","subtitlesShadow":false,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"shadow":false,"subtitlesOpacity":1,"surfaceReticleSelectionOpacity":1,"playbackBarHeadBorderRadius":0,"data":{"name":"Main Viewer"}},{"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera"},{"initialPosition":{"hfov":120,"yaw":0,"pitch":0,"class":"RotationalCameraPosition"},"class":"RotationalCamera","manualZoomSpeed":1,"automaticZoomSpeed":10,"automaticRotationSpeed":10,"manualRotationSpeed":1800,"hoverFactor":0,"id":"media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E_camera"},{"class":"IconButton","data":{"name":"IconButton11832"},"borderSize":0,"width":98,"paddingLeft":0,"paddingTop":0,"id":"IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28","paddingBottom":0,"backgroundOpacity":0,"cursor":"hand","horizontalAlign":"center","transparencyActive":false,"paddingRight":0,"toolTipHorizontalAlign":"center","iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","verticalAlign":"middle","bottom":"5%","height":72,"maxHeight":72,"maxWidth":98,"propagateClick":false,"mode":"push","minHeight":1,"minWidth":1,"shadow":false,"borderRadius":0,"right":"5%"},{"items":["this.Video360PlayListItem_C3BAAA44_CD14_3664_41E0_91C7176A7276"],"class":"PlayList","id":"playList_C3B2B9A8_CD14_322C_41CC_1A94597A42C4"},{"mouseControlMode":"drag_rotation","aaEnabled":true,"arrowKeysAction":"translate","class":"PanoramaPlayer","id":"MainViewerPanoramaPlayer","zoomEnabled":true,"buttonCardboardView":"this.IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28","viewerArea":"this.MainViewer","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation","gyroscopeVerticalDraggingEnabled":true,"displayPlaybackBar":true},{"class":"Panorama","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","frames":[{"cube":{"levels":[{"width":9216,"colCount":18,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"tags":"ondemand","rowCount":3},{"width":6144,"colCount":12,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","class":"CubicPanoramaFrame"}],"pitch":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"}},{"distance":100,"yaw":0,"select":"this.overlay_D9373AF9_CD1C_759A_41E6_E96CAE05ED63.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","panorama":"this.media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E","data":{"overlayID":"overlay_D9373AF9_CD1C_759A_41E6_E96CAE05ED63"}}],"hfovMin":"150%","label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"hfovMax":130,"overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_D9373AF9_CD1C_759A_41E6_E96CAE05ED63"],"partial":false,"data":{"label":"intro"},"hfov":360,"vfov":180},{"framerate":29.97,"width":3620,"bitrate":10064,"url":trans('videores_C36C88C0_CD14_325C_418D_93CC6C0DC430.url'),"class":"Video360Resource","height":2038,"posterURL":trans('videores_C36C88C0_CD14_325C_418D_93CC6C0DC430.posterURL'),"type":"video/mp4","id":"videores_C36C88C0_CD14_325C_418D_93CC6C0DC430"},{"framerate":29.97,"width":3840,"bitrate":10064,"url":trans('videores_C36C18C2_CD14_325C_41A0_3ED8D1085EAB.url'),"class":"Video360Resource","height":2160,"posterURL":trans('videores_C36C18C2_CD14_325C_41A0_3ED8D1085EAB.posterURL'),"type":"video/mp4","id":"videores_C36C18C2_CD14_325C_41A0_3ED8D1085EAB"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","rotationX":20,"verticalAlign":"middle","vfov":6.5,"data":{"label":"bt_voltar"},"hfov":29,"playbackPositions":[{"hfov":29,"yaw":0,"opacity":1,"rotationX":20,"class":"PanoramaOverlayPlaybackPosition","rotationY":0,"roll":0,"vfov":6.5,"timestamp":0,"pitch":-25.98}],"horizontalAlign":"center","pitch":-25.98,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"id":"overlay_C39AE7D2_CD0F_9BEE_41D6_24314D2C9291"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_C3BA6A46_CD14_3661_41DA_A11678B18441"},{"player":"this.MainViewerPanoramaPlayer","camera":"this.media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E_camera","media":"this.media_C39AB7D2_CD0F_9BEE_41E2_27B67321410E","start":"this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C3B2B9A8_CD14_322C_41CC_1A94597A42C4, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C3B2B9A8_CD14_322C_41CC_1A94597A42C4, 0)","begin":"this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)","class":"Video360PlayListItem","id":"Video360PlayListItem_C3BAAA44_CD14_3664_41E0_91C7176A7276"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","rotationX":20,"vfov":6.5,"data":{"label":"bt_comecar"},"hfov":29,"verticalAlign":"middle","horizontalAlign":"center","pitch":-26,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"data":{"hasPanoramaAction":true,"label":"bt_comecar"},"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"enabledInCardboard":true,"maps":[],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C34D0629_CD14_3E2C_41E8_7E4D65A0DEFD","distance":50,"yaw":0,"class":"HotspotPanoramaOverlayImage","vfov":37.18,"data":{"label":"janela_intro"},"hfov":29,"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_D937AAFB_CD1C_759E_41E4_B5502CDCB595"],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"id":"overlay_D9373AF9_CD1C_759A_41E6_E96CAE05ED63"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C3BA6A46_CD14_3661_41DA_A11678B18441); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3BAAA44_CD14_3664_41E0_91C7176A7276); this.setMediaBehaviour(this.playList_C3B2B9A8_CD14_322C_41CC_1A94597A42C4, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewerPanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"levels":[{"height":535,"width":444,"url":"media/res_C34D0629_CD14_3E2C_41E8_7E4D65A0DEFD_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C34D0629_CD14_3E2C_41E8_7E4D65A0DEFD"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3BAAA44_CD14_3664_41E0_91C7176A7276); this.setMediaBehaviour(this.playList_C3B2B9A8_CD14_322C_41CC_1A94597A42C4, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewerPanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_D937AAFB_CD1C_759E_41E4_B5502CDCB595"}],"children":["this.MainViewer","this.IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28"],"verticalAlign":"top","mobileMipmappingEnabled":false,"defaultVRPointer":"laser","height":"100%","backgroundColor":["#FFFFFF"],"scrollBarColor":"#000000","layout":"absolute","desktopMipmappingEnabled":false,"overflow":"hidden","scripts":{"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getOverlays":TDV.Tour.Script.getOverlays,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"cloneCamera":TDV.Tour.Script.cloneCamera,"showWindow":TDV.Tour.Script.showWindow,"getKey":TDV.Tour.Script.getKey,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMainViewer":TDV.Tour.Script.getMainViewer,"cloneBindings":TDV.Tour.Script.cloneBindings,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"openLink":TDV.Tour.Script.openLink,"showPopupImage":TDV.Tour.Script.showPopupImage,"clone":TDV.Tour.Script.clone,"setMapLocation":TDV.Tour.Script.setMapLocation,"existsKey":TDV.Tour.Script.existsKey,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"init":TDV.Tour.Script.init,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"isPanorama":TDV.Tour.Script.isPanorama,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"initQuiz":TDV.Tour.Script.initQuiz,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaByName":TDV.Tour.Script.getMediaByName,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"resumePlayers":TDV.Tour.Script.resumePlayers,"mixObject":TDV.Tour.Script.mixObject,"historyGoBack":TDV.Tour.Script.historyGoBack,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"historyGoForward":TDV.Tour.Script.historyGoForward,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setValue":TDV.Tour.Script.setValue,"setLocale":TDV.Tour.Script.setLocale,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"quizFinish":TDV.Tour.Script.quizFinish,"getPixels":TDV.Tour.Script.getPixels,"downloadFile":TDV.Tour.Script.downloadFile,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"playAudioList":TDV.Tour.Script.playAudioList,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"registerKey":TDV.Tour.Script.registerKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"getComponentByName":TDV.Tour.Script.getComponentByName,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"translate":TDV.Tour.Script.translate,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName},"scrollBarVisible":"rollOver","vrPolyfillScale":0.75,"propagateClick":false,"scrollBarWidth":10,"minHeight":0,"downloadEnabled":true,"minWidth":0,"shadow":false,"borderRadius":0,"data":{"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"pitch":1,"stopBackgroundAudio":false,"rate":1},"name":"Player484","locales":{"en":"locale/en.txt"},"defaultLocale":"en"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022