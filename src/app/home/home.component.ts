import { Component, OnInit } from '@angular/core';
import { FetchAllInfoService } from '../fetch-all-info.service';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public allInfo = [];
  public allInfoNew = [];
  public allBooks;
  public allCharacters;
  public allHouses;
  public selectedValue = 'All';



  constructor(public fetchAllInfo: FetchAllInfoService, private spinnerService: Ng4LoadingSpinnerService, private toastr: ToastrService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.allBooks = this.fetchAllInfo.getAllBooks().subscribe(
      data => {
        this.allBooks = data;
        this.getall(this.allBooks);
      },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );

    this.allCharacters = this.fetchAllInfo.getAllCharacters().subscribe(
      data => {
        this.allCharacters = data;
        this.getall(this.allCharacters);
      },
      error => {
        // Toast message
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );

    // getting all houses
    this.allHouses = this.fetchAllInfo.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        this.getall(this.allHouses);

      },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );
    // delaying spinner
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);

  }

  // putting all data in one list
  public getall(data) {
    let x;
    for (x of data) {
      this.allInfo.push(x);
    }
    this.allInfo.sort((a, b) => a.name.localeCompare(b.name));
    this.dummyNames(this.allInfo);
    this.allInfoNew = this.allInfo;

  }

  // fetching the last value from the url for routing
  public getselection(url: any) {
    let x = [];
    x = url.split('/');
    return x[x.length - 1];
  }

  // giving dummy names to those which have empty name field
  public dummyNames(list: any) {
    for (const x of list) {
      if (x.name.trim() === '' && x.url.includes('characters')) {
        x.name = 'Dummy Character';
      } else if (x.name.trim() === '' && x.url.includes('books')) {
        x.name = 'Dummy Book';
      } else if (x.name.trim() === '' && x.url.includes('houses')) {
        x.name = 'Dummy House';
      }
    }
  }

  // updating the lists according to the drop value
  public selectValue(value: any) {
    this.selectedValue = value;

    if (this.selectedValue === 'Books') {
      this.allInfo = this.allBooks;
    } else if (this.selectedValue === 'All') {
      this.allInfo = this.allInfoNew;
    } else if (this.selectedValue === 'Characters') {
      this.allInfo = this.allCharacters;
    } else if (this.selectedValue === 'Houses') {
      this.allInfo = this.allHouses;
    }
    // alphabetically sort
    this.allInfo.sort((a, b) => a.name.localeCompare(b.name));

  }

}
