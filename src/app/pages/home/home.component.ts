import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  products = [
    {
      name: 'Single Malt Scotch',
      origin: 'Scotland',
      description: 'Aged 18 years in oak barrels with notes of vanilla and caramel',
      price: '$149.99'
    },
    {
      name: 'Premium Cognac',
      origin: 'France',
      description: 'XO grade cognac with rich fruity undertones',
      price: '$299.99'
    },
    {
      name: 'Japanese Whisky',
      origin: 'Japan',
      description: 'Award-winning blend with smooth, complex flavors',
      price: '$189.99'
    },
    {
      name: 'Aged Bourbon',
      origin: 'Kentucky, USA',
      description: 'Small batch bourbon with deep amber color and spicy finish',
      price: '$129.99'
    },
    {
      name: 'Premium Vodka',
      origin: 'Russia',
      description: 'Crystal clear vodka distilled six times for ultimate purity',
      price: '$79.99'
    },
    {
      name: 'Añejo Tequila',
      origin: 'Mexico',
      description: 'Aged tequila with smooth agave flavor and oak notes',
      price: '$169.99'
    }
  ];

  features = [
    {
      icon: '🏆',
      title: 'Premium Quality',
      description: 'Only the finest spirits from renowned distilleries worldwide'
    },
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Secure and swift delivery to your doorstep'
    },
    {
      icon: '💎',
      title: 'Exclusive Selection',
      description: 'Rare and limited edition bottles you won\'t find elsewhere'
    },
    {
      icon: '🎯',
      title: 'Expert Curation',
      description: 'Carefully selected by our team of spirits connoisseurs'
    }
  ];
}
