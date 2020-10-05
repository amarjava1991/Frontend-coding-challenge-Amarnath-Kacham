import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';


@Component({
  selector: 'app-update-enrolle-dialog',
  templateUrl: './update-enrolle-dialog.component.html',
  styleUrls: ['./update-enrolle-dialog.component.css']
})
export class UpdateEnrolleDialogComponent implements OnInit {

  

  constructor(public dialogRef: MatDialogRef<UpdateEnrolleDialogComponent>,public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) {}
 
  ngOnInit(): void {
  }

  onNoClick(){
    this.data.updated=false;

    this.dialogRef.close();

  }
}
