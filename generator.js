// let num = 2;
// let finger = "Ring";
// let rf = "Left";
// "Index, Middle, Ring, Pinky"
// let allData = [
//   { num: 14, finger: "Index", rf: "Right" },
//   { num: 15, finger: "Middle", rf: "Right" },
//   { num: 16, finger: "Ring", rf: "Right" },
//   { num: 17, finger: "Pinky", rf: "Right" },
//   { num: 18, finger: "Middle, Ring, Pinky", rf: "Right" },
//   { num: 19, finger: "Index, Ring, Pinky", rf: "Right" },
//   { num: 20, finger: "Index, Middle, Pinky", rf: "Right" },
//   { num: 21, finger: "Index, Middle, Ring", rf: "Right" },
//   { num: 22, finger: "Ring, Pinky", rf: "Right" },
//   { num: 23, finger: "Middle, Pinky", rf: "Right" },
//   { num: 24, finger: "Index, Pinky", rf: "Right" },
//   { num: 25, finger: "Middle, Ring", rf: "Right" },
//   { num: 26, finger: "Middle, Pinky", rf: "Right" },
//   { num: 27, finger: "Ring, Pinky", rf: "Right" },
// ];

// for (i = 0; i < allData.length; i++) {
//     let { num, finger, rf } = allData[i];
//     let data = `
// <!-- Gesture ${num}: ${finger}-(${rf}) -->
// <li>
//   <a href="#" class="card">
//     <!-- image size: 520 * 520 -->
//     <img
//       src="./images/gesture-inputs/${num}.png"
//       class="card__image"
//       alt=""
//     />
//     <div class="card__overlay">
//       <div class="card__header">
//         <svg
//           class="card__arc"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path />
//         </svg>
//         <div class="card__header-text">
//           <h3 class="card__title">${finger} (${rf})</h3>
//           <span id="stat-${num}" class="card__status">updating</span>
//         </div>
//       </div>
//       <p class="card__description">
//         <select
//           id="element${num}"
//           class="form-select"
//           onchange="updateCardStatus('stat-${num}', 'element${num}')"
//           aria-label="Default select example"
//         >
//           <option selected value="no_operation">No Operation</option>
//           <option value="page_up">Page Up</option>
//           <option value="page_down">Page Down</option>
//           <option value="left_click">Left Click</option>
//           <option value="right_click">Right Click</option>
//           <option value="move_left">Move Left</option>
//           <option value="move_right">Move Right</option>
//           <option value="move_up">Move Up</option>
//           <option value="move_down">Move Down</option>
//           <option value="open_google">Open Google</option>
//           <option value="take_screenshot">
//             Take Screenshot
//           </option>
//           <option value="arrow_left">Arrow Left</option>
//           <option value="arrow_right">Arrow Right</option>
//           <option value="copy">Copy</option>
//           <option value="paste">Paste</option>
//           <option value="zoom_in">Zoom In</option>
//           <option value="zoom_out">Zoom Out</option>
//           <option value="next_tab">Next Tab</option>
//           <option value="prev_tab">Prev Tab</option>
//           <option value="new_tab">New Tab</option>
//           <option value="new_incognito_tab">
//             New Incognito Tab
//           </option>
//           <option value="new_window">New Window</option>
//           <option value="close_tab">Close Tab</option>
//           <option value="close_all_tab">Close All Tab</option>
//           <option value="save">Save</option>
//           <option value="print_page">Print Page</option>
//           <option value="history">History</option>
//           <option value="downloads">Downloads</option>
//           <option value="reload_tab">Reload Tab</option>
//         </select>
//       </p>
//     </div>
//   </a>
// </li>`;
//     console.log(data);
// }

for (let num = 0; num < 28; num++) {
    // const element = array[index];

let data = `gesture${num}Entity.value = gesture${num};`;
    console.log(data);
}