// import { Typeahead } from "react-bootstrap-typeahead";
// import { useState } from "react";
// import Downshift from "downshift";
// import React from "react";
// // import { items, menuStyles, comboboxStyles } from "../../shared";

// export default function SearchBar(props) {
//   const [singleSelections, setSingleSelections] = useState([]);
//   const items = [
//     "Alabama",
//     "Alaska",
//     "American Samoa",
//     "Arizona",
//     "Arkansas",
//     "California",
//     "Colorado",
//     "Connecticut",
//     "Delaware",
//     "District of Columbia",
//     "Federated States of Micronesia",
//     "Florida",
//     "Georgia",
//     "Guam",
//     "Hawaii",
//     "Idaho",
//     "Illinois",
//     "Indiana",
//     "Iowa",
//     "Kansas",
//     "Kentucky",
//     "Louisiana",
//     "Maine",
//     "Marshall Islands",
//     "Maryland",
//     "Massachusetts",
//     "Michigan",
//     "Minnesota",
//     "Mississippi",
//     "Missouri",
//     "Montana",
//     "Nebraska",
//     "Nevada",
//     "New Hampshire",
//     "New Jersey",
//     "New Mexico",
//     "New York",
//     "North Carolina",
//     "North Dakota",
//     "Northern Mariana Islands",
//     "Ohio",
//     "Oklahoma",
//     "Oregon",
//     "Palau",
//     "Pennsylvania",
//     "Puerto Rico",
//     "Rhode Island",
//     "South Carolina",
//     "South Dakota",
//     "Tennessee",
//     "Texas",
//     "Utah",
//     "Vermont",
//     "Virgin Island",
//     "Virginia",
//     "Washington",
//     "West Virginia",
//     "Wisconsin",
//     "Wyoming",
//   ];
//   //   const options = ["usa", "india", "aus"];
//   return (
//     <>
//       <Downshift
//         onChange={(selection) =>
//           alert(selection ? `You selected ${selection}` : "Selection Cleared")
//         }
//         itemToString={(item) => (item ? item : "")}
//       >
//         {({
//           getInputProps,
//           getItemProps,
//           getLabelProps,
//           getMenuProps,
//           isOpen,
//           inputValue,
//           highlightedIndex,
//           selectedItem,
//         }) => (
//           <div className="m-auto w-full">
//             <div className="m-auto w-1/2 mt-6">
//               <label
//                 {...getLabelProps()}
//                 className="font-bold text-xs text-gray-700 block"
//               >
//                 Enter a state
//               </label>
//               <input
//                 placeholder="Search for your state "
//                 className="w-full"
//                 {...getInputProps()}
//               />
//               <ul className="rounded bg-gray-100" {...getMenuProps()}>
//                 {isOpen
//                   ? items
//                       .filter(
//                         (item) =>
//                           !inputValue ||
//                           item.toLowerCase().includes(inputValue.toLowerCase())
//                       )
//                       .map((item, index) => (
//                         <li
//                           {...getItemProps({
//                             key: item,
//                             index,
//                             item,
//                             className: `py-2 px-2 ${
//                               highlightedIndex === index
//                                 ? "bg-white font-bold"
//                                 : "bg-gray-100"
//                             }`,
//                           })}
//                         >
//                           {item}
//                         </li>
//                       ))
//                   : null}
//               </ul>
//             </div>
//           </div>
//         )}
//       </Downshift>
//     </>
//   );
// }
