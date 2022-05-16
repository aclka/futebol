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
var script = {"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B], 'cardboardAvailable')","borderSize":0,"data":{"name":"Player484","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"volume":1,"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"speechOnTooltip":false,"pitch":1,"speechOnInfoWindow":false,"rate":1},"defaultLocale":"en"},"scripts":{"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMainViewer":TDV.Tour.Script.getMainViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"getKey":TDV.Tour.Script.getKey,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initQuiz":TDV.Tour.Script.initQuiz,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clone":TDV.Tour.Script.clone,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"openLink":TDV.Tour.Script.openLink,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"init":TDV.Tour.Script.init,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"showWindow":TDV.Tour.Script.showWindow,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"unregisterKey":TDV.Tour.Script.unregisterKey,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"resumePlayers":TDV.Tour.Script.resumePlayers,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"registerKey":TDV.Tour.Script.registerKey,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playAudioList":TDV.Tour.Script.playAudioList,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"cloneCamera":TDV.Tour.Script.cloneCamera,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"mixObject":TDV.Tour.Script.mixObject,"executeJS":TDV.Tour.Script.executeJS,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizStart":TDV.Tour.Script.quizStart,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"historyGoBack":TDV.Tour.Script.historyGoBack,"shareSocial":TDV.Tour.Script.shareSocial,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getPixels":TDV.Tour.Script.getPixels,"setValue":TDV.Tour.Script.setValue,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setLocale":TDV.Tour.Script.setLocale,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"getOverlays":TDV.Tour.Script.getOverlays,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"quizFinish":TDV.Tour.Script.quizFinish,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getComponentByName":TDV.Tour.Script.getComponentByName,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"textToSpeech":TDV.Tour.Script.textToSpeech,"downloadFile":TDV.Tour.Script.downloadFile,"cloneBindings":TDV.Tour.Script.cloneBindings,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getMediaByName":TDV.Tour.Script.getMediaByName,"translate":TDV.Tour.Script.translate},"toolTipHorizontalAlign":"center","gap":10,"width":"100%","scrollBarWidth":10,"paddingLeft":0,"paddingTop":0,"backgroundOpacity":1,"id":"rootPlayer","mouseWheelEnabled":true,"paddingBottom":0,"definitions": [{"class":"PlayList","items":["this.PanoramaPlayListItem_C111F828_CD5D_097B_41D6_D3D5D77D809A"],"id":"mainPlayList"},{"borderSize":0,"toolTipShadowBlurRadius":1,"playbackBarHeadShadowHorizontalLength":0,"playbackBarBottom":5,"playbackBarProgressOpacity":1,"playbackBarHeadBorderColor":"#000000","subtitlesBorderColor":"#FFFFFF","subtitlesGap":0,"paddingLeft":0,"toolTipShadowVerticalLength":0,"id":"MainViewer_mobile","progressBackgroundColor":["#FFFFFF"],"subtitlesPaddingLeft":5,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipFontSize":"1.11vmin","subtitlesBottom":50,"subtitlesPaddingRight":5,"playbackBarBorderSize":0,"paddingRight":0,"progressBarOpacity":1,"width":"100%","subtitlesBackgroundColor":"#000000","transitionDuration":500,"subtitlesHorizontalAlign":"center","toolTipPaddingLeft":3,"vrPointerSelectionColor":"#FF6600","progressBottom":0,"translationTransitionDuration":1000,"toolTipShadowSpread":0,"progressBackgroundColorRatios":[0],"playbackBarHeight":10,"playbackBarBackgroundColor":["#FFFFFF"],"subtitlesEnabled":true,"height":"100%","subtitlesVerticalAlign":"bottom","progressHeight":10,"playbackBarHeadWidth":6,"progressBorderSize":0,"toolTipOpacity":1,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowOpacity":1,"progressRight":0,"subtitlesTextDecoration":"none","subtitlesBorderSize":0,"toolTipDisplayTime":600,"playbackBarProgressBorderSize":0,"displayTooltipInTouchScreens":true,"surfaceReticleOpacity":0.6,"progressOpacity":1,"playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowBlurRadius":0,"class":"ViewerArea","toolTipShadowHorizontalLength":0,"borderRadius":0,"minHeight":25,"toolTipTextShadowOpacity":0,"playbackBarBackgroundColorDirection":"vertical","firstTransitionDuration":0,"subtitlesFontColor":"#FFFFFF","playbackBarRight":0,"playbackBarHeadShadowBlurRadius":1.5,"progressBarBorderRadius":0,"minWidth":50,"playbackBarProgressBorderRadius":0,"progressBarBorderSize":0,"toolTipBorderSize":1,"progressBarBackgroundColorDirection":"vertical","toolTipFontWeight":"normal","vrPointerSelectionTime":2000,"progressBarBorderColor":"#000000","toolTipHorizontalAlign":"center","toolTipTextShadowColor":"#000000","subtitlesTop":0,"vrPointerColor":"#FFFFFF","toolTipBorderColor":"#767676","playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"toolTipShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","subtitlesFontFamily":"Arial","toolTipPaddingTop":2,"paddingTop":0,"playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadShadowOpacity":0.7,"toolTipFontStyle":"normal","playbackBarHeadBorderSize":0,"toolTipFontColor":"#606060","paddingBottom":0,"progressBorderRadius":0,"progressBackgroundColorDirection":"vertical","toolTipPaddingBottom":2,"progressBarBackgroundColorRatios":[0],"playbackBarBackgroundOpacity":1,"progressLeft":0,"playbackBarHeadShadow":true,"subtitlesTextShadowColor":"#000000","playbackBarHeadHeight":15,"playbackBarProgressBackgroundColorRatios":[0],"transitionMode":"blending","surfaceReticleSelectionOpacity":1,"toolTipPaddingRight":3,"subtitlesFontWeight":"normal","subtitlesTextShadowVerticalLength":1,"toolTipShadowColor":"#333138","subtitlesShadow":false,"subtitlesFontSize":"3vmin","subtitlesPaddingTop":5,"progressBorderColor":"#000000","propagateClick":false,"toolTipTextShadowBlurRadius":1,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadOpacity":1,"subtitlesPaddingBottom":5,"progressBarBackgroundColor":["#3399FF"],"doubleClickAction":"toggle_fullscreen","subtitlesBackgroundOpacity":0.2,"playbackBarProgressBorderColor":"#000000","toolTipBackgroundColor":"#F6F6F6","playbackBarBorderRadius":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowVerticalLength":0,"progressBackgroundOpacity":1,"subtitlesOpacity":1,"playbackBarHeadBorderRadius":0,"shadow":false,"playbackBarOpacity":1,"toolTipBorderRadius":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"data":{"name":"Main Viewer"},"toolTipFontFamily":"Arial"},{"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","hfov":120,"pitch":0},"automaticZoomSpeed":10,"manualZoomSpeed":1,"manualRotationSpeed":1800,"class":"RotationalCamera","hoverFactor":0,"automaticRotationSpeed":10,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera"},{"video":["this.videores_C1B8F1AE_CD55_1B77_41D3_CFCCFC06276D","this.videores_C193E1DA_CD5C_FADF_41E2_E108886F3D1F"],"hfov":360,"loop":false,"hfovMax":140,"thumbnailUrl":"media/media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_t.jpg","data":{"label":"vrvaiaescola_visita_lisboa_chiado_portugues_1"},"pitch":0,"id":"media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","label":trans('media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5.label'),"class":"Video360","hfovMin":60,"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"RotationalCameraPosition","hfov":120,"pitch":0},"automaticZoomSpeed":10,"manualZoomSpeed":1,"manualRotationSpeed":1800,"class":"RotationalCamera","hoverFactor":0,"automaticRotationSpeed":10,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera"},{"class":"PlayList","items":["this.Video360PlayListItem_C1118827_CD5D_0975_41B5_C8C5C9BE3098"],"id":"playList_C1107783_CD5D_072D_41D0_508210D8F7AE"},{"video":["this.videores_C1BC9138_CD55_1B5B_41B6_9D25375F09C2","this.videores_C1BCD153_CD55_1B2D_41D8_4C13F6924620"],"hfov":360,"loop":false,"hfovMax":140,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"AdjacentPanorama"}],"data":{"label":"video360"},"pitch":0,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","label":trans('media_C0AB9F4A_CD30_4216_41CA_74AA125FB806.label'),"thumbnailUrl":"media/media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_t.jpg","class":"Video360","overlays":["this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"],"hfovMin":60,"partial":false,"vfov":180},{"initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"automaticZoomSpeed":10,"class":"PanoramaCamera","hoverFactor":0,"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera"},{"class":"PlayList","items":["this.Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D"],"id":"playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB"},{"hfov":360,"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","pitch":0,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":30,"select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":0,"select":"this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":-30,"select":"this.overlay_C3374531_CD30_4672_41D3_9642AA224F59.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","class":"AdjacentPanorama"},{"distance":100,"yaw":30,"select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},"panorama":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","class":"AdjacentPanorama"}],"hfovMax":130,"label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"Panorama","overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741","this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916","this.overlay_C3374531_CD30_4672_41D3_9642AA224F59"],"frames":[{"cube":{"levels":[{"width":9216,"colCount":18,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","height":1536,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":3},{"width":6144,"colCount":12,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","height":1024,"tags":"ondemand","class":"TiledImageResourceLevel","rowCount":2},{"width":3072,"colCount":6,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","height":512,"tags":["ondemand","preload"],"class":"TiledImageResourceLevel","rowCount":1}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg"}],"hfovMin":"150%","partial":false,"data":{"label":"intro"},"vfov":180},{"borderSize":0,"right":"5%","toolTipHorizontalAlign":"center","width":50,"paddingLeft":0,"paddingTop":0,"backgroundOpacity":0,"id":"IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","cursor":"hand","paddingBottom":0,"transparencyActive":false,"data":{"name":"IconButton11832"},"paddingRight":0,"horizontalAlign":"center","verticalAlign":"middle","height":36,"propagateClick":false,"bottom":"5%","maxHeight":36,"maxWidth":50,"iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","mode":"push","class":"IconButton","borderRadius":0,"minHeight":1,"minWidth":1,"shadow":false},{"aaEnabled":true,"arrowKeysAction":"translate","surfaceSelectionEnabled":false,"class":"PanoramaPlayer","touchControlMode":"drag_rotation","zoomEnabled":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"gyroscopeVerticalDraggingEnabled":true,"viewerArea":"this.MainViewer_mobile","buttonCardboardView":"this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","id":"MainViewer_mobilePanoramaPlayer"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","id":"PanoramaPlayListItem_C111F828_CD5D_097B_41D6_D3D5D77D809A"},{"framerate":29.97,"width":3620,"type":"video/mp4","url":trans('videores_C1B8F1AE_CD55_1B77_41D3_CFCCFC06276D.url'),"height":2038,"posterURL":trans('videores_C1B8F1AE_CD55_1B77_41D3_CFCCFC06276D.posterURL'),"class":"Video360Resource","bitrate":4635,"id":"videores_C1B8F1AE_CD55_1B77_41D3_CFCCFC06276D"},{"framerate":29.97,"width":3840,"type":"video/mp4","url":trans('videores_C193E1DA_CD5C_FADF_41E2_E108886F3D1F.url'),"height":2160,"posterURL":trans('videores_C193E1DA_CD5C_FADF_41E2_E108886F3D1F.posterURL'),"class":"Video360Resource","bitrate":4635,"id":"videores_C193E1DA_CD5C_FADF_41E2_E108886F3D1F"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5_camera","media":"this.media_C15C16E2_CD55_06EF_41C7_2D5FDB1061F5","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C1107783_CD5D_072D_41D0_508210D8F7AE, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C1107783_CD5D_072D_41D0_508210D8F7AE, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_C1118827_CD5D_0975_41B5_C8C5C9BE3098"},{"framerate":29.97,"width":3620,"type":"video/mp4","url":trans('videores_C1BC9138_CD55_1B5B_41B6_9D25375F09C2.url'),"height":2038,"posterURL":trans('videores_C1BC9138_CD55_1B5B_41B6_9D25375F09C2.posterURL'),"class":"Video360Resource","bitrate":10088,"id":"videores_C1BC9138_CD55_1B5B_41B6_9D25375F09C2"},{"framerate":29.97,"width":3840,"type":"video/mp4","url":trans('videores_C1BCD153_CD55_1B2D_41D8_4C13F6924620.url'),"height":2160,"posterURL":trans('videores_C1BCD153_CD55_1B2D_41D8_4C13F6924620.posterURL'),"class":"Video360Resource","bitrate":10088,"id":"videores_C1BCD153_CD55_1B2D_41D8_4C13F6924620"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","distance":50,"rotationX":20,"pitch":-25.98,"scaleMode":"fit_inside","playbackPositions":[{"yaw":0,"rotationX":20,"hfov":29,"rotationY":0,"roll":0,"timestamp":0,"class":"PanoramaOverlayPlaybackPosition","opacity":1,"pitch":-25.98,"vfov":6.5}],"yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"vfov":6.5}],"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"id":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","media":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0)","class":"Video360PlayListItem","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","id":"Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"bt_comecar"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","distance":50,"rotationX":20,"pitch":-26,"scaleMode":"fit_inside","yaw":0,"class":"HotspotPanoramaOverlayImage","data":{"label":"bt_comecar"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"vfov":6.5}],"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1","distance":50,"yaw":30,"pitch":0,"rotationY":30,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":25,"vfov":37.18}],"areas":["this.HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"],"id":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16","distance":50,"yaw":0,"pitch":0,"vfov":37.18,"class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":29,"scaleMode":"fit_inside"}],"areas":["this.HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"],"id":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},{"class":"HotspotPanoramaOverlay","maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"useHandCursor":true,"enabledInCardboard":true,"items":[{"image":"this.res_C23D5D2A_CD30_4616_41DB_7773EC3BED79","distance":50,"yaw":-30,"pitch":0,"rotationY":-30,"scaleMode":"fit_inside","class":"HotspotPanoramaOverlayImage","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","hfov":25,"vfov":37.18}],"areas":["this.HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"],"id":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},{"class":"ImageResource","levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png"}],"id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C111F828_CD5D_097B_41D6_D3D5D77D809A); this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"class":"ImageResource","levels":[{"height":90,"width":444,"class":"ImageResourceLevel","url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png"}],"id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D); this.setMediaBehaviour(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"class":"ImageResource","levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1_0.png"}],"id":"res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D); this.setMediaBehaviour(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play(); this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C1118827_CD5D_0975_41B5_C8C5C9BE3098); this.setMediaBehaviour(this.playList_C1107783_CD5D_072D_41D0_508210D8F7AE, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"},{"class":"ImageResource","levels":[{"height":535,"width":444,"class":"ImageResourceLevel","url":"media/res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16_0.png"}],"id":"res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D); this.setMediaBehaviour(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"},{"class":"ImageResource","levels":[{"height":458,"width":381,"class":"ImageResourceLevel","url":"media/res_C23D5D2A_CD30_4616_41DB_7773EC3BED79_0.png"}],"id":"res_C23D5D2A_CD30_4616_41DB_7773EC3BED79"},{"click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C1116827_CD5D_0975_41C6_71BABDE0AF5D); this.setMediaBehaviour(this.playList_C1106783_CD5D_072D_41E8_846B2E5E8ACB, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","mapColor":"any","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"}],"paddingRight":0,"defaultMenu":["fullscreen","mute","rotation"],"horizontalAlign":"left","scrollBarColor":"#000000","mediaActivationMode":"window","defaultVRPointer":"laser","contentOpaque":false,"children":["this.MainViewer_mobile","this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B"],"verticalAlign":"top","backgroundColorRatios":[0],"backgroundPreloadEnabled":true,"backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"propagateClick":false,"height":"100%","scrollBarOpacity":0.5,"vrPolyfillScale":0.75,"layout":"absolute","overflow":"hidden","mobileMipmappingEnabled":false,"scrollBarVisible":"rollOver","downloadEnabled":true,"class":"Player","borderRadius":0,"minHeight":0,"shadow":false,"scrollBarMargin":2,"backgroundColorDirection":"vertical","minWidth":0};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022