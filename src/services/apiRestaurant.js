const TOMATO_API_URL = import.meta.env.VITE_TOMATO_API_URL;

export async function getMenuItems(pageIndex, pageSize) {
  if (Number(pageIndex) < 1 || Number(pageSize) < 10) {
    pageIndex = 1;
    pageSize = 10;
  }
  try {
    const response = await fetch(
      `${TOMATO_API_URL}/items?page=${pageIndex}&size=${pageSize}`,
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const data = await response.json();
    return data || [];
  } catch (error) {
    console.log("Error Fetching data ", error);
    return [];
  }
}
