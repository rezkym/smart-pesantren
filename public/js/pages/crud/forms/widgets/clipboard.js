(()=>{"use strict";var e={init:function(){new ClipboardJS("[data-clipboard=true]").on("success",(function(e){e.clearSelection(),alert("Copied!")}))}};jQuery(document).ready((function(){e.init()}))})();