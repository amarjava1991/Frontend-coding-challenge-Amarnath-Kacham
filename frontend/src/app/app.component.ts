import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Enrolles } from './interface/enrolles';
import { EnrollesService } from './services/enrolles.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateEnrolleDialogComponent } from './update-enrolle-dialog/update-enrolle-dialog.component';
import { DeleteEnrolleDialogComponent } from './delete-enrolle-dialog/delete-enrolle-dialog.component';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  public enrollesList:Enrolles[]=[];
  tableColumns: string[] = ['enrollId','name', 'dateOfBirth','activeToggle','actions'];
  public dialogRef: MatDialogRef<UpdateEnrolleDialogComponent>
  public deletedialogRef: MatDialogRef<DeleteEnrolleDialogComponent>
  constructor(private enrollesService:EnrollesService,public dialog: MatDialog) {

  }
  ngOnInit() {
      this.getEnrolles()
  }
    // Get all enrolles 

  getEnrolles(){
    this.enrollesService.GetEnrolles().subscribe((enrolles:Enrolles[])=>{
      this.enrollesList=enrolles;
})
  }

  // show the details of enroll to update
  openDialog(data): void {
    const dialogRef = this.dialog.open(UpdateEnrolleDialogComponent, {
      width: '550px',
      data: {'name':data.name,'dateOfBirth':data.dateOfBirth,'active':data.active,'update':data.update,'id':data.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result &&!result.update){ 
      this.enrollesService.updateEnrolles(result).subscribe((enrolles)=>{
             this.getEnrolles();
        });
      }
      //this.name = result;
    });
  }

  //  active or deactive user confirmation
  confirmDialog(event: MatSlideToggleChange,data): void {
    data.active= event.checked;
    const dialogRef = this.dialog.open(DeleteEnrolleDialogComponent, {
      width: '250px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {  
        if(result &&!result.update){
        this.enrollesService.updateEnrolles(result).subscribe((enrolles)=>{
             this.getEnrolles();
        });
      }else{
        event.source.checked= !event.checked;
        data.active= !event.checked;

      }
      //this.name = result;
    });
  }
}
