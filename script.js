let currentSubject = null;
let currentTopic = null;
let currentQuestion = null;
let questionsAnswered = 0;

// ------------------ QUESTION BANK ------------------
// 20 questions per topic (example: simplified numbers for brevity)
const questionBank = {
  math: {
    "Sequences and Series": [
      {question: "Find the 5th term of 2,5,8,...", answer: 14},
      {question: "Sum of first 10 terms of 1,3,5,...", answer: 100},
      {question: "Find the 7th term of 1,4,7,...", answer: 19},
      {question: "Sum of first 5 terms of 3,7,11,...", answer: 35},
      {question: "Find 10th term of 5,8,11,...", answer: 32},
      {question: "Sum of first 6 terms of 2,5,8,...", answer: 42},
      {question: "Find the 8th term of 1,6,11,...", answer: 41},
      {question: "Sum of first 8 terms of 1,2,3,...", answer: 36},
      {question: "Find 12th term of 3,7,11,...", answer: 47},
      {question: "Sum of first 10 terms of 5,10,15,...", answer: 275},
      {question: "Find 9th term of 4,9,14,...", answer: 49},
      {question: "Sum of first 12 terms of 2,4,6,...", answer: 156},
      {question: "Find 15th term of 1,3,5,...", answer: 29},
      {question: "Sum of first 7 terms of 2,5,8,...", answer: 77},
      {question: "Find 6th term of 10,7,4,...", answer: -5},
      {question: "Sum of first 9 terms of 1,4,7,...", answer: 81},
      {question: "Find 11th term of 2,6,10,...", answer: 42},
      {question: "Sum of first 5 terms of 3,6,9,...", answer: 45},
      {question: "Find 8th term of 5,10,15,...", answer: 40},
      {question: "Sum of first 10 terms of 1,2,3,...", answer: 55}
    ],

    "Functions": [
      {question: "If f(x)=2x+3, find f(4)", answer: 11},
      {question: "If f(x)=3x-5, find f(2)", answer: 1},
      {question: "If f(x)=x²+2x, find f(3)", answer: 15},
      {question: "If f(x)=5x+1, find f(6)", answer: 31},
      {question: "If f(x)=x²-4, find f(5)", answer: 21},
      {question: "If f(x)=3x²+2, find f(2)", answer: 14},
      {question: "If f(x)=4x-7, find f(3)", answer: 5},
      {question: "If f(x)=x²+5x+6, find f(2)", answer: 16},
      {question: "If f(x)=2x²-3x, find f(3)", answer: 9},
      {question: "If f(x)=x²-2x+1, find f(4)", answer: 9},
      {question: "If f(x)=3x+4, find f(5)", answer: 19},
      {question: "If f(x)=2x-5, find f(6)", answer: 7},
      {question: "If f(x)=x²+3x+2, find f(1)", answer: 6},
      {question: "If f(x)=x²-5x+6, find f(3)", answer: 0},
      {question: "If f(x)=4x²+2x, find f(2)", answer: 20},
      {question: "If f(x)=5x²-3x, find f(1)", answer: 2},
      {question: "If f(x)=x²+4, find f(3)", answer: 13},
      {question: "If f(x)=2x²-5, find f(2)", answer: 3},
      {question: "If f(x)=x²-2x, find f(4)", answer: 8},
      {question: "If f(x)=3x²+2x-1, find f(2)", answer: 9}
    ],

    "Finance": [
      {question: "Simple interest on R1000 at 5% for 2 years?", answer: 1100},
      {question: "Simple interest on R2000 at 3% for 3 years?", answer: 2180},
      {question: "R5000 at 4% for 1 year?", answer: 5200},
      {question: "R1500 at 6% for 2 years?", answer: 1680},
      {question: "R2500 at 5% for 3 years?", answer: 2875},
      {question: "R3000 at 7% for 2 years?", answer: 3420},
      {question: "R1200 at 6% for 3 years?", answer: 1440},
      {question: "R4000 at 5% for 4 years?", answer: 4800},
      {question: "R3500 at 4% for 2 years?", answer: 3780},
      {question: "R1800 at 5% for 5 years?", answer: 2250},
      {question: "R2200 at 3% for 3 years?", answer: 2398},
      {question: "R500 at 6% for 2 years?", answer: 560},
      {question: "R8000 at 5% for 1 year?", answer: 8400},
      {question: "R6000 at 4% for 2 years?", answer: 6480},
      {question: "R4500 at 7% for 3 years?", answer: 5329.5},
      {question: "R10000 at 5% for 2 years?", answer: 11000},
      {question: "R3000 at 3% for 3 years?", answer: 3270},
      {question: "R7500 at 6% for 1 year?", answer: 7950},
      {question: "R2000 at 5% for 4 years?", answer: 2400},
      {question: "R3500 at 4% for 3 years?", answer: 3920}
    ],

    "Trigonometry": [
      {question: "Find sin(30°)", answer: 0.5},
      {question: "Find cos(60°)", answer: 0.5},
      {question: "Find tan(45°)", answer: 1},
      {question: "Find sin(90°)", answer: 1},
      {question: "Find cos(0°)", answer: 1},
      {question: "Find tan(30°)", answer: 0.58},
      {question: "Find sin(60°)", answer: 0.87},
      {question: "Find cos(45°)", answer: 0.71},
      {question: "Find tan(60°)", answer: 1.73},
      {question: "Find sin(0°)", answer: 0},
      {question: "Find cos(90°)", answer: 0},
      {question: "Find sin(45°)", answer: 0.71},
      {question: "Find cos(30°)", answer: 0.87},
      {question: "Find sin(120°)", answer: 0.87},
      {question: "Find tan(0°)", answer: 0},
      {question: "Find sin(135°)", answer: 0.71},
      {question: "Find cos(135°)", answer: -0.71},
      {question: "Find tan(135°)", answer: -1},
      {question: "Find sin(150°)", answer: 0.5},
      {question: "Find cos(150°)", answer: -0.87}
    ],

    "Polynomials": [
      {question: "Evaluate f(x)=x²+2x+1 at x=2", answer: 9},
      {question: "Evaluate f(x)=2x²+3x at x=1", answer: 5},
      {question: "Evaluate f(x)=x²-4x+4 at x=3", answer: 1},
      {question: "Evaluate f(x)=3x²+2x-1 at x=2", answer: 11},
      {question: "Evaluate f(x)=x²+x+1 at x=1", answer: 3},
      {question: "Evaluate f(x)=2x²-3x+1 at x=2", answer: 3},
      {question: "Evaluate f(x)=x²+4x+3 at x=1", answer: 8},
      {question: "Evaluate f(x)=x²-2x+2 at x=2", answer: 2},
      {question: "Evaluate f(x)=3x²+5x at x=1", answer: 8},
      {question: "Evaluate f(x)=x²-3x+2 at x=2", answer: 0},
      {question: "Evaluate f(x)=2x²+5x+3 at x=1", answer: 10},
      {question: "Evaluate f(x)=x²+3x+2 at x=2", answer: 12},
      {question: "Evaluate f(x)=3x²-2x+1 at x=1", answer: 2},
      {question: "Evaluate f(x)=x²+6x+9 at x=3", answer: 36},
      {question: "Evaluate f(x)=x²+2x+3 at x=1", answer: 6},
      {question: "Evaluate f(x)=2x²+3x+1 at x=2", answer: 11},
      {question: "Evaluate f(x)=x²+4x at x=2", answer: 12},
      {question: "Evaluate f(x)=3x²-5x+2 at x=1", answer: 0},
      {question: "Evaluate f(x)=x²+5x+6 at x=2", answer: 20},
      {question: "Evaluate f(x)=2x²+4x+1 at x=3", answer: 31}
    ],

    "Differential Calculus": [
      {question: "f(x)=x²+3x, find f'(2)", answer: 7},
      {question: "f(x)=2x²+5x, find f'(1)", answer: 9},
      {question: "f(x)=3x²+2x, find f'(3)", answer: 20},
      {question: "f(x)=x²+2x, find f'(4)", answer: 10},
      {question: "f(x)=2x²+3x, find f'(2)", answer: 11},
      {question: "f(x)=x²-4x, find f'(2)", answer: 0},
      {question: "f(x)=3x²+5x, find f'(1)", answer: 11},
      {question: "f(x)=x²+6x, find f'(3)", answer: 12},
      {question: "f(x)=2x²-3x, find f'(2)", answer: 5},
      {question: "f(x)=x²+4x, find f'(1)", answer: 6},
      {question: "f(x)=3x²-2x, find f'(2)", answer: 10},
      {question: "f(x)=x²+5x, find f'(2)", answer: 9},
      {question: "f(x)=2x²+4x, find f'(3)", answer: 16},
      {question: "f(x)=x²-3x, find f'(1)", answer: -1},
      {question: "f(x)=x²+2x, find f'(3)", answer: 8},
      {question: "f(x)=3x²+4x, find f'(2)", answer: 16},
      {question: "f(x)=x²-5x, find f'(5)", answer: 5},
      {question: "f(x)=2x²+3x, find f'(4)", answer: 19},
      {question: "f(x)=x²+6x, find f'(1)", answer: 8},
      {question: "f(x)=3x²+5x, find f'(2)", answer: 17}
    ],

    "Analytical Geometry": [
      {question: "Find distance between (0,0) and (3,4)", answer: 5},
      {question: "Find distance between (1,2) and (4,6)", answer: 5},
      {question: "Distance between (0,0) and (6,8)", answer: 10},
      {question: "Distance between (-2,-3) and (2,1)", answer: 5.66},
      {question: "Distance between (0,0) and (-3,4)", answer: 5},
      {question: "Distance between (1,1) and (4,5)", answer: 5},
      {question: "Distance between (-1,-1) and (2,3)", answer: 5},
      {question: "Distance between (2,3) and (5,7)", answer: 5},
      {question: "Distance between (0,0) and (5,12)", answer: 13},
      {question: "Distance between (1,0) and (4,4)", answer: 5},
      {question: "Distance between (2,2) and (5,6)", answer: 5},
      {question: "Distance between (-3,-4) and (0,0)", answer: 5},
      {question: "Distance between (0,1) and (3,5)", answer: 5},
      {question: "Distance between (-2,-1) and (2,3)", answer: 5.66},
      {question: "Distance between (1,2) and (5,6)", answer: 5.66},
      {question: "Distance between (0,0) and (9,12)", answer: 15},
      {question: "Distance between (1,1) and (4,5)", answer: 5},
      {question: "Distance between (-3,-3) and (1,1)", answer: 5.66},
      {question: "Distance between (0,0) and (8,15)", answer: 17},
      {question: "Distance between (2,2) and (6,6)", answer: 5.66}
    ],

    "Euclidean Geometry": [
      {question: "Triangle sides 3,4,5. Find area.", answer: 6},
      {question: "Triangle sides 5,12,13. Find area.", answer: 30},
      {question: "Triangle sides 6,8,10. Find area.", answer: 24},
      {question: "Triangle sides 7,24,25. Find area.", answer: 84},
      {question: "Triangle sides 9,12,15. Find area.", answer: 54},
      {question: "Triangle sides 8,15,17. Find area.", answer: 60},
      {question: "Triangle sides 5,5,6. Find area.", answer: 12},
      {question: "Triangle sides 6,6,8. Find area.", answer: 17.89},
      {question: "Triangle sides 7,7,10. Find area.", answer: 24.49},
      {question: "Triangle sides 9,9,10. Find area.", answer: 40.28},
      {question: "Triangle sides 10,10,12. Find area.", answer: 48},
      {question: "Triangle sides 8,6,10. Find area.", answer: 24},
      {question: "Triangle sides 5,12,13. Find area.", answer: 30},
      {question: "Triangle sides 7,24,25. Find area.", answer: 84},
      {question: "Triangle sides 3,4,5. Find area.", answer: 6},
      {question: "Triangle sides 6,8,10. Find area.", answer: 24},
      {question: "Triangle sides 9,12,15. Find area.", answer: 54},
      {question: "Triangle sides 8,15,17. Find area.", answer: 60},
      {question: "Triangle sides 7,7,10. Find area.", answer: 24.49},
      {question: "Triangle sides 10,10,12. Find area.", answer: 48}
    ],

    "Statistics and Probability": [
      {question: "Probability of getting 4 on a die roll?", answer: 1/6},
      {question: "Probability of head on coin flip?", answer: 0.5},
      {question: "Probability of 2 on a die?", answer: 1/6},
      {question: "Probability of even number on die?", answer: 0.5},
      {question: "Probability of tail on coin?", answer: 0.5},
      {question: "Probability of 1 or 2 on die?", answer: 1/3},
      {question: "Probability of 3 or 4 on die?", answer: 1/3},
      {question: "Probability of 5 or 6 on die?", answer: 1/3},
      {question: "Probability of sum 7 on 2 dice?", answer: 1/6},
      {question: "Probability of rolling a 6 then 1?", answer: 1/36},
      {question: "Probability of not 6 on die?", answer: 5/6},
      {question: "Probability of rolling 1 or 2 on coin?", answer: 0}, // trick
      {question: "Probability of two heads in 2 flips?", answer: 0.25},
      {question: "Probability of getting odd number on die?", answer: 0.5},
      {question: "Probability of sum 8 on 2 dice?", answer: 5/36},
      {question: "Probability of drawing ace from deck?", answer: 1/13},
      {question: "Probability of drawing red card?", answer: 0.5},
      {question: "Probability of getting 3 then 5 on dice?", answer: 1/36},
      {question: "Probability of rolling double 6?", answer: 1/36},
      {question: "Probability of getting 1 or 3 on die?", answer: 1/3}
    ]
  },

  science: {
 "Momentum and Impulse": [
    {question: "A 10kg object moves at 5 m/s. Find momentum.", answer: 50},
    {question: "A 2kg object moves at 3 m/s. Find momentum.", answer: 6},
    {question: "A 5kg object moves at 4 m/s. Find momentum.", answer: 20},
    {question: "A 1kg object moves at 2 m/s. Find momentum.", answer: 2},
    {question: "A 3kg object moves at 6 m/s. Find momentum.", answer: 18},
    {question: "A 4kg object moves at 2.5 m/s. Find momentum.", answer: 10},
    {question: "A 6kg object moves at 3 m/s. Find momentum.", answer: 18},
    {question: "A 7kg object moves at 4 m/s. Find momentum.", answer: 28},
    {question: "A 8kg object moves at 1 m/s. Find momentum.", answer: 8},
    {question: "A 2kg object moves at 7 m/s. Find momentum.", answer: 14},
    {question: "A 3kg object moves at 5 m/s. Find momentum.", answer: 15},
    {question: "A 1.5kg object moves at 4 m/s. Find momentum.", answer: 6},
    {question: "A 12kg object moves at 2 m/s. Find momentum.", answer: 24},
    {question: "A 9kg object moves at 3 m/s. Find momentum.", answer: 27},
    {question: "A 4kg object moves at 6 m/s. Find momentum.", answer: 24},
    {question: "A 5kg object moves at 5 m/s. Find momentum.", answer: 25},
    {question: "A 2kg object moves at 8 m/s. Find momentum.", answer: 16},
    {question: "A 6kg object moves at 7 m/s. Find momentum.", answer: 42},
    {question: "A 3kg object moves at 2 m/s. Find momentum.", answer: 6},
    {question: "A 10kg object moves at 1 m/s. Find momentum.", answer: 10}
  ],

  "Vertical Projectile Motion": [
    {question: "A ball is thrown vertically at 10 m/s. Find max height (g=10).", answer: 5},
    {question: "A ball is thrown at 20 m/s upwards. Find max height.", answer: 20},
    {question: "A stone is thrown up at 15 m/s. Find max height.", answer: 11.25},
    {question: "A ball is dropped from 25 m. Time to reach ground?", answer: 2.26},
    {question: "A stone thrown at 12 m/s up. Find time to reach max height.", answer: 1.2},
    {question: "A ball is thrown at 8 m/s upwards. Max height?", answer: 3.2},
    {question: "Stone thrown at 5 m/s. Max height?", answer: 1.25},
    {question: "Ball thrown at 30 m/s. Max height?", answer: 45},
    {question: "Projectile reaches 20 m. Find initial velocity.", answer: 20},
    {question: "A ball thrown at 10 m/s. Total flight time?", answer: 2},
    {question: "A stone dropped from 45 m. Time to hit ground?", answer: 3},
    {question: "Ball thrown at 16 m/s. Max height?", answer: 12.8},
    {question: "Stone thrown at 9 m/s. Time to return?", answer: 1.8},
    {question: "Projectile thrown at 14 m/s. Max height?", answer: 9.8},
    {question: "Ball thrown at 18 m/s. Time to reach max height?", answer: 1.8},
    {question: "Stone dropped from 20 m. Velocity on impact?", answer: 20},
    {question: "Ball thrown at 25 m/s. Max height?", answer: 31.25},
    {question: "Stone thrown at 7 m/s. Max height?", answer: 2.45},
    {question: "Projectile thrown at 12 m/s. Total flight time?", answer: 2.4},
    {question: "Ball thrown at 15 m/s. Max height?", answer: 11.25}
  ],

  "Work Energy and Power": [
    {question: "Force 10 N moves 5 m. Work done?", answer: 50},
    {question: "Force 20 N moves 3 m. Work done?", answer: 60},
    {question: "Force 15 N moves 4 m. Work done?", answer: 60},
    {question: "Power = 100 W, time = 5 s. Work done?", answer: 500},
    {question: "Work 200 J in 10 s. Power?", answer: 20},
    {question: "Force 12 N moves 6 m. Work done?", answer: 72},
    {question: "Force 8 N moves 10 m. Work done?", answer: 80},
    {question: "Power = 50 W, time = 4 s. Work done?", answer: 200},
    {question: "Force 5 N moves 12 m. Work done?", answer: 60},
    {question: "Force 25 N moves 2 m. Work done?", answer: 50},
    {question: "Power = 200 W, time = 10 s. Work done?", answer: 2000},
    {question: "Force 30 N moves 3 m. Work done?", answer: 90},
    {question: "Force 40 N moves 5 m. Work done?", answer: 200},
    {question: "Power = 500 W, time = 2 s. Work done?", answer: 1000},
    {question: "Force 10 N moves 15 m. Work done?", answer: 150},
    {question: "Force 18 N moves 6 m. Work done?", answer: 108},
    {question: "Power = 120 W, time = 5 s. Work done?", answer: 600},
    {question: "Force 16 N moves 7 m. Work done?", answer: 112},
    {question: "Force 22 N moves 4 m. Work done?", answer: 88},
    {question: "Power = 250 W, time = 8 s. Work done?", answer: 2000}
  ],

  "Doppler Effect": [
    {question: "Source approaches at 30 m/s, f=500 Hz. Observer freq?", answer: 505},
    {question: "Source recedes at 20 m/s, f=400 Hz. Observer freq?", answer: 393},
    {question: "Source approaches at 15 m/s, f=600 Hz. Observer freq?", answer: 610},
    {question: "Source recedes at 25 m/s, f=300 Hz. Observer freq?", answer: 290},
    {question: "Source approaches at 40 m/s, f=1000 Hz. Observer freq?", answer: 1020},
    {question: "Source recedes at 10 m/s, f=200 Hz. Observer freq?", answer: 193},
    {question: "Source approaches at 50 m/s, f=500 Hz. Observer freq?", answer: 520},
    {question: "Source recedes at 30 m/s, f=800 Hz. Observer freq?", answer: 780},
    {question: "Source approaches at 25 m/s, f=1000 Hz. Observer freq?", answer: 1025},
    {question: "Source recedes at 15 m/s, f=600 Hz. Observer freq?", answer: 590},
    {question: "Source approaches at 20 m/s, f=450 Hz. Observer freq?", answer: 460},
    {question: "Source recedes at 35 m/s, f=700 Hz. Observer freq?", answer: 680},
    {question: "Source approaches at 30 m/s, f=900 Hz. Observer freq?", answer: 920},
    {question: "Source recedes at 40 m/s, f=1000 Hz. Observer freq?", answer: 960},
    {question: "Source approaches at 15 m/s, f=300 Hz. Observer freq?", answer: 305},
    {question: "Source recedes at 20 m/s, f=500 Hz. Observer freq?", answer: 480},
    {question: "Source approaches at 10 m/s, f=600 Hz. Observer freq?", answer: 610},
    {question: "Source recedes at 25 m/s, f=400 Hz. Observer freq?", answer: 380},
    {question: "Source approaches at 50 m/s, f=200 Hz. Observer freq?", answer: 210},
    {question: "Source recedes at 30 m/s, f=1000 Hz. Observer freq?", answer: 970}
  ],

  "Rate and Extent of Reaction": [
    {question: "If 0.5 mol reacts in 2 s, rate?", answer: 0.25},
    {question: "0.8 mol reacts in 4 s, rate?", answer: 0.2},
    {question: "1 mol reacts in 5 s, rate?", answer: 0.2},
    {question: "2 mol reacts in 10 s, rate?", answer: 0.2},
    {question: "0.6 mol reacts in 3 s, rate?", answer: 0.2},
    {question: "0.9 mol reacts in 6 s, rate?", answer: 0.15},
    {question: "0.7 mol reacts in 7 s, rate?", answer: 0.1},
    {question: "1.2 mol reacts in 4 s, rate?", answer: 0.3},
    {question: "0.4 mol reacts in 2 s, rate?", answer: 0.2},
    {question: "0.3 mol reacts in 1 s, rate?", answer: 0.3},
    {question: "0.5 mol reacts in 5 s, rate?", answer: 0.1},
    {question: "0.6 mol reacts in 2 s, rate?", answer: 0.3},
    {question: "1 mol reacts in 8 s, rate?", answer: 0.125},
    {question: "0.8 mol reacts in 2 s, rate?", answer: 0.4},
    {question: "0.7 mol reacts in 3 s, rate?", answer: 0.233},
    {question: "0.9 mol reacts in 3 s, rate?", answer: 0.3},
    {question: "1.1 mol reacts in 5 s, rate?", answer: 0.22},
    {question: "1.2 mol reacts in 6 s, rate?", answer: 0.2},
    {question: "0.4 mol reacts in 4 s, rate?", answer: 0.1},
    {question: "0.5 mol reacts in 1 s, rate?", answer: 0.5}
  ],

  "Chemical Equilibrium": [
    {question: "N2 + 3H2 ⇌ 2NH3, Kc=1. Find [NH3] at equilibrium.", answer: 0.5},
    {question: "A ⇌ B, initial 1M, 50% reacted. Kc?", answer: 1},
    {question: "H2 + I2 ⇌ 2HI, 0.5 mol each. Kc?", answer: 1},
    {question: "A ⇌ 2B, 1M initial, 0.5M B at eq?", answer: 0.25},
    {question: "N2 + O2 ⇌ 2NO, [NO]=0.2M, Kc?", answer: 0.04},
    {question: "A ⇌ B, 0.6M reacted, Kc?", answer: 0.36},
    {question: "2A ⇌ B, initial 2M, eq 1M B. Kc?", answer: 0.25},
    {question: "H2 + Cl2 ⇌ 2HCl, 1M each, eq 0.5M HCl. Kc?", answer: 1},
    {question: "A ⇌ B + C, initial 1M, eq 0.4M B. Kc?", answer: 0.16},
    {question: "CO + Cl2 ⇌ COCl2, 0.5M each, eq [COCl2]=0.2M. Kc?", answer: 0.32},
    {question: "A ⇌ B, 0.7M reacted, Kc?", answer: 0.49},
    {question: "2A ⇌ B, 1M reacted 0.5M B. Kc?", answer: 0.0625},
    {question: "H2 + Br2 ⇌ 2HBr, 1M each, eq 0.6M HBr. Kc?", answer: 2.25},
    {question: "A ⇌ B, initial 1M, eq [B]=0.3M. Kc?", answer: 0.09},
    {question: "2A ⇌ B + C, initial 2M, eq 0.5M B. Kc?", answer: 0.0625},
    {question: "A ⇌ 2B, initial 1M, eq 0.4M B. Kc?", answer: 0.16},
    {question: "N2 + 3H2 ⇌ 2NH3, [NH3]=0.4M. Kc?", answer: 0.16},
    {question: "A ⇌ B, initial 2M, eq [B]=0.6M. Kc?", answer: 0.09},
    {question: "CO + Cl2 ⇌ COCl2, eq 0.5M COCl2. Kc?", answer: 0.25},
    {question: "A ⇌ 2B, initial 2M, eq 1M B. Kc?", answer: 0.25}
  ],

  "Acids and Bases": [
    {question: "pH of 0.01 M HCl?", answer: 2},
    {question: "pH of 0.001 M HCl?", answer: 3},
    {question: "pOH of 0.01 M NaOH?", answer: 2},
    {question: "pH of 0.1 M HCl?", answer: 1},
    {question: "pH of 0.05 M HCl?", answer: 1.3},
    {question: "pOH of 0.1 M NaOH?", answer: 1},
    {question: "pH of 0.2 M HCl?", answer: 0.7},
    {question: "pH of 0.02 M HCl?", answer: 1.7},
    {question: "pOH of 0.05 M NaOH?", answer: 1.3},
    {question: "pH of 0.003 M HCl?", answer: 2.52},
    {question: "pH of 0.04 M HCl?", answer: 1.4},
    {question: "pH of 0.05 M HCl?", answer: 1.3},
    {question: "pOH of 0.02 M NaOH?", answer: 1.7},
    {question: "pH of 0.006 M HCl?", answer: 2.22},
    {question: "pH of 0.009 M HCl?", answer: 2.05},
    {question: "pH of 0.01 M HCl?", answer: 2},
    {question: "pH of 0.002 M HCl?", answer: 2.7},
    {question: "pOH of 0.003 M NaOH?", answer: 2.52},
    {question: "pH of 0.007 M HCl?", answer: 2.15},
    {question: "pH of 0.008 M HCl?", answer: 2.1}
  ],

  "Electric Circuits": [
    {question: "V=IR, R=5Ω, I=2A. Find V.", answer: 10},
    {question: "V=12V, R=6Ω. Find current I.", answer: 2},
    {question: "I=3A, V=9V. Find R.", answer: 3},
    {question: "R=4Ω, V=20V. Find I.", answer: 5},
    {question: "V=15V, I=3A. Find R.", answer: 5},
    {question: "I=0.5A, R=10Ω. Find V.", answer: 5},
    {question: "V=24V, R=8Ω. Find I.", answer: 3},
    {question: "I=2A, R=7Ω. Find V.", answer: 14},
    {question: "V=18V, I=3A. Find R.", answer: 6},
    {question: "V=30V, R=5Ω. Find I.", answer: 6},
    {question: "R=10Ω, I=2A. Find V.", answer: 20},
    {question: "V=20V, R=4Ω. Find I.", answer: 5},
    {question: "I=5A, R=2Ω. Find V.", answer: 10},
    {question: "V=36V, I=6A. Find R.", answer: 6},
    {question: "V=9V, R=3Ω. Find I.", answer: 3},
    {question: "I=1A, V=5V. Find R.", answer: 5},
    {question: "V=40V, R=8Ω. Find I.", answer: 5},
    {question: "I=0.8A, R=10Ω. Find V.", answer: 8},
    {question: "V=50V, I=5A. Find R.", answer: 10},
    {question: "V=60V, R=12Ω. Find I.", answer: 5}
  ],

  "Electrodynamics": [
    {question: "Charge 2C flows 4s. Current?", answer: 0.5},
    {question: "Current 3A, time 5s. Charge?", answer: 15},
    {question: "Current 2A, time 10s. Charge?", answer: 20},
    {question: "Q=5C, t=2s. I?", answer: 2.5},
    {question: "I=4A, t=3s. Q?", answer: 12},
    {question: "I=6A, t=5s. Q?", answer: 30},
    {question: "Q=8C, t=4s. I?", answer: 2},
    {question: "Current 1A, t=10s. Q?", answer: 10},
    {question: "Charge 12C flows in 3s. I?", answer: 4},
    {question: "I=2A, t=6s. Q?", answer: 12},
    {question: "Q=9C, t=3s. I?", answer: 3},
    {question: "Current 0.5A, t=8s. Q?", answer: 4},
    {question: "I=5A, t=4s. Q?", answer: 20},
    {question: "Charge 15C, t=5s. I?", answer: 3},
    {question: "I=3A, t=7s. Q?", answer: 21},
    {question: "Q=6C, t=2s. I?", answer: 3},
    {question: "Current 4A, t=6s. Q?", answer: 24},
    {question: "I=2A, t=5s. Q?", answer: 10},
    {question: "Q=10C, t=2s. I?", answer: 5},
    {question: "I=1A, t=12s. Q?", answer: 12}
  ],

  "Optical Phenomena and Properties of Matter": [
    {question: "n=c/v, v=2.25×10^8 m/s. Find n.", answer: 1.33},
    {question: "Refractive index n=1.5, c=3×10^8. Find v.", answer: 2e8},
    {question: "n=1.33, c=3×10^8. Find v.", answer: 2.25e8},
    {question: "n=1.5, v=? c=3×10^8.", answer: 2e8},
    {question: "Speed in glass 2×10^8 m/s. n?", answer: 1.5},
    {question: "Speed in water 2.25×10^8 m/s. n?", answer: 1.33},
    {question: "n=1.2, c=3×10^8. v?", answer: 2.5e8},
    {question: "Speed in medium 2.4×10^8 m/s. n?", answer: 1.25},
    {question: "v=2e8, c=3×10^8. n?", answer: 1.5},
    {question: "n=1.33, v=2.25×10^8. Check relation?", answer: 1.33},
    {question: "n=1.5, v=2e8. Check relation?", answer: 1.5},
    {question: "v=1.5×10^8, c=3×10^8. n?", answer: 2},
    {question: "v=2.4×10^8, c=3×10^8. n?", answer: 1.25},
    {question: "n=1.4, c=3×10^8. v?", answer: 2.14e8},
    {question: "v=2.25×10^8, c=3×10^8. n?", answer: 1.33},
    {question: "n=1.6, v=? c=3×10^8.", answer: 1.875e8},
    {question: "v=2e8, c=3×10^8. n?", answer: 1.5},
    {question: "n=1.33, c=3×10^8. v?", answer: 2.25e8},
    {question: "Speed in medium 1.8×10^8, n?", answer: 1.67},
    {question: "v=1.5×10^8, c=3×10^8. n?", answer: 2}
  ],

  "Electrochemical Reactions": [
    {question: "Zn → Zn²⁺ + 2e⁻. Find electrons per atom.", answer: 2},
    {question: "Cu²⁺ + 2e⁻ → Cu. Electrons?", answer: 2},
    {question: "Fe → Fe³⁺ + 3e⁻. Electrons?", answer: 3},
    {question: "Ag⁺ + e⁻ → Ag. Electrons?", answer: 1},
    {question: "Mg → Mg²⁺ + 2e⁻. Electrons?", answer: 2},
    {question: "Al → Al³⁺ + 3e⁻. Electrons?", answer: 3},
    {question: "Cu → Cu²⁺ + 2e⁻. Electrons?", answer: 2},
    {question: "Zn²⁺ + 2e⁻ → Zn. Electrons?", answer: 2},
    {question: "Fe²⁺ + 2e⁻ → Fe. Electrons?", answer: 2},
    {question: "Ag → Ag⁺ + e⁻. Electrons?", answer: 1},
    {question: "Mg²⁺ + 2e⁻ → Mg. Electrons?", answer: 2},
    {question: "Al³⁺ + 3e⁻ → Al. Electrons?", answer: 3},
    {question: "Zn → Zn²⁺ + 2e⁻. Electrons?", answer: 2},
    {question: "Fe → Fe²⁺ + 2e⁻. Electrons?", answer: 2},
    {question: "Cu²⁺ + 2e⁻ → Cu. Electrons?", answer: 2},
    {question: "Ag⁺ + e⁻ → Ag. Electrons?", answer: 1},
    {question: "Mg → Mg²⁺ + 2e⁻. Electrons?", answer: 2},
    {question: "Al → Al³⁺ + 3e⁻. Electrons?", answer: 3},
    {question: "Zn²⁺ + 2e⁻ → Zn. Electrons?", answer: 2},
    {question: "Fe³⁺ + 3e⁻ → Fe. Electrons?", answer: 3}
    ]
    // -- The same structure needs to be added for all other 10 science topics (20 questions each)
  }
};

