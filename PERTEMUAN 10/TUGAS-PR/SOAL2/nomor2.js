var nilai = prompt("input nilai mhs: ").toUpperCase();
// fungsi toUpperCase() digunakan untuk merubah inputan menjadi kapital.

switch (nilai) {
  case 'A':
    alert('Sangat Memuaskan');
    break;
  case 'B':
    alert('Memuaskan');
    break;
  case 'C':
    alert('Baik');
    break;
  default:
    alert('Nilai yang Anda masukkan tidak sesuai. Mohon dicoba lagi.');
}