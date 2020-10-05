import {Component, Inject,OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA,MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-enrolle-dialog',
  templateUrl: './delete-enrolle-dialog.component.html',
  styleUrls: ['./delete-enrolle-dialog.component.css']
})
export class DeleteEnrolleDialogComponent implements OnInit {

  
  constructor(public dialogRef: MatDialogRef<DeleteEnrolleDialogComponent>,public dialog: MatDialog,@Inject(MAT_DIALOG_DATA) public data: any) {}
 
  ngOnInit(): void {
  }

  onNoClick(){
    this.data.updated=false;
    this.dialogRef.close();
  }

}
