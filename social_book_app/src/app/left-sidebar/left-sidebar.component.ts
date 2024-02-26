import { Component } from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
  ys1: { image_url: string; text: string } = {
    image_url: "https://images.unsplash.com/photo-1682686581413-0a0ec9bb35bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNDZ8fHxlbnwwfHx8fHw%3D",
    text: "Swimming"
  }

  ys2: { image_url: string; text: string } = {
    image_url: "https://images.unsplash.com/photo-1708281789753-a414433ea272?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTB8fHxlbnwwfHx8fHw%3D",
    text: "Star Gazing"
  }

  ys3: { image_url: string; text: string } = {
    image_url: "https://images.unsplash.com/photo-1707343843344-011332037abb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxNTF8fHxlbnwwfHx8fHw%3D",
    text: "Beach Exploration"
  }

  ys4: { image_url: string; text: string } = {
    image_url: "https://images.unsplash.com/photo-1708246116930-98cdc77b46c9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNTR8fHxlbnwwfHx8fHw%3D",
    text: "Travelling"
  }

}
