import { Component, OnInit } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchAllInfoService } from '../fetch-all-info.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public currentSelection;
  public listOfSelection = [];
  public option2: any;

  constructor(private _route: ActivatedRoute, private router: Router, public fetchAll: FetchAllInfoService,
    private spinnerService: Ng4LoadingSpinnerService, private location: Location, private toastr: ToastrService) { }

  ngOnInit() {
    this.spinnerService.show();

    let option: any;
    let selection: any;
    option = this._route.snapshot.paramMap.get('option');
    selection = this._route.snapshot.paramMap.get('selection');
    this.option2 = option.substring(0, option.length - 1).toUpperCase();
    this.currentSelection = this.fetchAll.getView(option, selection).subscribe(
      data => {
        this.currentSelection = data;
        this.getAll(this.currentSelection);
      },
      error => {
        this.toastr.error('some error occured', 'Error');
        console.log(error.errorMessage);
      }
    );
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }

  // pushing the data to an array for displaying
  public getAll(data) {
    let combine: any;
    // tslint:disable-next-line:forin
    for (const index in data) {
      let iterateArray = '';
      let x, option3;
      // give dummy name
      if (index === 'name' && data[index] === '') {
        option3 = this.option2.substring(0, 1) + this.option2.substring(1, this.option2.length).toLowerCase();
        data[index] = 'Dummy ' + option3;
        combine = index.toUpperCase().bold() + ': ' + data[index];
        // parse date
      } else if ((index === 'born' || index === 'died' || index === 'diedOut' || index === 'released') &&
        data[index] !== '') {
        combine = index.toUpperCase().bold() + ': ' + new Date(data[index]);
        // check if the data for particular index is availabe or not
      } else if (data[index] === '' || data[index][0] === '' || data[index].length === 0) {
        combine = index.toUpperCase().bold() + ': ' + 'Unknown';
      // check if index is an array
      } else if (Array.isArray(data[index])) {
        for (x of data[index]) {
          iterateArray += x + ',\n';
        }
        combine = index.toUpperCase().bold() + ': ' + iterateArray.substring(0, iterateArray.length - 2);
        // all other indexes
      } else {
        combine = index.toUpperCase().bold() + ': ' + data[index];
      }
      this.listOfSelection.push(combine);
    }
  }

  public goBack = (): any => {
    this.location.back();
  }


}
