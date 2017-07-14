import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dummy'
})
export class DummyPipe implements PipeTransform {

  transform(str: string): string {
    let newStr = str.split(" ")[0]
    return ((newStr.split("/").length > 1) ? newStr.split("/")[1]: newStr );
  }

}
