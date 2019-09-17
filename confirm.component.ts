import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent implements OnInit {
Evalid:FormGroup;


Data()
{
  let frm = this.Evalid.getRawValue();
  let ottp = localStorage.getItem('otp');

  setTimeout(() => // this is used to call remove methd after 2min
  {
   this.remove()
  }, 20000);

  if(ottp==null)
  {
    alert("otp discard retry")
  }
  if(ottp==frm.pin)
  {
    alert("login");
  }
  else
  {
    alert("otp does not match");
  } 
}

  constructor(private fb:FormBuilder) { }
  ngOnInit()
   {
      this.validate()
  }
   remove() // to remove ottp in local storage
  {
    localStorage.removeItem('otp')
  }
  validate() // validation
  {
    this.Evalid = this.fb.group(
      {
        'pin':['',Validators.required],
      }
    )
  }
}
