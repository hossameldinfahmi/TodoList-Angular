import { NgModule } from '@angular/core';

export interface Task {
  id: string;
  text: string;
  done: boolean;
  fav: boolean;
}

export interface User {
  id: string;
  username: string;
  favQuote: string;
}

@NgModule({})
export class TypesModule {}
