/**
 * @license The MIT License (MIT)
 * @author Stanislav Kalashnik <darkpark.main@gmail.com>
 */

'use strict';

// public
module.exports = {
    // base rules
    extends: require.resolve('spa-eslint'),

    globals: {
        dvbManager: false,
        gSTB: false,
        pvrManager: false,
        stbBluetooth: false,
        stbBrowser: false,
        stbDisplay: false,
        stbDisplayManager: false,
        stbDownloadManager: false,
        stbDvbChannelList: false,
        stbDvbManager: false,
        stbEpgManager: false,
        stbEvent: false,
        stbPlayerManager: false,
        stbStorage: false,
        stbSurfaceManager: false,
        stbUpdate: false,
        stbUPnP: false,
        stbWebWindow: false,
        stbWildWebWindow: false,
        stbWindowMgr: false,
        timeShift: false
    },

    // override any settings from the "parent" configuration
    rules: {}
};
