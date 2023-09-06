class BankAccount {
    constructor() {
      this.balance = 0;
      this.transactionHistory = [];
    }
  
    deposit(amount) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (amount >= 0) {
            this.balance += amount;
            this.transactionHistory.push(`Deposit ${amount}`);
            resolve(`Saldo berhasil ditambahkan ${amount}. Saldo Anda saat ini: ${this.balance}`);
          } else {
            reject('Saldo tidak valid, masukkan kembali saldonya.');
          }
        }, 3000); // Simulasikan operasi asynchronous dengan menunda eksekusi selama 3 detik
      });
    }
  
    withdraw(amount) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (amount >= 0 && amount <= this.balance) {
            this.balance -= amount;
            this.transactionHistory.push(`Withdrawal ${amount}`);
            resolve(`Saldo berhasil dikurangi ${amount}. Saldo Anda saat ini: ${this.balance}`);
          } else {
            reject('Saldo tidak valid atau jumlah yang ingin dikurangi melebihi saldo saat ini.');
          }
        }, 5000); // Simulasikan operasi asynchronous dengan menunda eksekusi selama 5 detik
      });
    }
  
    getBalance() {
      return this.balance;
    }
  
    getTransactionHistory() {
      return this.transactionHistory;
    }
  }
  
const account = new BankAccount();

// Simulate a deposit
account.deposit(5000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Simulate a withdrawal
account.withdraw(2000)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// Get the current balance
console.log(`Saldo saat ini: ${account.getBalance()}`);
