const data = [
  {
    itmName: "Gossard Rain Shorts",
    pricing: {
      pnw: 67.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 3890,
        },
      },
    },
  },
  {
    itmName: "Victory Fight Trunks",
    pricing: {
      pnw: 57.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744889,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Toledo",
        proxy: "Cronx",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 3890,
        },
      },
    },
  },
  {
    itmName: "Trident Swimwear",
    pricing: {
      pnw: 47.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 4893,
        },
      },
    },
  },
  {
    itmName: "Fox Running Shorts",
    pricing: {
      pnw: 37.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 4893,
        },
      },
    },
  },
  {
    itmName: "Beavertail Sap",
    pricing: {
      pnw: 27.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 9814,
        },
      },
    },
  },
  {
    itmName: "Inside Houseshoes",
    pricing: {
      pnw: 11.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 4839,
        },
      },
    },
  },
  {
    itmName: "Cronx Gym T-shirt",
    pricing: {
      pnw: 12.99,
      sw: 29.99,
      ec: 39.99,
      ds: 17.99,
    },
    isbn: 1283744873,
    manufacturing: {
      region: {
        cityCode: "ATL",
        stateCode: "GA",
        zipCode: "78654-12",
      },
      destination: {
        county: "Maricopa",
        proxy: "Dade",
        unitTransfer: {
          firstDesinationCode: 4839,
          finalDestinationCode: 4893,
        },
      },
    },
  },
];

const checkObj = (arr) => {
  const item = arr.filter((items) => {
    return (
      items.pricing.pnw < 35 &&
      items.manufacturing.destination.unitTransfer.finalDestinationCode == 4893
    );
  });
  return item;
};

console.log(checkObj(data));

// finalDestinationCode = 3890
// affordable is anything below 35$ PNW pricing
