exports.seed = function(knex) {
  return knex('risk_categories').insert([
    { 
      id: 1,
      score: 16,
      category : 'Conservative Investor'
    },
    { 
      id: 2,
      score: 38,
      category : 'Moderately Conservative Investor'
    },
    { 
      id: 3,
      score: 60,
      category : 'Moderate Investor'
    },
    { 
      id: 4,
      score: 81,
      category : 'Moderately Aggressive Investor'
    },
    { 
      id: 5,
      score: 103,
      category : 'Aggressive Investor'
    }
  ]);
};