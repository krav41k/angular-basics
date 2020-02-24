import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {

  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (control.value) {
      if (['adramail.com', 'cmailing.com'].includes(control.value.split('@')[1])) {
        return {
          restrictedEmail: true
        };
      }
    }
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({
            uniqEmail: true
          });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