// ------------------ UI SELECTION ------------------
function selectSubject(subject) {
  currentSubject = subject;
  currentTopic = null;

  document.getElementById("topicTitle").innerText =
    subject === "math" ? "📐 Mathematics Practice" : "⚗️ Physical Sciences Practice";

  // Show topic dropdown
  const topicSection = document.getElementById("topicSelection");
  topicSection.style.display = "block";

  // Populate dropdown
  const dropdown = document.getElementById("topicDropdown");
  dropdown.innerHTML = "";
  Object.keys(questionBank[subject]).forEach(topic => {
    const option = document.createElement("option");
    option.value = topic;
    option.text = topic;
    dropdown.appendChild(option);
  });

  currentTopic = dropdown.value;
  generateQuestion();
}

document.getElementById("topicDropdown").addEventListener("change", function() {
  currentTopic = this.value;
  generateQuestion();
});

// ------------------ QUESTION GENERATION ------------------
function generateQuestion() {
  if (!currentSubject || !currentTopic) return;

  const bank = questionBank[currentSubject][currentTopic];
  const index = Math.floor(Math.random() * bank.length);
  currentQuestion = bank[index];

  document.getElementById("questionText").innerText = currentQuestion.question;
  document.getElementById("answerInput").value = "";
  document.getElementById("feedback").innerText = "";
}

// ------------------ SUBMIT ANSWER ------------------
function submitAnswer() {
  let userAnswer = parseFloat(document.getElementById("answerInput").value);

  if (userAnswer === parseFloat(currentQuestion.answer)) {
    document.getElementById("feedback").innerText = "✅ Correct! Well done.";
  } else {
    document.getElementById("feedback").innerText =
      `❌ Not quite. Correct answer: ${currentQuestion.answer}`;
  }

  questionsAnswered++;
  updateProgress();
}

// ------------------ PROGRESS ------------------
function updateProgress() {
  let percent = Math.min((questionsAnswered / 10) * 100, 100);
  document.getElementById("progressFill").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    `${questionsAnswered} questions answered`;
}

// ------------------ RESET ------------------
function resetPractice() {
  questionsAnswered = 0;
  document.getElementById("progressFill").style.width = "0%";
  document.getElementById("progressText").innerText = "0 questions answered";
  document.getElementById("feedback").innerText = "";
  document.getElementById("questionText").innerText = "Your question will appear here.";
  document.getElementById("topicTitle").innerText = "Choose a subject and topic to begin";
  currentSubject = null;
  currentTopic = null;
  document.getElementById("topicSelection").style.display = "none";
}
