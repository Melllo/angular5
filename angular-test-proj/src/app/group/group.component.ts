import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class GroupComponent implements OnInit {
  number = '308';
  faculty = `факультет комп'ютерних наук`;
  specialty = `інженерія програмного забезпечення`;

  studentsQuantity = 22;
  students = ['Іванов Василь', 'Смірнова Марія', 'Максимов Іван'];
  starosta = {
    name: 'Іванов Василь',
    age: 20,
    address: 'Mykolaiv, Ukraine',
  };

  images = [
    'https://image.mel.fm/i/I/IoT9VfRJLP/590.png',
    'https://kartinki-vernisazh.ru/_ph/478/2/550191551.jpg?1577384607',
    'https://i.pinimg.com/474x/7d/14/ba/7d14bac4b8ba2ff32151088ed0c020d6.jpg',
  ];
  curImageIndex = 0;
  curImage: string;

  constructor() {}

  ngOnInit() {
    this.curImage = this.images[this.curImageIndex];
    setInterval(() => {
      this.curImageIndex++;

      if (this.curImageIndex >= this.images.length) {
        this.curImageIndex = 0;
      }
      this.curImage = this.images[this.curImageIndex];
    }, 2000);
    setTimeout(() => {
      this.faculty = '';
      this.specialty = '';
    }, 2000);
  }
}
