exports.seed = function(knex) {
  return knex('assets_category').insert([
    { 
      id: 1,
      category_id: 1,
      assets_name: "Treasury Bills",
      assets_weighting : 35
    },
    { 
      id: 2,
      category_id: 1,
      assets_name: "Fixed Deposits",
      assets_weighting : 10
    },
    { 
      id: 3,
      category_id: 1,
      assets_name: "Money Market Funds",
      assets_weighting : 30
    },
    { 
      id: 4,
      category_id: 1,
      assets_name: "Fixed Income/Bond Funds",
      assets_weighting : 10
    },
    { 
      id: 5,
      category_id: 1,
      assets_name: "FGN Savings Bonds",
      assets_weighting : 15
    },
    { 
      id: 6,
      category_id: 2,
      assets_name: "Treasury Bills",
      assets_weighting :25
    },
    { 
      id: 7,
      category_id: 2,
      assets_name: "Fixed Deposits",
      assets_weighting : 15
    },
    { 
      id: 8,
      category_id: 2,
      assets_name: "Money Market Funds",
      assets_weighting : 25
    },
    { 
      id: 9,
      category_id: 2,
      assets_name: "Fixed Income/Bond Funds",
      assets_weighting : 10
    },
    { 
      id: 10,
      category_id: 2,
      assets_name: "Equity Funds",
      assets_weighting : 5
    },
    { 
      id: 11,
      category_id: 2,
      assets_name: "FGN Savings Bonds",
      assets_weighting : 20
    },
    { 
      id: 12,
      category_id: 3,
      assets_name: "Treasury Bills",
      assets_weighting : 10
    },
    { 
      id: 13,
      category_id: 3,
      assets_name: "Fixed Deposit",
      assets_weighting : 15
    },
    { 
      id: 14,
      category_id: 3,
      assets_name: "Money Market Funds",
      assets_weighting : 20
    },
    { 
      id: 15,
      category_id: 3,
      assets_name: "Fixed Income/Bond Funds",
      assets_weighting : 15
    },
    { 
      id: 16,
      category_id: 3,
      assets_name: "Equity Funds",
      assets_weighting : 25
    },
    { 
      id: 17,
      category_id: 3,
      assets_name: "FGN Savings Bonds",
      assets_weighting : 15
    },
    { 
      id: 18,
      category_id: 4,
      assets_name: "Treasury Bills",
      assets_weighting : 5
    },
    { 
      id: 19,
      category_id: 4,
      assets_name: "Commercial Papers",
      assets_weighting : 5
    },
    { 
      id: 20,
      category_id: 4,
      assets_name: "Money Market Funds",
      assets_weighting : 10
    },
    { 
      id: 21,
      category_id: 4,
      assets_name: "Fixed Income/Bond Funds",
      assets_weighting : 10
    },
    { 
      id: 22,
      category_id: 4,
      assets_name: "Equity Funds",
      assets_weighting : 35
    },
    { 
      id: 23,
      category_id: 4,
      assets_name: "Commodity-based ETFs",
      assets_weighting : 10
    },
    { 
      id: 24,
      category_id: 4,
      assets_name: "FGN Savings Bonds",
      assets_weighting : 10
    },
    { 
      id: 25,
      category_id: 4,
      assets_name: "Dollar-Based Investments",
      assets_weighting : 15
    },
    { 
      id: 26,
      category_id: 5,
      assets_name: "Commercial Papers",
      assets_weighting : 10
    },
    { 
      id: 27,
      category_id: 5,
      assets_name: "Money Market Funds",
      assets_weighting : 10
    },
    { 
      id: 28,
      category_id: 5,
      assets_name: "Fixed Income/Bond Funds",
      assets_weighting : 10
    },
    { 
      id: 29,
      category_id: 5,
      assets_name: "Equity Funds",
      assets_weighting : 40
    },
    { 
      id: 30,
      category_id: 5,
      assets_name: "Commodity-based ETFs",
      assets_weighting : 10
    },
    { 
      id: 31,
      category_id: 5,
      assets_name: "FGN Savings Bonds",
      assets_weighting : 5
    },
    { 
      id: 32,
      category_id: 5,
      assets_name: "Dollar-Based Investments",
      assets_weighting : 15
    }
  ]);
};