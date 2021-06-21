import { useState, useEffect } from "react";

const useContacts = () => {
  const [contacts, setContacts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getContact = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=12");
        const { results, error } = await response.json();
        if (error) {
          throw new Error(error);
        }
        setContacts(results);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getContact();
  }, []);

  return { contacts, error, isLoading };
};

export default useContacts;
