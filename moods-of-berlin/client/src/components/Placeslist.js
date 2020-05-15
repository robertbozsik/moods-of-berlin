import React from "react";

const PlacesList = (props) => {
  console.log(props);
  console.log(props.query);
  const filtered = props.places.filter((place) => {
    return place.title.toLowerCase().includes(props.query.toLowerCase())
      ? true
      : false;
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <table>
        <thead>
          <tr>
            <th>Foto</th>
            <th>Title</th>
            <th>street</th>
            <th>zip</th>
            <th>city</th>
            <th>review</th>
          </tr>
        </thead>
        <tbody>
          {/* filter the contacts by the `query` that is in the Search component */}
          {filtered.map((place) => {
            return (
              <tr key={place.id}>
                <td>
                  <img src={place.imgPath} height="100px" alt={place.title} />
                </td>
                <td>{place.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PlacesList;
