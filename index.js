var Howl = require('howler').Howl;

function Unpacker() {
}

Unpacker.prototype.unpack = function(packId, files, cache, manifest, loadr) {
	var howl = new Howl({
		src: [loadr.serverUrl + packId + '.mp3', loadr.serverUrl + packId + '.mp3'],
		sprite: files.json.sprite,
		onload: function() {
		}
	});

	cache.set(packId + '-audiosprite', howl);
};

module.exports = Unpacker;
