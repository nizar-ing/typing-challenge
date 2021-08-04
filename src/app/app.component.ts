import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  typingText = '';

  onInput(value: string) {
    this.typingText = value;
  }

  getClass(randomChar: string, typingChar: string) {
    if (!typingChar) {
      return 'pending';
    }
    return randomChar === typingChar ? 'correct' : 'incorrect';
  }
}
