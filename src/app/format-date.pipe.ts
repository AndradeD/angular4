import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  transform(value: any, locale = 'pt-BR'): any {
    if (value.length < 10){
      return value;
    }

    let dateSplit = value.split('-');
    if (dateSplit.length != 3){
      return value;
    }
    let date = new Date(dateSplit[0],dateSplit[1]-1,dateSplit[2])

    return Intl.DateTimeFormat(locale).format(date);
  }

}
