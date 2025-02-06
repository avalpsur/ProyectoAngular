import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  comics = [
    {
      title: 'Constantine Reaches Out For Help Moving A Tricky Demon in Birds Of Prey #18',
      date: 'February 4, 2025',
      image: 'assets/images/comic1.jpg'
    },
    {
      title: 'Johnny Blaze Reels From One Mind-Bending Discovery After Another Spirits of Vengeance #6',
      date: 'February 4, 2025',
      image: 'assets/images/comic2.jpg'
    },
    {
      title: 'Cassandra Cain, Caught In The Middle Of The Deadliest Hands In The DC Universe in Batgirl #4',
      date: 'February 4, 2025',
      image: 'assets/images/comic3.jpg'
    },
    {
      title: 'Felicia Hardy Setd Sights On Wanda’s Treasure Trove Of Magical Items in Scarlet Witch #9',
      date: 'February 4, 2025',
      image: 'assets/images/comic4.jpg'
    }
  ];
}