import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { MailService } from 'src/app/service/mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  resdata;
  errmsg;
  constructor(private fb:FormBuilder , private vsvr:MailService, private router:Router) { }
emailvalid:FormGroup

loginData()
{
  let vdata = this.emailvalid.getRawValue();
  
  this.vsvr.datasend(vdata)
  .subscribe(res=>
    {
      this.resdata = res;
      if(this.resdata.err ==0)
      {
        localStorage.setItem('otp',this.resdata.pin);
        this.router.navigate(['/confirm'])
      }
      if(this.resdata.err ==1)
      {
        this.errmsg = this.resdata;
      }
    })    
}
  ngOnInit() {
    this.validate();
  }
  validate()
  {
    this.emailvalid = this.fb.group(
      {
        'name':['',Validators.required],
        'email':['',Validators.required],
        'password':['',Validators.required],
      }
    )
  }
}
