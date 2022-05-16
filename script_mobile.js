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
var script = {"start":"this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B], 'cardboardAvailable')","backgroundOpacity":1,"borderSize":0,"data":{"defaultLocale":"en","name":"Player484","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnInfoWindow":false,"speechOnTooltip":false,"speechOnQuizQuestion":false,"volume":1,"stopBackgroundAudio":false,"pitch":1,"rate":1}},"propagateClick":false,"class":"Player","gap":10,"width":"100%","contentOpaque":false,"backgroundPreloadEnabled":true,"scripts":{"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getOverlays":TDV.Tour.Script.getOverlays,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaByName":TDV.Tour.Script.getMediaByName,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"historyGoBack":TDV.Tour.Script.historyGoBack,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getKey":TDV.Tour.Script.getKey,"isPanorama":TDV.Tour.Script.isPanorama,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMapLocation":TDV.Tour.Script.setMapLocation,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"historyGoForward":TDV.Tour.Script.historyGoForward,"openLink":TDV.Tour.Script.openLink,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clone":TDV.Tour.Script.clone,"cloneBindings":TDV.Tour.Script.cloneBindings,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"init":TDV.Tour.Script.init,"playAudioList":TDV.Tour.Script.playAudioList,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"resumePlayers":TDV.Tour.Script.resumePlayers,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"registerKey":TDV.Tour.Script.registerKey,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"cloneCamera":TDV.Tour.Script.cloneCamera,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"executeJS":TDV.Tour.Script.executeJS,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"initQuiz":TDV.Tour.Script.initQuiz,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"quizFinish":TDV.Tour.Script.quizFinish,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"unregisterKey":TDV.Tour.Script.unregisterKey,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"mixObject":TDV.Tour.Script.mixObject,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"showPopupImage":TDV.Tour.Script.showPopupImage,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getPixels":TDV.Tour.Script.getPixels,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setValue":TDV.Tour.Script.setValue,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showWindow":TDV.Tour.Script.showWindow,"setLocale":TDV.Tour.Script.setLocale,"downloadFile":TDV.Tour.Script.downloadFile,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"existsKey":TDV.Tour.Script.existsKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getComponentByName":TDV.Tour.Script.getComponentByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMainViewer":TDV.Tour.Script.getMainViewer,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"shareSocial":TDV.Tour.Script.shareSocial,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"translate":TDV.Tour.Script.translate,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio},"paddingLeft":0,"paddingTop":0,"mediaActivationMode":"window","id":"rootPlayer","mouseWheelEnabled":true,"paddingBottom":0,"scrollBarMargin":2,"paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","defaultMenu":["fullscreen","mute","rotation"],"children":["this.MainViewer_mobile","this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B"],"scrollBarOpacity":0.5,"defaultVRPointer":"laser","height":"100%","backgroundColorRatios":[0],"verticalAlign":"top","backgroundColor":["#FFFFFF"],"desktopMipmappingEnabled":false,"layout":"absolute","backgroundColorDirection":"vertical","borderRadius":0,"scrollBarVisible":"rollOver","overflow":"hidden","mobileMipmappingEnabled":false,"minHeight":0,"vrPolyfillScale":0.75,"definitions": [{"items":["this.PanoramaPlayListItem_C3E9EA19_CD30_4232_41BB_EA11E3FA9408"],"class":"PlayList","id":"mainPlayList"},{"backgroundOpacity":0,"propagateClick":false,"borderSize":0,"right":"5%","width":50,"class":"IconButton","cursor":"hand","paddingLeft":0,"paddingTop":0,"id":"IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","transparencyActive":false,"paddingBottom":0,"data":{"name":"IconButton11832"},"paddingRight":0,"horizontalAlign":"center","bottom":"5%","height":36,"iconURL":"skin/IconButton_C020B844_CD0C_94EA_41D4_5E145B9C1A28.png","verticalAlign":"middle","maxHeight":36,"borderRadius":0,"maxWidth":50,"mode":"push","minHeight":1,"minWidth":1,"shadow":false,"toolTipHorizontalAlign":"center"},{"class":"Panorama","hfovMin":"150%","partial":false,"overlays":["this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77","this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741","this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916","this.overlay_C3374531_CD30_4672_41D3_9642AA224F59"],"hfovMax":130,"hfov":360,"vfov":180,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","select":"this.overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"}},{"distance":100,"yaw":30,"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","select":"this.overlay_C2179925_CD30_4E12_41C7_90D479EB1741.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"}},{"distance":100,"yaw":0,"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","select":"this.overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"}},{"distance":100,"yaw":-30,"panorama":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","select":"this.overlay_C3374531_CD30_4672_41D3_9642AA224F59.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"}}],"label":trans('panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9.label'),"id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","pitch":0,"frames":[{"cube":{"levels":[{"tags":"ondemand","width":9216,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1536,"colCount":18,"rowCount":3},{"tags":"ondemand","width":6144,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":1024,"colCount":12,"rowCount":2},{"tags":["ondemand","preload"],"width":3072,"url":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","height":512,"colCount":6,"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_t.jpg","class":"CubicPanoramaFrame"}],"data":{"label":"intro"}},{"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"PanoramaCameraPosition"},"class":"PanoramaCamera","id":"panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","automaticZoomSpeed":10},{"manualRotationSpeed":1800,"hoverFactor":0,"initialPosition":{"yaw":0,"pitch":0,"class":"RotationalCameraPosition","hfov":120},"class":"RotationalCamera","id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","manualZoomSpeed":1,"automaticZoomSpeed":10,"automaticRotationSpeed":10},{"viewerArea":"this.MainViewer_mobile","gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"displayPlaybackBar":true,"aaEnabled":true,"buttonCardboardView":"this.IconButton_C291575F_CD0F_9C96_41C3_4A92A234427B","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","arrowKeysAction":"translate","zoomEnabled":true,"id":"MainViewer_mobilePanoramaPlayer"},{"video":["this.videores_C210E15F_CD30_5E2E_41E2_66643916DE83","this.videores_C2BC9353_CD30_4235_41C3_6A35CB722307"],"partial":false,"loop":false,"class":"Video360","hfovMin":60,"overlays":["this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"],"hfovMax":140,"id":"media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","vfov":180,"adjacentPanoramas":[{"distance":3.49,"yaw":0,"panorama":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","select":"this.overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85.get('areas').forEach(function(a){ a.trigger('click') })","class":"AdjacentPanorama","data":{"overlayID":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"}}],"label":trans('media_C0AB9F4A_CD30_4216_41CA_74AA125FB806.label'),"hfov":360,"thumbnailUrl":"media/media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_t.jpg","pitch":0,"data":{"label":"video360"}},{"items":["this.Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D"],"class":"PlayList","id":"playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6"},{"toolTipShadowBlurRadius":1,"borderSize":0,"data":{"name":"Main Viewer"},"progressHeight":10,"class":"ViewerArea","transitionDuration":500,"playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","playbackBarHeight":10,"width":"100%","paddingLeft":0,"progressBorderSize":0,"subtitlesFontFamily":"Arial","progressRight":0,"id":"MainViewer_mobile","progressBarBorderRadius":0,"subtitlesTextShadowVerticalLength":1,"progressOpacity":1,"toolTipPaddingLeft":3,"progressBarBorderSize":0,"playbackBarHeadBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","paddingRight":0,"subtitlesHorizontalAlign":"center","progressBarBackgroundColorDirection":"vertical","translationTransitionDuration":1000,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadWidth":6,"subtitlesPaddingTop":5,"subtitlesEnabled":true,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarRight":0,"subtitlesFontSize":"3vmin","toolTipShadowOpacity":1,"subtitlesShadow":false,"height":"100%","playbackBarHeadShadowBlurRadius":1.5,"progressBarBorderColor":"#000000","toolTipPaddingRight":3,"subtitlesFontWeight":"normal","toolTipDisplayTime":600,"subtitlesPaddingBottom":5,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarLeft":0,"borderRadius":0,"surfaceReticleSelectionOpacity":1,"toolTipShadowColor":"#333138","progressBorderRadius":0,"playbackBarHeadShadowVerticalLength":0,"progressBarBackgroundColorRatios":[0],"playbackBarHeadShadowOpacity":0.7,"vrPointerColor":"#FFFFFF","playbackBarProgressBorderRadius":0,"progressBackgroundColorDirection":"vertical","playbackBarHeadHeight":15,"toolTipBorderRadius":1,"minHeight":25,"vrPointerSelectionTime":2000,"vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorRatios":[0,1],"progressLeft":0,"playbackBarHeadBorderSize":0,"subtitlesOpacity":1,"playbackBarHeadShadowColor":"#000000","firstTransitionDuration":0,"toolTipFontSize":"1.11vmin","minWidth":50,"toolTipHorizontalAlign":"center","toolTipPaddingBottom":2,"toolTipShadowSpread":0,"playbackBarHeadShadow":true,"progressBorderColor":"#000000","subtitlesBackgroundOpacity":0.2,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorRatios":[0],"displayTooltipInTouchScreens":true,"toolTipShadowVerticalLength":0,"subtitlesGap":0,"toolTipBorderColor":"#767676","paddingTop":0,"toolTipOpacity":1,"subtitlesBackgroundColor":"#000000","playbackBarBorderColor":"#FFFFFF","subtitlesPaddingLeft":5,"progressBackgroundColor":["#FFFFFF"],"transitionMode":"blending","subtitlesBorderColor":"#FFFFFF","paddingBottom":0,"playbackBarBorderRadius":0,"playbackBarBackgroundOpacity":1,"playbackBarHeadOpacity":1,"playbackBarProgressBorderColor":"#000000","subtitlesTextDecoration":"none","toolTipBorderSize":1,"subtitlesPaddingRight":5,"subtitlesBottom":50,"toolTipPaddingTop":2,"toolTipTextShadowBlurRadius":1,"surfaceReticleColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"displayTooltipInSurfaceSelection":true,"progressBarOpacity":1,"playbackBarHeadBorderRadius":0,"doubleClickAction":"toggle_fullscreen","subtitlesVerticalAlign":"bottom","toolTipBackgroundColor":"#F6F6F6","playbackBarHeadShadowHorizontalLength":0,"playbackBarOpacity":1,"progressBottom":0,"playbackBarHeadBackgroundColor":["#111111","#666666"],"surfaceReticleOpacity":0.6,"toolTipFontWeight":"normal","subtitlesTop":0,"toolTipFontStyle":"normal","playbackBarBottom":5,"playbackBarHeadBorderColor":"#000000","toolTipFontColor":"#606060","subtitlesTextShadowColor":"#000000","playbackBarProgressOpacity":1,"playbackBarBorderSize":0,"progressBackgroundOpacity":1,"subtitlesTextShadowOpacity":1,"subtitlesBorderSize":0,"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesTextShadowBlurRadius":0,"shadow":false,"toolTipTextShadowOpacity":0,"toolTipShadowHorizontalLength":0,"propagateClick":false},{"camera":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9_camera","media":"this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","id":"PanoramaPlayListItem_C3E9EA19_CD30_4232_41BB_EA11E3FA9408"},{"areas":["this.HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C","vfov":6.5,"yaw":0,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","distance":50,"rotationX":20,"data":{"label":"bt_comecar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-26,"hfov":29}],"maps":[],"data":{"hasPanoramaAction":true,"label":"bt_comecar"},"id":"overlay_C36E5283_CCA0_6F90_41CA_67D5C9C0DC77"},{"areas":["this.HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1","vfov":37.18,"yaw":30,"class":"HotspotPanoramaOverlayImage","rotationY":30,"distance":50,"scaleMode":"fit_inside","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"hfov":25}],"maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"id":"overlay_C2179925_CD30_4E12_41C7_90D479EB1741"},{"areas":["this.HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16","vfov":37.18,"yaw":0,"class":"HotspotPanoramaOverlayImage","hfov":29,"distance":50,"data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"scaleMode":"fit_inside"}],"maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"id":"overlay_C089B9CC_CD30_CE12_41E7_5B6FF916B916"},{"areas":["this.HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_C23D5D2A_CD30_4616_41DB_7773EC3BED79","vfov":37.18,"yaw":-30,"class":"HotspotPanoramaOverlayImage","rotationY":-30,"distance":50,"scaleMode":"fit_inside","data":{"label":"janela_intro"},"verticalAlign":"middle","horizontalAlign":"center","pitch":0,"hfov":25}],"maps":[],"data":{"hasPanoramaAction":true,"label":"janela_intro"},"id":"overlay_C3374531_CD30_4672_41D3_9642AA224F59"},{"posterURL":trans('videores_C210E15F_CD30_5E2E_41E2_66643916DE83.posterURL'),"width":3620,"bitrate":10088,"url":trans('videores_C210E15F_CD30_5E2E_41E2_66643916DE83.url'),"class":"Video360Resource","framerate":29.97,"height":2038,"type":"video/mp4","id":"videores_C210E15F_CD30_5E2E_41E2_66643916DE83"},{"posterURL":trans('videores_C2BC9353_CD30_4235_41C3_6A35CB722307.posterURL'),"width":3840,"bitrate":10088,"url":trans('videores_C2BC9353_CD30_4235_41C3_6A35CB722307.url'),"class":"Video360Resource","framerate":29.97,"height":2160,"type":"video/mp4","id":"videores_C2BC9353_CD30_4235_41C3_6A35CB722307"},{"areas":["this.HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"],"enabledInCardboard":true,"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"image":"this.res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0","vfov":6.5,"yaw":0,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","distance":50,"rotationX":20,"playbackPositions":[{"vfov":6.5,"yaw":0,"rotationX":20,"class":"PanoramaOverlayPlaybackPosition","rotationY":0,"roll":0,"timestamp":0,"opacity":1,"pitch":-25.98,"hfov":29}],"data":{"label":"bt_voltar"},"verticalAlign":"middle","horizontalAlign":"center","pitch":-25.98,"hfov":29}],"maps":[],"data":{"hasPanoramaAction":true,"label":"bt_voltar"},"id":"overlay_C0AA2F4A_CD30_4216_41C3_F1BF15544B85"},{"camera":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806_camera","media":"this.media_C0AB9F4A_CD30_4216_41CA_74AA125FB806","start":"this.MainViewer_mobilePanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0)","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.fixTogglePlayPauseButton(this.MainViewer_mobilePanoramaPlayer)","class":"Video360PlayListItem","id":"Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D); this.setMediaBehaviour(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C3EDFD35_CCA0_1AF0_41E1_616E602CD754"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2CD30C_CD02_594E_41A6_ACC6F1A89D8C"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D); this.setMediaBehaviour(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C2184931_CD30_4E72_41D0_D43CAE0E624A"},{"levels":[{"height":458,"width":381,"url":"media/res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D1D2A_CD30_4616_41E9_26A0200DAEC1"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D); this.setMediaBehaviour(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C08839CD_CD30_CE12_41E0_688555DFFD98"},{"levels":[{"height":535,"width":444,"url":"media/res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D3D2A_CD30_4616_41CD_E7AAF9F1FA16"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.Video360PlayListItem_C3E94A18_CD30_4232_41CC_7A99A134809D); this.setMediaBehaviour(this.playList_C3E8F96D_CD30_4E12_41E4_49A50C989EA6, 0, this.panorama_C36E427B_CCA0_6F70_41E8_4F742930AFF9, true); this.MainViewer_mobilePanoramaPlayer.play()","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C33DE538_CD30_4672_41C0_C89204DBA625"},{"levels":[{"height":458,"width":381,"url":"media/res_C23D5D2A_CD30_4616_41DB_7773EC3BED79_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_C23D5D2A_CD30_4616_41DB_7773EC3BED79"},{"mapColor":"any","click":"this.setPanoramaCameraWithCurrentSpot(this.PanoramaPlayListItem_C3E9EA19_CD30_4232_41BB_EA11E3FA9408); this.mainPlayList.set('selectedIndex', 0)","class":"HotspotPanoramaOverlayArea","id":"HotspotPanoramaOverlayArea_C356F5F1_CD06_78D9_41B1_A0340AADD322"},{"levels":[{"height":90,"width":444,"url":"media/res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0_0.png","class":"ImageResourceLevel"}],"class":"ImageResource","id":"res_DC2A230C_CD02_594E_41D9_3E2701FEAFD0"}],"scrollBarColor":"#000000","downloadEnabled":true,"minWidth":0,"shadow":false,"toolTipHorizontalAlign":"center"};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['history'] = {};
script['scripts']['createQuizConfig'] = createQuizConfig;
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2022.1.2.js.map
})();
//Generated with v2022.1.2, Mon May 16 2022