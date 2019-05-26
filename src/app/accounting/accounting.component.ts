import { Component, OnInit } from '@angular/core';
import { AccountingRecord } from './accountingRecord';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent implements OnInit {
  httpClient: any;

  constructor() { }
  accountingRecords: AccountingRecord[] = [
    { id: 1, userName: '煞氣欸哥', costType: '食物', item: '測試用食物', account: 'TWD', cost: 10, date: Date.now(), currency: '' },
    { id: 1, userName: '煞氣欸哥', costType: '食物', item: '測試用食物', account: 'TWD', cost: 10, date: Date.now(), currency: '' },
    { id: 1, userName: '煞氣欸哥', costType: '食物', item: '測試用食物', account: 'TWD', cost: 10, date: Date.now(), currency: '' },
    { id: 1, userName: '煞氣欸哥', costType: '食物', item: '測試用食物', account: 'TWD', cost: 10, date: Date.now(), currency: '' }
  ];

  ngOnInit() {
  }

  getAccountingRecords() {
    const url = 'https://b3d930df-dd58-4968-8f4e-ebecd968a934.mock.pstmn.io/accountingRecords/get';
  }

}
