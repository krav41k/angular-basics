import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        MyValidators.restrictedEmails,
      ], MyValidators.uniqEmail),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ua'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    });
  }

  submit() {
    if (this.form.valid) {
      console.log(`Form submitted`, this.form);
      const formData = {...this.form.value};
      console.log('Form data: ', formData);

      this.form.reset();
    }
  }

  setCapital() {
    const mapKey = this.form.get('address').get('country').value;
    const cityMap = {
      ua: 'Киев',
      ru: 'Москва',
      by: 'Минск'
    };

    this.form.patchValue({address: {city: cityMap[mapKey]}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    (this.form.get('skills') as FormArray).push(control);
    console.log(this.form);
  }
}
