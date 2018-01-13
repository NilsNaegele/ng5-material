import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/startWith';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns = ['id', 'name', 'progress', 'color'];
  database = new DataBase();
  dataSource: MyDataSource | null;

  ngOnInit() {
    this.dataSource = new MyDataSource(this.database);
  }


}

// constants used to fill up database
const COLORS =  ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES = ['Carmen', 'Kara', 'Nils', 'Igor', 'Misko', 'Alex',
'Tobias', 'Rob', 'Hans', 'Brocco', 'Felippe', 'Mary',
'Cora', 'Jennifer', 'Helen', 'Tessa', 'Larissa', 'Kathy', 'Marcy'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

// sample database that the data source uses to retrieve data for the table
export class DataBase {
  // stream that emits whenever data has been modified
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  get data(): UserData[] {
    return this.dataChange.value;
  }

  constructor() {
    // fill up database with 100 users
    for (let i = 0; i < 100; i++) {
      this.addUser();
    }
  }

  // add a new user to the database
  addUser() {
    const copiedData = this.data.slice();
    copiedData.push(this.createNewUser());
    this.dataChange.next(copiedData);
  }

  // builds and returns a new user
  private createNewUser() {
    const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
                 NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

          return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
          };
  }

}
// data source to provide what data should be rendered in the table
export class MyDataSource extends DataSource<any> {
  constructor(private database: DataBase) {
    super();
  }

  connect(): Observable<UserData[]> {
    return this.database.dataChange;
  }

  disconnect() {}

  // getSortedData(): UserData[] {
  //   const copiedData = this.database.data.slice();
  //   if (!this.sort.active || this.sort.direction !== '') {
  //     return copiedData;
  //   }

  //   return copiedData.sort((a, b) => {
  //     let propertyA: number | string = '';
  //     let propertyB: number | string = '';

  //     switch (this.sort.active) {
  //       case 'id': [propertyA, propertyB] = [a.id, b.id]; break;
  //       case 'name': [propertyA, propertyB] = [a.id, b.id]; break;
  //       case 'progress': [propertyA, propertyB] = [a.id, b.id]; break;
  //       case 'color': [propertyA, propertyB] = [a.id, b.id]; break;
  //     }

  //     const valueA = isNaN(+propertyA) ? propertyA : +propertyB;
  //     const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

  //     return (valueA < valueB ? -1 : 1) * (this.sort.direction === 'asc' ? 1 : -1);
  //   });
  // }
}
