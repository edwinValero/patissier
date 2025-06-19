const getMidnightTimestamp = () => {
  const now = new Date();
  const midnight = new Date(now);
  midnight.setHours(24, 0, 0, 0);
  return midnight.getTime();
};

const fetchWithRetry = async (url, retries = 3, delay = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      return response;
    } catch (error) {
      console.warn(
        `Attempt ${i + 1} for ${url} failed. Retrying in ${delay / 1000}s...`
      );
      if (i === retries - 1) throw error;
      await new Promise((resolve) => setTimeout(resolve, delay));
      delay *= 2;
    }
  }
};

const fetchFromSheet = async (sheetId, sheetName, cacheKey, formatter) => {
  const cachedData = localStorage.getItem(cacheKey);

  if (cachedData) {
    const { data, expiry } = JSON.parse(cachedData);
    if (new Date().getTime() < expiry) {
      console.log(`Returning cached data for ${cacheKey}.`);
      return data;
    }
  }

  console.log(`Fetching fresh data for ${cacheKey} from Google Sheet.`);
  try {
    const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${sheetName}`;
    const response = await fetchWithRetry(url);
    const text = await response.text();
    const jsonText = text.substring(
      text.indexOf('(') + 1,
      text.lastIndexOf(')')
    );
    const parsedData = JSON.parse(jsonText);

    // Normalize column headers to lowercase to prevent case sensitivity issues
    const cols = parsedData.table.cols.map((col) =>
      col.label.trim().toLowerCase()
    );
    const rows = parsedData.table.rows.map((row) => {
      const rowData = {};
      row.c.forEach((cell, index) => {
        if (cell && cell.v !== null) {
          rowData[cols[index]] = cell.v; // Keys are now lowercase
        }
      });
      return rowData;
    });

    const formattedData = formatter(rows);

    const cachePayload = {
      data: formattedData,
      expiry: getMidnightTimestamp(),
    };
    localStorage.setItem(cacheKey, JSON.stringify(cachePayload));

    return formattedData;
  } catch (error) {
    console.error(`Failed to fetch data for ${cacheKey}:`, error);
    throw error;
  }
};

// --- Product Service ---
const productFormatter = (rows) => {
  return rows.map((row, index) => ({
    id: row.id || index + 1,
    name: row.name || 'No Name',
    imageUrl:
      row.imageurl || 'https://via.placeholder.com/300x200.png?text=No+Image', // Use lowercase 'imageurl'
    isSeasonal:
      row.isseasonal === true || // Use lowercase 'isseasonal'
      String(row.isseasonal).toUpperCase() === 'TRUE' ||
      String(row.isseasonal).toUpperCase() === 'YES',
  }));
};

export const fetchProducts = () => {
  const sheetId = '1HC0wmIcSLSYFwMdQCGCJ6AW66jsHAgdk8jxnmX2sDJA';
  return fetchFromSheet(sheetId, 'Sheet1', 'productCache', productFormatter);
};

// --- Menu Service ---
const menuFormatter = (rows) => {
  const menu = {
    drinks: [],
    crepes: [],
    iceCreams: [],
  };

  rows.forEach((row) => {
    const item = {
      name: String(row.name || '').trim() || 'No Name',
      description: String(row.description || '').trim() || '',
      isTitle:
        String(row.istitle || '')
          .toUpperCase()
          .trim() === 'TRUE' ||
        String(row.istitle || '')
          .toUpperCase()
          .trim() === 'YES', // Use lowercase 'istitle'
    };

    const category = String(row.category || '')
      .toLowerCase()
      .trim(); // Use lowercase 'category'

    switch (category) {
      case 'drinks':
        menu.drinks.push(item);
        break;
      case 'crepes':
        menu.crepes.push(item);
        break;
      case 'ice creams':
        menu.iceCreams.push(item);
        break;
      default:
        break;
    }
  });
  return menu;
};

export const fetchMenu = () => {
  const sheetId = '1zPWdUt1ebLiMLEjxoctpokXLLBEVLmRG2P9L5e_NV-0';
  return fetchFromSheet(sheetId, 'Sheet1', 'menuCache', menuFormatter);
};
