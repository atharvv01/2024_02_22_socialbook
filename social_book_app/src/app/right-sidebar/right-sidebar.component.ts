import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-right-sidebar',
  standalone: true,
  imports: [NgFor],
  templateUrl: './right-sidebar.component.html',
  styleUrl: './right-sidebar.component.css'
})
export class RightSidebarComponent {
  Date = [
    {
      Day: "18",
      Month: "February",
      desc: "Persona Fest",
      venue: "MIT",
    },
    {
      Day: "08",
      Month: "June",
      desc: "Angular training",
      venue: "Aspire",
    },
    {
      Day: "27",
      Month: "March",
      desc: "IPL Match",
      venue: "Rajiv Gandhi Stadium",
    },
  ]
  onlineUsers = [
    {
      name: "Virat Kohli",
      image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
    },
    {
      name: "Manoj Tiwari",
      image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
    },
    {
      name: "Aditya Nair",
      image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
    },
    {
      name: "Riya Pote",
      image_url: "https://i.postimg.cc/cHg22LhR/profile-pic.png"
    },

  ]
}
