// import React, { useState, useEffect } from "react";
// import { Button } from "@nextui-org/react";
// import toast, { Toaster } from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// import NightOwl from "../lib/img/preferences/owl.png";
// import PartyLover from "../lib/img/preferences/party.png";
// import EarlyBird from "../lib/img/preferences/bird.png";
// import Studious from "../lib/img/preferences/books.png";
// import FitnessFreak from "../lib/img/preferences/dumbbell.png";
// import PetLover from "../lib/img/preferences/pet_lover.png";
// import Vegan from "../lib/img/preferences/vegan.png";
// import NonAlcoholic from "../lib/img/preferences/non_alcoholic.png";
// import Sporty from "../lib/img/preferences/sporty.png";
// import MusicLover from "../lib/img/preferences/music_lover.png";
// import Wanderer from "../lib/img/preferences/wanderer.png";
// import NonSmoker from "../lib/img/preferences/non_smoker.png";

// const prefers = [
//   { title: "Night Owl", img: NightOwl },
//   { title: "Party Lover", img: PartyLover },
//   { title: "Early Bird", img: EarlyBird },
//   { title: "Studious", img: Studious },
//   { title: "Fitness Freak", img: FitnessFreak },
//   { title: "Pet Lover", img: PetLover },
//   { title: "Vegan", img: Vegan },
//   { title: "Non Alcoholic", img: NonAlcoholic },
//   { title: "Sporty", img: Sporty },
//   { title: "Music Lover", img: MusicLover },
//   { title: "Wanderer", img: Wanderer },
//   { title: "Non Smoker", img: NonSmoker },
// ];

// const FindRoomModal = ({ setShowFindRoomModal }) => {
//   const [selectedPreferences, setSelectedPreferences] = useState([]);

//   const navigator = useNavigate();
//   // const handleCheckboxChange = (preference) => {
//   //   setSelectedPreferences((prevSelected) => {
//   //     if (prevSelected.includes(preference)) {
//   //       return prevSelected.filter((item) => item !== preference);
//   //     } else {
//   //       return [...prevSelected, preference];
//   //     }
//   //   });
//   //   console.log(selectedPreferences);
//   // };
//   const addPreferences = async () => {
//     let id = toast.loading("Updating preferences...");
//     const response = await fetch(
//       "https://roomzy-tau.vercel.app/api/v1/user/preferences",
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: "Bearer " + localStorage.getItem("token"),
//         },
//         body: JSON.stringify({ preferences: selectedPreferences }),
//       }
//     );
//     const data = await response.json();
//     toast.success("Preferences updated successfully!", { id });
//     navigator("/profile");
//     console.log(data);
//   };

//   const handleChange = (e) => {
//     const { value, checked } = e.target;
//     setSelectedPreferences((prevSelected) => {
//       if (checked) {
//         return [...prevSelected, value];
//       } else {
//         return prevSelected.filter((item) => item !== value);
//       }
//     });
//   };

//   useEffect(() => {
//     console.log(selectedPreferences);
//   }, [selectedPreferences]);

//   return (
//     <>
//       <div className=" fixed top-0 right-0 left-0 z-50 backdrop-blur-md justify-center items-center w-full md:inset-0">
//         <div className="p-4 w-full flex justify-center  ">
//           <div className="bg-transparent rounded-lg shadow "></div>
//           <div>
//             <section className="container mx-auto flex justify-center items-center flex-col">
//               <h1 className="uppercase text-3xl text-center">
//                 Your Preference
//               </h1>
//               <p className="text-md text-gray-500 uppercase text-center mt-4">
//                 It will show others what kind of flatmate you prefer. <br />{" "}
//                 Please select at least 5 preferences to update.
//               </p>
//               <div class="grid sm:grid-cols-5 grid-cols-2 w-2/3 gap-8 mt-8">
//                 {prefers.map((ele, i) => {
//                   return (
//                     <>
//                       <div
//                         key={i}
//                         className="flex flex-col justify-center items-center"
//                       >
//                         <div className="relative overflow-hidden  flex  rounded-full items-center justify-center w-30 h-30 bg-gray-50 px-4 py-3 font-medium text-gray-700">
//                           <input
//                             className="peer hidden"
//                             type="checkbox"
//                             name="preferences"
//                             value={ele.title}
//                             id={`preferences${i}`}
//                             checked={selectedPreferences.includes(ele.title)}
//                             onChange={handleChange}
//                           />
//                           <label
//                             className="peer-checked:border-[#FE797A] peer-checked:border-3 border absolute top-0 h-full w-full cursor-pointer rounded-full"
//                             htmlFor={`preferences${i}`}
//                           >
//                             {" "}
//                           </label>
//                           <img src={ele.img} alt={ele.title} />
//                         </div>
//                         <span className=" uppercase text-sm mt-2 text-red-400 font-bold">
//                           {ele.title}
//                         </span>
//                       </div>
//                     </>
//                   );
//                 })}
//               </div>
//               <div className="flex gap-4">
//                 <Button
//                   style={{
//                     border: "1px solid #1a202c",
//                     marginBottom: "20px",
//                     marginTop: "20px",
//                   }}
//                   variant="bordered"
//                   onClick={addPreferences}
//                   className="shadow-[0px_3px_0px_0px_#1a202c] py-3  mt-12 uppercase"
//                 >
//                   Add Preferences
//                 </Button>

