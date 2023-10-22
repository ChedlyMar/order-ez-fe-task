import axios from "axios";

const url = "https://api-staging.orderez.co/distributor/categories";
const token =
  "31eb9033026aac1296b335533d3d0827fc9343b3a18c6a188e5c7e73148bbd0f";

export const fetchCategories = async () => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(url, config);
    return response.data.data;

  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};
