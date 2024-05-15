import { useState, useEffect } from "react";
import httpService from "../../services/httpService";
import notify from "../../services/notificationService";

function PropertyList() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const { data } = await httpService.get("/api/properties");
        setProperties(data);
      } catch (error) {
        notify.error("An error occurred: ", error.message);
      }
    };

    fetchProperties();
  }, []);

  return (
    <div>
      {properties.map((item, idx) => (
        <p>{JSON.stringify(item)}</p>
      ))}
    </div>
  );
}

export default PropertyList;