//                 <Button
//                   style={{
//                     border: "1px solid #1a202c",
//                     marginBottom: "20px",
//                     marginTop: "20px",
//                   }}
//                   variant="bordered"
//                   onClick={() => setShowFindRoomModal(false)}
//                   className="shadow-[0px_3px_0px_0px_#1a202c] py-3  mt-12 uppercase"
//                 >
//                   Cancel
//                 </Button>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default FindRoomModal;

import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import NightOwl from "../lib/img/preferences/owl.png";
import PartyLover from "../lib/img/preferences/party.png";
import EarlyBird from "../lib/img/preferences/bird.png";
import Studious from "../lib/img/preferences/books.png";
import FitnessFreak from "../lib/img/preferences/dumbbell.png";
import PetLover from "../lib/img/preferences/pet_lover.png";
import Vegan from "../lib/img/preferences/vegan.png";
import NonAlcoholic from "../lib/img/preferences/non_alcoholic.png";
import Sporty from "../lib/img/preferences/sporty.png";
import MusicLover from "../lib/img/preferences/music_lover.png";
import Wanderer from "../lib/img/preferences/wanderer.png";
import NonSmoker from "../lib/img/preferences/non_smoker.png";

const prefers = [
  { title: "Night Owl", img: NightOwl },
  { title: "Party Lover", img: PartyLover },
  { title: "Early Bird", img: EarlyBird },
  { title: "Studious", img: Studious },
  { title: "Fitness Freak", img: FitnessFreak },
  { title: "Pet Lover", img: PetLover },
  { title: "Vegan", img: Vegan },
  { title: "Non Alcoholic", img: NonAlcoholic },
  { title: "Sporty", img: Sporty },
  { title: "Music Lover", img: MusicLover },
  { title: "Wanderer", img: Wanderer },
  { title: "Non Smoker", img: NonSmoker },
];

const FindRoomModal = ({ setShowFindRoomModal }) => {
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const navigator = useNavigate();

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedPreferences((prevSelected) => {
      if (checked) {
        return [...prevSelected, value];
      } else {
        return prevSelected.filter((item) => item !== value);
      }
    });
  };

  const addPreferences = async () => {
    if (selectedPreferences.length < 5) {
      toast.error("Please select at least 5 preferences.");
      return;
    }

    let id = toast.loading("Updating preferences...");
    try {
      const response = await fetch(
        "https://roomzy-tau.vercel.app/api/v1/user/preferences",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
          body: JSON.stringify({ preferences: selectedPreferences }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update preferences.");
      }
      toast.success("Preferences updated successfully!", { id });
      navigator("/generate-list");
    } catch (error) {
      console.error("Error updating preferences:", error.message);
      toast.error("Failed to update preferences. Please try again.");
    }
  };

  useEffect(() => {
    console.log(selectedPreferences);
  }, [selectedPreferences]);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md flex justify-center items-center w-full inset-0">
        <div className="p-4 w-full max-w-lg bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="container mx-auto flex justify-center items-center flex-col">
            <h1 className="uppercase text-3xl text-center">Your Preferences</h1>
            <p className="text-md text-gray-500 uppercase text-center mt-4">
              It will show others what kind of flatmate you prefer. <br />{" "}
              Please select at least 5 preferences to update.
            </p>
            <div className="grid sm:grid-cols-3 grid-cols-2 w-full gap-8 mt-8 overflow-y-auto max-h-96">
              {prefers.map((ele, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="relative overflow-hidden rounded-full w-25 h-25 bg-gray-50 px-4 py-3 font-medium text-gray-700">
                    <input
                      type="checkbox"
                      className="peer hidden"
                      name="preferences"
                      value={ele.title}
                      id={`preferences${i}`}
                      checked={selectedPreferences.includes(ele.title)}
                      onChange={handleChange}
                    />
                    <label
                      className="absolute top-0 h-full w-full cursor-pointer rounded-full border-transparent peer-checked:border-3 peer-checked:border-[#FE797A]"
                      htmlFor={`preferences${i}`}
                    ></label>
                    <img src={ele.img} alt={ele.title} />
                  </div>
                  <span className="uppercase text-sm mt-2 text-red-400 font-bold">
                    {ele.title}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button
                variant="bordered"
                onClick={addPreferences}
                className="mr-4 uppercase"
              >
                Add Preferences
              </Button>
              <Button
                variant="bordered"
                onClick={() => setShowFindRoomModal(false)}
                className="uppercase"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FindRoomModal;

