var jmlTemu = 16;

for (var temuAwal = 1; temuAwal <= jmlTemu; temuAwal++) {
  if (temuAwal == 5 || temuAwal == 14) {
    console.log('Pertemuan ke- ' + temuAwal + ' diadakan kuis');
  } else if (temuAwal == 8 || temuAwal == 16) {
    console.log('Pertemuan ke- ' + temuAwal + ' diadakan ujian');
  } else if (temuAwal >= 9) {
    console.log('Pertemuan ke- ' + temuAwal + ' belum selesai');
  } else {
    console.log('Pertemuan ke- ' + temuAwal + ' telah selesai');
  }
}
