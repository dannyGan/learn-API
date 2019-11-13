function getDataFollowers() {
  let section = document.createElement("section");
  fetch("https://api.github.com/users/dannyGan/followers")
    .then(res => res.json())
    .then(follower => {
      follower.map(data => {
        const img = document.createElement("img");
        img.setAttribute("src", data.avatar_url);
        img.setAttribute("height", "300px");
        img.setAttribute("class", "col-6");
        document.getElementById("isi").appendChild(img);
        localStorage.setItem("img", data.avatar_url);
      });
    });
}

// function getDataFollowers() {
//   let section = document.createElement("section");
//   fetch("https://api.github.com/users/dannyGan/followers")
//     .then(res => res.json())
//     .then(follower => {
//       follower.map(data => {
//         const containerDiv=document.getElementById("isi")
//         const divider = document.createElement("div");
//         divider.className = "card";
//         divider.innerHTML = `
//         <a href="${data.html_url}"><img src=${data.avatar_url} height='300px' class="card-img-top col-6 rounded"></a> `
//         containerDiv.appendChild(divider)

//         // divider.setAttribute("id", "card");
//         // divider.className = "card col-6 rounded";
//         // const img = document.createElement("img");
//         // img.setAttribute("src", data.avatar_url);
//         // img.setAttribute("height", "300px");
//         // img.setAttribute("class", "col-6 rounded");
//         // document.getElementById("card").appendChild(img);
//         // document.getElementById("isi").appendChild(divider);
//         // //   document.getElementById("isi").appendChild(img);
//         // localStorage.setItem("img", data.avatar_url);
//       });
//     });
// }

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//   </div>
// </div>

// // getDataFollowers();
// /*
// function getFollower() {
//   let ambilFollower = document.createElement("div");
//   fetch("https://api.github.com/users/sharfinaega/followers")
//     .then(response => response.json()) //untuk mem-parse data bawaan dari fetch
//     .then(follower => {
//       console.log(follower);
//       let divCon = document.createElement("div");
//       divCon.className = "row columns is-multiline";
//       // let isiText =
//       //   "The Beast stumbled in the dark for it could no longer see the path. It started to fracture and weaken, trying to reshape itself into the form of metal. Even the witches would no longer lay eyes upon it, for it had become hideous and twisted.";
//       //   loop follower
//       follower.map(data => {
//         let foto = document.createElement("div");
//         foto.className = "column is-one-third";
//         foto.innerHTML = `
//             <div class="card large">
//                 <div class="card-image">
//                     <figure class="image">
//                         <img src=${data.avatar_url} alt="Image">
//                     </figure>
//                 </div>
//                 <div class="card-content">
//                     <div class="media">
//                         <div class="media-left">
//                         </div>
//                         <div class="media-content">
//                             <p class="title is-4 no-padding">${data.login}</p>
//                             <p><span class="title is-6"><a href="${data.html_url}#">GitHub Account</a></span></p>
//                             <p class="subtitle is-6">Indonesia</p>
//                         </div>
//                     </div>
//                     <div class="content">

//                         <div class="background-icon"><span class="icon-twitter"></span></div>
//                     </div>`;
//         //   setiap follower di append ke divCon
//         divCon.append(foto);
//       });
//       document.getElementById("content").append(divCon);
//     });
// }

//  */

//  // function getDataFollowers() {
//     let section = document.createElement("section");
//     fetch("https://api.github.com/users/dannyGan/followers")
//       .then(res => res.json())
//       .then(follower => {
//         follower.map(data => {
//           const img = document.createElement("img");
//           img.setAttribute("src", data.avatar_url);
//           img.setAttribute("height", "300px");
//           img.setAttribute("class", "col-6");
//           document.getElementById("isi").appendChild(img);
//           localStorage.setItem("img", data.avatar_url);
//         });
//       });
//   }
