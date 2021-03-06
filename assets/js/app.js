// Brunch automatically concatenates all files in your
// watched paths. Those paths can be configured at
// config.paths.watched in "brunch-config.js".
//
// However, those files will only be executed if
// explicitly imported. The only exception are files
// in vendor, which are never wrapped in imports and
// therefore are always executed.

// Import dependencies
//
// If you no longer want to use a dependency, remember
// to also remove its path from "config.paths.watched".
import "phoenix_html"
import game_start from "./game"

// Import local files
//
// Local files can be imported directly using relative
// paths "./socket" or full ones "web/static/js/socket".

import socket from "./socket"
function init() {
    let root = document.getElementById('game');
    if(root) {
      
      let urlParams = new URLSearchParams(window.location.search)
      let playerName = urlParams.get('playerName')
      console.log(playerName)
      let data = { player: playerName}
      let channel = socket.channel("game:" + window.gameState, data);
      game_start(root, channel, playerName)
    }
    
  }
  // Use jQuery to delay until page loaded.
  $(init);