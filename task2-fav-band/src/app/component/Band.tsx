import React from "react";


type BandProps = {
    name: string;
    info: string;
    members: string[];
    albumNames: string;
    albumCovers: string;


}

const Band = ({ name, info, members, albumNames, albumCovers }: BandProps) => {
    return (
      <>
        <div className="card-container container w-auto bg-white rounded-lg shadow-lg overflow-hidden text-blue-800 p-[10px]">
          <h2 className="bandName flex font-bold gap-1">
            Band name:
            <div className="text-pink-600 font-normal ">
              <p> {name}</p>
            </div>
          </h2>

          <div className="bandName flex font-bold gap-1">
            Info:
            <div className="text-pink-600 font-normal">
              <p> {info}</p>
            </div>
          </div>

          <div className="bandName flex font-bold gap-1">
            Members:
            <div className="text-pink-600 font-normal">
              <p> {members}</p>
            </div>
          </div>

          <div className="bandName flex font-bold gap-1">
            Album Names:
            <div className="text-pink-600 font-normal">
              <p> {albumNames}</p>
            </div>
          </div>

          <div className="bandName flex font-bold gap-1">
            Album Cover:
            <div className="text-pink-600 font-normal">
              <p> {albumCovers}</p>
            </div>
          </div>
        </div>
      </>
    );

}




export default Band;