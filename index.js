// function getDataFollowers() {
// 	let section = document.createElement("section");
// 	fetch("https://api.github.com/users/dannyGan/followers")
// 		.then(res => res.json())
// 		.then(follower => {
// 			follower.map(data => {
// 				const anchor = document.createElement("a");
// 				const div = document.createElement("div");
// 				// div.style.height = "300px";
// 				div.style.width = "50%";
// 				div.style.height = "100%";
// 				div.className = "d-flex align-items-center justify-content-center";
// 				anchor.setAttribute("href", data.html_url);
// 				anchor.setAttribute("id", "randombanget");
// 				const img = document.createElement("img");
// 				img.setAttribute("src", data.avatar_url);
// 				img.setAttribute("height", "100%");
// 				img.setAttribute("width", "100%");
// 				img.setAttribute("class", "col-12");
// 				anchor.appendChild(img);
// 				div.appendChild(anchor);
// 				document.getElementById("isi").appendChild(div);
// 			});
// 		});
// }

{
	/* <div class="col-md-4">
	<div class="card mb-4 shadow-sm">
		<svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail">
			<title>Placeholder</title>
			<rect width="100%" height="100%" fill="#55595c"></rect>
			<text x="50%" y="50%" fill="#eceeef" dy=".3em">
				Thumbnail
			</text>
		</svg>
		<div class="card-body">
			<p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
			<div class="d-flex justify-content-between align-items-center">
				<div class="btn-group">
					<button type="button" class="btn btn-sm btn-outline-secondary">
						View
					</button>
					<button type="button" class="btn btn-sm btn-outline-secondary">
						Edit
					</button>
				</div>
				<small class="text-muted">9 mins</small>
			</div>
		</div>
	</div>
</div>; */
}

function getDataFollowers() {
	let section = document.createElement("section");
	fetch("https://api.github.com/users/dannyGan/followers")
		.then(res => res.json())
		.then(follower => {
			follower.map(data => {
				const containerDiv = document.getElementById("isi");
				const divider = document.createElement("div");
				divider.className = "card";
				divider.innerHTML = `
					<div class="col">
						<div class="card mb-4 shadow-sm">
							
              <img src=${data.avatar_url} alt="Image" width='490px' height='460px'>
							
							<div class="card-body">
								<p class="card-text text-center"><a href=${data.html_url}>To My HomePage</a></p>
						</div>
					</div>`;
        containerDiv.appendChild(divider);
				// document.getElementById("isi").appendChild(containerDiv);
        

				// divider.setAttribute("id", "card");
				// divider.className = "card col-6 rounded";
				// const img = document.createElement("img");
				// img.setAttribute("src", data.avatar_url);
				// img.setAttribute("height", "300px");
				// img.setAttribute("class", "col-6 rounded");
				// document.getElementById("card").appendChild(img);
				// document.getElementById("isi").appendChild(divider);
				// //   document.getElementById("isi").appendChild(img);
				// localStorage.setItem("img", data.avatar_url);
			});
		});
}

// <div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//   </div>
// </div>

//============================================================================================================================

//contoh ega

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

//============================================================================================================================

//pertama

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

//============================================================================================================================

//kedua

// function getDataFollowers() {
// 	let section = document.createElement("section");
// 	fetch("https://api.github.com/users/dannyGan/followers")
// 		.then(res => res.json())
// 		.then(follower => {
// 			follower.map(data => {
// 				const anchor = document.createElement("a");
// 				const div = document.createElement("div");
// 				// div.style.height = "300px";
// 				div.style.width = "50%";
//         div.style.height = "100%";
//         div.className = 'd-flex align-items-center justify-content-center'
// 				anchor.setAttribute("href", data.html_url);
// 				anchor.setAttribute("id", "randombanget");
// 				const img = document.createElement("img");
// 				img.setAttribute("src", data.avatar_url);
// 				img.setAttribute("height", "100%");
// 				img.setAttribute("width", "100%");
// 				img.setAttribute("class", "col-12");
// 				anchor.appendChild(img);
// 				div.appendChild(anchor);
// 				document.getElementById("isi").appendChild(div);
// 			});
// 		});
// }
