import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function App(props) {

  return ( //table row and columns displaying entity list
      <tr>
          <td>
              {props.listing.name}
          </td>
          <td>
              {props.listing.price}
          </td>
          <td>
              {props.listing.creationDate}
          </td>
          <td>
              {props.listing.sellerName}
          </td>
          <td>
              {props.listing.verified}
          </td>

    </tr>
  )
}

export default App
