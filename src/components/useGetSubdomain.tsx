import { useState, useEffect } from "react";

export function useGetSubdomain() {
  const [subdomain, setSubdomain] = useState("");

  useEffect(() => {
    const getSubdomain = () => {
      const url = window.location.hostname;

      const parts = url.split(".");
      if (parts.length >= 3) {
        setSubdomain(parts[0]);
      }
    };

    getSubdomain();
  }, []);

  return subdomain;
}
