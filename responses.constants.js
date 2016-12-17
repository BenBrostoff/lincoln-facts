module.exports = {
  WELCOME: {
    type: 'single',
    content: 'Welcome to the Lincoln Facts app! Ask me for a random fact about Lincoln!',
  },
  WHO_IS_LINCOLN: {
    type: 'single',
    content: `
      Lincoln was the sixteen president of the United States, who served from 1861 to 1865.'
    `
  },
  RANDOM_FACTS: {
    type: 'multi',
    content:
      [
        'Lincoln is the tallest US president of all time at six feet and four inches.',
        'In 1858, Lincoln\`s national profile rose as he debated Stephen Douglas in what are now known as the Lincoln-Douglas debates.',
        'A bit of an autodidact, Lincoln studied geometry and mathematics on his own.',
      ]
  },
  CABINET: {
    type: 'single',
    content: `
      Three core members of Lincoln's cabinets, famously covered in Team of Rivals,
      by Doris Kearns Goodwin, were William H. Seward, Salmon P. Chase and Edward Bates.
      Seward served as Secretary of State and became one of Lincoln's closest friends.
      Chase, who later became a Supreme Court Justice, was secretary of the Treasury. Bates was
      the US Attorney General and the first member appointed to Lincoln's cabinet in 1860.
      Seward, Bates and Chase all sought the Republican Nomination for President in 1860 and were 
      at times critical of Lincoln, making it remarkable that all three became members of 
      his cabinet.
    `
  },
  METADATA: {
    type: 'single',
    content: `
      Ben Brostoff is the author of Lincoln Facts for Google Home. He lives in Boston, Massachusetts and enjoys United States History.
    `
  }
};