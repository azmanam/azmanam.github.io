$(document).ready(function() {
	$.ajax({
		type: 'GET',
		url: 'refs.json',
		dataType: 'json',
		success: function(output) {
//			console.log(output);
			var section = "Peer-reviewed Journal Articles";
			$('.pubs').append('<h3>'+section+'</h3>');
			for (i=0;i<output[section].length;i++) {
				for (key in output[section][i]) {
					var fullRef = (i+1)+". ";
					if (output[section][i]['Author']) {
						for (j=0;j<output[section][i]['Author'].length;j++) {
							if (output[section][i]['Author'][j].indexOf('Azman') > -1) {
								fullRef += '<strong>'+output[section][i]['Author'][j]+'</strong>';
							} else {
								fullRef += output[section][i]['Author'][j]
							}
							if (j == output[section][i]['Author'].length - 1) {
								fullRef += ' ';
							} else {
								fullRef += '; ';
							}
						}
					}
					if (output[section][i]['Title']) {fullRef += output[section][i]['Title']+'. '};
					if (output[section][i]['Journal']) {fullRef += '<em>'+output[section][i]['Journal']+'</em> '};
					if (output[section][i]['Year']) {fullRef += '<strong>'+output[section][i]['Year']+'</strong>, '};
					if (output[section][i]['Volume']) {fullRef += '<em>'+output[section][i]['Volume']+'</em>'};
					if (output[section][i]['Issue']) {fullRef += '('+output[section][i]['Issue']+')'};
					if (output[section][i]['Pages']) {fullRef += ', '+output[section][i]['Pages']+'. '};
					if (output[section][i]['DOI']) {fullRef += 'DOI: <a href="http://dx.doi.org/'+output[section][i]['DOI']+'">'+output[section][i]['DOI']+'</a>'};
					if (output[section][i]['Invited']) {fullRef += ' - <strong>INVITED</strong>'};
				}
				$('.pubs').append('<p>'+fullRef+'</p>');
			}
			var section = "Book Chapters";
			$('.pubs').append('<h3>'+section+'</h3>');
			for (i=0;i<output[section].length;i++) {
				for (key in output[section][i]) {
					var fullRef = (i+1)+". ";
					if (output[section][i]['Author']) {
						for (j=0;j<output[section][i]['Author'].length;j++) {
							if (output[section][i]['Author'][j].indexOf('Azman') > -1) {
								fullRef += '<strong>'+output[section][i]['Author'][j]+'</strong>';
							} else {
								fullRef += output[section][i]['Author'][j]
							}
							if (j == output[section][i]['Author'].length - 1) {
								fullRef += ' ';
							} else {
								fullRef += '; ';
							}
						}
					}
					if (output[section][i]['Chapter Title']) {fullRef += output[section][i]['Chapter Title']+'. '};
					if (output[section][i]['Book Title']) {fullRef += 'In <em>'+output[section][i]['Book Title']+'</em>'};
					if (output[section][i]['Edition']) {fullRef += ', '+output[section][i]['Edition']+' ed.'};
					if (output[section][i]['Editor']) {fullRef += '; '+output[section][i]['Editor']+'; '};
					if (output[section][i]['Series']) {fullRef += output[section][i]['Series']+'; '};
					if (output[section][i]['Publisher']) {fullRef += output[section][i]['Publisher']+': '};
					if (output[section][i]['City']) {fullRef += output[section][i]['City']+', '};
					if (output[section][i]['Year']) {fullRef += '<strong>'+output[section][i]['Year']+'</strong>; '};
					if (output[section][i]['Pages']) {fullRef += output[section][i]['Pages']+'.'};
					if (output[section][i]['Invited']) {fullRef += ' - <strong>INVITED</strong>'};
				}
				$('.pubs').append('<p>'+fullRef+'</p>');
			}
			var section = "Editor-reviewed Articles";
			$('.pubs').append('<h3>'+section+'</h3>');
			for (i=0;i<output[section].length;i++) {
				for (key in output[section][i]) {
					var fullRef = (i+1)+". ";
					if (output[section][i]['Author']) {
						for (j=0;j<output[section][i]['Author'].length;j++) {
							if (output[section][i]['Author'][j].indexOf('Azman') > -1) {
								fullRef += '<strong>'+output[section][i]['Author'][j]+'</strong>';
							} else {
								fullRef += output[section][i]['Author'][j]
							}
							if (j == output[section][i]['Author'].length - 1) {
								fullRef += ' ';
							} else {
								fullRef += '; ';
							}
						}
					}
					if (output[section][i]['Title']) {fullRef += output[section][i]['Title']+'. '};
					if (output[section][i]['Journal']) {fullRef += '<em>'+output[section][i]['Journal']+'</em> '};
					if (output[section][i]['Year']) {fullRef += '<strong>'+output[section][i]['Year']+'</strong>, '};
					if (output[section][i]['Volume']) {fullRef += '<em>'+output[section][i]['Volume']+'</em>'};
					if (output[section][i]['Issue']) {fullRef += '('+output[section][i]['Issue']+')'};
					if (output[section][i]['Pages']) {fullRef += ', '+output[section][i]['Pages']+'.'};
					if (output[section][i]['DOI']) {fullRef += ' DOI: <a href="http://dx.doi.org/'+output[section][i]['DOI']+'">'+output[section][i]['DOI']+'</a>'};
					if (output[section][i]['URL']) {fullRef += ' URL: <a href="http://'+output[section][i]['URL']+'">'+output[section][i]['URL']+'</a> '};
					if (output[section][i]['Invited']) {fullRef += ' - <strong>INVITED</strong>'};
				}
				$('.pubs').append('<p>'+fullRef+'</p>');
			}
			var section = "Presentations";
			$('.pubs').append('<h3>'+section+'</h3>');
			for (i=0;i<output[section].length;i++) {
				for (key in output[section][i]) {
					var fullRef = (i+1)+". ";
					if (output[section][i]['Author']) {
						for (j=0;j<output[section][i]['Author'].length;j++) {
							if (output[section][i]['Author'][j].indexOf('Azman') > -1) {
								fullRef += '<strong>'+output[section][i]['Author'][j]+'</strong>';
							} else {
								fullRef += output[section][i]['Author'][j]
							}
							if (j == output[section][i]['Author'].length - 1) {
								fullRef += ' ';
							} else {
								fullRef += '; ';
							}
						}
					}
					if (output[section][i]['Title']) {fullRef += output[section][i]['Title']+'. '};
					if (output[section][i]['Abstract']) {fullRef += '<em>'+output[section][i]['Abstract']+'</em>, '};
					if (output[section][i]['Conference']) {fullRef += output[section][i]['Conference']+', '};
					if (output[section][i]['City']) {fullRef += output[section][i]['City']+', '};
					if (output[section][i]['Date']) {fullRef += output[section][i]['Date']};
					if (output[section][i]['Publisher']) {fullRef += '; '+output[section][i]['Publisher']+', '};
					if (output[section][i]['Year']) {fullRef += '<strong>'+output[section][i]['Year']+'</strong>. '};
					if (output[section][i]['Invited']) {fullRef += ' - <strong>INVITED</strong>'};
				}
				$('.pubs').append('<p>'+fullRef+'</p>');
			}
			var section = "Student Presentations";
			$('.pubs').append('<h3>'+section+'</h3>');
			for (i=0;i<output[section].length;i++) {
				for (key in output[section][i]) {
					var fullRef = (i+1)+". ";
					if (output[section][i]['Author']) {
						for (j=0;j<output[section][i]['Author'].length;j++) {
							if (output[section][i]['Author'][j].indexOf('Azman') > -1) {
								fullRef += '<strong>'+output[section][i]['Author'][j]+'</strong>';
							} else {
								fullRef += output[section][i]['Author'][j]
							}
							if (j == output[section][i]['Author'].length - 1) {
								fullRef += ' ';
							} else {
								fullRef += '; ';
							}
						}
					}
					if (output[section][i]['Title']) {fullRef += output[section][i]['Title']+'. '};
					if (output[section][i]['Abstract']) {fullRef += '<em>'+output[section][i]['Abstract']+'</em>, '};
					if (output[section][i]['Conference']) {fullRef += output[section][i]['Conference']+', '};
					if (output[section][i]['City']) {fullRef += output[section][i]['City']+', '};
					if (output[section][i]['Date']) {fullRef += output[section][i]['Date']};
					if (output[section][i]['Publisher']) {fullRef += '; '+output[section][i]['Publisher']+', '};
					if (output[section][i]['Year']) {fullRef += '<strong>'+output[section][i]['Year']+'</strong>. '};
					if (output[section][i]['Invited']) {fullRef += ' - <strong>INVITED</strong>'};
				}
				$('.pubs').append('<p>'+fullRef+'</p>');
			}
		}
	});
});