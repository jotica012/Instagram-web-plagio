export interface DataShape {
    user: string;
    username: string;
    location: string;
    caption: string;
    likes: number;
    comments: number;
    days: number;
    bg: string;
    pic: string;
    peopleFollowed: string;
    story: string;
  }
  
   const dataP: DataShape[] = [
    {
      user: "./img/ppp1.png",
      username: "Jotica012",
      location: "Cali",
      caption: "Wenas juanes",
      likes: 10,
      comments: 10,
      days: 2,
      bg: "./img/picfeed2.jpg",
      pic: "./img/ppp3.png",
      peopleFollowed: "lidalee_01113",
      story: "./img/igs1.png",
    },
    {
      user: "./img/ppp2.png",
      username: "larubiainmoral",
      location: "Cali",
      caption: "Wenas juanes",
      likes: 10,
      comments: 10,
      days: 2,
      bg: "./img/picfeed3.jpg",
      pic: "./img/ppp4.png",
      peopleFollowed: "lidalee_01113",
      story: "./img/igs2.png",
    },
  ];
  
  export default dataP;