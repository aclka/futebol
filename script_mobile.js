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
var script = {"scripts":{"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getMainViewer":TDV.Tour.Script.getMainViewer,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlays":TDV.Tour.Script.getOverlays,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getKey":TDV.Tour.Script.getKey,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openLink":TDV.Tour.Script.openLink,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"setMapLocation":TDV.Tour.Script.setMapLocation,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"init":TDV.Tour.Script.init,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getMediaByName":TDV.Tour.Script.getMediaByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"clone":TDV.Tour.Script.clone,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"isPanorama":TDV.Tour.Script.isPanorama,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"executeJS":TDV.Tour.Script.executeJS,"quizShowScore":TDV.Tour.Script.quizShowScore,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"initQuiz":TDV.Tour.Script.initQuiz,"existsKey":TDV.Tour.Script.existsKey,"mixObject":TDV.Tour.Script.mixObject,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"initAnalytics":TDV.Tour.Script.initAnalytics,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizStart":TDV.Tour.Script.quizStart,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setValue":TDV.Tour.Script.setValue,"downloadFile":TDV.Tour.Script.downloadFile,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"historyGoForward":TDV.Tour.Script.historyGoForward,"registerKey":TDV.Tour.Script.registerKey,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPixels":TDV.Tour.Script.getPixels,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"showWindow":TDV.Tour.Script.showWindow,"historyGoBack":TDV.Tour.Script.historyGoBack,"showPopupImage":TDV.Tour.Script.showPopupImage,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizFinish":TDV.Tour.Script.quizFinish,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setLocale":TDV.Tour.Script.setLocale,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"shareSocial":TDV.Tour.Script.shareSocial,"cloneCamera":TDV.Tour.Script.cloneCamera,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"cloneBindings":TDV.Tour.Script.cloneBindings,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"textToSpeech":TDV.Tour.Script.textToSpeech,"translate":TDV.Tour.Script.translate,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags},"borderSize":0,"toolTipHorizontalAlign":"center","gap":10,"width":"100%","scrollBarWidth":10,"definitions": [{"class":"PlayList","items":["this.PanoramaPlayListItem_C2622FEC_CD5D_D500_41D3_EA15CB800A48"],"id":"mainPlayList"},{"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","hfov":120,"pitch":0},"automaticZoomSpeed":10,"manualZoomSpeed":1,"manualRotationSpeed":1800,"class":"RotationalCamera","hoverFactor":0,"automaticRotationSpeed":10,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera"},{"toolTipFontFamily":"Arial","borderSize":0,"toolTipShadowBlurRadius":1,"displayTooltipInTouchScreens":true,"playbackBarBottom":5,"playbackBarProgressOpacity":1,"playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesGap":0,"paddingLeft":0,"toolTipShadowVerticalLength":0,"id":"MainViewer_mobile","progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingLeft":5,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowHorizontalLength":1,"subtitlesBackgroundColor":"#000000","subtitlesBottom":50,"subtitlesPaddingRight":5,"playbackBarBorderSize":0,"paddingRight":0,"progressBarOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"width":"100%","transitionDuration":500,"subtitlesHorizontalAlign":"center","toolTipPaddingLeft":3,"progressBottom":0,"translationTransitionDuration":1000,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColor":["#FFFFFF"],"subtitlesEnabled":true,"height":"100%","playbackBarHeight":10,"subtitlesVerticalAlign":"bottom","progressHeight":10,"subtitlesTextShadowVerticalLength":1,"progressRight":0,"progressBorderSize":0,"displayTooltipInSurfaceSelection":true,"surfaceReticleColor":"#FFFFFF","toolTipDisplayTime":600,"subtitlesTextShadowOpacity":1,"playbackBarHeadWidth":6,"subtitlesTextDecoration":"none","toolTipBorderRadius":1,"playbackBarHeadBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"toolTipFontSize":"1.11vmin","surfaceReticleOpacity":0.6,"subtitlesBorderSize":0,"progressOpacity":1,"subtitlesTextShadowBlurRadius":0,"class":"ViewerArea","toolTipShadowHorizontalLength":0,"borderRadius":0,"toolTipTextShadowOpacity":0,"vrPointerSelectionTime":2000,"progressBarBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","minWidth":50,"minHeight":25,"playbackBarRight":0,"playbackBarHeadShadowBlurRadius":1.5,"firstTransitionDuration":0,"playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"subtitlesFontColor":"#FFFFFF","toolTipTextShadowColor":"#000000","toolTipFontWeight":"normal","progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","vrPointerColor":"#FFFFFF","toolTipBorderSize":1,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"playbackBarHeadShadowOpacity":0.7,"toolTipBorderColor":"#767676","subtitlesFontFamily":"Arial","subtitlesTop":0,"playbackBarHeadHeight":15,"toolTipShadowOpacity":1,"playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontColor":"#606060","toolTipFontStyle":"normal","playbackBarHeadBorderSize":0,"paddingBottom":0,"progressBorderRadius":0,"playbackBarHeadShadowColor":"#000000","progressBackgroundColorDirection":"vertical","paddingTop":0,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"progressLeft":0,"playbackBarHeadShadowVerticalLength":0,"toolTipPaddingBottom":2,"toolTipPaddingTop":2,"subtitlesTextShadowColor":"#000000","subtitlesFontWeight":"normal","playbackBarProgressBackgroundColorRatios":[0],"transitionMode":"blending","playbackBarHeadShadow":true,"subtitlesPaddingTop":5,"toolTipShadowColor":"#333138","surfaceReticleSelectionOpacity":1,"subtitlesShadow":false,"subtitlesFontSize":"3vmin","toolTipTextShadowBlurRadius":1,"progressBorderColor":"#000000","propagateClick":false,"doubleClickAction":"toggle_fullscreen","playbackBarBorderColor":"#FFFFFF","toolTipPaddingRight":3,"subtitlesPaddingBottom":5,"toolTipOpacity":1,"playbackBarHeadOpacity":1,"playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","progressBarBackgroundColor":["#3399FF"],"surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"progressBackgroundOpacity":1,"playbackBarBorderRadius":0,"subtitlesOpacity":1,"playbackBarHeadBorderRadius":0,"shadow":false,"playbackBarOpacity":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"}},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera"},{"aaEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","buttonCardboardView":"this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","touchControlMode":"drag_rotation","zoomEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer_mobile","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PlayList","items":["this.Video360PlayListItem_C2629FEC_CD5D_D500_41E9_58C900548449"],"id":"playList_C2607F42_CD5D_D503_41E8_A77D7B9A2E42"},{"video":["this.videores_C2522D6C_CD5D_D500_41DC_78FCA72A3281","this.videores_C253FD6C_CD5D_D500_41B5_6A6241DC393B"],"hfov":360,"loop":false,"hfovMax":140,"thumbnailUrl":"media/media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_t.jpg","data":{"label":"vrvaiaescola_visita_lisboa_chiado_portugues_1"},"pitch":0,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","label":trans('media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5.label'),"class":"Video360","hfovMin":60,"partial":false,"vfov":180},{"borderSize":0,"data":{"name":"IconButton11832"},"toolTipHorizontalAlign":"center","width":50,"cursor":"hand","paddingLeft":0,"backgroundOpacity":0,"id":"IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","paddingTop":0,"paddingBottom":0,"transparencyActive":false,"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","height":36,"propagateClick":false,"maxHeight":36,"maxWidth":50,"iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","class":"IconButton","bottom":"5%","borderRadius":0,"mode":"push","minWidth":1,"shadow":false,"minHeight":1,"right":"5%"},{"video":["this.videores_C2519D1D_CD5D_D501_41E9_522D8E2E3194","this.videores_C251BD1D_CD5D_D501_41DD_B71AFA67F1DB"],"hfov":360,"loop":false,"hfovMax":140,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"AdjacentPanorama"}],"data":{"label":"video360"},"pitch":0,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","label":trans('media_C0AB9F4A_CD30_4216_41CA_74AA125FB806.label'),"thumbnailUrl":"media/media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_t.jpg","class":"Video360","overlays":["this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"],"hfovMin":60,"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","hfov":120,"pitch":0},"automaticZoomSpeed":10,"manualZoomSpeed":1,"manualRotationSpeed":1800,"class":"RotationalCamera","hoverFactor":0,"automaticRotationSpeed":10,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera"},{"class":"PlayList","items":["this.Video360PlayListItem_C262FFEC_CD5D_D500_41B9_7BC7AC794524"],"id":"playList_C2606F42_CD5D_D503_41D1_99910D2EC616"},{"hfov":360,"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","pitch":0,"adjacentPanoramas":[{"distance":100,"yaw":30,"select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},"panorama":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","class":"AdjacentPanorama"},{"distance":3.49,"yaw":0,"select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":0,"select":"this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"}],"hfovMax":130,"label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"Panorama","overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741","this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916","this.overlay_C3374531_CD30_4672_41D3_9642AA224F59"],"frames":[{"cube":{"levels":[{"width":9216,"colCount":18,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":6144,"colCount":12,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg"}],"hfovMin":"150%","partial":false,"data":{"label":"intro"},"vfov":180},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_C2622FEC_CD5D_D500_41D3_EA15CB800A48"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera","media":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C2607F42_CD5D_D503_41E8_A77D7B9A2E42, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C2607F42_CD5D_D503_41E8_A77D7B9A2E42, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_C2629FEC_CD5D_D500_41E9_58C900548449"},{"framerate":29.97,"width":3620,"type":"video/mp4","url":trans('videores_C2522D6C_CD5D_D500_41DC_78FCA72A3281.url'),"height":2038,"posterURL":trans('videores_C2522D6C_CD5D_D500_41DC_78FCA72A3281.posterURL'),"class":"Video360Resource","bitrate":4635,"id":"videores_C2522D6C_CD5D_D500_41DC_78FCA72A3281"},{"framerate":29.97,"width":3840,"type":"video/mp4","url":trans('videores_C253FD6C_CD5D_D500_41B5_6A6241DC393B.url'),"height":2160,"posterURL":trans('videores_C253FD6C_CD5D_D500_41B5_6A6241DC393B.posterURL'),"class":"Video360Resource","bitrate":4635,"id":"videores_C253FD6C_CD5D_D500_41B5_6A6241DC393B"},{"framerate":29.97,"width":3620,"type":"video/mp4","url":trans('videores_C2519D1D_CD5D_D501_41E9_522D8E2E3194.url'),"height":2038,"posterURL":trans('videores_C2519D1D_CD5D_D501_41E9_522D8E2E3194.posterURL'),"class":"Video360Resource","bitrate":10088,"id":"videores_C2519D1D_CD5D_D501_41E9_522D8E2E3194"},{"framerate":29.97,"width":3840,"type":"video/mp4","url":trans('videores_C251BD1D_CD5D_D501_41DD_B71AFA67F1DB.url'),"height":2160,"posterURL":trans('videores_C251BD1D_CD5D_D501_41DD_B71AFA67F1DB.posterURL'),"class":"Video360Resource","bitrate":10088,"id":"videores_C251BD1D_CD5D_D501_41DD_B71AFA67F1DB"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"rotationX":20,"pitch":-25.98,"scaleMode":"fit_inside","playbackPositions":[{"yaw":0,"rotationX":20,"hfov":29,"rotationY":0,"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","opacity":1,"pitch":-25.98,"vfov":6.5}],"yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"vfov":6.5}],"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"id":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","media":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C2606F42_CD5D_D503_41D1_99910D2EC616, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C2606F42_CD5D_D503_41D1_99910D2EC616, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_C262FFEC_CD5D_D500_41B9_7BC7AC794524"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_comecar"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"rotationX":20,"pitch":-26,"scaleMode":"fit_inside","yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_comecar"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"vfov":6.5}],"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1","distance":50,"yaw":30,"pitch":0,"rotationY":30,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":25,"vfov":37.18}],"areas":["this.HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"],"id":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16","distance":50,"yaw":0,"pitch":0,"vfov":37.18,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"],"id":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D5D2A_CD30_4616_41DB_7773EC3BED79","distance":50,"yaw":-30,"pitch":0,"rotationY":-30,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":25,"vfov":37.18}],"areas":["this.HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"],"id":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},{"class":"ImageResource","levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png"}],"id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C2622FEC_CD5D_D500_41D3_EA15CB800A48); this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"class":"ImageResource","levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png"}],"id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C262FFEC_CD5D_D500_41B9_7BC7AC794524); this.setMediaBehaviour(this.playList_C2606F42_CD5D_D503_41D1_99910D2EC616, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"class":"ImageResource","levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1_0.png"}],"id":"res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C2629FEC_CD5D_D500_41E9_58C900548449); this.setMediaBehaviour(this.playList_C2607F42_CD5D_D503_41E8_A77D7B9A2E42, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"},{"class":"ImageResource","levels":[{"height":535,"width":444,"class":"ImageResourceLevel","url":"media/res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16_0.png"}],"id":"res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C262FFEC_CD5D_D500_41B9_7BC7AC794524); this.setMediaBehaviour(this.playList_C2606F42_CD5D_D503_41D1_99910D2EC616, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"},{"class":"ImageResource","levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D5D2A_CD30_4616_41DB_7773EC3BED79_0.png"}],"id":"res_C23D5D2A_CD30_4616_41DB_7773EC3BED79"},{"mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"}],"paddingLeft":0,"backgroundOpacity":1,"id":"rootPlayer","contentOpaque":false,"paddingBottom":0,"mouseWheelEnabled":true,"paddingRight":0,"defaultMenu":["fullscreen","mute","rotation"],"paddingTop":0,"defaultVRPointer":"laser","scrollBarColor":"#000000","children":["this.MainViewer_mobile","this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B"],"verticalAlign":"top","mediaActivationMode":"window","backgroundColorRatios":[0],"height":"100%","backgroundPreloadEnabled":true,"vrPolyfillScale":0.75,"backgroundColor":["#FFFFFF"],"horizontalAlign":"left","propagateClick":false,"layout":"absolute","scrollBarOpacity":0.5,"desktopMipmappingEnabled":false,"overflow":"hidden","mobileMipmappingEnabled":false,"scrollBarVisible":"rollOver","downloadEnabled":true,"class":"Player","borderRadius":0,"minWidth":0,"shadow":false,"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B], 'cardboardAvailable')","minHeight":0,"scrollBarMargin":2,"backgroundColorDirection":"vertical","data":{"name":"Player484","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnTooltip":false,"volume":1,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"stopBackgroundAudio":false,"rate":1},"defaultLocale":"en"}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022