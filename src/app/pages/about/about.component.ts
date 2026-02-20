import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    {
      icon: '🎯',
      title: 'Quality First',
      description: 'We never compromise on quality. Every bottle meets our rigorous standards.'
    },
    {
      icon: '🤝',
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We go above and beyond for every customer.'
    },
    {
      icon: '🌍',
      title: 'Global Sourcing',
      description: 'We travel the world to find the most exceptional spirits for our collection.'
    },
    {
      icon: '📚',
      title: 'Expertise',
      description: 'Our team\'s deep knowledge ensures you get the perfect recommendation every time.'
    }
  ];

  team = [
    {
      icon: '👨‍💼',
      name: 'James Anderson',
      role: 'Master Sommelier',
      bio: 'With 25 years of experience, James leads our curation team with unmatched expertise.'
    },
    {
      icon: '👩‍💼',
      name: 'Sarah Mitchell',
      role: 'Spirits Specialist',
      bio: 'Sarah\'s passion for rare spirits has helped us build our exclusive collection.'
    },
    {
      icon: '👨‍💼',
      name: 'Michael Chen',
      role: 'Operations Director',
      bio: 'Michael ensures every order is handled with care and delivered with excellence.'
    }
  ];

  stats = [
    { number: '30+', label: 'Years of Excellence' },
    { number: '500+', label: 'Premium Bottles' },
    { number: '50+', label: 'Countries Sourced' },
    { number: '10k+', label: 'Happy Customers' }
  ];
}
