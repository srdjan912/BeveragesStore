import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  submitMessage: string = '';
  submitSuccess: boolean = false;

  onSubmit() {
    // Simulate form submission (in a real app, you'd send this to a backend)
    console.log('Form submitted:', this.formData);
    
    this.submitSuccess = true;
    this.submitMessage = '✓ Thank you! Your message has been sent successfully. We\'ll get back to you soon!';
    
    // Reset form after 3 seconds
    setTimeout(() => {
      this.formData = {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      };
      this.submitMessage = '';
    }, 3000);
  }
}
