'use client'

export function partQueryMaker(currentSelect) {
      //change from R-ARM UNIT to R-Arm Unit or CAPS to Caps
      return currentSelect.split(' ') // Split the string by spaces
      .map((word) => {
        if (word.includes('-')) {
          // If the word contains a hyphen, split it and capitalize each part
          const parts = word.split('-');
          return parts
            .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join('-'); // Join the parts back together with a hyphen
        } else {
          // Otherwise, capitalize the entire word
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join(' ');
  
}

function menuQueryMaker(currentMenu) {
  switch (currentMenu) {
    case 'UNIT':
      return 'ACUnitSpecs';

    case 'FRAME':
      return 'ACFrameSpecs';

    case 'INNER':
      return 'ACInnerSpecs';

    case 'EXPANSION':
      return 'ACExpansionSpecs';

    default:
      throw new Error('Invalid menu option');
  }

}

export function getPartQuery(currentSelect) {

  const partQuery = partQueryMaker(currentSelect);

  return partQuery;

}