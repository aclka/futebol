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
var script = {"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B], 'cardboardAvailable')","borderSize":0,"class":"Player","backgroundColorRatios":[0],"gap":10,"children":["this.MainViewer_mobile","this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B"],"toolTipHorizontalAlign":"center","mediaActivationMode":"window","contentOpaque":false,"backgroundColorDirection":"vertical","mobileMipmappingEnabled":false,"width":"100%","paddingLeft":0,"paddingTop":0,"id":"rootPlayer","mouseWheelEnabled":true,"vrPolyfillScale":0.75,"paddingBottom":0,"paddingRight":0,"overflow":"hidden","horizontalAlign":"left","defaultMenu":["fullscreen","mute","rotation"],"downloadEnabled":true,"scrollBarMargin":2,"verticalAlign":"top","definitions": [{"automaticZoomSpeed":10,"hoverFactor":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"gyroscopeVerticalDraggingEnabled":true,"surfaceSelectionEnabled":false,"buttonCardboardView":"this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","touchControlMode":"drag_rotation","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer_mobile","arrowKeysAction":"translate","mouseControlMode":"drag_rotation","displayPlaybackBar":true,"zoomEnabled":true,"id":"MainViewer_mobilePanoramaPlayer"},{"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","class":"Panorama","partial":false,"hfovMax":130,"pitch":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","hfov":360,"label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"frames":[{"cube":{"levels":[{"tags":"ondemand","width":9216,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","height":1536,"class":"TiledImageResourceLevel","colCount":18,"rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","height":1024,"class":"TiledImageResourceLevel","colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","height":512,"class":"TiledImageResourceLevel","colCount":6,"rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg"}],"overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741","this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916","this.overlay_C3374531_CD30_4672_41D3_9642AA224F59"],"hfovMin":"150%","adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":0,"select":"this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":30,"select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},"panorama":"this.media_DD8A8536_D1AB_76F0_41E4_14099353996C","class":"AdjacentPanorama"}],"data":{"label":"intro"},"vfov":180},{"class":"PlayList","items":["this.Video360PlayListItem_DC8A8B91_D1AD_31B1_41D3_AFB7D289AB60"],"id":"playList_DC885AE6_D1AD_3390_41E1_96112712330B"},{"playbackBarHeadBorderColor":"#000000","toolTipShadowSpread":0,"borderSize":0,"data":{"name":"Main Viewer"},"playbackBarHeadShadowVerticalLength":0,"class":"ViewerArea","toolTipBorderColor":"#767676","transitionDuration":500,"toolTipHorizontalAlign":"center","playbackBarBorderSize":0,"progressBarBackgroundColor":["#3399FF"],"subtitlesPaddingTop":5,"progressBorderColor":"#000000","paddingLeft":0,"subtitlesShadow":false,"id":"MainViewer_mobile","progressBackgroundColor":["#FFFFFF"],"displayTooltipInSurfaceSelection":true,"subtitlesBackgroundColor":"#000000","toolTipTextShadowBlurRadius":1,"subtitlesGap":0,"paddingRight":0,"progressBottom":0,"subtitlesOpacity":1,"width":"100%","progressBarOpacity":1,"firstTransitionDuration":0,"subtitlesHorizontalAlign":"center","toolTipShadowHorizontalLength":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowBlurRadius":1.5,"subtitlesVerticalAlign":"bottom","subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"progressHeight":10,"toolTipShadowVerticalLength":0,"progressBorderSize":0,"vrPointerSelectionTime":2000,"playbackBarLeft":0,"surfaceReticleOpacity":0.6,"progressBarBorderRadius":0,"toolTipBorderRadius":1,"playbackBarHeadHeight":15,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowColor":"#000000","transitionMode":"blending","toolTipShadowColor":"#333138","surfaceReticleColor":"#FFFFFF","toolTipOpacity":1,"propagateClick":false,"toolTipFontStyle":"normal","subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderSize":0,"toolTipFontSize":"1.11vmin","playbackBarHeadOpacity":1,"borderRadius":0,"playbackBarHeadShadow":true,"toolTipTextShadowColor":"#000000","height":"100%","subtitlesFontWeight":"normal","playbackBarBackgroundOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"playbackBarOpacity":1,"minHeight":25,"subtitlesPaddingLeft":5,"minWidth":50,"progressBorderRadius":0,"subtitlesBottom":50,"progressLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBottom":5,"subtitlesPaddingRight":5,"playbackBarProgressBackgroundColorDirection":"vertical","surfaceReticleSelectionOpacity":1,"toolTipFontFamily":"Arial","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesTextShadowHorizontalLength":1,"progressBarBorderSize":0,"toolTipFontWeight":"normal","subtitlesTextShadowVerticalLength":1,"translationTransitionDuration":1000,"toolTipBorderSize":1,"playbackBarHeadBackgroundColorDirection":"vertical","toolTipPaddingTop":2,"paddingTop":0,"playbackBarHeight":10,"progressBackgroundOpacity":1,"toolTipShadowOpacity":1,"playbackBarHeadWidth":6,"paddingBottom":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"playbackBarRight":0,"toolTipShadowBlurRadius":1,"displayTooltipInTouchScreens":true,"playbackBarProgressBorderRadius":0,"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","subtitlesEnabled":true,"playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesFontSize":"3vmin","doubleClickAction":"toggle_fullscreen","playbackBarHeadShadowOpacity":0.7,"playbackBarHeadShadowHorizontalLength":0,"toolTipDisplayTime":600,"toolTipPaddingBottom":2,"subtitlesBackgroundOpacity":0.2,"subtitlesPaddingBottom":5,"progressBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorRatios":[0],"toolTipTextShadowOpacity":0,"toolTipPaddingRight":3,"progressOpacity":1,"playbackBarBorderRadius":0,"progressRight":0,"playbackBarBorderColor":"#FFFFFF","progressBarBackgroundColorDirection":"vertical","playbackBarProgressBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","subtitlesTextDecoration":"none","progressBarBorderColor":"#000000","toolTipPaddingLeft":3,"subtitlesBorderColor":"#FFFFFF","subtitlesTextShadowBlurRadius":0,"toolTipFontColor":"#606060","subtitlesFontFamily":"Arial","shadow":false,"playbackBarHeadBorderRadius":0,"vrPointerColor":"#FFFFFF","progressBarBackgroundColorRatios":[0],"playbackBarProgressOpacity":1,"progressBackgroundColorDirection":"vertical"},{"class":"PlayList","items":["this.PanoramaPlayListItem_DC8A0B92_D1AD_31B3_41E8_49CB1906E397"],"id":"mainPlayList"},{"borderSize":0,"data":{"name":"IconButton11832"},"class":"IconButton","width":50,"iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","transparencyActive":false,"cursor":"hand","toolTipHorizontalAlign":"center","paddingTop":0,"id":"IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","paddingLeft":0,"paddingBottom":0,"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","bottom":"5%","height":36,"propagateClick":false,"backgroundOpacity":0,"maxHeight":36,"maxWidth":50,"mode":"push","minHeight":1,"borderRadius":0,"minWidth":1,"right":"5%","shadow":false},{"class":"PlayList","items":["this.Video360PlayListItem_DC8AAB91_D1AD_31B1_41D2_43E3BD24111E"],"id":"playList_DC887AE6_D1AD_3390_41E7_0C2581D24A53"},{"video":["this.videores_DD5076B2_D1AB_F3F0_41DE_D3A60B603075","this.videores_DD504700_D1AB_F290_41E5_4C8B447954AC"],"loop":false,"class":"Video360","partial":false,"hfovMax":140,"pitch":0,"thumbnailUrl":"media/media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_t.jpg","hfov":360,"label":trans('media_C0AB9F4A_CD30_4216_41CA_74AA125FB806.label'),"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","hfovMin":60,"overlays":["this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"],"data":{"label":"video360"},"adjacentPanoramas":[{"distance":2.34,"yaw":0,"select":"this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"AdjacentPanorama"}],"vfov":180},{"automaticZoomSpeed":10,"hoverFactor":0,"automaticRotationSpeed":10,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","manualZoomSpeed":1,"class":"RotationalCamera","manualRotationSpeed":1800,"initialPosition":{"yaw":0,"hfov":120,"class":"RotationalCameraPosition","pitch":0}},{"video":["this.videores_DD54179C_D1AB_F1B0_41E0_808BE740A7CA","this.videores_DD93F3BD_D1AD_31F0_41D5_CAE9FD10C0F3"],"loop":false,"class":"Video360","partial":false,"hfovMax":140,"pitch":0,"thumbnailUrl":"media/media_DD8A8536_D1AB_76F0_41E4_14099353996C_t.jpg","hfov":360,"label":trans('media_DD8A8536_D1AB_76F0_41E4_14099353996C.label'),"id":"media_DD8A8536_D1AB_76F0_41E4_14099353996C","hfovMin":60,"overlays":["this.overlay_DD8AC536_D1AB_76F0_41D4_61ED9D6A7B03"],"data":{"label":"vrvaiaescola_visita_lisboa_chiado_portugues_1"},"adjacentPanoramas":[{"distance":2.34,"yaw":0,"select":"this.overlay_DD8AC536_D1AB_76F0_41D4_61ED9D6A7B03.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_DD8AC536_D1AB_76F0_41D4_61ED9D6A7B03"},"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"AdjacentPanorama"}],"vfov":180},{"automaticZoomSpeed":10,"hoverFactor":0,"automaticRotationSpeed":10,"id":"media_DD8A8536_D1AB_76F0_41E4_14099353996C_camera","manualZoomSpeed":1,"class":"RotationalCamera","manualRotationSpeed":1800,"initialPosition":{"yaw":0,"hfov":120,"class":"RotationalCameraPosition","pitch":0}},{"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_comecar"},"useHandCursor":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"rotationX":20,"hfov":29,"yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_comecar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-26,"vfov":6.5,"scaleMode":"fit_inside"}],"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"areas":["this.HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"items":[{"image":"this.res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1","distance":50,"yaw":30,"hfov":25,"rotationY":30,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"vfov":37.18,"scaleMode":"fit_inside"}],"id":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},{"areas":["this.HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"items":[{"image":"this.res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16","distance":50,"yaw":0,"hfov":29,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"vfov":37.18,"scaleMode":"fit_inside"}],"id":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},{"areas":["this.HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"janela_intro"},"useHandCursor":true,"items":[{"image":"this.res_C23D5D2A_CD30_4616_41DB_7773EC3BED79","distance":50,"yaw":-30,"hfov":25,"rotationY":-30,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"vfov":37.18,"scaleMode":"fit_inside"}],"id":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},{"camera":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","media":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DC885AE6_D1AD_3390_41E1_96112712330B, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DC885AE6_D1AD_3390_41E1_96112712330B, 0)","player":"this.MainViewer_mobilePanoramaPlayer","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_DC8A8B91_D1AD_31B1_41D3_AFB7D289AB60"},{"camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_DC8A0B92_D1AD_31B3_41E8_49CB1906E397"},{"camera":"this.media_DD8A8536_D1AB_76F0_41E4_14099353996C_camera","media":"this.media_DD8A8536_D1AB_76F0_41E4_14099353996C","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_DC887AE6_D1AD_3390_41E7_0C2581D24A53, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_DC887AE6_D1AD_3390_41E7_0C2581D24A53, 0)","player":"this.MainViewer_mobilePanoramaPlayer","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_DC8AAB91_D1AD_31B1_41D2_43E3BD24111E"},{"width":3620,"type":"video/mp4","url":trans('videores_DD5076B2_D1AB_F3F0_41DE_D3A60B603075.url'),"framerate":29.97,"posterURL":trans('videores_DD5076B2_D1AB_F3F0_41DE_D3A60B603075.posterURL'),"height":2038,"class":"Video360Resource","bitrate":10088,"id":"videores_DD5076B2_D1AB_F3F0_41DE_D3A60B603075"},{"width":3840,"type":"video/mp4","url":trans('videores_DD504700_D1AB_F290_41E5_4C8B447954AC.url'),"framerate":29.97,"posterURL":trans('videores_DD504700_D1AB_F290_41E5_4C8B447954AC.posterURL'),"height":2160,"class":"Video360Resource","bitrate":10088,"id":"videores_DD504700_D1AB_F290_41E5_4C8B447954AC"},{"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"rotationX":20,"hfov":29,"playbackPositions":[{"opacity":1,"yaw":0,"hfov":29,"rotationX":20,"rotationY":0,"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-35.98,"vfov":6.5}],"yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-35.98,"vfov":6.5,"scaleMode":"fit_inside"}],"id":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},{"width":3620,"type":"video/mp4","url":trans('videores_DD54179C_D1AB_F1B0_41E0_808BE740A7CA.url'),"framerate":29.97,"posterURL":trans('videores_DD54179C_D1AB_F1B0_41E0_808BE740A7CA.posterURL'),"height":2038,"class":"Video360Resource","bitrate":10075,"id":"videores_DD54179C_D1AB_F1B0_41E0_808BE740A7CA"},{"width":3840,"type":"video/mp4","url":trans('videores_DD93F3BD_D1AD_31F0_41D5_CAE9FD10C0F3.url'),"framerate":29.97,"posterURL":trans('videores_DD93F3BD_D1AD_31F0_41D5_CAE9FD10C0F3.posterURL'),"height":2160,"class":"Video360Resource","bitrate":10075,"id":"videores_DD93F3BD_D1AD_31F0_41D5_CAE9FD10C0F3"},{"areas":["this.HotspotPanoramaOverlayArea_C0FC17E7_CD7C_EDC3_41DB_F599917C17B7"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"rotationX":20,"hfov":29,"playbackPositions":[{"opacity":1,"yaw":0,"hfov":29,"rotationX":20,"rotationY":0,"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","pitch":-35.98,"vfov":6.5}],"yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-35.98,"vfov":6.5,"scaleMode":"fit_inside"}],"id":"overlay_DD8AC536_D1AB_76F0_41D4_61ED9D6A7B03"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_DC8A8B91_D1AD_31B1_41D3_AFB7D289AB60); this.setMediaBehaviour(this.playList_DC885AE6_D1AD_3390_41E1_96112712330B, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png"}],"class":"ImageResource","id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_DC8AAB91_D1AD_31B1_41D2_43E3BD24111E); this.setMediaBehaviour(this.playList_DC887AE6_D1AD_3390_41E7_0C2581D24A53, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"},{"levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1_0.png"}],"class":"ImageResource","id":"res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_DC8A8B91_D1AD_31B1_41D3_AFB7D289AB60); this.setMediaBehaviour(this.playList_DC885AE6_D1AD_3390_41E1_96112712330B, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","id":"HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"},{"levels":[{"height":535,"width":444,"class":"ImageResourceLevel","url":"media/res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16_0.png"}],"class":"ImageResource","id":"res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"},{"levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D5D2A_CD30_4616_41DB_7773EC3BED79_0.png"}],"class":"ImageResource","id":"res_C23D5D2A_CD30_4616_41DB_7773EC3BED79"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_DC8A0B92_D1AD_31B3_41E8_49CB1906E397); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png"}],"class":"ImageResource","id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_DC8A0B92_D1AD_31B3_41E8_49CB1906E397); this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_C0FC17E7_CD7C_EDC3_41DB_F599917C17B7"}],"scrollBarVisible":"rollOver","scrollBarWidth":10,"height":"100%","backgroundColor":["#FFFFFF"],"layout":"absolute","desktopMipmappingEnabled":false,"propagateClick":false,"scripts":{"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"showPopupImage":TDV.Tour.Script.showPopupImage,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"mixObject":TDV.Tour.Script.mixObject,"resumePlayers":TDV.Tour.Script.resumePlayers,"getMediaByName":TDV.Tour.Script.getMediaByName,"historyGoBack":TDV.Tour.Script.historyGoBack,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getKey":TDV.Tour.Script.getKey,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"openLink":TDV.Tour.Script.openLink,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"setMapLocation":TDV.Tour.Script.setMapLocation,"init":TDV.Tour.Script.init,"clone":TDV.Tour.Script.clone,"shareSocial":TDV.Tour.Script.shareSocial,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"cloneCamera":TDV.Tour.Script.cloneCamera,"isPanorama":TDV.Tour.Script.isPanorama,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"cloneBindings":TDV.Tour.Script.cloneBindings,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"existsKey":TDV.Tour.Script.existsKey,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"unregisterKey":TDV.Tour.Script.unregisterKey,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"downloadFile":TDV.Tour.Script.downloadFile,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"registerKey":TDV.Tour.Script.registerKey,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"showWindow":TDV.Tour.Script.showWindow,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"initAnalytics":TDV.Tour.Script.initAnalytics,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setValue":TDV.Tour.Script.setValue,"quizStart":TDV.Tour.Script.quizStart,"getPixels":TDV.Tour.Script.getPixels,"executeJS":TDV.Tour.Script.executeJS,"getOverlays":TDV.Tour.Script.getOverlays,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMainViewer":TDV.Tour.Script.getMainViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setLocale":TDV.Tour.Script.setLocale,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"playAudioList":TDV.Tour.Script.playAudioList,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"quizFinish":TDV.Tour.Script.quizFinish,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"translate":TDV.Tour.Script.translate,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"textToSpeech":TDV.Tour.Script.textToSpeech},"backgroundOpacity":1,"scrollBarColor":"#000000","defaultVRPointer":"laser","scrollBarOpacity":0.5,"minHeight":0,"borderRadius":0,"minWidth":0,"data":{"textToSpeechConfig":{"speechOnQuizQuestion":false,"volume":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"stopBackgroundAudio":false,"pitch":1,"rate":1},"name":"Player484","locales":{"en":"locale/en.txt"},"defaultLocale":"en"},"backgroundPreloadEnabled":true,"shadow":false};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.3.js.map
})();
//Generated with v2022.1.3, Tue May 17 2022