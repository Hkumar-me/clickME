const people = [
  {
    location: "New York, USA",
    name: "Lagertha",
    age: 30,
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    interests: [
      { icon: "🎨", interest: "Art" },
      { icon: "📚", interest: "Reading" },
    ],
    profilepic:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displaypic: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Los Angeles, USA",
    name: "Kate Winslet",
    age: 25,
    bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    interests: [
      { icon: "🎵", interest: "Music" },
      { icon: "🏀", interest: "Sports" },
    ],
    profilepic: "jane_profile.jpg",
    displaypic:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "London, England",
    name: "Grace Shelby",
    age: 28,
    bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    interests: [
      { icon: "🎮", interest: "Gaming" },
      { icon: "🍳", interest: "Cooking" },
    ],
    profilepic: "alice_profile.jpg",
    displaypic:
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Paris, France",
    name: "Monica belluci",
    age: 35,
    bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    interests: [
      { icon: "🎸", interest: "Playing Guitar" },
      { icon: "📷", interest: "Photography" },
    ],
    profilepic: "mark_profile.jpg",
    displaypic:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "Tokyo, Japan",
    name: "Yuki Tanaka",
    age: 26,
    bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    interests: [
      { icon: "🎣", interest: "Fishing" },
      { icon: "🎭", interest: "Theater" },
    ],
    profilepic: "yuki_profile.jpg",
    displaypic:
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

// const people = [
//   {
//     location: "New York, USA",
//     name: "Lagertha",
//     age: 30,
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     interests: [
//       { icon: "🎨", interest: "Art" },
//       { icon: "📚", interest: "Reading" },
//     ],
//     profilepic: "",
//     displaypic:
//       "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
//   },
//   {
//     location: "Los Angeles, USA",
//     name: "Kate Winslet",
//     age: 25,
//     bio: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//     interests: [
//       { icon: "🎵", interest: "Music" },
//       { icon: "🏀", interest: "Sports" },
//     ],
//     profilepic: "jane_profile.jpg",
//     displaypic: "./images/photo2.jpg",
//   },
//   {
//     location: "London, England",
//     name: "Grace Shelby",
//     age: 28,
//     bio: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
//     interests: [
//       { icon: "🎮", interest: "Gaming" },
//       { icon: "🍳", interest: "Cooking" },
//     ],
//     profilepic: "alice_profile.jpg",
//     displaypic: "./images/photo3.jpg",
//   },
//   {
//     location: "Paris, France",
//     name: "Monica belluci",
//     age: 35,
//     bio: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     interests: [
//       { icon: "🎸", interest: "Playing Guitar" },
//       { icon: "📷", interest: "Photography" },
//     ],
//     profilepic: "mark_profile.jpg",
//     displaypic: "./images/photo4.jpg",
//   },
//   {
//     location: "Tokyo, Japan",
//     name: "Yuki Tanaka",
//     age: 26,
//     bio: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
//     interests: [
//       { icon: "🎣", interest: "Fishing" },
//       { icon: "🎭", interest: "Theater" },
//     ],
//     profilepic: "yuki_profile.jpg",
//     displaypic: "./images/photo5.jpg",
//   },
// ];
let current = 0;

function select(element) {
  return document.querySelector(element);
}

function setData(index){
  

  select(".location p").textContent = people[index]?.location;
  select(".name h3:nth-child(1)").textContent = people[index]?.name;
  select(".name h3:nth-child(2)").textContent = people[index]?.age;
  select(".bio p").textContent = people[index]?.bio;

  let interestsDiv = "";
  people[index]?.interests?.forEach(
    (interest) =>
      (interestsDiv += `<div class="interest flex items-center gap-1 bg-white/20 px-2 py-1 rounded-full"> <p>${interest.icon}</p> <p>${interest.interest}</p></div>`)
  );
  select(".interests").innerHTML = interestsDiv;
}

(function changeProfile() {
  select(".main img").src = people[current].displaypic;
  select(".incoming img").src = people[current + 1].displaypic;
  setData(current)
  current = 2;
})();



let isAnimating = false;
function imageChange() {
  let main = select(".main");
  let incoming = select(".incoming");
 
  if(!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        incoming.classList.remove("z-[3]");
        incoming.classList.add("z-[4]");
  
        main.classList.remove("z-[4]");
        main.classList.add("z-[3]");
  
        gsap.set(".main img", {
          scale: 1,
          opacity: 1,
        });
  
        if (current === people.length) current = 0;
        select(".main img").src = people[current].displaypic;
        current++;
  
        // Swap main and incoming classes
        main.classList.remove("main");
        incoming.classList.remove("incoming");
        main.classList.add("incoming");
        incoming.classList.add("main");
      },
    });
  
    tl.to(
      ".main img",
      {
        scale: 1.3,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incoming img",
      {
        scale: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

select(".reject").addEventListener("click", () => {
  imageChange();
  setData(current-1)
  gsap.from(".info .element", {
    y: "160%",
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1,
  });
});
select(".accept").addEventListener("click", () => {
  imageChange();
  setData(current-1)
  gsap.from(".info .element", {
    y: "160%",
    stagger: 0.1,
    ease: Power4.easeInOut,
    duration: 1,
  });
});

(function createContainer() {
  document.querySelectorAll(".element").forEach((element, index) => {
    const div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, `overflow-hidden`);
    div.appendChild(element);
    select(".info").appendChild(div);
  });
})();
