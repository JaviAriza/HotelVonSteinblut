import { useState, useEffect } from "react";

export const useFetchRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [fail, setFail] = useState(null);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("/data/rooms.json");
        if (!response.ok) {
          throw new Error("fail room fetch");
        }
        setRooms(await response.json());
      } catch (e) {
        setFail(e.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRooms();
  }, []);

  return { rooms, isLoading, fail };
};
