const CACHE_KEY = 'productCache';

const getMidnightTimestamp = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime();
};

/**
 * Fetches data with an exponential backoff retry strategy.
 * @param {string} url The URL to fetch.
 * @param {number} retries Maximum number of retries.
 * @param {number} delay Initial delay in ms.
 * @returns {Promise<Response>}
 */
const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response;
    } catch (error) {
      console.warn(`Attempt ${i + 1} failed. Retrying in ${delay / 1000}s...`);
      if (i === retries - 1) throw error; // Throw error on last attempt
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2; // Exponential backoff
    }
  }
};

export const fetchProductsFromSheet = async () => {
  const cachedData = localStorage.getItem(CACHE_KEY);

  if (cachedData) {
    const { products, expiry } = JSON.parse(cachedData);
    if (new Date().getTime() < expiry) {
      console.log('Returning cached products.');
      return products;
    }
  }

  console.log('Fetching fresh products from Google Sheet.');
  try {
    const sheetId = '1HC0wmIcSLSYFwMdQCGCJ6AW66jsHAgdk8jxnmX2sDJA';
    const sheetName = 'Sheet1';
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;

    const response = await fetchWithRetry(url);
    const text = await response.text();
    const jsonText = text.substring(
      text.indexOf('(') + 1,
      text.lastIndexOf(')')
    );
    const data = JSON.parse(jsonText);

    const cols = data.table.cols.map((col) => col.label.trim());
    const rows = data.table.rows.map((row) => {
      const rowData = {};
      row.c.forEach((cell, index) => {
        if (cell && cell.v !== null) {
          rowData[cols[index]] = cell.v;
        }
      });
      return rowData;
    });

    const formattedProducts = rows.map((row, index) => ({
      id: row.id || index + 1,
      name: row.name || 'No Name',
      imageUrl:
        row.imageUrl || 'https://via.placeholder.com/300x200.png?text=No+Image',
      isSeasonal:
        row.isSeasonal === true ||
        String(row.isSeasonal).toUpperCase() === 'TRUE' ||
        String(row.isSeasonal).toUpperCase() === 'YES',
    }));

    const cachePayload = {
      products: formattedProducts,
      expiry: getMidnightTimestamp(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(cachePayload));

    return formattedProducts;
  } catch (error) {
    console.error(
      'Failed to fetch products from Google Sheet after multiple retries:',
      error
    );
    throw error;
  }
};
