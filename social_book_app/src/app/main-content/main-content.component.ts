import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [NgFor],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.css'
})
export class MainContentComponent {
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

  user: { firstname:string, lastname: string } = {
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
    }
  ]
}
