import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { NotificationsComponent } from './shared/notifications/notifications';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer, NotificationsComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'readify';
}
