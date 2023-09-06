// Deklarasi variabel saldo dengan nilai awal 1 juta
let saldo = 0;

// Fungsi untuk menambah saldo
function tambahSaldo(){
  let tambah = Number(window.prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));
  if (tambah >= 0) {
    console.log(`Tambah Saldo : ${tambah}`);
    saldo += tambah;
    window.alert(`Saldo berhasil ditambahkan. Saldo anda saat ini: ${saldo}`);
  } else {
    window.alert("Saldo tidak valid, masukkan kembali saldonya.");
  }
  console.log(`Saldo Akhir : ${saldo}`)
} 

// Fungsi untuk mengurangi saldo
function kurangSaldo() {
  let kurangi = Number(window.prompt("Masukkan jumlah saldo yang ingin dikurangi:"));
  console.log(`Kurang Saldo : ${kurangi}`);
  if (kurangi >= 0) {
    if (kurangi <= saldo) {
      saldo -= kurangi;
      window.alert(`Saldo berhasil dikurangi. Saldo anda saat ini: ${saldo}`);
    } else {
      window.alert("Jumlah yang ingin dikurangi melebihi saldo saat ini.");
    }
  } else {
    window.alert("Saldo tidak valid, masukkan kembali saldonya.");
  }
  console.log(`Saldo Akhir : ${saldo}`)
} 


// Menampilkan saldo awal
window.alert(`Saldo awal : ${saldo}`);
console.log(`Saldo awal : ${saldo}`);

let repeat = true;
do {
  let aksi = window.prompt("=======SELAMAT DATANG DI BANK ACCOUNT=======\nSilahkan masukkan pilihan anda:\n1. Tambah Saldo\n2. Kurang Saldo\n3. Keluar");

  switch (Number(aksi)) {
    case 1:
      tambahSaldo();
      break;
    case 2:
      kurangSaldo();
      break;
    case 3:
      repeat = false;
      break;
    default:
      window.alert("Aksi tidak valid, silahkan coba lagi.");
      console.log(aksi);
  }
  
} while (repeat);


