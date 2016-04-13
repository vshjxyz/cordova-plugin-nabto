/*
 * Copyright (C) 2008-2016 Nabto - All Rights Reserved.
 */

/* globals cordova */

var exec = require('cordova/exec'),
  NabtoStatus = require('./NabtoStatus'),
  NabtoError = require('./NabtoError'),
  NabtoTunnelState = require('./NabtoTunnelState');

function Nabto() {}

Nabto.prototype.startup = function(user, pass, cb) {
  if (typeof user === 'function') {
    cb = user;
    user = null;
  }
  cb = cb || function() {};
  user = user || 'guest';
  pass = pass || '123456';

  exec(
    function() { cb(); },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'startup', [user, pass]);
};

Nabto.prototype.shutdown = function(cb) {
  cb = cb || function() {};

  exec(
    function() { cb(); },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'shutdown', []);
};

Nabto.prototype.fetchUrl = function(url, cb) {
  cb = cb || function() {};

  exec(
    function(result) {
      var obj, err;

      try {
        obj = JSON.parse(result);
      } catch (e) {
        err = new NabtoError(NabtoError.PARSE_ERROR);
      } finally {
        cb(err, obj);
      }
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'fetchUrl', [url]);
};

Nabto.prototype.getSessionToken = function(cb) {
  exec(
    function(token) {
      cb(undefined, token);
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'getSessionToken', []);
};

Nabto.prototype.getLocalDevices = function(cb) {
  exec(
    function(devices) {
      cb(undefined, devices);
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'getLocalDevices', []);
};

Nabto.prototype.version = function(cb) {
  exec(
    function(version) {
      cb(undefined, version);
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'version', []);
};

Nabto.prototype.tunnelOpenTcp = function(host, port, cb) {
  exec(
    function() { cb(); },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelOpenTcp', [host, port]);
};

Nabto.prototype.tunnelVersion = function(cb) {
  exec(
    function(version) {
      cb(undefined, version);
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelVersion', []);
};

Nabto.prototype.tunnelState = function(cb) {
  exec(
    function(state) {
      cb(undefined, new NabtoTunnelState(state));
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelState', []);
};

Nabto.prototype.tunnelLastError = function(cb) {
  exec(
    function(status) {
      cb(new NabtoStatus(status));
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelLastError', []);
};

Nabto.prototype.tunnelPort = function(cb) {
  exec(
    function(port) {
      cb(undefined, port);
    },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelPort', []);
};

Nabto.prototype.tunnelClose = function(cb) {
  exec(
    function() { cb(); },
    function(status) {
      cb(new NabtoStatus(status));
    }, 'Nabto', 'tunnelClose', []);
};

module.exports = new Nabto();
