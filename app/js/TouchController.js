
KEY_NOTES_PLAY      = [00, 01, 02, 03, 04, 05, 06, 07];
KEY_AUDIO_LIBRARY   = [08, 09, 10];
KEY_MUSIC_SELECTOR  = [11];


exports.touched = function(req, res) {
  var key = req.params.number;

  if(key < 7){
    global.checkPositionsCtrl(key);

  }else if(key == 11){
    console.log('scroll song');
  }

  res.send('OK');
};