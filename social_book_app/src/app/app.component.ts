import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  userprofilephoto = "https://images.unsplash.com/photo-1707699400213-847b2b852300?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDV8fHxlbnwwfHx8fHw%3D";

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

  your_story = "https://images.unsplash.com/photo-1706550037742-0e6b5d786811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTd8fHxlbnwwfHx8fHw%3D";

  story1 = "https://images.unsplash.com/photo-1706550037742-0e6b5d786811?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTd8fHxlbnwwfHx8fHw%3D"

  story2: { url: string; name: string } = {
    url: "../assets/imgs/virat_dp.jpeg",
    name: "VIRAT KHOLI"
  }

  story3: { url: string; name: string } = {
    url: "../assets/imgs/Ankit-Baiyanpuriya-physical-appearance.jpg",
    name: "ANKIT BAIYANPURIA"
  }

  story4: { url: string; name: string } = {
    url: "../assets/imgs/modi.avif",
    name: "NARENDRA MODI"
  }

  story5: { url: string; name: string } = {
    url: "../assets/imgs/ezsnippet.jpeg",
    name: "EZSNIPPET"
  }

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

  user: { firstname: string; lastname: string } = {
    firstname: "Atharva",
    lastname: "Zanwar"
  }

  posts = [
    {
      imgSrc: '../assets/imgs/profile-pic.png',
      userName: this.user.firstname + " " + this.user.lastname,
      timestamp: 'January 1 2023, 16:40 pm',
      postText:
        "Graceful wanderers, finding beauty in the vast silence of the desert sands – Deers in the Desert.",
      postImgSrc: 'https://images.unsplash.com/photo-1682687220866-c856f566f1bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyNzh8fHxlbnwwfHx8fHw%3D',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
    {
      imgSrc: '../assets/imgs/sanjeev.jpeg',
      userName: 'Sanjeev Kapoor ',
      timestamp: 'February 2 2023, 1:40 am',
      postText: "Awaken your senses with the vibrant symphony of Indian spices, where every dish tells a tale of tradition, flavor, and a rich culinary heritage. 🌶️🌿 #SpiceOfIndia #FlavorfulJourney",
      postImgSrc: 'https://plus.unsplash.com/premium_photo-1705433052991-8ebe1c81ce35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyODR8fHxlbnwwfHx8fHw%3D',
      likeCount: 100,
      commentCount: 50,
      shareCount: 8,
    },
    {
      imgSrc: '../assets/imgs/virat_dp.jpeg',
      userName: 'Virat Kholi',
      timestamp: 'June 2 2023, 16:40 pm',
      postText:
        '❤️',
      postImgSrc: '../assets/imgs/viratpost.png',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
    {
      imgSrc: 'https://i.postimg.cc/cHg22LhR/profile-pic.png',
      userName: 'Bear Grills',
      timestamp: 'June 2 2023, 16:40 pm',
      postText:
        'Subscribe <span></span> Youtube Channel to watch more videos on website development and UI designs. #VkiveTutorials #YoutubeChannel',
      postImgSrc: 'https://images.unsplash.com/photo-1682688759157-57988e10ffa8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyOTh8fHxlbnwwfHx8fHw%3D',
      likeCount: 200,
      commentCount: 5,
      shareCount: 80,
    },
  ]
  onlineUsers =[
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