import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Transaction } from '../transaction.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css'],
})

export class FoodComponent implements OnInit {
  balance: number;
  amount: number;
  loadedTransactions: Transaction[] = [];
  transactionType = '';
  question: boolean = false;
  index;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.onReturn();
    if (!this.balance) this.balance = 0;
  }

  onCreatePost(postForm) {
    const postData = postForm.value;
    if (!this.balance) this.balance = 0;

    if (postData.transactionType == 'credit') {
      this.balance = this.balance + parseFloat(postData.amount);
    } else {
      this.balance = this.balance - parseFloat(postData.amount);
    }
    this.http
      .post<Transaction>(
        'https://caitlins-wallet-default-rtdb.firebaseio.com/food.json',
        { ...postData, balance: this.balance }
      )
      .subscribe((responseData) => {
        console.log(responseData);
        this.loadedTransactions.unshift({ ...postData, balance: this.balance });
      });

    this.http
      .get<Transaction>(
        'https://caitlins-wallet-default-rtdb.firebaseio.com/food.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Transaction[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.loadedTransactions = posts.reverse();
      });

    postForm.reset();
  }

  onReturn() {
    return this.http
      .get<Transaction>(
        'https://caitlins-wallet-default-rtdb.firebaseio.com/food.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Transaction[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key))
              postsArray.push({ ...responseData[key], id: key });
          }
          return postsArray;
        })
      )
      .subscribe((posts) => {
        this.balance = posts[posts.length - 1].balance;
        console.log(posts);
        console.log(this.balance);
        this.loadedTransactions = posts.reverse();
      });
  }

  onClick(i) {
    this.index = i;
    this.question = true;
  }

  onNo() {
    this.question = false;
  }

  onYes() {
    this.loadedTransactions.splice(this.index, 1);
    this.overrideData(this.loadedTransactions);
    this.question = false;
    if (this.loadedTransactions.length === 0) this.balance = 0;
  }

  overrideData(loadedTransactions) {
    this.http
      .put(
        'https://caitlins-wallet-default-rtdb.firebaseio.com/food.json',
        loadedTransactions
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
}
