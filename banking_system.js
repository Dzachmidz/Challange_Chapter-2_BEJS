class BankAccount {
  constructor() {
    this.saldo = 0;
    this.balance = [];
  }

  async deposit() {
    let jumlah = Number(window.prompt("Masukkan jumlah deposit:"));
    setTimeout(() => {
      window.alert(`Deposit sebesar : ${jumlah}`);
    }, 1000);
    setTimeout(() => {
      console.log(`Deposit sebesar : ${jumlah}`);
    }, 1000);

    await new Promise((resolve, reject) => {
      if (jumlah >= 0) {
        setTimeout(() => {
          this.saldo += jumlah;
          this.balance.push(jumlah);
          resolve(
            `Berhasil menambahkan saldo sebesar: ${jumlah}.\nSaldo anda saat ini: ${this.saldo}`
          );
        }, 3000);
      } else {
        reject(
          "Saldo anda tidak valid, silahkan masukkan kembali nominal anda!"
        );
      }
    })
      .then((message) => {
        console.log(message);
        window.alert(message);
      })
      .catch((error) => {
        console.error(error);
        window.alert(error);
      });
  }

  async withdraw() {
    let jumlah = Number(window.prompt("Masukkan jumlah penarikan:"));
    setTimeout(() => {
      window.alert(`Withdraw sebesar : ${jumlah}`);
    }, 1000);
    setTimeout(() => {
      console.log(`Withdraw sebesar : ${jumlah}`);
    }, 1000);

    await new Promise((resolve, reject) => {
      if (jumlah >= 0 && jumlah <= this.saldo) {
        setTimeout(() => {
          this.saldo -= jumlah;
          this.balance.push(jumlah);
          resolve(
            `Berhasil mengurangi saldo sebesar: ${jumlah}.\nSaldo anda saat ini: ${this.saldo}`
          );
        }, 3000);
      } else {
        reject(
          "Nominal melebihi saldo saat ini, silahkan masukkan kembali nominal anda!"
        );
      }
    })
      .then((message) => {
        console.log(message);
        window.alert(message);
      })
      .catch((error) => {
        console.error(error);
        window.alert(error);
      });
  }
}

async function main() {
  const saldobank = new BankAccount();

  console.log(`Saldo awal anda: ${saldobank.saldo}`);
  window.alert(`Saldo awal anda: ${saldobank.saldo}`);

  let repeat = true;

  while (repeat) {
    let aksi = window.prompt("Pilih tindakan:\n1. Deposit\n2. Withdraw\n3. Keluar");

    if (aksi === null) {
      window.alert("Terimakasih, silahkan datang kembali!");
      repeat = false;
      break;
    }

    aksi = Number(aksi);

    switch (aksi) {
      case 1:
        await saldobank.deposit();
        break;
      case 2:
        await saldobank.withdraw();
        break;
      case 3:
        window.alert("Terimakasih, silahkan datang kembali!");
        repeat = false;
        break;
      default:
        window.alert("Pilihan tidak valid. Silahkan coba lagi.");
        break;
    }
  }
}

main();
