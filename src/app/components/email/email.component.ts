import { EmailService } from './../../services/email.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  data = {
    to: '',
    subject: '',
    message: ''
  }
  showSpinner: boolean = false;

  constructor(private _snackBar: MatSnackBar, private emailService: EmailService) { }

  ngOnInit() {
  }

  doSubmitForm() {
    this.showSpinner = true;
    if(this.data.to == '' || this.data.subject == '') {
      this._snackBar.open("To or Subject field(s) cannot be blank", "Okay");
      this.showSpinner = false;
      return;
    }
    this.emailService.sendEmail(this.data).subscribe(
      response => {
        this._snackBar.open("Email Sent Successfully", "Cancel");
        this.showSpinner = false;
      }, 
      error => {
        this._snackBar.open("Unable to Send Email Now!", "Cancel");
        this.showSpinner = false;
      }
    );
  }

}
